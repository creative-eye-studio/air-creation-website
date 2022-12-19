<?php

namespace App\Controller;

use App\Entity\Products;
use App\Entity\ProductsImages;
use App\Entity\ProductsMotors;
use App\Services\ProductService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
    public function AddProduct(ProductService $productService, ManagerRegistry $doctrine, Request $request)
    {
        $form = $productService->ProductManager($doctrine, $request, true);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->redirectToRoute('app_admin_products_add');
        }

        return $this->render('admin_products/add-product.html.twig', [
            'form' => $form->createView()
        ]);
    }



    // MODIFIER UN PRODUIT
    //-----------------------------------------------------
    #[Route('/admin/products/update/{product_id}', name: 'app_admin_products_update')]
    public function UpdateProduct(ProductService $productService, ManagerRegistry $doctrine, Request $request, $product_id) 
    {
        $entityManager = $doctrine->getManager();
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $product_id]);
        $motors = $entityManager->getRepository(ProductsMotors::class)->findBy(['product_id' => $product_id]);

        $form = $productService->ProductManager($doctrine, $request, false, $product_id);
        
        if ($form->isSubmitted() && $form->isValid()) {
            return $this->redirectToRoute('app_admin_products_update', [
                'product_id' => $product_id
            ]);
        }

        return $this->render('admin_products/update-product.html.twig', [
            'form' => $form->createView(),
            'product' => $product,
            'motor1Name' => $motors[0]->getMotorName(),
            'motor1Block1Title' => $motors[0]->getMotorBlock1Name(),
            'motor1Block1Value' => $motors[0]->getMotorBlock1Value(),
            'motor1Block2Title' => $motors[0]->getMotorBlock2Title(),
            'motor1Block2Value' => $motors[0]->getMotorBlock2Value(),
            'motor1Block3Title' => $motors[0]->getMotorBlock3Title(),
            'motor1Block3Value' => $motors[0]->getMotorBlock3Value(),
            'motor1Block4Title' => $motors[0]->getMotorBlock4Title(),
            'motor1Block4Value' => $motors[0]->getMotorBlock4Value(),
            'motor1Vitesse' => $motors[0]->getMotorInfosVitesse(),
            'motor1Vol' => $motors[0]->getMotorInfosVol(),
            'motor1Hauteur' => $motors[0]->getMotorInfosHauteur(),
            'motor1Masse' => $motors[0]->getMotorInfosMasse(),
            'motor1Moteur' => $motors[0]->getMotorInfosMoteur(),
            'motor1Reservoir' => $motors[0]->getMotorInfosReservoir(),

            'motor2Name' => $motors[1]->getMotorName(),
            'motor2Block1Title' => $motors[1]->getMotorBlock1Name(),
            'motor2Block1Value' => $motors[1]->getMotorBlock1Value(),
            'motor2Block2Title' => $motors[1]->getMotorBlock2Title(),
            'motor2Block2Value' => $motors[1]->getMotorBlock2Value(),
            'motor2Block3Title' => $motors[1]->getMotorBlock3Title(),
            'motor2Block3Value' => $motors[1]->getMotorBlock3Value(),
            'motor2Block4Title' => $motors[1]->getMotorBlock4Title(),
            'motor2Block4Value' => $motors[1]->getMotorBlock4Value(),
            'motor2Vitesse' => $motors[1]->getMotorInfosVitesse(),
            'motor2Vol' => $motors[1]->getMotorInfosVol(),
            'motor2Hauteur' => $motors[1]->getMotorInfosHauteur(),
            'motor2Masse' => $motors[1]->getMotorInfosMasse(),
            'motor2Moteur' => $motors[1]->getMotorInfosMoteur(),
            'motor2Reservoir' => $motors[1]->getMotorInfosReservoir(),

            'motor3Name' => $motors[2]->getMotorName(),
            'motor3Block1Title' => $motors[2]->getMotorBlock1Name(),
            'motor3Block1Value' => $motors[2]->getMotorBlock1Value(),
            'motor3Block2Title' => $motors[2]->getMotorBlock2Title(),
            'motor3Block2Value' => $motors[2]->getMotorBlock2Value(),
            'motor3Block3Title' => $motors[2]->getMotorBlock3Title(),
            'motor3Block3Value' => $motors[2]->getMotorBlock3Value(),
            'motor3Block4Title' => $motors[2]->getMotorBlock4Title(),
            'motor3Block4Value' => $motors[2]->getMotorBlock4Value(),
            'motor3Vitesse' => $motors[2]->getMotorInfosVitesse(),
            'motor3Vol' => $motors[2]->getMotorInfosVol(),
            'motor3Hauteur' => $motors[2]->getMotorInfosHauteur(),
            'motor3Masse' => $motors[2]->getMotorInfosMasse(),
            'motor3Moteur' => $motors[2]->getMotorInfosMoteur(),
            'motor3Reservoir' => $motors[2]->getMotorInfosReservoir(),
        ]);
    }



    // SUPPRIMER UN PRODUIT
    //-----------------------------------------------------
    #[Route('/admin/products/delete_product/{product_id}', name: 'app_admin_product_delete')]
    public function DeleteProduct(ManagerRegistry $doctrine, String $product_id){
        $entityManager = $doctrine->getManager();
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $product_id]);
        $motors = $entityManager->getRepository(ProductsMotors::class)->findBy(['product_id' => $product_id]);
        $images = $entityManager->getRepository(ProductsImages::class)->findBy(['image_product' => $product_id]);

        foreach ($motors as $motor) {
            $entityManager->remove($motor);
        }
        foreach ($images as $image) {
            $entityManager->remove($image);
        }
        $entityManager->remove($product);
        $entityManager->flush();

        return $this->redirectToRoute('app_admin_products');
    }



    // SUPPRIMER UNE IMAGE
    //-----------------------------------------------------
    #[Route('/admin/products/delete_product_image/{product_id}/{id}', name: 'app_admin_delete_image')]
    public function DeleteImage(ManagerRegistry $doctrine, int $product_id, int $id)
    {
        $entityManager = $doctrine->getManager();
        $image = $entityManager->getRepository(ProductsImages::class)->findOneBy(["id" => $id]);
        $entityManager->remove($image);
        $entityManager->flush();

        return $this->redirectToRoute('app_admin_products_update', [
            'product_id' => $product_id
        ]);
    }
}