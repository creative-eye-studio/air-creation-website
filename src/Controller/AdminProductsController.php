<?php

namespace App\Controller;

use App\Entity\Products;
use App\Entity\ProductsImages;
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
    #[Route('/admin/products/add', name: 'app_admin_products_add')]
    public function AddProduct(ProductForm $productForm, ManagerRegistry $doctrine, Request $request)
    {
        $slugify = new Slugify();
        $form = $productForm->initForm($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données du formulaire
            $data = $form->getData();
            $productName = $data['product_name'];
            $productThumbnail = $data['product_thumbnail'];
            $productDesc = $data['product_desc'];
            $productShopUrl = $data['product_shop_url'];
            $productDocUrl = $data['product_doc_url'];
            $productColoris = $data['product_coloris'];
            $productAccessoiries = $data['product_accessoiries'];
            $productGallery = $data['product_gallery'];
            $productLongDesc = $data['product_long_desc'];
            $productCarac = $data['product_carac'];
            $productMetaTitle = $data['product_meta_title'];
            $productMetaDesc = $data['product_meta_desc'];

            // Ajout de la vignette
            $uploadedImage = $productThumbnail;
            $directory = $this->getParameter('kernel.project_dir') . '/public/uploads/images/product_thumbnails';
            $thumbProduct = $slugify->slugify($productName) . '.' . $uploadedImage->guessExtension();
            $uploadedImage->move(
                $directory,
                $thumbProduct
            );

            // Création du produit dans la BDD
            $entityManager = $doctrine->getManager();
            $product = new Products();
            $product->setProductName($productName);
            $product->setProductShopUrl($productShopUrl);
            $product->setProductDocUrl($productDocUrl);
            $product->setProductUrl($slugify->slugify($productName));
            $product->setProductMetaTitle($productMetaTitle);
            $product->setProductMetaDesc($productMetaDesc);
            $product->setProductThumb($thumbProduct);
            $product->setProductId($slugify->slugify($productName));

            $entityManager->persist($product);
            $entityManager->flush();

            foreach($productColoris as $coloris){
                $fileName = pathinfo($coloris->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($coloris->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $coloris;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/coloris';
                $newFilename = $fileName . '-color-.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(0);

                $entityManager->persist($image);
                $entityManager->flush();
            }

            foreach($productAccessoiries as $access){
                $fileName = pathinfo($access->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($access->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $access;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/accessoiries';
                $newFilename = $fileName . '-access-.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(1);

                $entityManager->persist($image);
                $entityManager->flush();
            }

            foreach($productGallery as $image){
                $fileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $image;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/gallery';
                $newFilename = $fileName . '-gallery-.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(2);

                $entityManager->persist($image);
                $entityManager->flush();
            }

            // Création des fichiers TWIG
            $productForm->createProductTabs($slugify->slugify($productName), $productDesc, $productLongDesc, $productCarac);

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
    #[Route('/admin/products/update/{product_id}', name: 'app_admin_products_update')]
    public function UpdateProduct(ProductForm $productForm, ManagerRegistry $doctrine, Request $request, $product_id) {
        $form = $productForm->initForm($request);

        $entityManager = $doctrine->getManager();
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $product_id]);
        $images = $entityManager->getRepository(ProductsImages::class)->findBy(['image_product' => $product_id]);
        
        if(!$product) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        $productIntroFile = file_get_contents("../templates/webpages/products/" . $product->getProductId() . "/" . $product->getProductId() . "-intro.html.twig");
        $productDescFile = file_get_contents("../templates/webpages/products/" . $product->getProductId() . "/" . $product->getProductId() . "-desc.html.twig");
        $productCaracFile = file_get_contents("../templates/webpages/products/" . $product->getProductId() . "/" . $product->getProductId() . "-carac.html.twig");

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $productName = $data['product_name'];
            $productDesc = $data['product_desc'];
            $productShopUrl = $data['product_shop_url'];
            $productDocUrl = $data['product_doc_url'];
            $productColoris = $data['product_coloris'];
            $productAccessoiries = $data['product_accessoiries'];
            $productGallery = $data['product_gallery'];
            $productLongDesc = $data['product_long_desc'];
            $productCarac = $data['product_carac'];
            $productMetaTitle = $data['product_meta_title'];
            $productMetaDesc = $data['product_meta_desc'];

            foreach($productColoris as $coloris){
                $fileName = pathinfo($coloris->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($coloris->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $coloris;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/coloris';
                $newFilename = $fileName . '-color-.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(0);

                $entityManager->persist($image);
                $entityManager->flush();
            }

            foreach($productAccessoiries as $access){
                $fileName = pathinfo($access->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($access->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $access;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/accessoiries';
                $newFilename = $fileName . '-access-.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(1);

                $entityManager->persist($image);
                $entityManager->flush();
            }

            foreach($productGallery as $image){
                $fileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $image;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/gallery';
                $newFilename = $fileName . '-gallery-.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(2);

                $entityManager->persist($image);
                $entityManager->flush();
            }

            $productForm->manageDatabase($product, $productName, $productShopUrl, $productDocUrl, $productMetaTitle, $productMetaDesc);
            $productForm->entityFunction($doctrine, $product);
            $productForm->removeTab($product->getProductId());
            $productForm->createProductTabs($product->getProductId(), $productDesc, $productLongDesc, $productCarac);

            // Redirection vers la page crée
            return $this->redirectToRoute('app_admin_products_update', ['product_id' => $product->getId()]);
        }
        
        return $this->render('admin_products/update-product.html.twig', [
            'form' => $form->createView(),
            'images' => $images,
            'productFolderId' => $product->getProductId(),
            'productName' => $product->getProductName(),
            'productIntroFile' => $productIntroFile,
            'productShopUrl' => $product->getProductShopUrl(),
            'productDocUrl' => $product->getProductDocUrl(),
            'productDescFile' => $productDescFile,
            'productCaracFile' => $productCaracFile,
            'productMetaTitle' => $product->getProductMetaTitle(),
            'productMetaDesc' => $product->getProductMetaDesc(),
            'controller_name' => 'AdminProductsController',
        ]);
    }



    // SUPPRIMER UN PRODUIT
    //-----------------------------------------------------
    #[Route('/admin/products/delete/{product_id}', name: 'app_admin_products_delete')]
    public function DeleteProduct(ProductForm $productForm, ManagerRegistry $doctrine, $product_id){
        $entityManager = $doctrine->getManager();
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $product_id]);
        
        if(!$product) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        $productForm->removeTab($product->getProductId());
        rmdir("../templates/webpages/products/" . $product->getProductId());
        $entityManager->remove($product);
        $entityManager->flush();

        // Redirection vers la liste des produits
        return $this->redirectToRoute('app_admin_products');
    }



    // SUPPRIMER UNE IMAGE
    //-----------------------------------------------------
    #[Route('/admin/products/delete_image/{folder}/{image_file}', name: 'app_admin_image_delete')]
    public function DeleteImage(ManagerRegistry $doctrine, String $folder, String $image_file){
        $entityManager = $doctrine->getManager();
        $image = $entityManager->getRepository(ProductsImages::class)->findOneBy(["image_name" => $image_file]);
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $image->getImageProduct()]);

        // Suppression du fichier
        unlink($this->getParameter('kernel.project_dir').'/public/uploads/products/' . $folder . '/' . $image->getImageName());

        $entityManager->remove($image);
        $entityManager->flush();

        return $this->redirectToRoute('app_admin_products_update', ['product_id' => $product->getId()]);
    }
}
