<?php

namespace App\Controller;

use App\Entity\PostsList;
use App\Services\PostsService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class AdminPostsController extends AbstractController
{

    /* LISTE DES POSTS
    ------------------------------------------------------- */
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
    public function add_post(PostsService $postService, ManagerRegistry $doctrine, Request $request) {

        $form = $postService->PostManager($doctrine, $request, true);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->redirectToRoute('app_admin_posts');
        }

        return $this->render('posts/add-post.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /* MODIFIER UN POST
    ------------------------------------------------------- */
    #[Route('/admin/posts/modifier/{post_id}', name: 'admin_posts_modify')]
    public function modify_post(ManagerRegistry $doctrine, Request $request, String $post_id, PostsService $postService) {

        // Récupération du contenu de la page
        $postContent = file_get_contents("../templates/webpages/posts/fr/" . $post_id . ".html.twig");
        $postContentEn = file_get_contents("../templates/webpages/posts/en/" . $post_id . ".html.twig");

        // Value de la date
        $entityManager = $doctrine->getManager();
        $post = $entityManager->getRepository(PostsList::class)->findOneBy(['post_id' => $post_id]);
        $date_post = $post->getCreatedAt();

        $form = $postService->PostManager($doctrine, $request, false, $post_id);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->redirectToRoute('admin_posts_modify', [
                'post_id' => $post_id
            ]);
        }

        return $this->render('posts/modify-post.html.twig', [
            'form' => $form->createView(),
            'content' => $postContent,
            'contentEn' => $postContentEn,
            'date_post' => $date_post
        ]);
    }

    /* SUPPRIMER UN POST
    ------------------------------------------------------- */
    #[Route('/admin/post/supprimer/{post_id}', name: 'admin_posts_delete')]
    public function delete_post(ManagerRegistry $doctrine, String $post_id)
    {
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
        unlink("../templates/webpages/posts/fr/" . $post_id . ".html.twig");
        unlink("../templates/webpages/posts/en/" . $post_id . ".html.twig");

        return $this->redirectToRoute('app_admin_posts');
    }
}
