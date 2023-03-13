<?php

namespace App\Service;

use App\Form\NewsletterFormType;
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
            switch ($contactForm['subject']) {
                case 1:
                    $mailto = 'vente@aircreation.fr';
                    $subject = 'Demande auprès du service commercial';
                    break;
                case 2:
                    $mailto = 'contact@aircreation.fr';
                    $subject = 'Candidature spontanée';
                    break;
                case 3:
                    $mailto = 'sav@aircreation.fr';
                    $subject = 'Demande de SAV';
                    break;
                case 4:
                    $mailto = 'info@aircreation.fr';
                    $subject = 'Message depuis le site Internet';
                    break;
                default:
                    break;
            }

            $data = $contactForm->getData();
            $email = (new TemplatedEmail())
                ->from($data['email'])
                ->to($mailto)
                ->subject($subject)
                ->htmlTemplate('')
                ->context([
                    'gender' => $data['gender'],
                    'lname' => $data['lname'],
                    'fname' => $data['fname'],
                    'phone' => $data['phone'],
                    'email' => $data['email'],
                    'customer_type' => $data['customer_type'],
                    'subject' => $subject,
                    'message' => $data['message'],
                ]);

            $mailer->send($email);

            $email = (new TemplatedEmail())
                ->from(`no-reply@aircreation.com`)
                ->to($data['email'])
                ->subject("Récapitulatif de votre demande envoyée")
                ->htmlTemplate('')
                ->context([
                    'customer_type' => $data['customer_type'],
                    'subject' => $subject,
                    'message' => $data['message'],
                ]);

            $mailer->send($email);
        }

        return $contactForm;
    }

}