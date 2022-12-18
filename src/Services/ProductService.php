<?php

namespace App\Services;

use App\Entity\Products;
use App\Entity\ProductsImages;
use App\Entity\ProductsMotors;
use App\Form\ProductType;
use Cocur\Slugify\Slugify;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class ProductService extends AbstractController{

    public function ProductManager(ManagerRegistry $doctrine, Request $request, bool $newProduct, int $productId = null){
        $slugify = new Slugify();

        // Initialisation du formulaire
        if ($newProduct) {
            $product = new Products();
        } else {
            $entityManager = $doctrine->getManager();
            $product = $entityManager->getRepository(Products::class)->findOneBy(['id' => $productId]);
            $motors = $entityManager->getRepository(ProductsMotors::class)->findBy(['product_id' => $product]);
            $motor1 = $motors[0]->getId();
            $motor2 = $motors[1]->getId();
            $motor3 = $motors[2]->getId();
            dump($product);
        }
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


            // Création de l'URL et de l'ID
            // --------------------------------------------
            if ($newProduct) {
                $product->setProductSlug($slugify->slugify($form->get('product_name')->getData()));
                $product->setProductId($slugify->slugify($form->get('product_name')->getData()));
            }

            
            // Création du Meta Title
            // --------------------------------------------
            if ($form->get('product_meta_title')->getData())
                $product->setProductMetaTitle($form->get('product_meta_title')->getData());
            else
                $product->setProductMetaTitle($form->get('product_name')->getData());


            // Création du logo principal
            // --------------------------------------------
            $mainLogo = $form->get('product_logo_main')->getData();
            if ($mainLogo) {
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
            } else {
                $product->setProductLogoMain($product->getProductLogoMain());
            }

            
            // Création du logo secondaire
            // --------------------------------------------
            $secondLogo = $form->get('product_logo_second')->getData();
            if ($secondLogo) {
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
            } else {
                $product->setProductLogoSecond($product->getProductLogoSecond());
            }


            // Création du thumb principal
            // --------------------------------------------
            $mainThumb = $form->get('product_main_thumb')->getData();
            if ($mainThumb) {
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
            }


            // Création du thumb secondaire
            // --------------------------------------------
            $secondThumb = $form->get('product_second_thumb')->getData();
            if ($secondThumb) {
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
            }


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
                if($newProduct)
                    $imageMotor = null;
                else
                    $imageMotor = $motors[0]->getMotorMainImage();
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
                if($newProduct)
                    $imageIcon1 = null;
                else
                    $imageIcon1 = $motors[0]->getMotorBlock1Image();
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
                if($newProduct)
                    $imageIcon2 = null;
                else
                    $imageIcon2 = $motors[0]->getMotorBlock2Image();
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
                if($newProduct)
                    $imageIcon3 = null;
                else
                    $imageIcon3 = $motors[0]->getMotorBlock3Image();
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
                if($newProduct)
                    $imageIcon4 = null;
                else
                    $imageIcon4 = $motors[0]->getMotorBlock4Image();
            }

            if ($newProduct) {
                $motor = new ProductsMotors();
                $motor->setProductId($product);
            } else {
                $motor = $entityManager->getRepository(ProductsMotors::class)->findOneBy(['id' => $motor1]);
            }
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
                if($newProduct)
                    $imageMotor = null;
                else
                    $imageMotor = $motors[1]->getMotorMainImage();
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
                if($newProduct)
                    $imageIcon1 = null;
                else
                    $imageIcon1 = $motors[1]->getMotorBlock1Image();
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
                if($newProduct)
                    $imageIcon2 = null;
                else
                    $imageIcon2 = $motors[1]->getMotorBlock2Image();
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
                if($newProduct)
                    $imageIcon3 = null;
                else
                    $imageIcon3 = $motors[1]->getMotorBlock3Image();
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
                if($newProduct)
                    $imageIcon4 = null;
                else
                    $imageIcon4 = $motors[1]->getMotorBlock4Image();
            }
            

            if ($newProduct) {
                $motor = new ProductsMotors();
                $motor->setProductId($product);
            } else {
                $motor = $entityManager->getRepository(ProductsMotors::class)->findOneBy(['id' => $motor2]);
            }
            
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

            if ($newProduct) {
                $motor = new ProductsMotors();
                $motor->setProductId($product);
            } else {
                $motor = $entityManager->getRepository(ProductsMotors::class)->findOneBy(['id' => $motor3]);
            }
            
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
                        $entityManager = $doctrine->getManager();
                        $entityManager->persist($img);
                        $entityManager->flush();
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
                        $entityManager = $doctrine->getManager();
                        $entityManager->persist($img);
                        $entityManager->flush();
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
                        $entityManager = $doctrine->getManager();
                        $entityManager->persist($img);
                        $entityManager->flush();
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
        }

        return $form;
    }

}