<?php

namespace App\Controller;

use App\Form\ProductFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminProductsController extends AbstractController
{
    // LISTE DES PRODUITS
    //-----------------------------------------------------
    #[Route('/admin/products', name: 'app_admin_products')]
    public function index(): Response
    {
        return $this->render('admin_products/index.html.twig', [
            'controller_name' => 'AdminProductsController',
        ]);
    }

    // AJOUTER UN PRODUIT
    //-----------------------------------------------------
    #[Route('/admin/products/ajouter', name: 'app_admin_products_add')]
    public function AddProduct(Request $request): Response
    {
        $form = $this->createForm(ProductFormType::class);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) { 
            
        }

        return $this->render('admin_products/add-product.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'AdminProductsController',
        ]);
    }
}
