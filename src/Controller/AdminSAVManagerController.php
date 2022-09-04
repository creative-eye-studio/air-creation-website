<?php

namespace App\Controller;

use App\Form\FAQManagerFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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

    #[Route('/admin/sav-manager/ajouter-question', name: 'app_admin_sav_manager_add_question')]
    public function add_question(Request $request) 
    {

        $form = $this->createForm(FAQManagerFormType::class);
        $form->handleRequest($request);

        return $this->render('admin_sav_manager/add-question.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'AdminSAVManagerController',
        ]);
        
    }
}
