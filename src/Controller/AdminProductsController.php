<?php

namespace App\Controller;

use App\Entity\Products;
use App\Entity\ProductsImages;
use App\Form\ProductType;
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
    public function AddProduct(ManagerRegistry $doctrine, Request $request)
    {
        $slugify = new Slugify();
        $product = new Products();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $doctrine->getManager();

            // Envoi vers la Database
            $coloris = $form['product_color_imgs']->getData();
            $accessoiries = $form['product_access_imgs']->getData();
            $gallery = $form['product_gallery_imgs']->getData();
            $thumb = $form['product_thumb']->getData();
            $slug = $slugify->slugify($form['product_name']->getData());
            $product->setProductId($slug);
            $product->setProductUrl($slug);
            $product->setProductThumb(pathinfo($thumb->getClientOriginalName(), PATHINFO_FILENAME) . '.' . pathinfo($thumb->getClientOriginalName(), PATHINFO_EXTENSION));

            // Création des TWIG
            mkdir($this->getParameter('kernel.project_dir') . "/templates/webpages/products/" . $slug);
            
            $file = fopen($this->getParameter('kernel.project_dir') . "/templates/webpages/products/" . $slug . "/" . $slug . '-intro.html.twig', 'w');
            fwrite($file, $form['product_intro']->getData());
            fclose($file);

            $file = fopen($this->getParameter('kernel.project_dir') . "/templates/webpages/products/" . $slug . "/" . $slug . '-desc.html.twig', 'w');
            fwrite($file, $form['product_desc']->getData());
            fclose($file);

            $file = fopen($this->getParameter('kernel.project_dir') . "/templates/webpages/products/" . $slug . "/" . $slug . '-carac.html.twig', 'w');
            fwrite($file, $form['product_carac']->getData());
            fclose($file);

            // Création des images
            foreach($coloris as $file){
                $fileName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $file;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/coloris';
                $newFilename = $fileName . '-color.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $entityManager = $doctrine->getManager();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(0);
                
                $entityManager->persist($image);
            }

            foreach($accessoiries as $file){
                $fileName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $file;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/accessoiries';
                $newFilename = $fileName . '-access.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(1);
                $entityManager->persist($image);
            }

            foreach($gallery as $file){
                $fileName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $file;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/gallery';
                $newFilename = $fileName . '-gallery.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(2);
                $entityManager->persist($image);
            }

            foreach($thumb as $file){
                $fileName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $file;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/thumbs';
                $newFilename = $fileName . '.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );
            }

            $entityManager->persist($product);
            $entityManager->flush();

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
        $productId = $product->getProductId();
        $productUrl = $product->getProductUrl();
        $productThumb = $product->getProductThumb();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);
        
        if(!$product) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        $productIntroFile = file_get_contents("../templates/webpages/products/" . $productId . "/" . $productId . "-intro.html.twig");
        $productDescFile = file_get_contents("../templates/webpages/products/" . $productId . "/" . $productId . "-desc.html.twig");
        
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $doctrine->getManager();

            // Création des TWIG
            $file = fopen("../templates/webpages/products/" . $product->getProductId() . "/" . $product->getProductId() . '-intro.html.twig', 'w');
            fwrite($file, $form['product_intro']->getData());
            fclose($file);

            $file = fopen("../templates/webpages/products/" . $product->getProductId() . "/" . $product->getProductId() . '-desc.html.twig', 'w');
            fwrite($file, $form['product_desc']->getData());
            fclose($file);

            // Envoi vers la Database
            $slug = $slugify->slugify($form['product_name']->getData());
            $product->setProductId($productId);
            $product->setProductUrl($productUrl);

            // Création des images
            $coloris = $form['product_color_imgs']->getData();
            $accessoiries = $form['product_access_imgs']->getData();
            $gallery = $form['product_gallery_imgs']->getData();
            $thumb = $form['product_thumb']->getData();

            foreach($coloris as $file){
                $fileName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $file;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/coloris';
                $newFilename = $fileName . '-color.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $entityManager = $doctrine->getManager();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(0);
                
                $entityManager->persist($image);
            }

            foreach($accessoiries as $file){
                $fileName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $file;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/accessoiries';
                $newFilename = $fileName . '-access.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(1);
                $entityManager->persist($image);
            }

            foreach($gallery as $file){
                $fileName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $file;
                $directory = $this->getParameter('kernel.project_dir').'/public/uploads/products/gallery';
                $newFilename = $fileName . '-gallery.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );

                $image = new ProductsImages();
                $image->setImageName($newFilename);
                $image->setImageProduct($product);
                $image->setImageType(2);
                $entityManager->persist($image);
            }

            if ($thumb) {
                $uploadedFileName = pathinfo($thumb->getClientOriginalName(), PATHINFO_FILENAME) . '.' . pathinfo($thumb->getClientOriginalName(), PATHINFO_EXTENSION);
                $product->setProductThumb($uploadedFileName);
                
                $fileName = pathinfo($thumb->getClientOriginalName(), PATHINFO_FILENAME);
                $fileExtention = pathinfo($thumb->getClientOriginalName(), PATHINFO_EXTENSION);

                // Ajout du fichier
                $uploadedFile = $thumb;
                $directory = $this->getParameter('kernel.project_dir') . '/public/uploads/products/thumbs';
                $newFilename = $fileName . '.' . $fileExtention;
                $uploadedFile->move(
                    $directory,
                    $newFilename
                );
            } else {
                $product->setProductThumb($productThumb);
            }
            
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
        ]);
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