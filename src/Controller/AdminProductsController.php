<?php

namespace App\Controller;

use App\Entity\Products;
use App\Service\ProductForm;
use Cocur\Slugify\Slugify;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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
        $slugify = new Slugify();
        $folderId = bin2hex(random_bytes(5));
        $form = $productForm->initForm($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $productName = $data['product_name'];
            $productDesc = $data['product_desc'];
            $productShopUrl = $data['product_shop_url'];
            $productDocUrl = $data['product_doc_url'];
            $productLongDesc = $data['product_long_desc'];
            $productCarac = $data['product_carac'];
            $productMetaTitle = $data['product_meta_title'];
            $productMetaDesc = $data['product_meta_desc'];

            $product = new Products();
            $productForm->manageDatabase($product, $productName, $productShopUrl, $productDocUrl, $productMetaTitle, $productMetaDesc);
            $product->setProductFolderId($folderId);
            $product->setProductUrl($slugify->slugify($productName));

            $productForm->entityFunction($doctrine, $product);

            $productForm->addTab($folderId, 'intro', $productDesc);
            $productForm->addTab($folderId, 'desc', $productLongDesc);
            $productForm->addTab($folderId, 'carac', $productCarac);
            $productForm->addTab($folderId, 'pics', $productCarac);

            // Redirection vers la page crée
            return $this->redirectToRoute('app_admin_products_update', ['product_id' => $product->getId()]);
        }
        
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
