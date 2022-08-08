<?php

namespace App\Controller;

use App\Form\PartnersType;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminPartnersController extends AbstractController
{
    #[Route('/admin/partners', name: 'app_admin_partners')]
    public function index(): Response
    {
        return $this->render('admin_partners/index.html.twig', [
            'controller_name' => 'AdminPartnersController',
        ]);
    }

    #[Route('/admin/partners/ajouter', name: 'app_admin_partners_add')]
    public function add_partner(Request $request)
    {
        $form = $this->createForm(PartnersType::class);
        // $form->handleRequest($request);

        return $this->render('admin_partners/add-partner.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'AdminPartnersController',
        ]);
    }
}
