<?php

namespace App\Controller;

use App\Entity\PagesList;
use App\Entity\PostsList;
<<<<<<< HEAD
use App\Entity\Products;
use App\Services\PagesService;
use Doctrine\Persistence\ManagerRegistry;
=======
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'app_admin')]
<<<<<<< HEAD
    public function index(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $pagesRepo = $entityManager->getRepository(PagesList::class);
        $lastPages = $pagesRepo->findBy([], ['id' => 'DESC'], 4, 0);
        $postsRepo = $entityManager->getRepository(PostsList::class);
        $lastPosts = $postsRepo->findBy([], ['id' => 'DESC'], 4, 0);
        $productRepo = $entityManager->getRepository(Products::class);
        $lastProducts = $productRepo->findBy([], ['id' => 'DESC'], 4, 0);

        return $this->render('admin/index.html.twig', [
            'pages' => $lastPages,
            'posts' => $lastPosts,
            'products' => $lastProducts
=======
    public function index(EntityManagerInterface $em): Response
    {
        $pagesList = $em->getRepository(PagesList::class)->findBy([], ['id' => 'DESC'], 5);
        $postsList = $em->getRepository(PostsList::class)->findBy([], ['id' => 'DESC'], 5);
        $usersList = $em->getRepository(User::class)->findBy([], ['id' => 'DESC'], 5);

        return $this->render('admin/index.html.twig', [
            'phpversion' => phpversion(),
            'symfonyversion' => Kernel::VERSION,
            'pagesList' => $pagesList,
            'postsList' => $postsList,
            'usersList' => $usersList,
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
        ]);
    }
}
