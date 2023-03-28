<?php

namespace App\Controller;

use App\Entity\OptionModels;
use App\Entity\Options;
use App\Entity\OptionImages;
use App\Form\OptionImagesType;
use App\Form\OptionModelType;
use App\Form\OptionsFormType;
use Cocur\Slugify\Slugify;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminOptionsController extends AbstractController
{
    // GESTION DES OPTIONS
    // -----------------------------------------------------------------------------------------------
    #[Route('/admin/options', name: 'admin_options')]
    public function index(ManagerRegistry $doctrine): Response {
        $entityManager = $doctrine->getManager();
        $options = $entityManager->getRepository(Options::class)->findAll();

        return $this->render('admin_options/index.html.twig', [
            'options' => $options
        ]);
    }

    #[Route('/admin/options/ajouter', name: 'admin_options_add')]
    public function add_option(Request $request, ManagerRegistry $doctrine) {
        $option = new Options();
        $form = $this->createForm(OptionsFormType::class, $option);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données
            $option = $form->getData();
            
            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $entityManager->persist($option);
            $entityManager->flush();

            // Redirection vers la liste des options
            return $this->redirectToRoute('admin_options');
        }

        return $this->render('admin_options/add-option.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/admin/options/modifier/{option_id}', name: 'admin_options_modify')]
    public function modify_option(Request $request, ManagerRegistry $doctrine, String $option_id) {
        // Récupération de l'option souhaitée
        $entityManager = $doctrine->getManager();
        $option = $entityManager->getRepository(Options::class)->findOneBy(['id' => $option_id]);
        $form = $this->createForm(OptionsFormType::class, $option);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données
            $option = $form->getData();
            
            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $entityManager->persist($option);
            $entityManager->flush();

            // Redirection vers la liste des options
            return $this->redirectToRoute('admin_options');
        }

        return $this->render('admin_options/modify-option.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/admin/options/supprimer/{option_id}', name: 'admin_options_delete')]
    public function delete_option(ManagerRegistry $doctrine, String $option_id) {
        // Récupération de l'option souhaitée
        $entityManager = $doctrine->getManager();
        $option = $entityManager->getRepository(Options::class)->findOneBy(['id' => $option_id]);

        if (!$option)
            throw $this->createNotFoundException(
                "Aucune option n'a été trouvée"
            );

        $entityManager->remove($option);
        $entityManager->flush();

        return $this->redirectToRoute('admin_options');
    }

    // GESTION DES MODELES
    // -----------------------------------------------------------------------------------------------
    #[Route('/admin/options/modeles', name: 'admin_options_models')]
    public function model_list(Request $request, ManagerRegistry $doctrine) {
        $entityManager = $doctrine->getManager();
        $models = $entityManager->getRepository(OptionModels::class)->findAll();

        $model = new OptionModels();
        $form = $this->createForm(OptionModelType::class, $model);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données
            $slugify = new Slugify();
            $model = $form->getData();

            // Création de l'URL
            $model->setModelUrl($slugify->slugify($form->get('model_name')->getData()));

            // Création du Meta Title
            if (!$form->get('model_meta_title')->getData()) {
                $model->setModelMetaTitle($form->get('model_name')->getData());
            }
            
            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $entityManager->persist($model);
            $entityManager->flush();

            // Redirection vers la liste des options
            return $this->redirectToRoute('admin_options_models');
        }

        return $this->render('admin_options/models.html.twig', [
            'form' => $form->createView(),
            'models' => $models
        ]);
    }

    #[Route('/admin/options/modeles/supprimer/{model_id}', name: 'admin_options_models_delete')]
    public function delete_model(ManagerRegistry $doctrine, String $model_id) {
        // Récupération de l'option souhaitée
        $entityManager = $doctrine->getManager();
        $model = $entityManager->getRepository(OptionModels::class)->findOneBy(['id' => $model_id]);

        if (!$model)
            throw $this->createNotFoundException(
                "Aucune option n'a été trouvée"
            );

        $entityManager->remove($model);
        $entityManager->flush();

        return $this->redirectToRoute('admin_options_models');

    }

    // GESTION DES IMAGES
    // -----------------------------------------------------------------------------------------------
    #[Route('/admin/options/images/{options}', name: 'admin_options_images')]
    public function image_list(Request $request, ManagerRegistry $doctrine, int $options) {
        $entityManager = $doctrine->getManager();
        $option = $entityManager->getRepository(Options::class)->findOneBy(["id" => $options]);
        $images = $entityManager->getRepository(OptionImages::class)->findBy(['option_name' => $options]);
        $form = $this->createForm(OptionImagesType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Ajout des images
            $images = $form->get('option_images_add')->getData();
            if ($images) {
                foreach($images as $image){
                    $slugify = new Slugify();
                    $originalThumbName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                    $safeThumbName = $slugify->slugify($originalThumbName);
                    $img = $safeThumbName . '.' . $image->guessExtension();
                    try {
                        $image->move(
                            $this->getParameter('options_directory'),
                            $img
                        );
                        $imgLine = new OptionImages();
                        $imgLine->setOptionName($option);
                        $imgLine->setOptionImage($img);
                        $entityManager->persist($imgLine);
                        $entityManager->flush();
                    } catch (\Throwable $th) {
                        throw $th;
                    }
                }
            }
            return $this->redirectToRoute('admin_options_images', ['options' => $options]);
        }

        return $this->render('admin_options/images-list.html.twig', [
            'form' => $form->createView(),
            'images' => $images,
            'option_name' => $option->getOptionNameFr(),
            'options_image' => $option->getId()
        ]);
    }

    #[Route('/admin/options/images/{options}/remove/{image}', name: 'admin_options_images_del')]
    public function delete_image(ManagerRegistry $doctrine, int $options, String $image) {
        $entityManager = $doctrine->getManager();
        $fileToDel = $entityManager->getRepository(OptionImages::class)->findOneBy(['option_image' => $image]);

        $entityManager->remove($fileToDel);
        $entityManager->flush();
        return $this->redirectToRoute('admin_options_images', ['options' => $options]);
    }
}
