<?php

namespace App\Controller;

use App\Entity\Options;
use App\Form\OptionsFormType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminOptionsController extends AbstractController
{
    #[Route('/admin/options', name: 'admin_options')]
    public function index(): Response
    {
        return $this->render('admin_options/index.html.twig', [
            
        ]);
    }

    #[Route('/admin/options/ajouter', name: 'admin_options_add')]
    public function add_option(Request $request, ManagerRegistry $doctrine)
    {
        $option = new Options();
        $form = $this->createForm(OptionsFormType::class, $option);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données
            $option = $form->getData();
            
            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $entityManager->persist($option);
            $entityManager->flush();

            // Redirection vers la liste des options
            return $this->redirectToRoute('admin_options');
        }

        return $this->render('admin_options/add-option.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
