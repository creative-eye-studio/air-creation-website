<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}
