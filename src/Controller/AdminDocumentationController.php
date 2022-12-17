<?php

namespace App\Controller;

use App\Entity\DocCategories;
use App\Form\DocCategoriesType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminDocumentationController extends AbstractController
{
    #[Route('/admin/documentation', name: 'app_admin_documentation')]
    public function index(): Response
    {
        return $this->render('admin_documentation/index.html.twig', [
            'controller_name' => 'AdminDocumentationController',
        ]);
    }

    #[Route('/admin/documentation/categories', name: 'admin_doc_categories')]
    public function category_manager(ManagerRegistry $doctrine, Request $request): Response
    {
        $entityManager = $doctrine->getManager();
        $docCat = new DocCategories();
        $docCatList = $entityManager->getRepository(DocCategories::class)->findAll();
        $docForm = $this->createForm(DocCategoriesType::class, $docCat);
        $docForm->handleRequest($request);

        if ($docForm->isSubmitted() && $docForm->isValid()) {
            $cat = $docForm->getData();
            $entityManager->persist($cat);
            $entityManager->flush();

            return $this->redirectToRoute('admin_doc_categories');
        }

        return $this->render('admin_documentation/cat-manager.html.twig', [
            'cats' => $docCatList,
            'docForm' => $docForm->createView()
        ]);
    }
}
