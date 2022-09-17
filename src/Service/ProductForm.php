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

    // Création d'un produit
    // --------------------------------------------
    public function createProduct(ManagerRegistry $doctrine, Request $request, $folderId){
        $slugify = new Slugify();
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

            // Redirection vers la page crée
            return $this->redirectToRoute('app_admin_products_update', ['id' => $product->getId()]);
        }

        return $productForm;
    }

    // Mise à jour d'un produit
    // --------------------------------------------
    public function updateProduct(){

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