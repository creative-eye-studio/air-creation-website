<?php

namespace App\Controller;

use App\Entity\PagesList;
use App\Entity\PostsList;
use App\Form\NewsletterFormType;
use App\Service\ProductsFunctions;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebPagesOthersController extends AbstractController
{
    // Pages de Base
    // --------------------------------------------------------------------
    #[Route('/fr/{page_slug}', name: 'web_pages')]
    public function index(Request $request, ManagerRegistry $doctrine, string $page_slug, ProductsFunctions $products_function): Response
    {
        $selected_page = $doctrine->getRepository(PagesList::class)->findOneBy(["page_url" => $page_slug]);
        $products = $products_function->getProducts($doctrine);
        $posts = $doctrine->getRepository(PostsList::class)->findAll();
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);

        if (!$selected_page) {
            throw $this->createNotFoundException(
                'La page demandée est introuvable. Contactez le webmaster du site pour remédier au problème.'
            );
        }

        if ($selected_page->getPageModel() == 0) {
            $headerType = 'header-base';
        } else {
            $headerType = 'header-second';
        }

        return $this->render('web_pages_others/index.html.twig', [
            'controller_name' => 'WebPagesOthersController',
            'page_id' => $selected_page->getPageId(),
            'products' => $products,
            'posts' => $posts,
            'newsForm' => $newsForm->createView(),
            'headerType' => $headerType
        ]);
    }

    // Page Produit
    // --------------------------------------------------------------------
    #[Route('/fr/produit/{product_slug}', name: 'product_pages')]
    public function product_page(Request $request, ManagerRegistry $doctrine, string $product_slug, ProductsFunctions $products_function): Response{
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);

        $headerType = 'header-second';

        // Récupération du produit
        $product = $products_function->getProduct($doctrine, $product_slug);

        if (!$product) {
            throw $this->createNotFoundException(
                'Le produit demandé est introuvable. Contactez le webmaster du site pour remédier au problème.'
            );
        }

        // Récupération des images
        $imagesDir = './uploads/images/produits/';
        $color_dir = glob($imagesDir . $product->getProductFolderId() . "/coloris/*.{jpg,jpeg,png,gif,JPG,JPEG,PNG,GIF}", GLOB_BRACE);
        $accessoiries_dir = glob($imagesDir . $product->getProductFolderId() . "/accessoires/*.{jpg,jpeg,png,gif,JPG,JPEG,PNG,GIF}", GLOB_BRACE);
        $gallery_dir = glob($imagesDir . $product->getProductFolderId() . "/images/*.{jpg,jpeg,png,gif,JPG,JPEG,PNG,GIF}", GLOB_BRACE);

        return $this->render('web_pages_others/product.html.twig', [
            'controller_name' => 'WebPagesOthersController',
            'productName' => $product->getProductName(),
            'productThumb' => $product->getProductThumb(),
            'productShopUrl' => $product->getProductShopUrl(),
            'productDocUrl' => $product->getProductDocUrl(),
            'productMetaTitle' => $product->getProductMetaTitle(),
            'productMetaDesc' => $product->getProductMetaDesc(),
            'productFolderId' => $product->getProductFolderId(),
            'color_dir' => $color_dir,
            'accessoiries_dir' => $accessoiries_dir,
            'gallery_dir' => $gallery_dir,
            'newsForm' => $newsForm->createView(),
            'headerType' => $headerType
        ]);
    }
}
