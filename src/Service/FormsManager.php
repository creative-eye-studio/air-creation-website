<?php

namespace App\Service;

use App\Form\NewsletterFormType;
use App\Form\ContactFormType;
use Mailjet\Client;
use Mailjet\Resources;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;

class FormsManager extends AbstractController{

    public function NewsletterForm(Request $request){
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);

        if ($newsForm->isSubmitted() && $newsForm->isValid()) {
            $client = new Client($this->getParameter('mailjet_public'), $this->getParameter('mailjet_private'), true, ['version' => 'v3']);
            $body = [
                'Email' => $newsForm->get('email')->getData(),
            ];
            $response = $client->post(Resources::$Contact, ['body' => $body]);
            if (!$response->success())
                dump($response->getReasonPhrase());
        }

        return $newsForm;
    }

    public function ContactForm(MailerInterface $mailer, Request $request){
        $contactForm = $this->createForm(ContactFormType::class);
        $contactForm->handleRequest($request);

        if ($contactForm->isSubmitted() && $contactForm->isValid()) {
            
            $data = $contactForm->getData();
            $emailForm = (new TemplatedEmail())
                ->from($data['mail'])
                ->to('hello@creative-eye.fr')
                ->subject($data['subject'] . ' - Air Création')
                ->htmlTemplate('emails/mail-receiver.html.twig')
                ->context([
                    'lname' => $data['lname'],
                    'fname' => $data['fname'],
                    'phone' => $data['phone'],
                    'mail' => $data['mail'],
                    'customer_type' => $data['customer_type'],
                    'subject' => $data['subject'],
                    'message' => $data['message'],
                ]);

            $mailer->send($emailForm);

            $emailForm = (new TemplatedEmail())
                ->from(`no-reply@aircreation.com`)
                ->to($data['mail'])
                ->subject("Récapitulatif de votre demande envoyée")
                ->htmlTemplate('emails/mail-sender.html.twig')
                ->context([
                    'gender' => $data['gender'],
                    'lname' => $data['lname'],
                    'fname' => $data['fname'],
                    'subject' => "Récapitulatif de votre E-Mail - Air Création",
                    'message' => $data['message'],
                ]);

            $mailer->send($emailForm);
        }

        return $contactForm;
    }

}