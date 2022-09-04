<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminSAVManagerController extends AbstractController
{
    #[Route('/admin/sav-manager', name: 'app_admin_sav_manager')]
    public function index(): Response
    {
        return $this->render('admin_sav_manager/index.html.twig', [
            'controller_name' => 'AdminSAVManagerController',
        ]);
    }
}
