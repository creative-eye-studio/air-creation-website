<?php /** @noinspection PhpUnusedPrivateFieldInspection */

namespace Amp\Http\Client\Connection\Internal;

use Amp\ByteStream\InMemoryStream;
use Amp\ByteStream\IteratorStream;
use Amp\ByteStream\StreamException;
use Amp\CancellationToken;
use Amp\CancellationTokenSource;
use Amp\CancelledException;
use Amp\CombinedCancellationToken;
use Amp\Coroutine;
use Amp\Deferred;
use Amp\Emitter;
use Amp\Failure;
use Amp\Http\Client\Connection\Http2ConnectionException as ClientHttp2ConnectionException;
use Amp\Http\Client\Connection\Http2StreamException as ClientHttp2StreamException;
use Amp\Http\Client\Connection\HttpStream;
use Amp\Http\Client\Connection\Stream;
use Amp\Http\Client\Connection\UnprocessedRequestException;
use Amp\Http\Client\HttpException;
use Amp\Http\Client\Internal\ResponseBodyStream;
use Amp\Http\Client\Request;
use Amp\Http\Client\Response;
use Amp\Http\Client\SocketException;
use Amp\Http\Client\Trailers;
use Amp\Http\HPack;
use Amp\Http\Http2\Http2ConnectionException;
use Amp\Http\Http2\Http2Parser;
use Amp\Http\Http2\Http2Processor;
use Amp\Http\Http2\Http2StreamException;
use Amp\Http\InvalidHeaderException;
use Amp\Http\Status;
use Amp\Loop;
use Amp\Promise;
use Amp\Socket\EncryptableSocket;
use Amp\Success;
use Amp\TimeoutCancellationToken;
use League\Uri;
use function Amp\asyncCall;
use function Amp\call;

/** @internal */
final class Http2ConnectionProcessor implements Http2Processor
{
    private const PREFACE = "PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n";
    private const DEFAULT_MAX_FRAME_SIZE = 1 << 14;
    private const DEFAULT_WINDOW_SIZE = (1 << 16) - 1;

    private const MINIMUM_WINDOW = 512 * 1024;
    private const WINDOW_INCREMENT = 1024 * 1024;

    // Milliseconds to wait for pong (PING with ACK) frame before closing the connection.
    private const PONG_TIMEOUT = 500;

    /** @var string 64-bit for ping. */
    private $counter = "aaaaaaaa";

    /** @var EncryptableSocket */
    private $socket;

    /** @var Http2Stream[] */
    private $streams = [];

    /** @var int */
    private $serverWindow = self::DEFAULT_WINDOW_SIZE;

    /** @var int */
    private $clientWindow = self::DEFAULT_WINDOW_SIZE;

    /** @var int */
    private $initialWindowSize = self::DEFAULT_WINDOW_SIZE;

    /** @var int */
    private $frameSizeLimit = self::DEFAULT_MAX_FRAME_SIZE;

    /** @var int Previous stream ID. */
    private $streamId = -1;

    /** @var int Maximum number of streams that may be opened. Initially unlimited. */
    private $concurrentStreamLimit = \PHP_INT_MAX;

    /** @var int Currently open or reserved streams. Initially unlimited. */
    private $remainingStreams = \PHP_INT_MAX;

    /** @var HPack */
    private $hpack;

    /** @var Deferred|null */
    private $settings;

    /** @var bool */
    private $initializeStarted = false;

    /** @var bool */
    private $initialized = false;

    /** @var string|null */
    private $pongWatcher;

    /** @var Deferred|null */
    private $pongDeferred;

    /** @var string|null */
    private $idleWatcher;

    /** @var int */
    private $idlePings = 0;

    /** @var callable[]|null */
    private $onClose = [];

    public function __construct(EncryptableSocket $socket)
    {
        $this->socket = $socket;
        $this->hpack = new HPack;
    }

    public function isInitialized(): bool
    {
        return $this->initialized;
    }

    /**
     * Returns a promise that is resolved once the connection has been initialized. A stream cannot be obtained from the
     * connection until the promise returned by this method resolves.
     *
     * @return Promise
     */
    public function initialize(): Promise
    {
        if ($this->initializeStarted) {
            throw new \Error('Connection may only be initialized once');
        }

        $this->initializeStarted = true;

        if ($this->socket->isClosed()) {
            return new Failure(new UnprocessedRequestException(
                new SocketException('The socket closed before the connection could be initialized')
            ));
        }

        $this->settings = new Deferred;
        $promise = $this->settings->promise();

        Promise\rethrow(new Coroutine($this->run()));

        return $promise;
    }

    public function onClose(callable $onClose): void
    {
        if ($this->onClose === null) {
            asyncCall($onClose, $this);
            return;
        }

        $this->onClose[] = $onClose;
    }

    public function close(): Promise
    {
        $this->socket->close();

        if ($this->onClose !== null) {
            $onClose = $this->onClose;
            $this->onClose = null;

            foreach ($onClose as $callback) {
                asyncCall($callback, $this);
            }
        }

        return new Success;
    }

    public function handlePong(string $data): void
    {
        $this->writeFrame(Http2Parser::PING, Http2Parser::ACK, 0, $data);
    }

    public function handlePing(string $data): void
    {
        if ($this->pongDeferred !== null) {
            if ($this->pongWatcher !== null) {
                Loop::cancel($this->pongWatcher);
                $this->pongWatcher = null;
            }

            $deferred = $this->pongDeferred;
            $this->pongDeferred = null;
            $deferred->resolve(true);
        }
    }

    public function handleShutdown(int $lastId, int $error): void
    {
        $message = \sprintf(
            "Received GOAWAY frame from %s with error code %d",
            $this->socket->getRemoteAddress(),
            $error
        );

        $this->shutdown($lastId, new ClientHttp2ConnectionException($message, $error));
    }

    public function handleStreamWindowIncrement(int $streamId, int $windowSize): void
    {
        if (!isset($this->streams[$streamId])) {
            return;
        }

        $stream = $this->streams[$streamId];

        if ($stream->clientWindow + $windowSize > 2147483647) {
            $this->handleStreamException(new Http2StreamException(
                "Current window size plus new window exceeds maximum size",
                $streamId,
                Http2Parser::FLOW_CONTROL_ERROR
            ));

            return;
        }

        $stream->clientWindow += $windowSize;

        $this->writeBufferedData($stream);
    }

    public function handleConnectionWindowIncrement(int $windowSize): void
    {
        if ($this->clientWindow + $windowSize > 2147483647) {
            $this->handleConnectionException(new Http2ConnectionException(
                "Current window size plus new window exceeds maximum size",
                Http2Parser::FLOW_CONTROL_ERROR
            ));

            return;
        }

        $this->clientWindow += $windowSize;

        foreach ($this->streams as $stream) {
            if ($this->clientWindow <= 0) {
                return;
            }

            if ($stream->requestBodyBuffer === '' || $stream->clientWindow <= 0) {
                continue;
            }

            $this->writeBufferedData($stream);
        }
    }

    public function handleHeaders(int $streamId, array $pseudo, array $headers, bool $streamEnded): void
    {
        foreach ($pseudo as $name => $value) {
            if (!isset(Http2Parser::KNOWN_RESPONSE_PSEUDO_HEADERS[$name])) {
                throw new Http2StreamException(
                    "Invalid pseudo header",
                    $streamId,
                    Http2Parser::PROTOCOL_ERROR
                );
            }
        }

        if (!isset($this->streams[$streamId])) {
            return;
        }

        $stream = $this->streams[$streamId];

        if ($stream->trailers) {
            if ($stream->expectedLength && $stream->received !== $stream->expectedLength) {
                $diff = $stream->expectedLength - $stream->received;
                $this->handleStreamException(new Http2StreamException(
                    "Content length mismatch: " . \abs($diff) . ' bytes ' . ($diff > 0 ? ' missing' : 'too much'),
                    $streamId,
                    Http2Parser::PROTOCOL_ERROR
                ));

                return;
            }

            if (!empty($pseudo)) {
                $this->handleStreamException(new Http2StreamException(
                    "Trailers must not contain pseudo headers",
                    $streamId,
                    Http2Parser::PROTOCOL_ERROR
                ));

                return;
            }

            try {
                // Constructor checks for any disallowed fields
                $parsedTrailers = new Trailers($headers);
            } catch (InvalidHeaderException $exception) {
                $this->handleStreamException(new Http2StreamException(
                    "Disallowed field names in trailer",
                    $streamId,
                    Http2Parser::PROTOCOL_ERROR,
                    $exception
                ));

                return;
            }

            $trailers = $stream->trailers;
            $stream->trailers = null;
            $trailers->resolve(call(function () use ($stream, $streamId, $parsedTrailers) {
                try {
                    foreach ($stream->request->getEventListeners() as $eventListener) {
                        yield $eventListener->completeReceivingResponse($stream->request, $stream->stream);
                    }

                    return $parsedTrailers;
                } catch (\Throwable $e) {
                    $this->handleStreamException(new Http2StreamException(
                        "Event listener error",
                        $streamId,
                        Http2Parser::CANCEL
                    ));

                    throw $e;
                }
            }));

            $this->setupPingIfIdle();

            return;
        }

        if (!isset($pseudo[":status"])) {
            $this->handleConnectionException(new Http2ConnectionException(
                "No status pseudo header in response",
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        if (!\preg_match("/^[1-5]\d\d$/", $pseudo[":status"])) {
            $this->handleStreamException(new Http2StreamException(
                "Invalid response status code: " . $pseudo[':status'],
                $streamId,
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        if ($stream->response !== null) {
            $this->handleStreamException(new Http2StreamException(
                "Stream headers already received",
                $streamId,
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        $status = (int) $pseudo[":status"];

        if ($status === Status::SWITCHING_PROTOCOLS) {
            $this->handleConnectionException(new Http2ConnectionException(
                "Switching Protocols (101) is not part of HTTP/2",
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        $response = new Response(
            '2',
            $status,
            Status::getReason($status),
            $headers,
            new InMemoryStream,
            $stream->request
        );

        if ($status < 200) {
            $onInformationalResponse = $stream->request->getInformationalResponseHandler();

            if ($onInformationalResponse !== null) {
                $stream->preResponseResolution = call(function () use (
                    $onInformationalResponse,
                    $response,
                    $stream,
                    $streamId
                ) {
                    yield $stream->preResponseResolution;

                    try {
                        yield call($onInformationalResponse, $response);
                    } catch (\Throwable $e) {
                        $this->handleStreamException(new Http2StreamException(
                            'Informational response handler threw an exception',
                            $streamId,
                            Http2Parser::CANCEL
                        ));
                    }
                });
            }

            return;
        }

        \assert($stream->preResponseResolution === null);

        $stream->preResponseResolution = call(function () use ($stream, $streamId) {
            try {
                foreach ($stream->request->getEventListeners() as $eventListener) {
                    yield $eventListener->startReceivingResponse($stream->request, $stream->stream);
                }
            } catch (\Throwable $e) {
                $this->handleStreamException(new Http2StreamException(
                    "Event listener error",
                    $streamId,
                    Http2Parser::CANCEL
                ));
            }
        });

        $stream->body = new Emitter;
        $stream->trailers = new Deferred;

        $bodyCancellation = new CancellationTokenSource;
        $cancellationToken = new CombinedCancellationToken(
            $stream->cancellationToken,
            $bodyCancellation->getToken()
        );

        $response->setBody(
            new ResponseBodyStream(
                new IteratorStream($stream->body->iterate()),
                $bodyCancellation
            )
        );
        $response->setTrailers($stream->trailers->promise());

        $stream->responsePending = false;
        $stream->pendingResponse->resolve(call(static function () use ($response, $stream) {
            yield $stream->requestBodyCompletion->promise();

            yield $stream->preResponseResolution;
            $stream->preResponseResolution = null;

            $stream->pendingResponse = null;

            return $response;
        }));

        $this->increaseConnectionWindow();
        $this->increaseStreamWindow($stream);

        if (isset($headers["content-length"])) {
            if (\count($headers['content-length']) !== 1) {
                $this->handleStreamException(new Http2StreamException(
                    "Multiple content-length header values",
                    $streamId,
                    Http2Parser::PROTOCOL_ERROR
                ));

                return;
            }

            $contentLength = $headers["content-length"][0];
            if (!\preg_match('/^(0|[1-9][0-9]*)$/', $contentLength)) {
                $this->handleStreamException(new Http2StreamException(
                    "Invalid content-length header value",
                    $streamId,
                    Http2Parser::PROTOCOL_ERROR
                ));

                return;
            }

            $stream->expectedLength = (int) $contentLength;
        }

        $cancellationToken->subscribe(function (CancelledException $exception) use ($streamId): void {
            if (!isset($this->streams[$streamId])) {
                return;
            }

            $this->writeFrame(
                Http2Parser::RST_STREAM,
                Http2Parser::NO_FLAG,
                $streamId,
                \pack("N", Http2Parser::CANCEL)
            );
            $this->releaseStream($streamId, $exception);
        });

        unset($bodyCancellation, $cancellationToken); // Remove reference to cancellation token.
    }

    public function handlePushPromise(int $parentId, int $streamId, array $pseudo, array $headers): void
    {
        foreach ($pseudo as $name => $value) {
            if (!isset(Http2Parser::KNOWN_REQUEST_PSEUDO_HEADERS[$name])) {
                throw new Http2StreamException(
                    "Invalid pseudo header",
                    $streamId,
                    Http2Parser::PROTOCOL_ERROR
                );
            }
        }

        if (!isset($pseudo[":method"], $pseudo[":path"], $pseudo[":scheme"], $pseudo[":authority"])
            || isset($headers["connection"])
            || $pseudo[":path"] === ''
            || (isset($headers["te"]) && \implode($headers["te"]) !== "trailers")
        ) {
            $this->handleStreamException(new Http2StreamException(
                "Invalid header values",
                $streamId,
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        $method = $pseudo[":method"];
        $target = $pseudo[":path"];
        $scheme = $pseudo[":scheme"];
        $host = $pseudo[":authority"];
        $query = null;

        if ($method !== 'GET' && $method !== 'HEAD') {
            $this->handleStreamException(new Http2StreamException(
                "Pushed request method must be a safe method",
                $streamId,
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        if (!\preg_match("#^([A-Z\d.\-]+|\[[\d:]+])(?::([1-9]\d*))?$#i", $host, $matches)) {
            $this->handleStreamException(new Http2StreamException(
                "Invalid pushed authority (host) name",
                $streamId,
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        $host = $matches[1];
        $port = isset($matches[2]) ? (int) $matches[2] : $this->socket->getRemoteAddress()->getPort();

        if (!isset($this->streams[$parentId])) {
            $this->handleStreamException(new Http2StreamException(
                "Parent stream {$parentId} is no longer open",
                $streamId,
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        /** @var Http2Stream $parentStream */
        $parentStream = $this->streams[$parentId];

        if (\strcasecmp($host, $parentStream->request->getUri()->getHost()) !== 0) {
            $this->handleStreamException(new Http2StreamException(
                "Authority does not match original request authority",
                $streamId,
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        if ($position = \strpos($target, "#")) {
            $target = \substr($target, 0, $position);
        }

        if ($position = \strpos($target, "?")) {
            $query = \substr($target, $position + 1);
            $target = \substr($target, 0, $position);
        }

        try {
            $uri = Uri\Http::createFromComponents([
                "scheme" => $scheme,
                "host" => $host,
                "port" => $port,
                "path" => $target,
                "query" => $query,
            ]);
        } catch (\Exception $exception) {
            $this->handleConnectionException(new Http2ConnectionException(
                "Invalid push URI",
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        $request = new Request($uri, $method);
        $request->setHeaders($headers);
        $request->setProtocolVersions(['2']);
        $request->setPushHandler($parentStream->request->getPushHandler());
        $request->setHeaderSizeLimit($parentStream->request->getHeaderSizeLimit());
        $request->setBodySizeLimit($parentStream->request->getBodySizeLimit());

        $stream = new Http2Stream(
            $streamId,
            $request,
            HttpStream::fromStream(
                $parentStream->stream,
                static function () {
                    throw new \Error('Calling Stream::request() on a pushed request is forbidden');
                },
                static function () {
                    // nothing to do
                }
            ),
            $parentStream->cancellationToken,
            self::DEFAULT_WINDOW_SIZE,
            0
        );

        $stream->dependency = $parentId;

        $this->streams[$streamId] = $stream;

        $stream->requestBodyComplete = true;
        $stream->requestBodyCompletion->resolve();

        if ($parentStream->request->getPushHandler() === null) {
            $this->handleStreamException(new Http2StreamException(
                "Push promise refused",
                $streamId,
                Http2Parser::CANCEL
            ));

            return;
        }

        asyncCall(function () use ($streamId, $stream): \Generator {
            $tokenSource = new CancellationTokenSource;
            $cancellationToken = new CombinedCancellationToken(
                $stream->cancellationToken,
                $tokenSource->getToken()
            );

            $cancellationId = $cancellationToken->subscribe(function (
                CancelledException $exception
            ) use ($streamId): void {
                if (!isset($this->streams[$streamId])) {
                    return;
                }

                $this->writeFrame(
                    Http2Parser::RST_STREAM,
                    Http2Parser::NO_FLAG,
                    $streamId,
                    \pack("N", Http2Parser::CANCEL)
                );
                $this->releaseStream($streamId, $exception);
            });

            $onPush = $stream->request->getPushHandler();

            try {
                yield call($onPush, $stream->request, $stream->pendingResponse->promise());
            } catch (HttpException | StreamException | CancelledException $exception) {
                $tokenSource->cancel($exception);
            } catch (\Throwable $exception) {
                $tokenSource->cancel($exception);
                throw $exception;
            } finally {
                $cancellationToken->unsubscribe($cancellationId);
            }
        });
    }

    public function handlePriority(int $streamId, int $parentId, int $weight): void
    {
        if (!isset($this->streams[$streamId])) {
            return;
        }

        $stream = $this->streams[$streamId];

        $stream->dependency = $parentId;
        $stream->weight = $weight;
    }

    public function handleStreamReset(int $streamId, int $errorCode): void
    {
        if (!isset($this->streams[$streamId])) {
            return;
        }

        $this->handleStreamException(new Http2StreamException("Stream closed by server", $streamId, $errorCode));
    }

    public function handleStreamException(Http2StreamException $exception): void
    {
        $id = $exception->getStreamId();
        $code = $exception->getCode();

        $exception = new ClientHttp2StreamException($exception->getMessage(), $id, $code, $exception);

        if ($code === Http2Parser::REFUSED_STREAM) {
            $exception = new UnprocessedRequestException($exception);
        }

        $this->writeFrame(Http2Parser::RST_STREAM, Http2Parser::NO_FLAG, $id, \pack("N", $code));

        if (isset($this->streams[$id])) {
            $this->releaseStream($id, $exception);
        }
    }

    public function handleConnectionException(Http2ConnectionException $exception): void
    {
        $this->shutdown(
            null,
            new ClientHttp2ConnectionException($exception->getMessage(), $exception->getCode(), $exception)
        );
    }

    public function handleData(int $streamId, string $data): void
    {
        if (!isset($this->streams[$streamId])) {
            return;
        }

        $stream = $this->streams[$streamId];

        if (!$stream->body) {
            $this->handleStreamException(new Http2StreamException(
                "Stream headers not complete or body already complete",
                $streamId,
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        $length = \strlen($data);

        $this->serverWindow -= $length;
        $stream->serverWindow -= $length;
        $stream->received += $length;

        if ($stream->received >= $stream->request->getBodySizeLimit()) {
            $this->handleStreamException(new Http2StreamException(
                "Body size limit exceeded",
                $streamId,
                Http2Parser::CANCEL
            ));

            return;
        }

        if ($stream->expectedLength !== null && $stream->received > $stream->expectedLength) {
            $this->handleStreamException(new Http2StreamException(
                "Body size exceeded content-length in header",
                $streamId,
                Http2Parser::CANCEL
            ));

            return;
        }

        $this->increaseConnectionWindow();

        $promise = $stream->body->emit($data);
        $promise->onResolve(function (?\Throwable $exception) use ($streamId): void {
            if ($exception || !isset($this->streams[$streamId])) {
                return;
            }

            $this->increaseStreamWindow($this->streams[$streamId]);
        });
    }

    public function handleSettings(array $settings): void
    {
        foreach ($settings as $setting => $value) {
            $this->applySetting($setting, $value);
        }

        $this->writeFrame(Http2Parser::SETTINGS, Http2Parser::ACK);

        if ($this->settings) {
            $deferred = $this->settings;
            $this->settings = null;
            $this->initialized = true;
            $deferred->resolve($this->remainingStreams);
        }
    }

    public function handleStreamEnd(int $streamId): void
    {
        if (!isset($this->streams[$streamId])) {
            return;
        }

        $stream = $this->streams[$streamId];

        if ($stream->expectedLength !== null && $stream->received !== $stream->expectedLength) {
            $this->handleStreamException(new Http2StreamException(
                "Body length does not match content-length header",
                $streamId,
                Http2Parser::PROTOCOL_ERROR
            ));

            return;
        }

        $body = $stream->body;
        $stream->body = null;
        $body->complete();

        $trailers = $stream->trailers;
        $stream->trailers = null;
        $trailers->resolve(call(function () use ($stream, $streamId) {
            try {
                foreach ($stream->request->getEventListeners() as $eventListener) {
                    yield $eventListener->completeReceivingResponse($stream->request, $stream->stream);
                }

                return new Trailers([]);
            } catch (\Throwable $e) {
                $this->handleStreamException(new Http2StreamException(
                    "Event listener error",
                    $streamId,
                    Http2Parser::CANCEL
                ));

                throw $e;
            }
        }));

        $this->setupPingIfIdle();

        $this->releaseStream($streamId);
    }

    public function reserveStream(): void
    {
        --$this->remainingStreams;
    }

    public function unreserveStream(): void
    {
        ++$this->remainingStreams;
    }

    public function getRemainingStreams(): int
    {
        return $this->remainingStreams;
    }

    public function request(Request $request, CancellationToken $cancellationToken, Stream $stream): Promise
    {
        return call(function () use ($request, $cancellationToken, $stream): \Generator {
            $this->idlePings = 0;
            $this->cancelIdleWatcher();

            yield RequestNormalizer::normalizeRequest($request);

            // Remove defunct HTTP/1.x headers.
            $request->removeHeader('host');
            $request->removeHeader('connection');
            $request->removeHeader('keep-alive');
            $request->removeHeader('transfer-encoding');
            $request->removeHeader('upgrade');

            $request->setProtocolVersions(['2']);

            if ($request->getMethod() === 'CONNECT') {
                $exception = new HttpException("CONNECT requests are currently not supported on HTTP/2");

                foreach ($request->getEventListeners() as $eventListener) {
                    yield $eventListener->abort($request, $exception);
                }

                throw $exception;
            }

            if ($this->socket->isClosed()) {
                $exception = new UnprocessedRequestException(
                    new SocketException(\sprintf(
                        "Socket to '%s' closed before the request could be sent",
                        $this->socket->getRemoteAddress()
                    ))
                );

                foreach ($request->getEventListeners() as $eventListener) {
                    yield $eventListener->abort($request, $exception);
                }

                throw $exception;
            }

            $streamId = $this->streamId += 2; // Client streams should be odd-numbered, starting at 1.

            $this->streams[$streamId] = $http2stream = new Http2Stream(
                $streamId,
                $request,
                $stream,
                $cancellationToken,
                self::DEFAULT_WINDOW_SIZE,
                $this->initialWindowSize
            );

            if ($request->getTransferTimeout() > 0) {
                // Cancellation token combined with timeout token should not be stored in $stream->cancellationToken,
                // otherwise the timeout applies to the body transfer and pushes.
                $cancellationToken = new CombinedCancellationToken(
                    $cancellationToken,
                    new TimeoutCancellationToken($request->getTransferTimeout())
                );
            }

            $this->socket->reference();

            $onCancel = function (CancelledException $exception) use ($streamId): void {
                if (!isset($this->streams[$streamId])) {
                    return;
                }

                $this->writeFrame(
                    Http2Parser::RST_STREAM,
                    Http2Parser::NO_FLAG,
                    $streamId,
                    \pack("N", Http2Parser::CANCEL)
                );
                $this->releaseStream($streamId, $exception);
            };

            $cancellationId = $cancellationToken->subscribe($onCancel);

            try {
                $headers = $this->generateHeaders($request);
                $headers = $this->hpack->encode($headers);
                $body = $request->getBody()->createBodyStream();

                foreach ($request->getEventListeners() as $eventListener) {
                    yield $eventListener->startSendingRequest($request, $stream);
                }

                $chunk = yield $body->read();

                if (!isset($this->streams[$streamId])) {
                    foreach ($request->getEventListeners() as $eventListener) {
                        yield $eventListener->completeSendingRequest($request, $stream);
                    }

                    return yield $http2stream->pendingResponse->promise();
                }

                $flag = Http2Parser::END_HEADERS | ($chunk === null ? Http2Parser::END_STREAM : Http2Parser::NO_FLAG);

                if (\strlen($headers) > $this->frameSizeLimit) {
                    $split = \str_split($headers, $this->frameSizeLimit);

                    $firstChunk = \array_shift($split);
                    $lastChunk = \array_pop($split);

                    // no yield, because there must not be other frames in between
                    $this->writeFrame(Http2Parser::HEADERS, Http2Parser::NO_FLAG, $streamId, $firstChunk);

                    foreach ($split as $headerChunk) {
                        // no yield, because there must not be other frames in between
                        $this->writeFrame(Http2Parser::CONTINUATION, Http2Parser::NO_FLAG, $streamId, $headerChunk);
                    }

                    yield $this->writeFrame(Http2Parser::CONTINUATION, $flag, $streamId, $lastChunk);
                } else {
                    yield $this->writeFrame(Http2Parser::HEADERS, $flag, $streamId, $headers);
                }

                if ($chunk === null) {
                    foreach ($request->getEventListeners() as $eventListener) {
                        yield $eventListener->completeSendingRequest($request, $stream);
                    }

                    $http2stream->requestBodyComplete = true;
                    $http2stream->requestBodyCompletion->resolve();

                    return yield $http2stream->pendingResponse->promise();
                }

                $buffer = $chunk;
                while (null !== $chunk = yield $body->read()) {
                    if (!isset($this->streams[$streamId])) {
                        foreach ($request->getEventListeners() as $eventListener) {
                            yield $eventListener->completeSendingRequest($request, $stream);
                        }

                        return yield $http2stream->pendingResponse->promise();
                    }

                    yield $this->writeData($http2stream, $buffer);

                    $buffer = $chunk;
                }

                if (!isset($this->streams[$streamId])) {
                    foreach ($request->getEventListeners() as $eventListener) {
                        yield $eventListener->completeSendingRequest($request, $stream);
                    }

                    return yield $http2stream->pendingResponse->promise();
                }

                $responsePromise = $http2stream->pendingResponse->promise();

                $http2stream->requestBodyComplete = true;
                $http2stream->requestBodyCompletion->resolve();

                yield $this->writeData($http2stream, $buffer);

                foreach ($request->getEventListeners() as $eventListener) {
                    yield $eventListener->completeSendingRequest($request, $stream);
                }

                return yield $responsePromise;
            } catch (\Throwable $exception) {
                if (isset($this->streams[$streamId])) {
                    if (!$http2stream->requestBodyComplete) {
                        $http2stream->requestBodyCompletion->fail($exception);
                    }

                    $this->releaseStream($streamId, $exception);
                }

                if ($exception instanceof StreamException) {
                    $exception = new SocketException('Failed to write request to socket: ' . $exception->getMessage());
                }

                throw $exception;
            } finally {
                $cancellationToken->unsubscribe($cancellationId);
            }
        });
    }

    public function isClosed(): bool
    {
        return $this->onClose === null;
    }

    private function run(): \Generator
    {
        try {
            yield $this->socket->write(Http2Parser::PREFACE);

            yield $this->writeFrame(
                Http2Parser::SETTINGS,
                0,
                0,
                \pack(
                    "nNnNnNnN",
                    Http2Parser::ENABLE_PUSH,
                    1,
                    Http2Parser::MAX_CONCURRENT_STREAMS,
                    256,
                    Http2Parser::INITIAL_WINDOW_SIZE,
                    self::DEFAULT_WINDOW_SIZE,
                    Http2Parser::MAX_FRAME_SIZE,
                    self::DEFAULT_MAX_FRAME_SIZE
                )
            );

            $parser = (new Http2Parser($this))->parse();

            while (null !== $chunk = yield $this->socket->read()) {
                $return = $parser->send($chunk);

                \assert($return === null);
            }

            $this->shutdown();
        } catch (\Throwable $exception) {
            $this->shutdown(null, new ClientHttp2ConnectionException(
                "The HTTP/2 connection closed unexpectedly",
                Http2Parser::INTERNAL_ERROR,
                $exception
            ));
        }
    }

    private function writeFrame(
        int $type,
        int $flags = Http2Parser::NO_FLAG,
        int $stream = 0,
        string $data = ''
    ): Promise {
        \assert(Http2Parser::logDebugFrame('send', $type, $flags, $stream, \strlen($data)));

        /** @noinspection PhpUnhandledExceptionInspection */
        return $this->socket->write(\substr(\pack("NccN", \strlen($data), $type, $flags, $stream), 1) . $data);
    }

    private function applySetting(int $setting, int $value): void
    {
        switch ($setting) {
            case Http2Parser::INITIAL_WINDOW_SIZE:
                if ($value > 2147483647) { // (1 << 31) - 1
                    $this->handleConnectionException(new Http2ConnectionException(
                        "Invalid window size: {$value}",
                        Http2Parser::FLOW_CONTROL_ERROR
                    ));

                    return;
                }

                $priorWindowSize = $this->initialWindowSize;
                $this->initialWindowSize = $value;
                $difference = $this->initialWindowSize - $priorWindowSize;

                foreach ($this->streams as $stream) {
                    $stream->clientWindow += $difference;
                }

                // Settings ACK should be sent before HEADER or DATA frames.
                if ($difference > 0) {
                    Loop::defer(function () {
                        foreach ($this->streams as $stream) {
                            if ($this->clientWindow <= 0) {
                                return;
                            }

                            if ($stream->requestBodyBuffer === '' || $stream->clientWindow <= 0) {
                                continue;
                            }

                            $this->writeBufferedData($stream);
                        }
                    });
                }

                return;

            case Http2Parser::MAX_FRAME_SIZE:
                if ($value < 1 << 14 || $value >= 1 << 24) {
                    $this->handleConnectionException(new Http2ConnectionException(
                        "Invalid maximum frame size: {$value}",
                        Http2Parser::PROTOCOL_ERROR
                    ));

                    return;
                }

                $this->frameSizeLimit = $value;
                return;

            case Http2Parser::MAX_CONCURRENT_STREAMS:
                if ($value > 2147483647) { // (1 << 31) - 1
                    $this->handleConnectionException(new Http2ConnectionException(
                        "Invalid concurrent streams value: {$value}",
                        Http2Parser::PROTOCOL_ERROR
                    ));

                    return;
                }

                $priorUsedStreams = $this->concurrentStreamLimit - $this->remainingStreams;

                $this->concurrentStreamLimit = $value;
                $this->remainingStreams = $this->concurrentStreamLimit - $priorUsedStreams;
                return;

            case Http2Parser::HEADER_TABLE_SIZE: // TODO Respect this setting from the server
            case Http2Parser::MAX_HEADER_LIST_SIZE: // TODO Respect this setting from the server
            case Http2Parser::ENABLE_PUSH: // No action needed.
            default: // Unknown setting, ignore (6.5.2).
                return;
        }
    }

    private function writeBufferedData(Http2Stream $stream): Promise
    {
        if ($stream->requestBodyComplete && $stream->requestBodyBuffer === '') {
            return new Success;
        }

        $windowSize = \min($this->clientWindow, $stream->clientWindow);
        $length = \strlen($stream->requestBodyBuffer);

        if ($length <= $windowSize) {
            if ($stream->windowSizeIncrease) {
                $deferred = $stream->windowSizeIncrease;
                $stream->windowSizeIncrease = null;
                $deferred->resolve();
            }

            $this->clientWindow -= $length;
            $stream->clientWindow -= $length;

            if ($length > $this->frameSizeLimit) {
                $chunks = \str_split($stream->requestBodyBuffer, $this->frameSizeLimit);
                $stream->requestBodyBuffer = \array_pop($chunks);

                foreach ($chunks as $chunk) {
                    $this->writeFrame(Http2Parser::DATA, Http2Parser::NO_FLAG, $stream->id, $chunk);
                }
            }

            if ($stream->requestBodyComplete) {
                $promise = $this->writeFrame(
                    Http2Parser::DATA,
                    Http2Parser::END_STREAM,
                    $stream->id,
                    $stream->requestBodyBuffer
                );
            } else {
                $promise = $this->writeFrame(
                    Http2Parser::DATA,
                    Http2Parser::NO_FLAG,
                    $stream->id,
                    $stream->requestBodyBuffer
                );
            }

            $stream->requestBodyBuffer = "";

            return $promise;
        }

        if ($windowSize > 0) {
            // Read next body chunk if less than 8192 bytes will remain in the buffer
            if ($length - 8192 < $windowSize && $stream->windowSizeIncrease) {
                $deferred = $stream->windowSizeIncrease;
                $stream->windowSizeIncrease = null;
                $deferred->resolve();
            }

            $data = $stream->requestBodyBuffer;
            $end = $windowSize - $this->frameSizeLimit;

            $stream->clientWindow -= $windowSize;
            $this->clientWindow -= $windowSize;

            for ($off = 0; $off < $end; $off += $this->frameSizeLimit) {
                $this->writeFrame(
                    Http2Parser::DATA,
                    Http2Parser::NO_FLAG,
                    $stream->id,
                    \substr($data, $off, $this->frameSizeLimit)
                );
            }

            $promise = $this->writeFrame(
                Http2Parser::DATA,
                Http2Parser::NO_FLAG,
                $stream->id,
                \substr($data, $off, $windowSize - $off)
            );

            $stream->requestBodyBuffer = \substr($data, $windowSize);

            return $promise;
        }

        if ($stream->windowSizeIncrease === null) {
            $stream->windowSizeIncrease = new Deferred;
        }

        return $stream->windowSizeIncrease->promise();
    }

    private function releaseStream(int $streamId, ?\Throwable $exception = null): void
    {
        \assert(isset($this->streams[$streamId]));

        $stream = $this->streams[$streamId];

        if ($stream->responsePending || $stream->body || $stream->trailers) {
            $exception = $exception ?? new ClientHttp2StreamException(
                \sprintf("Stream %d closed unexpectedly", $streamId),
                $streamId,
                Http2Parser::INTERNAL_ERROR
            );

            if (!$exception instanceof HttpException && !$exception instanceof CancelledException) {
                $exception = new HttpException($exception->getMessage(), 0, $exception);
            }

            /** @var Deferred[]|Emitter[] $deferredAndEmitter */
            $deferredAndEmitter = [];

            if ($stream->responsePending) {
                $stream->responsePending = false;
                $deferredAndEmitter[] = $stream->pendingResponse;
                $stream->pendingResponse = null;
            }

            if ($stream->body) {
                $deferredAndEmitter[] = $stream->body;
                $stream->body = null;
            }

            if ($stream->trailers) {
                $deferredAndEmitter[] = $stream->trailers;
                $stream->trailers = null;
            }

            $request = $stream->request;
            asyncCall(static function () use ($request, $deferredAndEmitter, $exception) {
                try {
                    foreach ($request->getEventListeners() as $eventListener) {
                        yield $eventListener->abort($request, $exception);
                    }
                } finally {
                    foreach ($deferredAndEmitter as $deferredOrEmitter) {
                        $deferredOrEmitter->fail($exception);
                    }
                }
            });
        }

        unset($this->streams[$streamId]);

        if ($streamId & 1) { // Client-initiated stream.
            $this->remainingStreams++;
        }

        if (!$this->streams && !$this->socket->isClosed()) {
            $this->socket->unreference();
        }
    }

    private function setupPingIfIdle(): void
    {
        if ($this->idleWatcher !== null) {
            return;
        }

        $this->idleWatcher = Loop::defer(function ($watcher) {
            \assert($this->idleWatcher === null || $this->idleWatcher === $watcher);

            $this->idleWatcher = null;
            if (!empty($this->streams)) {
                return;
            }

            $this->idleWatcher = Loop::delay(300000, function ($watcher) {
                \assert($this->idleWatcher === null || $this->idleWatcher === $watcher);
                \assert(empty($this->streams));

                $this->idleWatcher = null;

                // Connection idle for 10 minutes
                if ($this->idlePings >= 1) {
                    $this->shutdown();
                    return;
                }

                if (yield $this->ping()) {
                    $this->setupPingIfIdle();
                }
            });

            Loop::unreference($this->idleWatcher);
        });

        Loop::unreference($this->idleWatcher);
    }

    private function cancelIdleWatcher(): void
    {
        if ($this->idleWatcher !== null) {
            Loop::cancel($this->idleWatcher);
            $this->idleWatcher = null;
        }
    }

    /**
     * @return Promise<bool> Fulfilled with true if a pong is received within the timeout, false if none is received.
     */
    private function ping(): Promise
    {
        if ($this->onClose === null) {
            return new Success(false);
        }

        if ($this->pongDeferred !== null) {
            return $this->pongDeferred->promise();
        }

        $this->pongDeferred = new Deferred;
        $this->idlePings++;

        $this->writeFrame(Http2Parser::PING, 0, 0, $this->counter++);

        $this->pongWatcher = Loop::delay(self::PONG_TIMEOUT, [$this, 'close']);

        return $this->pongDeferred->promise();
    }

    /**
     * @param int|null $lastId ID of last processed frame. Null to use the last opened frame ID or 0 if no
     *                                   streams have been opened.
     * @param HttpException|null $reason
     *
     * @return Promise
     */
    private function shutdown(?int $lastId = null, ?HttpException $reason = null): Promise
    {
        if ($this->onClose === null) {
            return new Success;
        }

        return call(function () use ($lastId, $reason) {
            $code = $reason ? $reason->getCode() : Http2Parser::GRACEFUL_SHUTDOWN;
            $lastId = $lastId ?? ($this->streamId > 0 ? $this->streamId : 0);
            $goawayPromise = $this->writeFrame(
                Http2Parser::GOAWAY,
                Http2Parser::NO_FLAG,
                0,
                \pack("NN", $lastId, $code)
            );

            if ($this->settings !== null) {
                $settings = $this->settings;
                $this->settings = null;
                $settings->fail($reason ?? new UnprocessedRequestException(new SocketException("Connection closed")));
            }

            if ($this->streams) {
                $reason = $reason ?? new SocketException("Connection closed");
                foreach ($this->streams as $id => $stream) {
                    $this->releaseStream($id, $id > $lastId ? new UnprocessedRequestException($reason) : $reason);
                }
            }

            if ($this->pongDeferred !== null) {
                $this->pongDeferred->resolve(false);
            }

            if ($this->pongWatcher !== null) {
                Loop::cancel($this->pongWatcher);
            }

            $this->cancelIdleWatcher();

            if ($this->onClose !== null) {
                $onClose = $this->onClose;
                $this->onClose = null;

                foreach ($onClose as $callback) {
                    asyncCall($callback, $this);
                }
            }

            yield $goawayPromise;

            $this->socket->close();
        });
    }

    private function generateHeaders(Request $request): array
    {
        $uri = $request->getUri();

        $path = $uri->getPath();
        if ($path === '') {
            $path = '/';
        }

        $query = $uri->getQuery();
        if ($query !== '') {
            $path .= '?' . $query;
        }

        $authority = $uri->getHost();
        if ($port = $uri->getPort()) {
            $authority .= ':' . $port;
        }

        $headers = [
            [":authority", $authority],
            [":path", $path],
            [":scheme", $uri->getScheme()],
            [":method", $request->getMethod()],
        ];

        foreach ($request->getHeaders() as $field => $values) {
            foreach ($values as $value) {
                $headers[] = [$field, $value];
            }
        }

        return $headers;
    }

    private function writeData(Http2Stream $stream, string $data): Promise
    {
        $stream->requestBodyBuffer .= $data;

        return $this->writeBufferedData($stream);
    }

    private function increaseConnectionWindow(): void
    {
        $increase = 0;

        while ($this->serverWindow <= self::MINIMUM_WINDOW) {
            $this->serverWindow += self::WINDOW_INCREMENT;
            $increase += self::WINDOW_INCREMENT;
        }

        if ($increase > 0) {
            $this->writeFrame(Http2Parser::WINDOW_UPDATE, 0, 0, \pack("N", self::WINDOW_INCREMENT));
        }
    }

    private function increaseStreamWindow(Http2Stream $stream): void
    {
        $minWindow = \min($stream->request->getBodySizeLimit(), self::MINIMUM_WINDOW);
        $increase = 0;

        while ($stream->serverWindow <= $minWindow) {
            $stream->serverWindow += self::WINDOW_INCREMENT;
            $increase += self::WINDOW_INCREMENT;
        }

        if ($increase > 0) {
            $this->writeFrame(
                Http2Parser::WINDOW_UPDATE,
                Http2Parser::NO_FLAG,
                $stream->id,
                \pack("N", self::WINDOW_INCREMENT)
            );
        }
    }
}
