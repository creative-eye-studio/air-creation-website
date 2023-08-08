<?php

namespace App\Services;

use App\Entity\PostsList;
use App\Form\PostsAdminFormType;
use Cocur\Slugify\Slugify;
use DateTimeImmutable;
use Doctrine\Persistence\ManagerRegistry;
use PhpParser\Node\Stmt\TryCatch;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;

class PostsService extends AbstractController{

    function PostManager(ManagerRegistry $doctrine, Request $request, Security $security, bool $newPost, string $postId = null)
    {
        $em = $doctrine->getManager();
        $postRepo = $em->getRepository(PostsList::class);
        $slugify = new Slugify();

        // CREATION / RECUPERATION D'UN POST
        // --------------------------------------------------------
        if ($newPost) {
            $post = new PostsList();
        } else {
            $post = $postRepo->find($postId);
            if (!$post) {
                throw $this->createNotFoundException("Aucune post n'a été trouvé");
            }
        }

        // INITIALISATION DU FORMULAIRE
        // --------------------------------------------------------
        $form = $this->createForm(PostsAdminFormType::class, $post);
        $form->handleRequest($request);

<<<<<<< HEAD
        // Soumission du formulaire
=======
        // ENVOI DU FORMULAIRE
        // --------------------------------------------------------
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données du formulaire
            $post = $form->getData();

            // Création / Modification du nom
            $name = [$form->get('post_name_fr')->getData()];
            $post->setPostName($name);

            // Création / Modification du contenu
            $content = [htmlspecialchars($form->get('post_content_fr')->getData())];
            $post->setPostContent($content);

            // Création / Modification du Meta Title
            $metaTitleFr = $form->get('post_meta_title_fr')->getData();
            $post->setPostMetaTitle([
                !($metaTitleFr) ? $name[0] : $metaTitleFr
            ]);

            // Création / Modification du Meta Desc
            $metaDescFr = $form->get('post_meta_desc_fr')->getData();
            $post->setPostMetaDesc([$metaDescFr]);

            // Création de l'URL
            if ($newPost) {
                $slugName = $slugify->slugify($name[0]);
                if ($slugName) {
                    $post->setPostUrl($slugName);
                }
            }

            // Gestion des dates
            $currentDate = new DateTimeImmutable();
            $post->setUpdatedAt($currentDate);
            if ($newPost) {
                $post->setCreatedAt($currentDate);
            }

            // Création de l'auteur
            if ($newPost) {
                $author = $security->getUser();
                $post->setAuthor($author);
            }

            // Création de l'image
            $imageFile = $form->get('post_thumb')->getData();
            if ($imageFile) {
                $imageName = $slugify->slugify($imageFile->getClientOriginalName());
                $ext = $imageFile->guessExtension();
                try {
                    $imageFile->move(
                        $this->getParameter('posts_img_directory'),
                        $imageName
                    );
                    $post->setPostThumb($imageName);
                } catch (\Throwable $th) {
                    throw $th;
                }
            }
<<<<<<< HEAD

            // Création de l'image
            $imgPost = $form->get('photo_filename')->getData();
            if ($imgPost) {
                $originalThumbName = pathinfo($imgPost->getClientOriginalName(), PATHINFO_FILENAME);
                $safeThumbName = $slugify->slugify($originalThumbName);
                $image = $safeThumbName . '.' . $imgPost->guessExtension();
                try {
                    $imgPost->move(
                        $this->getParameter('posts_directory'),
                        $image
                    );
                    $post->setPhotoFilename($image);
                } catch (\Throwable $th) {
                    throw $th;
                }
            } else {
                if (!$newPost) {
                    $imgPost = $post->getPhotoFilename();
                    $post->setPhotoFilename($imgPost);
                }
                
            }

            // Création de la date du post
            if ($newPost) {
                if ($form->get('created_at')->getData()) {
                    $date = $form->get('created_at')->getData();
                } else {
                    $date = new DateTimeImmutable();
                }
            } else {
                if (!$form->get('created_at')->getData()){
                    $date = $post->getCreatedAt();
                } else {
                    $date = $form->get('created_at')->getData();
                }
            }
            $date->format('d/m/Y');
            $post->setCreatedAt($date);
            

            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $entityManager->persist($post);
            $entityManager->flush();

            // Création du fichier TWIG
            if ($newPost) {
                $file = fopen("../templates/webpages/posts/fr/" . $slugName . '.html.twig', 'w');
                $file_en = fopen("../templates/webpages/posts/en/" . $slugName . '.html.twig', 'w');
            } else {
                unlink("../templates/webpages/posts/fr/" . $postFileName);
                unlink("../templates/webpages/posts/en/" . $postFileName);
                $file = fopen("../templates/webpages/posts/fr/" . $postFileName, 'w');
                $file_en = fopen("../templates/webpages/posts/en/" . $postFileName, 'w');
            }
            fwrite($file, $form->get('post_content')->getData());
            fclose($file);
            fwrite($file_en, $form->get('post_content_en')->getData());
            fclose($file_en);
=======
            
            // Envoi des données vers la BDD
            $em->persist($post);
            $em->flush();
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
        }

        return $form;
    }
}