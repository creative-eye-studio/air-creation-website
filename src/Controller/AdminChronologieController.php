<?php

namespace App\Controller;

use App\Entity\Chronologie;
use App\Form\ChronologieType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminChronologieController extends AbstractController
{
    #[Route('/admin/chronologie', name: 'admin_chronologie')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $dates = $entityManager->getRepository(Chronologie::class)->findAll();

        return $this->render('admin_chronologie/index.html.twig', [
            'controller_name' => 'AdminChronologieController',
            'dates' => $dates
        ]);
    }


    #[Route('/admin/chronologie/ajouter', name: 'admin_chronologie_add')]
    public function AddChronology(ManagerRegistry $doctrine, Request $request){

        $chronologie = new Chronologie();
        $form = $this->createForm(ChronologieType::class, $chronologie);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $chronologie = $form->getData();

            $doctrine = $doctrine->getManager();
            $doctrine->persist($chronologie);
            $doctrine->flush();

            return $this->redirectToRoute('admin_chronologie');
        }

        return $this->render('admin_chronologie/add_chronologie.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'AdminChronologieController',
        ]);
    }
    

    #[Route('/admin/chronologie/update/{date}', name: 'admin_chronologie_update')]
    public function UpdateChronology(ManagerRegistry $doctrine, Request $request, String $date){
        $entityManager = $doctrine->getManager();
        $date = $entityManager->getRepository(Chronologie::class)->findOneBy(['chronologie_date' => $date]);
        $form = $this->createForm(ChronologieType::class, $date);
        $form->handleRequest($request);
        
        if(!$date) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $date = $form->getData();

            $doctrine = $doctrine->getManager();
            $doctrine->persist($date);
            $doctrine->flush();

            return $this->redirectToRoute('admin_chronologie_update', ['date' => $date->getChronologieDate()]);
        }

        return $this->render('admin_chronologie/update_chronologie.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'AdminChronologieController',
        ]);
    }
    

    #[Route('/admin/chronologie/delete/{date}', name: 'admin_chronologie_delete')]
    public function DeleteChronology(ManagerRegistry $doctrine, String $date){
        $entityManager = $doctrine->getManager();
        $date = $entityManager->getRepository(Chronologie::class)->findOneBy(['chronologie_date' => $date]);
        
        if(!$date) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        $entityManager->remove($date);
        $entityManager->flush();

        // Redirection vers la liste des produits
        return $this->redirectToRoute('admin_chronologie');
    }
}
