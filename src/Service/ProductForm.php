<?php

namespace App\Service;

use App\Entity\Products;
use App\Form\ProductFormType;
use Cocur\Slugify\Slugify;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
    


class ProductForm extends AbstractController
{

    // Initialisation du formulaire
    // --------------------------------------------
    public function initForm(Request $request){
        $productForm = $this->createForm(ProductFormType::class);
        $productForm->handleRequest($request);
        return $productForm;
    }

    // Création d'un produit
    // --------------------------------------------
    public function createProduct(ManagerRegistry $doctrine, Request $request){
        $slugify = new Slugify();
        $folderId = bin2hex(random_bytes(5));
        $productForm = $this->initForm($request);

        if ($productForm->isSubmitted() && $productForm->isValid()) {
            $data = $productForm->getData();
            $productName = $data['product_name'];
            $productDesc = $data['product_desc'];
            $productShopUrl = $data['product_shop_url'];
            $productDocUrl = $data['product_doc_url'];
            $productLongDesc = $data['product_long_desc'];
            $productCarac = $data['product_carac'];
            $productMetaTitle = $data['product_meta_title'];
            $productMetaDesc = $data['product_meta_desc'];

            $product = new Products();
            $this->manageDatabase($product, $productName, $productShopUrl, $productDocUrl, $productMetaTitle, $productMetaDesc);
            $product->setProductFolderId($folderId);
            $product->setProductUrl($slugify->slugify($productName));

            $this->entityFunction($doctrine, $product);

            $this->addTab($folderId, 'intro', $productDesc);
            $this->addTab($folderId, 'desc', $productLongDesc);
            $this->addTab($folderId, 'carac', $productCarac);
            $this->addTab($folderId, 'pics', $productCarac);
        }

        return $productForm;
    }

    // Suppression d'un produit
    // --------------------------------------------
    public function deleteProduct(ManagerRegistry $doctrine, $product_id){
        $entityManager = $doctrine->getManager();
        $product = $entityManager->getRepository(Products::class)->findOneBy(['post_id' => $product_id]);
        
        if(!$product) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        $this->removeTab($product->getFolderId(), 'intro');
        $this->removeTab($product->getFolderId(), 'desc');
        $this->removeTab($product->getFolderId(), 'carac');
        $this->removeTab($product->getFolderId(), 'pics');
    }

    // Manipulation de la Database
    // --------------------------------------------
    public function manageDatabase($product, $productName, $productShopUrl, $productDocUrl, $productMetaTitle, $productMetaDesc){
        $product->setProductName($productName);
        $product->setProductShopUrl($productShopUrl);
        $product->setProductDocUrl($productDocUrl);
        $product->setProductMetaTitle($productMetaTitle);
        $product->setProductMetaDesc($productMetaDesc);
    }

    // Gestion d'une ligne de code
    // --------------------------------------------
    public function entityFunction(ManagerRegistry $doctrine, $product){
        $entityManager = $doctrine->getManager();
        $entityManager->persist($product);
        $entityManager->flush();
    }

    // Création d'un fichier d'onglet
    // --------------------------------------------
    public function addTab($folderId, $tabCat, $tabContent){
        $folderPath = "../templates/webpages/products/" . $folderId;
        if (!file_exists($folderPath)){
            mkdir($folderPath, 0777, true);
        }
        $file = fopen($folderPath . "/" . $folderId . "-" . $tabCat . ".html.twig", 'w');
        fwrite($file, $tabContent);
        fclose($file);
    }

    // Suppression d'un fichier d'onglet
    // --------------------------------------------
    public function removeTab($folderId, $tabCat){
        $folderPath = "../templates/webpages/products/" . $folderId;
        unlink($folderPath . "/" . $folderId . "-" . $tabCat . ".html.twig");
    }
}