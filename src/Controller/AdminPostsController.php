<?php

namespace App\Controller;

use App\Entity\PostsList;
use App\Form\PagesAdminFormType;
use App\Form\PostsFormType;
use Cocur\Slugify\Slugify;
use DateTimeImmutable;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class AdminPostsController extends AbstractController
{
    #[Route('/admin/posts', name: 'app_admin_posts')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $postsRepo = $entityManager->getRepository(PostsList::class);
        $posts = $postsRepo->findAll();

        return $this->render('posts/index.html.twig', [
            'controller_name' => 'AdminPostsController',
            "posts" => $posts
        ]);
    }

    /* AJOUTER UN POST
    ------------------------------------------------------- */
    #[Route('/admin/posts/ajouter', name: 'admin_posts_add')]
    public function add_post(ManagerRegistry $doctrine, Request $request) {
        $form = $this->createForm(PostsFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données du formulaire
            $slugify = new Slugify();
            $data = $form->getData();
            $postName = $data['post_name'];
            $postUrl = $data['post_url'];
            $postId = $slugify->slugify($data['post_name']);
            $postFilename = $postId . '.html.twig';
            $photoFilename = $data['photo_filename'];
            $postContent = $data['post_content'];
            $postMetaTitle = $data['post_meta_title'];
            $postMetaDesc = $data['post_meta_desc'];

            // Ajout de l'image
            $uploadedImage = $photoFilename;
            $directory = $this->getParameter('kernel.project_dir').'/public/uploads/images/posts';
            $originalFilename = pathinfo($uploadedImage->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $slugify->slugify($originalFilename).'-'.uniqid().'.'.$uploadedImage->guessExtension();
            $uploadedImage->move(
                $directory,
                $newFilename
            );
            
            // Envoi des données vers la BDD
            $post = new PostsList();
            $post->setPostName($postName);
            if ($postUrl == null) {
                $post->setPostUrl($postId);
            } else {
                $post->setPostUrl($postUrl);
            }
            $post->setPostId($postId);
            $post->setPhotoFilename($newFilename);
            if ($postMetaTitle == null) {
                $post->setPostMetaTitle($postName);
            } else {
                $post->setPostMetaTitle($postMetaTitle);
            }
            $post->setPostMetaDesc($postMetaDesc);
            $post->setCreatedAt(DateTimeImmutable::createFromFormat('dd/mm/yyyy', date('dd/mm/yyyy')));
            
            $entityManager = $doctrine->getManager();
            $entityManager->persist($post);
            $entityManager->flush();
            
            // Création du fichier
            $file = fopen("../templates/webpages/posts/" . $postFilename, 'w');
            fwrite($file, $postContent);
            fclose($file);

            // Redirection vers le post crée
            return $this->redirectToRoute('admin_posts_modify', ['post_id' => $postId]);
        }

        return $this->render('posts/add-post.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'AdminPostsController',
        ]);
    }

    /* MODIFIER UN POST
    ------------------------------------------------------- */
    #[Route('/admin/posts/modifier/{post_id}', name: 'admin_posts_modify')]
    public function modify_post(ManagerRegistry $doctrine, Request $request, String $post_id) {
        $form = $this->createForm(PostsFormType::class);
        $form->handleRequest($request);

        // Récupération du post souhaité
        $entityManager = $doctrine->getManager();
        $post = $entityManager->getRepository(PostsList::class)->findOneBy(['post_id' => $post_id]);
        if(!$post) {
            throw $this->createNotFoundException(
                "Aucune page n'a été trouvée"
            );
        }

        // Récupération du contenu de la page
        $postContent = file_get_contents("../templates/webpages/posts/" . $post_id . ".html.twig");
        
        if ($form->isSubmitted() && $form->isValid()) { 
            // Récupération des données du formulaire
            $slugify = new Slugify();
            $data = $form->getData();
            $postName = $data['post_name'];
            $postUrl = $data['post_url'];
            $postId = $slugify->slugify($data['post_name']);
            $postFilename = $postId . '.html.twig';
            $photoFilename = $data['photo_filename'];
            $postContent = $data['post_content'];
            $postMetaTitle = $data['post_meta_title'];
            $postMetaDesc = $data['post_meta_desc'];

             // Modification des données de la page
             $entityManager = $doctrine->getManager();
             $post->setPostName($postName);
             if($postUrl != null){
                 $post->setPostUrl($postUrl);
             } else {
                 $post->setPostUrl($postId);
             }
             if ($postMetaTitle != null) {
                 $post->setPostMetaTitle($postMetaTitle);
             } else {
                 $post->setPostMetaTitle($postName);
             }
             $post->setPostMetaDesc($postMetaDesc);
             $entityManager->persist($post);
             $entityManager->flush();
            
             // Modification du contenu de la page
             unlink("../templates/webpages/posts/" . $post_id . ".html.twig");
             $file = fopen("../templates/webpages/posts/" . $postFilename, 'w');
             fwrite($file, $postContent);
             fclose($file);

             // Redirection vers la page crée
             return $this->redirectToRoute('admin_posts_modify', array('post_id' => $postId));
        }
        
        return $this->render('posts/modify-post.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'PagesController',
            'postName' => $post->getpostName(),
            'postUrl' => $post->getpostUrl(),
            'postId' => $post->getpostId(),
            'postContent' => $postContent,
            'postMetaTitle' => $post->getpostMetaTitle(),
            'postMetaDesc' => $post->getpostMetaDesc(),
            'controller_name' => 'AdminPostsController',
        ]);
    }

    /* SUPPRIMER UN POST
    ------------------------------------------------------- */
    #[Route('/admin/post/supprimer/{post_id}', name: 'admin_posts_delete')]
    public function delete_post(ManagerRegistry $doctrine, String $post_id)
    {
        // Suppression de la valeur dans la BDD
        $entityManager = $doctrine->getManager();
        $post = $entityManager->getRepository(PostsList::class)->findOneBy(['post_id' => $post_id]);

        if(!$post) {
            throw $this->createNotFoundException(
                "Aucune post n'a été trouvé"
            );
        }

        $entityManager->remove($post);
        $entityManager->flush();

        // Suppression du fichier
        unlink("../templates/webpages/posts/" . $post_id . ".html.twig");

        return $this->redirectToRoute('app_admin_posts');
    }
}
