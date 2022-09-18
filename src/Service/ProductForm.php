<?php

namespace App\Service;

use App\Entity\Products;
use App\Form\ProductFormType;
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

    // Ajout des onglets d'informations
    // --------------------------------------------
    public function createProductTabs($folderId, $productDesc, $productlongDesc, $productCarac){
        $this->addTab($folderId, 'intro', $productDesc);
        $this->addTab($folderId, 'desc', $productlongDesc);
        $this->addTab($folderId, 'carac', $productCarac);
    }

    // Suppression des onglets d'informations
    // --------------------------------------------
    public function removeTab($folderId){
        unlink($this->folderPath . "/" . $folderId . "/" . $folderId . "-intro.html.twig");
        unlink($this->folderPath . "/" . $folderId . "/" . $folderId . "-desc.html.twig");
        unlink($this->folderPath . "/" . $folderId . "/" . $folderId . "-carac.html.twig");
    }
}