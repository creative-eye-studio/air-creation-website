<?php

namespace App\Controller;

use App\Entity\Products;
use App\Service\ProductForm;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;


class AdminProductsController extends AbstractController
{
    // LISTE DES PRODUITS
    //-----------------------------------------------------
    #[Route('/admin/products', name: 'app_admin_products')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $products = $entityManager->getRepository(Products::class)->findAll();
        return $this->render('admin_products/index.html.twig', [
            'controller_name' => 'AdminProductsController',
            'products' => $products
        ]);
    }



    // AJOUTER UN PRODUIT
    //-----------------------------------------------------
    #[Route('/admin/products/ajouter', name: 'app_admin_products_add')]
    public function AddProduct(ProductForm $productForm, ManagerRegistry $doctrine, Request $request)
    {
        $folderId = bin2hex(random_bytes(5));
        $form = $productForm->createProduct($doctrine, $request, $folderId);
        
        return $this->render('admin_products/add-product.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'AdminProductsController',
        ]);
    }



    // MODIFIER UN PRODUIT
    //-----------------------------------------------------
    #[Route('/admin/products/modifier/{product_id}', name: 'app_admin_products_update')]
    public function UpdateProduct(ProductForm $productForm, ManagerRegistry $doctrine, Request $request, $product_id) {
        $form = $productForm->initForm($request);
        
        return $this->render('admin_products/update-product.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'AdminProductsController',
        ]);
    }



    // SUPPRIMER UN PRODUIT
    //-----------------------------------------------------
    #[Route('/admin/products/supprimer/{product_id}', name: 'app_admin_products_delete')]
    public function DeleteProduct(ProductForm $productForm, ManagerRegistry $doctrine, $product_id){
        $productForm->deleteProduct($doctrine, $product_id);

        // Redirection vers la liste des produits
        return $this->redirectToRoute('app_admin_products');
    }
}
