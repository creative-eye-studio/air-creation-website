<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminProductsController extends AbstractController
{
    #[Route('/admin/products', name: 'app_admin_products')]
    public function index(): Response
    {
        return $this->render('admin_products/index.html.twig', [
            'controller_name' => 'AdminProductsController',
        ]);
    }

    #[Route('/admin/products/ajouter', name: 'app_admin_products_add')]
    public function AddProduct(): Response
    {
        return $this->render('admin_products/add-product.html.twig', [
            'controller_name' => 'AdminProductsController',
        ]);
    }
}
