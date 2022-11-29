<?php

namespace App\Controller;

use App\Entity\Products;
use App\Entity\ProductsImages;
use App\Form\ProductType;
use App\Services\FileUploaderService;
use Cocur\Slugify\Slugify;
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
    public function AddProduct(ManagerRegistry $doctrine, Request $request, FileUploaderService $fileUploaderService)
    {
        $slugify = new Slugify();
        $product = new Products();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Variables
            $name = $form->get('product_name')->getData();
            $metaTitle = $form->get('product_meta_title')->getData();
            $logo = $form->get('product_logo')->getData();
            $thumb = $form->get('product_thumb')->getData();
            $thumbHover = $form->get('product_thumb_hover')->getData();
            $motor1 = $form->get('product_motor_img_1')->getData();
            $motor2 = $form->get('product_motor_img_2')->getData();
            $motor3 = $form->get('product_motor_img_3')->getData();
            $flyImages = $form->get('fly_gallery')->getData();
            $lifestyleImages = $form->get('lifestyle_gallery')->getData();
            $workshopImages = $form->get('workshop_gallery')->getData();
            $dimImage = $form->get('product_dim')->getData();

            // Récupération des données du formulaire
            $product = $form->getData();

            // Création du slug
            $slugify = new Slugify();
            $slugName = $slugify->slugify($name);

            // Création de l'ID Page
            $product->setProductId($slugName);

            // Création de l'URL
            $product->setProductUrl($slugName);

            // Création du Meta Title
            if (!$metaTitle) {
                $product->setProductMetaTitle($name);
            } else {
                $product->setProductMetaTitle($metaTitle);
            }

            // Création de l'image Thumb
            $slugImgName = pathinfo($thumb->getClientOriginalName(), PATHINFO_FILENAME);
            $slugImgExt = $thumb->guessExtension();
            $fileUploaderService->ThumbUploader($thumb, $slugImgName, $slugImgExt);
            $product->setProductThumb($slugImgName . '.' . $slugImgExt);

            // Création de l'image Thumb Hover
            $slugImgName = pathinfo($thumbHover->getClientOriginalName(), PATHINFO_FILENAME);
            $slugImgExt = $thumbHover->guessExtension();
            $fileUploaderService->ThumbUploader($thumbHover, $slugImgName, $slugImgExt);
            $product->setProductThumbHover($slugImgName . '.' . $slugImgExt);

            // Création de l'image Logo
            $slugImgName = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);
            $slugImgExt = $logo->guessExtension();
            $fileUploaderService->LogoUploader($logo, $slugImgName, $slugImgExt);
            $product->setProductLogo($slugImgName . '.' . $slugImgExt);

            // Création des images de motorisation
            if ($motor1) {
                $originalFileName = pathinfo($motor1->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $motor1->guessExtension();
                try {
                    $motor1->move(
                        $this->getParameter('motors_directory'),
                        $newFilename
                    );
                    $product->setProductMotor1($form->get('product_motor_1')->getData());
                    $product->setProductMotorImg1($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }

            if ($motor2) {
                $originalFileName = pathinfo($motor2->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $motor2->guessExtension();
                try {
                    $motor2->move(
                        $this->getParameter('motors_directory'),
                        $newFilename
                    );
                    $product->setProductMotor2($form->get('product_motor_2')->getData());
                    $product->setProductMotorImg2($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }

            if ($motor3) {
                $originalFileName = pathinfo($motor3->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $motor3->guessExtension();
                try {
                    $motor3->move(
                        $this->getParameter('motors_directory'),
                        $newFilename
                    );
                    $product->setProductMotor3($form->get('product_motor_3')->getData());
                    $product->setProductMotorImg3($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }

            // Création des galeries
            foreach ($flyImages as $image) {
                $originalFileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $image->guessExtension();
                try {
                    $image->move(
                        $this->getParameter('motors_directory'),
                        $newFilename
                    );
                    $productImage = new ProductsImages();
                    $productImage->setImageName($newFilename);
                    $productImage->setImageProduct($product);
                    $productImage->setImageType(0);
                    $entityManager = $doctrine->getManager();
                    $entityManager->persist($productImage);
                    $entityManager->flush();
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }

            foreach ($lifestyleImages as $image) {
                $originalFileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $image->guessExtension();
                try {
                    $image->move(
                        $this->getParameter('motors_directory'),
                        $newFilename
                    );
                    $productImage = new ProductsImages();
                    $productImage->setImageName($newFilename);
                    $productImage->setImageProduct($product);
                    $productImage->setImageType(1);
                    $entityManager = $doctrine->getManager();
                    $entityManager->persist($productImage);
                    $entityManager->flush();
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }
            
            foreach ($workshopImages as $image) {
                $originalFileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $image->guessExtension();
                try {
                    $image->move(
                        $this->getParameter('motors_directory'),
                        $newFilename
                    );
                    $productImage = new ProductsImages();
                    $productImage->setImageName($newFilename);
                    $productImage->setImageProduct($product);
                    $productImage->setImageType(2);
                    $entityManager = $doctrine->getManager();
                    $entityManager->persist($productImage);
                    $entityManager->flush();
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }

            // Création des TWIG
            $file = fopen("../templates/webpages/products/" . $slugName . '-intro.html.twig', 'w');
            fwrite($file, $form->get('product_intro')->getData());
            fclose($file);

            $file = fopen("../templates/webpages/products/" . $slugName . '-desc.html.twig', 'w');
            fwrite($file, $form->get('product_desc')->getData());
            fclose($file);

            // Création de l'image Dimensions
            if ($dimImage) {
                $originalFileName = pathinfo($dimImage->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $dimImage->guessExtension();
                dump($newFilename);
                try {
                    $dimImage->move(
                        $this->getParameter('dims_directory'),
                        $newFilename
                    );
                    $product->setProductDimImage($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        $th
                    );
                }
            }

            // Envoi vers la Database
            $entityManager = $doctrine->getManager();
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
        
        if(!$product) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);
        
        $productId = $product->getProductId();
        $productThumb = $product->getProductThumb();
        $productThumbHover = $product->getProductThumbHover();
        $productMotorImg1 = $product->getProductMotorImg1();
        $productMotorImg2 = $product->getProductMotorImg2();
        $productMotorImg3 = $product->getProductMotorImg3();

        $productIntroFile = file_get_contents("../templates/webpages/products/" . $productId . "-intro.html.twig");
        $productDescFile = file_get_contents("../templates/webpages/products/" . $productId . "-desc.html.twig");
        
        if ($form->isSubmitted() && $form->isValid()) {
            // Variables
            $slugName = $product->getProductId();
            $name = $form->get('product_name')->getData();
            $metaTitle = $form->get('product_meta_title')->getData();
            $logo = $form->get('product_logo')->getData();
            $thumb = $form->get('product_thumb')->getData();
            $thumbHover = $form->get('product_thumb_hover')->getData();
            $motor1 = $form->get('product_motor_img_1')->getData();
            $motor2 = $form->get('product_motor_img_2')->getData();
            $motor3 = $form->get('product_motor_img_3')->getData();
            $flyImages = $form->get('fly_gallery')->getData();
            $lifestyleImages = $form->get('lifestyle_gallery')->getData();
            $workshopImages = $form->get('workshop_gallery')->getData();
            $dimImage = $form->get('product_dim')->getData();

            // Récupération des données du formulaire
            $product = $form->getData();

            // Création du Meta Title
            if (!$metaTitle) {
                $product->setProductMetaTitle($name);
            } else {
                $product->setProductMetaTitle($metaTitle);
            }

            // Modification du Logo
            if ($logo) {
                $originalFileName = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $logo->guessExtension();
                try {
                    $logo->move(
                        $this->getParameter('logos_directory'),
                        $newFilename
                    );
                    $product->setProductLogo($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        $th
                    );
                }
            } else {
                $product->setProductLogo($product->getProductLogo());
            }

            // Modification du Thumb
            if ($thumb) {
                $originalFileName = pathinfo($thumb->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $thumb->guessExtension();
                try {
                    $thumb->move(
                        $this->getParameter('thumbs_directory'),
                        $newFilename
                    );
                    $product->setProductThumb($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        $th
                    );
                }
            } else {
                $product->setProductThumb($product->getProductThumb());
            }
            

            // Modification du Thumb Hover
            if ($thumbHover) {
                $originalFileName = pathinfo($thumbHover->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $thumbHover->guessExtension();
                try {
                    $thumbHover->move(
                        $this->getParameter('thumbs_directory'),
                        $newFilename
                    );
                    $product->setProductThumbHover($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        $th
                    );
                }
            } else {
                $product->setProductThumbHover($product->getProductThumbHover());
            }

            // Modification des images de motorisation
            if ($motor1) {
                $originalFileName = pathinfo($motor1->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $motor1->guessExtension();
                try {
                    $motor1->move(
                        $this->getParameter('motors_directory'),
                        $newFilename
                    );
                    $product->setProductMotor1($form->get('product_motor_1')->getData());
                    $product->setProductMotorImg1($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }

            if ($motor2) {
                $originalFileName = pathinfo($motor2->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $motor2->guessExtension();
                try {
                    $motor2->move(
                        $this->getParameter('motors_directory'),
                        $newFilename
                    );
                    $product->setProductMotor2($form->get('product_motor_2')->getData());
                    $product->setProductMotorImg2($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }

            if ($motor3) {
                $originalFileName = pathinfo($motor3->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $motor3->guessExtension();
                try {
                    $motor3->move(
                        $this->getParameter('motors_directory'),
                        $newFilename
                    );
                    $product->setProductMotor3($form->get('product_motor_3')->getData());
                    $product->setProductMotorImg3($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }

            // Modification des galeries
            foreach ($flyImages as $image) {
                $originalFileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $image->guessExtension();
                try {
                    $image->move(
                        $this->getParameter('fly_gallery_directory'),
                        $newFilename
                    );
                    $productImage = new ProductsImages();
                    $productImage->setImageName($newFilename);
                    $productImage->setImageProduct($product);
                    $productImage->setImageType(0);
                    $entityManager = $doctrine->getManager();
                    $entityManager->persist($productImage);
                    $entityManager->flush();
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }

            foreach ($lifestyleImages as $image) {
                $originalFileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $image->guessExtension();
                try {
                    $image->move(
                        $this->getParameter('lifestyle_gallery_directory'),
                        $newFilename
                    );
                    $productImage = new ProductsImages();
                    $productImage->setImageName($newFilename);
                    $productImage->setImageProduct($product);
                    $productImage->setImageType(1);
                    $entityManager = $doctrine->getManager();
                    $entityManager->persist($productImage);
                    $entityManager->flush();
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }
            
            foreach ($workshopImages as $image) {
                $originalFileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $image->guessExtension();
                try {
                    $image->move(
                        $this->getParameter('workshop_gallery_directory'),
                        $newFilename
                    );
                    $productImage = new ProductsImages();
                    $productImage->setImageName($newFilename);
                    $productImage->setImageProduct($product);
                    $productImage->setImageType(2);
                    $entityManager = $doctrine->getManager();
                    $entityManager->persist($productImage);
                    $entityManager->flush();
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        "L'image du moteur n'a pas été téléchargé"
                    );
                }
            }

            // Modification des TWIG
            $pageFileName = $slugName . '-intro.html.twig';
            unlink("../templates/webpages/products/" . $pageFileName);
            $file = fopen("../templates/webpages/products/" . $pageFileName, 'w');
            fwrite($file, $form->get('product_intro')->getData());
            fclose($file);

            $pageFileName = $slugName . '-desc.html.twig';
            unlink("../templates/webpages/products/" . $pageFileName);
            $file = fopen("../templates/webpages/products/" . $pageFileName, 'w');
            fwrite($file, $form->get('product_desc')->getData());
            fclose($file);
            
            // Modification de l'image Dimensions
            if ($dimImage) {
                $originalFileName = pathinfo($dimImage->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugify->slugify($originalFileName);
                $newFilename = $safeFilename . '.' . $dimImage->guessExtension();
                dump($newFilename);
                try {
                    $dimImage->move(
                        $this->getParameter('dims_directory'),
                        $newFilename
                    );
                    $product->setProductDimImage($newFilename);
                } catch (\Throwable $th) {
                    throw $this->createNotFoundException(
                        $th
                    );
                }
            } else {
                if ($product->getProductDimImage() != null) {
                    $product->setProductDimImage($product->getProductDimImage());
                }
            }
            
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
            'productMotorImg1' => $productMotorImg1,
            'productMotorImg2' => $productMotorImg2,
            'productMotorImg3' => $productMotorImg3,
        ]);
    }



    // SUPPRIMER UN PRODUIT
    //-----------------------------------------------------
    #[Route('/admin/products/delete_product/{product_id}', name: 'app_admin_product_delete')]
    public function DeleteProduct(ManagerRegistry $doctrine, String $product_id){
        $entityManager = $doctrine->getManager();
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $product_id]);
        $images = $entityManager->getRepository(ProductsImages::class)->findBy(['image_product' => $product_id]);

        unlink($this->getParameter('kernel.project_dir') . '/templates/webpages/products/' . $product->getProductId() . '-desc.html.twig');
        unlink($this->getParameter('kernel.project_dir') . '/templates/webpages/products/' . $product->getProductId() . '-intro.html.twig');

        foreach ($images as $image) {
            $entityManager->remove($image);
        }

        $entityManager->remove($product);
        $entityManager->flush();

        return $this->redirectToRoute('app_admin_products');
    }



    // SUPPRIMER UNE IMAGE
    //-----------------------------------------------------
    public function DeleteImage(ManagerRegistry $doctrine, Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $id = $request->get('imgId');
            $entityManager = $doctrine->getManager();
            $imgToDel = $entityManager->getRepository(ProductsImages::class)->findOneBy(['id' => $id]);

            $entityManager->remove($imgToDel);
            $entityManager->flush();

            return new JsonResponse('good');
        }
    }
}