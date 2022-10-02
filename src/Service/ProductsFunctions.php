<?php

namespace App\Service;

use App\Entity\Products;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProductsFunctions extends AbstractController
{
    public $folderPath = "../templates/webpages/products/";

    // Récupération des produits
    // --------------------------------------------
    public function getProducts(ManagerRegistry $doctrine)
    {
        $products = $doctrine->getRepository(Products::class)->findAll();
        return $products;
    }

    public function getProduct(ManagerRegistry $doctrine, String $product_url)
    {
        $product = $doctrine->getRepository(Products::class)->findOneBy(['product_url' => $product_url]);
        return $product;
    }

    public function productPage(ManagerRegistry $doctrine, String $productInfo)
    {
        // Récupération du produit
        $product = $this->getProduct($doctrine, $productInfo);

        // Récupération des valeurs du produit
        $productName = $product->getProductName();
        $productShopUrl = $product->getProductShopUrl();
        $productDocUrl = $product->getProductDocUrl();
        $productUrl = $product->getProductUrl();
        $productMetaTitle = $product->getProductMetaTitle();
        $productMetaDesc = $product->getProductMetaDesc();
        $productFolderId = $product->getProductFolderId();

        // Récupération des fichiers Twig
        $productTwigIntro = file_get_contents($this->folderPath . '/' . $productFolderId . '-intro.html.twig');
        $productTwigDesc = file_get_contents($this->folderPath . '/' . $productFolderId . '-desc.html.twig');
        $productTwigCarac = file_get_contents($this->folderPath . '/' . $productFolderId . '-carac.html.twig');
    }
}