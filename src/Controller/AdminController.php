<?php

namespace App\Controller;

use App\Entity\PagesList;
use App\Entity\PostsList;
use App\Entity\Products;
use App\Services\PagesService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'app_admin')]
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
        ]);
    }
}
