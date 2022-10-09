<?php

namespace App\Controller;

use App\Entity\Documentation;
use App\Entity\Products;
use App\Form\DocFormType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminDocumentationController extends AbstractController
{
    #[Route('/admin/documentation', name: 'app_admin_documentation')]
    public function index(ManagerRegistry $doctrine): Response
    {
        // On récupère l'ensemble des produits
        $entityManager = $doctrine->getManager();
        $products = $entityManager->getRepository(Products::class)->findAll();

        return $this->render('admin_documentation/index.html.twig', [
            'controller_name' => 'AdminDocumentationController',
            "products" => $products
        ]);
    }

    #[Route('/admin/documentation/ajouter', name: 'app_admin_documentation_add')]
    public function addDocs(ManagerRegistry $doctrine, Request $request): Response
    {
        $documentation = new Documentation();
        $form = $this->createForm(DocFormType::class, $documentation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $docName = null;
            $docFile = $form['doc_file']->getData();
            $docProduct = $form['doc_product_id']->getData();

            foreach($docFile as $doc){
                $fileName = pathinfo($doc->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($doc->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $doc;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/documentation';
                $newFilename = $fileName . '.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $documentation = new Documentation();
                $entityManager = $doctrine->getManager();
                $documentation->setDocFile($fileName . "." . $fileExtention);
                $documentation->setDocProductId($docProduct);
            
                $entityManager->persist($documentation);
                $entityManager->flush();
            }
            

            
        }

        return $this->render('admin_documentation/add_docs.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
