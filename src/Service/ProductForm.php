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
    public function initForm(Request $request){
        $productForm = $this->createForm(ProductFormType::class);
        $productForm->handleRequest($request);
        return $productForm;
    }

    // Création d'un produit
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
            $product->setProductName($productName);
            $product->setProductShopUrl($productShopUrl);
            $product->setProductDocUrl($productDocUrl);
            $product->setProductUrl($slugify->slugify($productName));
            $product->setProductMetaTitle($productMetaTitle);
            $product->setProductMetaDesc($productMetaDesc);
            $product->setProductFolderId($folderId);

            $this->entityFunction($doctrine, $product);
            $this->addTab($folderId, 'intro', $productDesc);
            $this->addTab($folderId, 'desc', $productLongDesc);
            $this->addTab($folderId, 'carac', $productCarac);
            $this->addTab($folderId, 'pics', $productCarac);
        }

        return $productForm;
    }

    // Gestion d'une ligne de code
    public function entityFunction(ManagerRegistry $doctrine, $product){
        $entityManager = $doctrine->getManager();
        $entityManager->persist($product);
        $entityManager->flush();
    }

    // Création des fichiers d'onglets
    public function addTab($folderId, $tabCat, $tabContent){
        $folderPath = "../templates/webpages/products/" . $folderId;
        if (!file_exists($folderPath)){
            mkdir("../templates/webpages/products/" . $folderId, 0777, true);
        }
        $file = fopen("../templates/webpages/products/" . $folderId . "/" . $folderId . "-" . $tabCat . ".html.twig", 'w');
        fwrite($file, $tabContent);
        fclose($file);
    }
}