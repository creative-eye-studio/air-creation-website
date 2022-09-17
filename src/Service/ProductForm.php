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
    public $folderPath = "../templates/webpages/products/";

    // Initialisation du formulaire
    // --------------------------------------------
    public function initForm(Request $request){
        $productForm = $this->createForm(ProductFormType::class);
        $productForm->handleRequest($request);
        return $productForm;
    }

    // Suppression d'un produit
    // --------------------------------------------
    public function deleteProduct(ManagerRegistry $doctrine, String $id){
        $entityManager = $doctrine->getManager();
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $id]);
        
        if(!$product) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        $this->removeTab($product->getProductFolderId(), 'intro');
        $this->removeTab($product->getProductFolderId(), 'desc');
        $this->removeTab($product->getProductFolderId(), 'carac');
        $this->removeTab($product->getProductFolderId(), 'pics');

        rmdir($this->folderPath . "/" . $product->getProductFolderId());

        $entityManager->remove($product);
        $entityManager->flush();
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
        $file = fopen($this->folderPath . "/" . $folderId . "/" . $folderId . "-" . $tabCat . ".html.twig", 'w');
        fwrite($file, $tabContent);
        fclose($file);
    }

    // Suppression d'un fichier d'onglet
    // --------------------------------------------
    public function removeTab($folderId, $tabCat){
        unlink($this->folderPath . "/" . $folderId . "/" . $folderId . "-" . $tabCat . ".html.twig");
        
    }
}