<?php

namespace App\Controller;

use App\Classes\DocSearch;
use App\Classes\ProductsSearch;
use App\Entity\Chronologie;
use App\Entity\DocProducts;
use App\Form\ContactFormType;
use App\Form\SAVManagerFormType;
use App\Entity\PagesList;
use App\Entity\Partners;
use App\Entity\PostsList;
use App\Entity\Products;
use App\Entity\ProductsImages;
use App\Form\DocFilterType;
use App\Form\NewsletterFormType;
use App\Form\OptionsFilterType;
use App\Form\ProductFilterType;
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
        $chronoOrigines = $doctrine->getRepository(Chronologie::class)->findBy(['chronologie_type' => 'origines']);
        $chronoPionniers = $doctrine->getRepository(Chronologie::class)->findBy(['chronologie_type' => 'pionniers']);
        $chronoActual = $doctrine->getRepository(Chronologie::class)->findBy(['chronologie_type' => 'air-creation']);
        $resellers = $doctrine->getRepository(Partners::class)->findBy(['partner_cat' => 0]);
        $trainers = $doctrine->getRepository(Partners::class)->findBy(['partner_cat' => 1]);
        $techs = $doctrine->getRepository(Partners::class)->findBy(['partner_cat' => 2]);
        $documents = $doctrine->getRepository(DocProducts::class)->findAll();
        
        $products = $products_function->getProducts($doctrine);
        
        $posts = $doctrine->getRepository(PostsList::class)->findAll();
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);
        $assistForm = $this->createForm(SAVManagerFormType::class);
        $assistForm->handleRequest($request);
        $optionsFilterForm = $this->createForm(OptionsFilterType::class);
        $optionsFilterForm->handleRequest($request);
        $lasts_events = $doctrine->getRepository(Chronologie::class)->findAll();

        $page = '';
        $langHtml = '';

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

        $contactForm = $this->createForm(ContactFormType::class);
        $contactForm->handleRequest($request);

        $productFilter = new ProductsSearch();
        $filterForm = $this->createForm(ProductFilterType::class, $productFilter);
        $filterForm->handleRequest($request);
        if ($filterForm->isSubmitted() && $filterForm->isValid()) {
            $products = $doctrine->getRepository(Products::class)->findWithSearch($productFilter);
        }

        $docFilter = new DocSearch();
        $docFilterForm = $this->createForm(DocFilterType::class, $docFilter);
        $docFilterForm->handleRequest($request);
        if ($docFilterForm->isSubmitted() && $docFilterForm->isValid()) {
            $documents = $doctrine->getRepository(DocProducts::class)->findDocWithSearch($docFilter);
        }

        return $this->render('web_pages_others/fr/index.html.twig', [
            'page_id' => $selected_page->getPageId(),
            'chronoOrigines' => $chronoOrigines,
            'chronoPionniers' => $chronoPionniers,
            'chronoActual' => $chronoActual,
            'products' => $products,
            'posts' => $posts,
            'events' => $lasts_events,
            'resellers' => $resellers,
            'trainers' => $trainers,
            'techs' => $techs,
            'headerType' => $headerType,
            'docCategories' => $documents,
            'contactForm' => $contactForm->createView(),
            'newsForm' => $newsForm->createView(),
            'assistForm' => $assistForm->createView(),
            'filterForm' => $filterForm->createView(),
            'docFilterForm' => $docFilterForm->createView(),
            'optionsFilterForm' => $optionsFilterForm->createView(),
            'meta_title' => $selected_page->getPageMetaTitle(),
            'meta_desc' => $selected_page->getPageMetaDesc(),
            'lang' => $langHtml,
        ]);
    }

    // Page Produit
    // --------------------------------------------------------------------
    #[Route('/fr/produit/{product_slug}', name: 'product_pages')]
    public function product_page(Request $request, ManagerRegistry $doctrine, string $product_slug, ProductsFunctions $products_function): Response{
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);

        $headerType = 'header-base';

        // Récupération du produit
        $product = $products_function->getProduct($doctrine, $product_slug);
        $entityManager = $doctrine->getManager();
        $image = $entityManager->getRepository(ProductsImages::class)->findBy(["image_product" => $product]);

        if (!$product) {
            throw $this->createNotFoundException(
                'Le produit demandé est introuvable. Contactez le webmaster du site pour remédier au problème.'
            );
        }

        $contactForm = $this->createForm(ContactFormType::class);
        $contactForm->handleRequest($request);

        // Récupération des images

        return $this->render('web_pages_others/product.html.twig', [
            'controller_name' => 'WebPagesOthersController',
            'product' => $product,
            'contactForm' => $contactForm->createView(),
            'productName' => $product->getProductName(),
            'productIntro' => $product->getProductIntro(),
            'productThumb' => $product->getProductMainThumb(),
            'meta_title' => $product->getProductMetaTitle(),
            'meta_desc' => $product->getProductMetaDesc(),
            'productFolderId' => $product->getProductId(),
            'images' => $image,
            'newsForm' => $newsForm->createView(),
            'headerType' => $headerType,
        ]);
    }

    // Article de blog
    // --------------------------------------------------------------------
    public function CallArticlePage(int $lang, ManagerRegistry $doctrine, string $post_slug, Request $request){
        $post = $doctrine->getRepository(PostsList::class)->findOneBy(["post_url" => $post_slug]);
        $contactForm = $this->createForm(ContactFormType::class);
        $contactForm->handleRequest($request);
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);
        $headerType = 'header-second';
        $page = '';
        $langHtml = '';

        switch($lang){
            case 0:
                $langHtml = "fr";
                $page = 'web_pages_others/fr/post.html.twig';
                if (!$page)
                    throw $this->createNotFoundException('L\'article du site est introuvable. Contactez le webmaster du site à contact@creative-eye.fr pour remédier au problème.');
                break;
            case 1:
                $langHtml = "en";
                $page = 'web_pages_others/en/post.html.twig';
                if (!$page)
                    throw $this->createNotFoundException('This article is unavailable. Please contact the webmaster at contact@creative-eye.fr to resolve the problem.');
                break;
            default:
                throw $this->createNotFoundException('This language is not available. Please contact the webmaster at contact@creative-eye.fr to resolve the problem.');
        }

        return $this->render($page, [
            'contactForm' => $contactForm->createView(),
            'newsForm' => $newsForm->createView(),
            'post_id' => $post->getPostId(),
            'post_image' => $post->getPhotoFilename(),
            'post_title' => $post->getPostName(),
            'post_date' => $post->getCreatedAt(),
            'meta_title' => $post->getPostMetaTitle(),
            'meta_desc' => $post->getPostMetaDesc(),
            'meta_title_en' => $post->getPostMetaTitleEn(),
            'meta_desc_en' => $post->getPostMetaDescEn(),
            'created_at' => $post->getCreatedAt(),
            'headerType' => $headerType,
            'lang' => $langHtml,
        ]);
    }
    
    #[Route('/fr/blog/{post_slug}', name: 'post_page')]
    public function post_page_fr(ManagerRegistry $doctrine, string $post_slug, Request $request): Response
    {
        $post = $this->CallArticlePage(0, $doctrine, $post_slug, $request);
        return $post;
    }
    
    #[Route('/en/blog/{post_slug}', name: 'post_page_en')]
    public function post_page_en(ManagerRegistry $doctrine, string $post_slug, Request $request): Response
    {
        $post = $this->CallArticlePage(1, $doctrine, $post_slug, $request);
        return $post;
    }
}
