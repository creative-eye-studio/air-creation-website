<?php

namespace App\Controller;

use App\Entity\Chronologie;
use App\Entity\FAQList;
use App\Form\ContactFormType;
use App\Entity\PagesList;
use App\Entity\Partners;
use App\Entity\PostsList;
use App\Entity\ProductsImages;
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
        $resellers = $doctrine->getRepository(Partners::class)->findBy(['partner_cat' => 0]);
        $trainers = $doctrine->getRepository(Partners::class)->findBy(['partner_cat' => 1]);
        $techs = $doctrine->getRepository(Partners::class)->findBy(['partner_cat' => 2]);
        $questions = $doctrine->getRepository(FAQList::class)->findAll();
        $products = $products_function->getProducts($doctrine);
        $posts = $doctrine->getRepository(PostsList::class)->findAll();
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);
        $lasts_events = $doctrine->getRepository(Chronologie::class)->findAll();

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

        return $this->render('web_pages_others/index.html.twig', [
            'controller_name' => 'WebPagesOthersController',
            'contactForm' => $contactForm->createView(),
            'page_id' => $selected_page->getPageId(),
            'products' => $products,
            'posts' => $posts,
            'events' => $lasts_events,
            'newsForm' => $newsForm->createView(),
            'resellers' => $resellers,
            'trainers' => $trainers,
            'techs' => $techs,
            'questions' => $questions,
            'headerType' => $headerType,
            'meta_title' => $selected_page->getPageMetaTitle(),
            'meta_desc' => $selected_page->getPageMetaDesc(),
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
        $entityManager = $doctrine->getManager();
        $image = $entityManager->getRepository(ProductsImages::class)->findBy(["image_product" => $product]);

        dump($image);

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
            'contactForm' => $contactForm->createView(),
            'productName' => $product->getProductName(),
            'productThumb' => $product->getProductThumb(),
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
    #[Route('/fr/blog/{post_slug}', name: 'post_page')]
    public function post_page(Request $request, ManagerRegistry $doctrine, string $post_slug): Response
    {
        $headerType = 'header-second';

        // Récupération du post
        $post = $doctrine->getRepository(PostsList::class)->findOneBy(["post_url" => $post_slug]);

        $contactForm = $this->createForm(ContactFormType::class);
        $contactForm->handleRequest($request);
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);

        return $this->render('web_pages_others/post.html.twig', [
            'contactForm' => $contactForm->createView(),
            'newsForm' => $newsForm->createView(),
            'post_id' => $post->getPostId(),
            'post_image' => $post->getPhotoFilename(),
            'post_title' => $post->getPostName(),
            'post_date' => $post->getCreatedAt(),
            'meta_title' => $post->getPostMetaTitle(),
            'meta_desc' => $post->getPostMetaDesc(),
            'created_at' => $post->getCreatedAt(),
            'headerType' => $headerType
        ]);
    }
}
