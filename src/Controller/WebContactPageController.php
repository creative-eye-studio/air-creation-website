<?php

namespace App\Controller;

use App\Form\ContactFormType;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class WebContactPageController extends AbstractController
{
    #[Route('/fr/contact', name: 'web_contact_page')]
    public function index(Request $request, MailerInterface $mailer): Response
    {
        $form = $this->createForm(ContactFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $email = (New TemplatedEmail())
                ->from($data['email'])
                ->to('contact@aircreation.fr')
                ->subject($data['subject'])
                ->htmlTemplate('')
                ->context([
                    'gender' => $data['gender'],
                    'lname' => $data['lname'],
                    'fname' => $data['fname'],
                    'phone' => $data['phone'],
                    'email' => $data['email'],
                    'customer_type' => $data['customer_type'],
                    'message' => $data['message'],
                ]);

            $mailer->send($email);
            return $this->redirectToRoute('web_contact_page');
        }

        return $this->render('web_contact_page/index.html.twig', [
            'controller_name' => 'WebContactPageController',
            'form' => $form->createView(),
        ]);
    }
}
