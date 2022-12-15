<?php

namespace App\Controller;

use App\Entity\Products;
use App\Entity\ProductsImages;
use App\Entity\ProductsMotors;
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
            // Récupération des données du formulaire
            $product = $form->getData();

            // Création de l'URL et de l'ID Page
            // --------------------------------------------
            $productId = $slugify->slugify($form->get('product_name')->getData());
            $product->setProductId($productId);
            $product->setProductSlug($productId);

            // Création du Meta Title
            // --------------------------------------------
            if ($form->get('product_meta_title')->getData())
                $product->setProductMetaTitle($form->get('product_meta_title')->getData());
            else
                $product->setProductMetaTitle($form->get('product_name')->getData());

            // Création du logo principal
            // --------------------------------------------
            $mainLogo = $form->get('product_logo_main')->getData();
            $originalThumbName = pathinfo($mainLogo->getClientOriginalName(), PATHINFO_FILENAME);
            $safeThumbName = $slugify->slugify($originalThumbName);
            $logo = $safeThumbName . '.' . $mainLogo->guessExtension();
            try {
                $mainLogo->move(
                    $this->getParameter('logos_directory'),
                    $logo
                );
                $product->setProductLogoMain($logo);
            } catch (\Throwable $th) {
                throw $th;
            }

            // Création du logo secondaire
            // --------------------------------------------
            $secondLogo = $form->get('product_logo_second')->getData();
            $originalThumbName = pathinfo($secondLogo->getClientOriginalName(), PATHINFO_FILENAME);
            $safeThumbName = $slugify->slugify($originalThumbName);
            $logo = $safeThumbName . '.' . $secondLogo->guessExtension();
            try {
                $secondLogo->move(
                    $this->getParameter('logos_directory'),
                    $logo
                );
                $product->setProductLogoSecond($logo);
            } catch (\Throwable $th) {
                throw $th;
            }

            // Création du thumb principal
            // --------------------------------------------
            $mainThumb = $form->get('product_main_thumb')->getData();
            $originalThumbName = pathinfo($mainThumb->getClientOriginalName(), PATHINFO_FILENAME);
            $safeThumbName = $slugify->slugify($originalThumbName);
            $thumb = $safeThumbName . '.' . $mainThumb->guessExtension();
            try {
                $mainThumb->move(
                    $this->getParameter('thumbs_directory'),
                    $thumb
                );
                $product->setProductMainThumb($thumb);
            } catch (\Throwable $th) {
                throw $th;
            }

            // Création du thumb secondaire
            // --------------------------------------------
            $secondThumb = $form->get('product_second_thumb')->getData();
            $originalThumbName = pathinfo($secondThumb->getClientOriginalName(), PATHINFO_FILENAME);
            $safeThumbName = $slugify->slugify($originalThumbName);
            $thumb = $safeThumbName . '.' . $secondThumb->guessExtension();
            try {
                $secondThumb->move(
                    $this->getParameter('thumbs_directory'),
                    $thumb
                );
                $product->setProductSecondThumb($thumb);
            } catch (\Throwable $th) {
                throw $th;
            }

            // Création de la description
            // --------------------------------------------
            $descContent = $form->get('product_desc')->getData();
            $file = fopen("../templates/webpages/products/descriptions/" . $productId . '.html.twig', 'w');
            fwrite($file, $descContent);
            fclose($file);

            // Création du moteur 1
            // --------------------------------------------
            $MotorInfo1 = $form->get('product_motor_name_1')->getData();
            $MotorInfo2 = $form->get('product_motor_image_1')->getData();
            $MotorInfo3 = $form->get('product_motor_1_block_1_icon')->getData();
            $MotorInfo4 = $form->get('product_motor_1_block_1_title')->getData();
            $MotorInfo5 = $form->get('product_motor_1_block_1_value')->getData();
            $MotorInfo6 = $form->get('product_motor_1_block_2_icon')->getData();
            $MotorInfo7 = $form->get('product_motor_1_block_2_title')->getData();
            $MotorInfo8 = $form->get('product_motor_1_block_2_value')->getData();
            $MotorInfo9 = $form->get('product_motor_1_block_3_icon')->getData();
            $MotorInfo10 = $form->get('product_motor_1_block_3_title')->getData();
            $MotorInfo11 = $form->get('product_motor_1_block_3_value')->getData();
            $MotorInfo12 = $form->get('product_motor_1_block_4_icon')->getData();
            $MotorInfo13 = $form->get('product_motor_1_block_4_title')->getData();
            $MotorInfo14 = $form->get('product_motor_1_block_4_value')->getData();
            $MotorInfo15 = $form->get('product_motor_vitesse_1')->getData();
            $MotorInfo16 = $form->get('product_motor_vol_1')->getData();
            $MotorInfo17 = $form->get('product_motor_hauteur_1')->getData();
            $MotorInfo18 = $form->get('product_motor_masse_1')->getData();
            $MotorInfo19 = $form->get('product_motor_moteur_1')->getData();
            $MotorInfo20 = $form->get('product_motor_reservoir_1')->getData();

            if ($MotorInfo2) {
                $originalThumbName = pathinfo($MotorInfo2->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageMotor = $safeThumbName . '.' . $MotorInfo2->guessExtension();
                try {
                    $MotorInfo2->move(
                        $this->getParameter('motors_directory'),
                        $imageMotor
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                $imageMotor = null;
            }

            if ($MotorInfo3) {
                $originalThumbName = pathinfo($MotorInfo3->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon1 = $safeThumbName . '.' . $MotorInfo3->guessExtension();
                try {
                    $MotorInfo3->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon1
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                $imageIcon1 = null;
            }
            
            if ($MotorInfo6) {
                $originalThumbName = pathinfo($MotorInfo6->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon2 = $safeThumbName . '.' . $MotorInfo6->guessExtension();
                try {
                    $MotorInfo6->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon2
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                $imageIcon2 = null;
            }

            if ($MotorInfo9) {
                $originalThumbName = pathinfo($MotorInfo9->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon3 = $safeThumbName . '.' . $MotorInfo9->guessExtension();
                try {
                    $MotorInfo9->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon3
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                $imageIcon3 = null;
            }
            
            if ($MotorInfo12) {
                $originalThumbName = pathinfo($MotorInfo12->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon4 = $safeThumbName . '.' . $MotorInfo12->guessExtension();
                try {
                    $MotorInfo12->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon4
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                $imageIcon4 = null;
            }

            $motor = new ProductsMotors();
            $motor->setProductId($product);
            $motor->setMotorName($MotorInfo1);
            $motor->setMotorMainImage($imageMotor);
            
            $motor->setMotorBlock1Image($imageIcon1);
            $motor->setMotorBlock1Name($MotorInfo4);
            $motor->setMotorBlock1Value($MotorInfo5);

            $motor->setMotorBlock2Image($imageIcon2);
            $motor->setMotorBlock2Title($MotorInfo7);
            $motor->setMotorBlock2Value($MotorInfo8);

            $motor->setMotorBlock3Image($imageIcon3);
            $motor->setMotorBlock3Title($MotorInfo10);
            $motor->setMotorBlock3Value($MotorInfo11);

            $motor->setMotorBlock4Image($imageIcon4);
            $motor->setMotorBlock4Title($MotorInfo13);
            $motor->setMotorBlock4Value($MotorInfo14);

            $motor->setMotorInfosVitesse($MotorInfo15);
            $motor->setMotorInfosVol($MotorInfo16);
            $motor->setMotorInfosHauteur($MotorInfo17);
            $motor->setMotorInfosMasse($MotorInfo18);
            $motor->setMotorInfosMoteur($MotorInfo19);
            $motor->setMotorInfosReservoir($MotorInfo20);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($motor);
            $entityManager->flush();

            // Création du moteur 2
            // --------------------------------------------
            $MotorInfo1 = $form->get('product_motor_name_2')->getData();
            $MotorInfo2 = $form->get('product_motor_image_2')->getData();
            $MotorInfo3 = $form->get('product_motor_2_block_1_icon')->getData();
            $MotorInfo4 = $form->get('product_motor_2_block_1_title')->getData();
            $MotorInfo5 = $form->get('product_motor_2_block_1_value')->getData();
            $MotorInfo6 = $form->get('product_motor_2_block_2_icon')->getData();
            $MotorInfo7 = $form->get('product_motor_2_block_2_title')->getData();
            $MotorInfo8 = $form->get('product_motor_2_block_2_value')->getData();
            $MotorInfo9 = $form->get('product_motor_2_block_3_icon')->getData();
            $MotorInfo10 = $form->get('product_motor_2_block_3_title')->getData();
            $MotorInfo11 = $form->get('product_motor_2_block_3_value')->getData();
            $MotorInfo12 = $form->get('product_motor_2_block_4_icon')->getData();
            $MotorInfo13 = $form->get('product_motor_2_block_4_title')->getData();
            $MotorInfo14 = $form->get('product_motor_2_block_4_value')->getData();
            $MotorInfo15 = $form->get('product_motor_vitesse_2')->getData();
            $MotorInfo16 = $form->get('product_motor_vol_2')->getData();
            $MotorInfo17 = $form->get('product_motor_hauteur_2')->getData();
            $MotorInfo18 = $form->get('product_motor_masse_2')->getData();
            $MotorInfo19 = $form->get('product_motor_moteur_2')->getData();
            $MotorInfo20 = $form->get('product_motor_reservoir_2')->getData();

            if ($MotorInfo2) {
                $originalThumbName = pathinfo($MotorInfo2->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageMotor = $safeThumbName . '.' . $MotorInfo2->guessExtension();
                try {
                    $MotorInfo2->move(
                        $this->getParameter('motors_directory'),
                        $imageMotor
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                $imageMotor = null;
            }

            if ($MotorInfo3) {
                $originalThumbName = pathinfo($MotorInfo3->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon1 = $safeThumbName . '.' . $MotorInfo3->guessExtension();
                try {
                    $MotorInfo3->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon1
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                $imageIcon1 = null;
            }
            
            if ($MotorInfo6) {
                $originalThumbName = pathinfo($MotorInfo6->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon2 = $safeThumbName . '.' . $MotorInfo6->guessExtension();
                try {
                    $MotorInfo6->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon2
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                $imageIcon2 = null;
            }

            if ($MotorInfo9) {
                $originalThumbName = pathinfo($MotorInfo9->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon3 = $safeThumbName . '.' . $MotorInfo9->guessExtension();
                try {
                    $MotorInfo9->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon3
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                $imageIcon3 = null;
            }
            
            if ($MotorInfo12) {
                $originalThumbName = pathinfo($MotorInfo12->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon4 = $safeThumbName . '.' . $MotorInfo12->guessExtension();
                try {
                    $MotorInfo12->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon4
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                $imageIcon4 = null;
            }
            

            $motor = new ProductsMotors();
            $motor->setProductId($product);
            $motor->setMotorName($MotorInfo1);
            $motor->setMotorMainImage($imageMotor);
            
            $motor->setMotorBlock1Image($imageIcon1);
            $motor->setMotorBlock1Name($MotorInfo4);
            $motor->setMotorBlock1Value($MotorInfo5);

            $motor->setMotorBlock2Image($imageIcon2);
            $motor->setMotorBlock2Title($MotorInfo7);
            $motor->setMotorBlock2Value($MotorInfo8);

            $motor->setMotorBlock3Image($imageIcon3);
            $motor->setMotorBlock3Title($MotorInfo10);
            $motor->setMotorBlock3Value($MotorInfo11);

            $motor->setMotorBlock4Image($imageIcon4);
            $motor->setMotorBlock4Title($MotorInfo13);
            $motor->setMotorBlock4Value($MotorInfo14);

            $motor->setMotorInfosVitesse($MotorInfo15);
            $motor->setMotorInfosVol($MotorInfo16);
            $motor->setMotorInfosHauteur($MotorInfo17);
            $motor->setMotorInfosMasse($MotorInfo18);
            $motor->setMotorInfosMoteur($MotorInfo19);
            $motor->setMotorInfosReservoir($MotorInfo20);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($motor);
            $entityManager->flush();

            // Création du moteur 3
            // --------------------------------------------
            $MotorInfo1 = $form->get('product_motor_name_3')->getData();
            $MotorInfo2 = $form->get('product_motor_image_3')->getData();
            $MotorInfo3 = $form->get('product_motor_3_block_1_icon')->getData();
            $MotorInfo4 = $form->get('product_motor_3_block_1_title')->getData();
            $MotorInfo5 = $form->get('product_motor_3_block_1_value')->getData();
            $MotorInfo6 = $form->get('product_motor_3_block_2_icon')->getData();
            $MotorInfo7 = $form->get('product_motor_3_block_2_title')->getData();
            $MotorInfo8 = $form->get('product_motor_3_block_2_value')->getData();
            $MotorInfo9 = $form->get('product_motor_3_block_3_icon')->getData();
            $MotorInfo10 = $form->get('product_motor_3_block_3_title')->getData();
            $MotorInfo11 = $form->get('product_motor_3_block_3_value')->getData();
            $MotorInfo12 = $form->get('product_motor_3_block_4_icon')->getData();
            $MotorInfo13 = $form->get('product_motor_3_block_4_title')->getData();
            $MotorInfo14 = $form->get('product_motor_3_block_4_value')->getData();
            $MotorInfo15 = $form->get('product_motor_vitesse_3')->getData();
            $MotorInfo16 = $form->get('product_motor_vol_3')->getData();
            $MotorInfo17 = $form->get('product_motor_hauteur_3')->getData();
            $MotorInfo18 = $form->get('product_motor_masse_3')->getData();
            $MotorInfo19 = $form->get('product_motor_moteur_3')->getData();
            $MotorInfo20 = $form->get('product_motor_reservoir_3')->getData();

            if ($MotorInfo2) {
                $originalThumbName = pathinfo($MotorInfo2->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageMotor = $safeThumbName . '.' . $MotorInfo2->guessExtension();
                try {
                    $MotorInfo2->move(
                        $this->getParameter('motors_directory'),
                        $imageMotor
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            }

            if ($MotorInfo3) {
                $originalThumbName = pathinfo($MotorInfo3->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon1 = $safeThumbName . '.' . $MotorInfo3->guessExtension();
                try {
                    $MotorInfo3->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon1
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            }
            
            if ($MotorInfo6) {
                $originalThumbName = pathinfo($MotorInfo6->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon2 = $safeThumbName . '.' . $MotorInfo6->guessExtension();
                try {
                    $MotorInfo6->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon2
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            }

            if ($MotorInfo9) {
                $originalThumbName = pathinfo($MotorInfo9->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon3 = $safeThumbName . '.' . $MotorInfo9->guessExtension();
                try {
                    $MotorInfo9->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon3
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            }
            
            if ($MotorInfo12) {
                $originalThumbName = pathinfo($MotorInfo12->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $imageIcon4 = $safeThumbName . '.' . $MotorInfo12->guessExtension();
                try {
                    $MotorInfo12->move(
                        $this->getParameter('motors_directory'),
                        $imageIcon4
                    );
                } catch (\Throwable $th) {
                    throw $th;
                }
            }

            $motor = new ProductsMotors();
            $motor->setProductId($product);
            $motor->setMotorName($MotorInfo1);
            $motor->setMotorMainImage($imageMotor);
            
            $motor->setMotorBlock1Image($imageIcon1);
            $motor->setMotorBlock1Name($MotorInfo4);
            $motor->setMotorBlock1Value($MotorInfo5);

            $motor->setMotorBlock2Image($imageIcon2);
            $motor->setMotorBlock2Title($MotorInfo7);
            $motor->setMotorBlock2Value($MotorInfo8);

            $motor->setMotorBlock3Image($imageIcon3);
            $motor->setMotorBlock3Title($MotorInfo10);
            $motor->setMotorBlock3Value($MotorInfo11);

            $motor->setMotorBlock4Image($imageIcon4);
            $motor->setMotorBlock4Title($MotorInfo13);
            $motor->setMotorBlock4Value($MotorInfo14);

            $motor->setMotorInfosVitesse($MotorInfo15);
            $motor->setMotorInfosVol($MotorInfo16);
            $motor->setMotorInfosHauteur($MotorInfo17);
            $motor->setMotorInfosMasse($MotorInfo18);
            $motor->setMotorInfosMoteur($MotorInfo19);
            $motor->setMotorInfosReservoir($MotorInfo20);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($motor);
            $entityManager->flush();


            // Création des galeries
            // --------------------------------------------
            $productGalleryVol = $form->get('product_gallery_vol')->getData();
            if ($productGalleryVol) {
                foreach ($productGalleryVol as $imageGallery) {
                    $originalThumbName = pathinfo($imageGallery->getClientOriginalName(), PATHINFO_FILENAME);
                    $safeThumbName = $slugify->slugify($originalThumbName);
                    $image = $safeThumbName . '.' . $imageGallery->guessExtension();
                    try {
                        $imageGallery->move(
                            $this->getParameter('fly_gallery_directory'),
                            $image
                        );
                        $img = new ProductsImages();
                        $img->setImageName($image);
                        $img->setImageProduct($product);
                        $img->setImageType(0);
                    } catch (\Throwable $th) {
                        throw $th;
                    }
                }
            }

            $productGalleryAtelier = $form->get('product_gallery_atelier')->getData();
            if ($productGalleryAtelier) {
                foreach ($productGalleryAtelier as $imageGallery) {
                    $originalThumbName = pathinfo($imageGallery->getClientOriginalName(), PATHINFO_FILENAME);
                    $safeThumbName = $slugify->slugify($originalThumbName);
                    $image = $safeThumbName . '.' . $imageGallery->guessExtension();
                    try {
                        $imageGallery->move(
                            $this->getParameter('workshop_gallery_directory'),
                            $image
                        );
                        $img = new ProductsImages();
                        $img->setImageName($image);
                        $img->setImageProduct($product);
                        $img->setImageType(1);
                    } catch (\Throwable $th) {
                        throw $th;
                    }
                }
            }

            $productGalleryLifestyle = $form->get('product_gallery_lifestyle')->getData();
            if ($productGalleryLifestyle) {
                foreach ($productGalleryLifestyle as $imageGallery) {
                    $originalThumbName = pathinfo($imageGallery->getClientOriginalName(), PATHINFO_FILENAME);
                    $safeThumbName = $slugify->slugify($originalThumbName);
                    $image = $safeThumbName . '.' . $imageGallery->guessExtension();
                    try {
                        $imageGallery->move(
                            $this->getParameter('lifestyle_gallery_directory'),
                            $image
                        );
                        $img = new ProductsImages();
                        $img->setImageName($image);
                        $img->setImageProduct($product);
                        $img->setImageType(2);
                    } catch (\Throwable $th) {
                        throw $th;
                    }
                }
            }

            // Création de l'image Dimensions
            // --------------------------------------------
            $productDim = $form->get('product_dim')->getData();
            if ($productDim) {
                $originalThumbName = pathinfo($productDim->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $image = $safeThumbName . '.' . $productDim->guessExtension();
                try {
                    $productDim->move(
                        $this->getParameter('dims_directory'),
                        $image
                    );
                    $product->setProductDim($image);
                } catch (\Throwable $th) {
                    throw $th;
                }
            }

            // Envoi vers la Database
            // --------------------------------------------
            $entityManager = $doctrine->getManager();
            $entityManager->persist($product);
            $entityManager->flush();

            // Redirection vers le produit crée
            // --------------------------------------------
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
        $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $product_id]);
        
        if(!$product) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            
        }

        return $this->render('admin_products/update-product.html.twig', [
            'form' => $form->createView(),
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