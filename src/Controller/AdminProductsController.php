<?php

namespace App\Controller;

use App\Entity\Products;
use App\Entity\ProductsImages;
use App\Entity\ProductsMotors;
use App\Form\ProductType;
use Cocur\Slugify\Slugify;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
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
    public function AddProduct(ManagerRegistry $doctrine, Request $request)
    {
        $slugify = new Slugify();
        $product = new Products();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données du formulaire
            $product = $form->getData();

            // Création du slug
            $slugify = new Slugify();
            $slugName = $slugify->slugify($form->get('product_name')->getData());

            // Création de l'ID Page
            $product->setProductId($slugName);

            // Création de l'URL
            $product->setProductUrl($slugName);

            // Création du Meta Title
            if (!$form->get('product_meta_title')->getData()) {
                $product->setProductMetaTitle($form->get('product_name')->getData());
            } else {
                $product->setProductMetaTitle($product->setPageMetaTitle($form->get('product_meta_title')->getData()));
            }

            // Création des TWIG
            $fileIntro = fopen("../templates/webpages/products/" . $slugName . '-intro.html.twig', 'w');
            fwrite($fileIntro, $form->get('product_intro')->getData());
            fclose($fileIntro);

            $fileDesc = fopen("../templates/webpages/products/" . $slugName . '-desc.html.twig', 'w');
            fwrite($fileDesc, $form->get('product_desc')->getData());
            fclose($fileDesc);

            // Création des images
            $file = $form->get('product_logo')->getData();
            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugify->slugify($originalFilename);
            $newFilename = $safeFilename .'.'. $file->guessExtension();
            try {
                $file->move(
                    $this->getParameter('logos_directory'),
                    $newFilename
                );
            } catch (FileException $e) {
                // ... handle exception if something happens during file upload
            }

            $file = $form->get('product_thumb')->getData();
            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugify->slugify($originalFilename);
            $newFilename = $safeFilename . '.' . $file->guessExtension();
            try {
                $file->move(
                    $this->getParameter('thumbs_directory'),
                    $newFilename
                );
            } catch (FileException $e) {
                // ... handle exception if something happens during file upload
            }

            $file = $form->get('product_thumb_hover')->getData();
            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugify->slugify($originalFilename);
            $newFilename = $safeFilename . '-hover.' . $file->guessExtension();
            try {
                $file->move(
                    $this->getParameter('thumbs_directory'),
                    $newFilename
                );
            } catch (FileException $e) {
                // ... handle exception if something happens during file upload
            }
            $product->setProductThumbHover($newFilename);

            if ($form->get('fly_gallery')->getData()) {
                foreach($form->get('fly_gallery')->getData() as $image){
                    $originalFilename = pathinfo($image, PATHINFO_FILENAME);
                    $safeFilename = $slugify->slugify($originalFilename);
                    $newFilename = $safeFilename . '.' . $image->guessExtension();
                    try {
                        $file->move(
                            $this->getParameter('fly_gallery_directory'),
                            $newFilename
                        );
                    } catch (FileException $e) {
                        // ... handle exception if something happens during file upload
                    }
                }
            }
            
            if ($form->get('lifestyle_gallery')->getData()) {
                foreach($form->get('lifestyle_gallery')->getData() as $image){
                    $originalFilename = pathinfo($image, PATHINFO_FILENAME);
                    $safeFilename = $slugify->slugify($originalFilename);
                    $newFilename = $safeFilename . '.' . $image->guessExtension();
                    try {
                        $file->move(
                            $this->getParameter('lifestyle_gallery_directory'),
                            $newFilename
                        );
                    } catch (FileException $e) {
                        // ... handle exception if something happens during file upload
                    }
                }
            }
            

            if ($form->get('workshop_gallery')->getData()) {
                foreach($form->get('workshop_gallery')->getData() as $image){
                    $originalFilename = pathinfo($image, PATHINFO_FILENAME);
                    $safeFilename = $slugify->slugify($originalFilename);
                    $newFilename = $safeFilename . '.' . $image->guessExtension();
                    try {
                        $file->move(
                            $this->getParameter('workshop_gallery_directory'),
                            $newFilename
                        );
                    } catch (FileException $e) {
                        // ... handle exception if something happens during file upload
                    }
                }
            }
            

            // Envoi vers la Database
            $entityManager = $doctrine->getManager();
            $entityManager->persist($product);
            $entityManager->flush();

            // Création de la motorisation
            $motors = explode(',', $form->get('product_motors')->getData(), -1);
            foreach($motors as $motor){
                $productMotor = new ProductsMotors();
                $productMotor->setMotorName($motor);
                $productMotor->setMotorProduct($product);
                $entityManager = $doctrine->getManager();
                $entityManager->persist($productMotor);
                $entityManager->flush();
            }

            // Redirection vers le produit crée
            return $this->redirectToRoute('app_admin_products_update', ['product_id' => $product->getId()]);
        }

        return $this->render('admin_products/add-product.html.twig', [
            'form' => $form->createView()
        ]);
    }



    // MODIFIER UN PRODUIT
    //-----------------------------------------------------
    #[Route('/admin/products/update/{product_id}', name: 'app_admin_products_update')]
    public function UpdateProduct(ManagerRegistry $doctrine, Request $request, $product_id) {
        $slugify = new Slugify();

        $entityManager = $doctrine->getManager();
        $images = $entityManager->getRepository(ProductsImages::class)->findBy(['image_product' => $product_id]);
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $product_id]);
        
        if(!$product) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);
        
        $productId = $product->getProductId();
        $productUrl = $product->getProductUrl();
        $productThumb = $product->getProductThumb();
        $productThumbHover = $product->getProductThumbHover();

        $productIntroFile = file_get_contents("../templates/webpages/products/" . $productId . "-intro.html.twig");
        $productDescFile = file_get_contents("../templates/webpages/products/" . $productId . "-desc.html.twig");
        
        if ($form->isSubmitted() && $form->isValid()) {
            
            // Envoi vers la Database
            $entityManager = $doctrine->getManager();
            $entityManager->persist($product);
            $entityManager->flush();
            
            // Redirection vers le produit crée
            return $this->redirectToRoute('app_admin_products_update', ['product_id' => $product->getId()]);
        }

        return $this->render('admin_products/update-product.html.twig', [
            'form' => $form->createView(),
            'productIntroFile' => $productIntroFile,
            'productDescFile' => $productDescFile,
            'productThumb' => $productThumb,
            'productThumbHover' => $productThumbHover,
        ]);
    }



    // SUPPRIMER UN PRODUIT
    //-----------------------------------------------------
    #[Route('/admin/products/delete_product/{product_id}', name: 'app_admin_product_delete')]
    public function DeleteProduct(ManagerRegistry $doctrine, String $product_id){
        $entityManager = $doctrine->getManager();
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $product_id]);
        $images = $entityManager->getRepository(ProductsImages::class)->findBy(['image_product' => $product_id]);

        unlink($this->getParameter('kernel.project_dir') . '/templates/webpages/products/' . $product->getProductId() . '/' . $product->getProductId() . '-carac.html.twig');
        unlink($this->getParameter('kernel.project_dir') . '/templates/webpages/products/' . $product->getProductId() . '/' . $product->getProductId() . '-desc.html.twig');
        unlink($this->getParameter('kernel.project_dir') . '/templates/webpages/products/' . $product->getProductId() . '/' . $product->getProductId() . '-dims.html.twig');
        unlink($this->getParameter('kernel.project_dir') . '/templates/webpages/products/' . $product->getProductId() . '/' . $product->getProductId() . '-intro.html.twig');
        rmdir($this->getParameter('kernel.project_dir') . '/templates/webpages/products/' . $product->getProductId());

        foreach ($images as $image) {
            $entityManager->remove($image);
        }

        $entityManager->remove($product);
        $entityManager->flush();

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