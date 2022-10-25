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


    #[Route('/admin/documentation/product/{product_id}', name: 'app_admin_documentation_product')]
    public function productDocList(ManagerRegistry $doctrine, String $product_id): Response
    {
        // On récupère le produit
        $entityManager = $doctrine->getManager();
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $product_id]);
        $docList = $entityManager->getRepository(Documentation::class)->findBy(['doc_product_id' => $product_id]);

        return $this->render('admin_documentation/product-doc-list.html.twig', [
            "docs" => $docList,
            "productname" => $product->getProductName(),
        ]);
    }


    #[Route('/admin/documentation/ajouter', name: 'app_admin_documentation_add')]
    public function addDocs(ManagerRegistry $doctrine, Request $request): Response
    {
        $documentation = new Documentation();
        $form = $this->createForm(DocFormType::class, $documentation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
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
                $documentation->setDocName($fileName);
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

    #[Route('/admin/documentation/delete/{doc_file}', name: 'app_admin_documentation_delete')]
    public function DeleteDoc(ManagerRegistry $doctrine, String $doc_file): Response
    {
        // Récupération du fichier
        $entityManager = $doctrine->getManager();
        $doc = $entityManager->getRepository(Documentation::class)->findOneBy(['doc_file' => $doc_file]);
        $docId = $entityManager->getRepository(Products::class)->findOneBy(['id' => $doc->getDocProductId()]);

        // Suppression du fichier
        unlink($this->getParameter('kernel.project_dir').'/public/uploads/documentation/' . $doc->getDocFile());

        $entityManager->remove($doc);
        $entityManager->flush();

        return $this->redirectToRoute('app_admin_documentation_product', ['product_id' => $docId->getId()]);
    }
}
