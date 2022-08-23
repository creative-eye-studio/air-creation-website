<?php

namespace App\Controller;

use App\Form\ContactFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebContactPageController extends AbstractController
{
    #[Route('/fr/contact', name: 'web_contact_page')]
    public function index(): Response
    {
        $form = $this->createForm(ContactFormType::class);

        return $this->render('web_contact_page/index.html.twig', [
            'controller_name' => 'WebContactPageController',
            'form' => $form->createView(),
        ]);
    }
}
