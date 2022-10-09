<?php

namespace App\Controller;

use App\Entity\Products;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}
