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
            $image = $form['chronologie_img']->getData();

            $fileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
            $fileExtention = pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);

            $uploadedFile = $image;
            $directory = $this->getParameter('kernel.project_dir').'/public/uploads/images/chronologie';
            $newFilename = $fileName . '.' . $fileExtention;
            $uploadedFile->move(
                $directory,
                $newFilename
            );

            $chronologie->setChronologieImg($newFilename);

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
        $thumb = $date->getChronologieImg();
        $form = $this->createForm(ChronologieType::class, $date);
        $form->handleRequest($request);

        if(!$date) {
            throw $this->createNotFoundException(
                "Aucune date n'a été trouvée"
            );
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $date = $form->getData();
            $image = $form['chronologie_img']->getData();

            if ($image) {
                $fileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);

                $uploadedFile = $image;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/images/chronologie';
                $newFilename = $fileName . '.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );
                $date->setChronologieImg($newFilename);
            } else {
                $date->setChronologieImg($thumb);
            }

            $doctrine = $doctrine->getManager();
            $doctrine->persist($date);
            $doctrine->flush();

            return $this->redirectToRoute('admin_chronologie_update', ['date' => $date->getChronologieDate()]);
        }

        return $this->render('admin_chronologie/update_chronologie.html.twig', [
            'form' => $form->createView(),
            'thumb' => $thumb,
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
