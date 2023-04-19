<?php

namespace App\Controller;

#region Dependances
use App\Classes\ProductsSearch;
use App\Entity\Chronologie;
use App\Entity\DocProducts;
use App\Entity\OptionImages;
use App\Entity\OptionModels;
use App\Entity\Options;
use App\Entity\PagesList;
use App\Entity\Partners;
use App\Entity\PostsList;
use App\Entity\Products;
use App\Entity\ProductsImages;
use App\Form\ProductFilterType;
use App\Form\ProductFilterEnType;
use App\Service\FormsManager;
use App\Service\ProductsFunctions;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;
#endregion

class WebPagesOthersController extends AbstractController
{
    // Pages de Base
    // --------------------------------------------------------------------
    public function CallPage(int $lang, Request $request, ManagerRegistry $doctrine, string $page_slug, ProductsFunctions $products_function, FormsManager $formsManager, MailerInterface $mailer)
    {
        // Page sélectionnée
        $langHtml = "fr";
        $selected_page = $doctrine->getRepository(PagesList::class)->findOneBy(["page_url" => $page_slug]);
        if (!$selected_page)
            throw $this->createNotFoundException(
                'La page demandée est introuvable. Contactez le webmaster du site pour remédier au problème.'
            );
        if ($selected_page->getPageModel() == 0)
            $headerType = 'header-base';
        else
            $headerType = 'header-second';

        switch($lang){
            case 0:
                $langHtml = "fr";
                $page = 'web_pages_others/fr/index.html.twig';
                if (!$page)
                    throw $this->createNotFoundException('La page est introuvable. Contactez le webmaster du site à contact@creative-eye.fr pour remédier au problème.');
                break;
            case 1:
                $langHtml = "en";
                $page = 'web_pages_others/en/index.html.twig';
                if (!$page)
                    throw $this->createNotFoundException('This page is unavailable. Please contact the webmaster at contact@creative-eye.fr to resolve the problem.');
                break;
            default:
                throw $this->createNotFoundException('This language is not available. Please contact the webmaster at contact@creative-eye.fr to resolve the problem.');
        }
        
        // Dernières actualités
        $lasts_events = $doctrine->getRepository(Chronologie::class)->findAll();
        // Chronologie
        $chronoOrigines = $doctrine->getRepository(Chronologie::class)->findBy(['chronologie_type' => 'origines']);
        $chronoPionniers = $doctrine->getRepository(Chronologie::class)->findBy(['chronologie_type' => 'pionniers'], ['chronologie_date' => 'ASC']);
        $chronoActual = $doctrine->getRepository(Chronologie::class)->findBy(['chronologie_type' => 'air-creation'], ['chronologie_date' => 'ASC']);
        // Cartes
        $resellers = $doctrine->getRepository(Partners::class)->findBy(['partner_cat' => 0]);
        $trainers = $doctrine->getRepository(Partners::class)->findBy(['partner_cat' => 1]);
        $techs = $doctrine->getRepository(Partners::class)->findBy(['partner_cat' => 2]);
        // Documents
        $documents = $doctrine->getRepository(DocProducts::class)->findAll();
        // Produits
        $products = $products_function->getProducts($doctrine);
        // Posts
        $posts = $doctrine->getRepository(PostsList::class)->findBy([], ['created_at' => 'DESC']);
        // Newsletter Form
        $newsForm = $formsManager->NewsletterForm($request);
        // Contact Form
        $contactForm = $formsManager->ContactForm($mailer, $request, $lang);
        // Formulaire de filtrage produits
        $productFilter = new ProductsSearch();
        if ($lang == 0) 
            $filterForm = $this->createForm(ProductFilterType::class, $productFilter);
        else
            $filterForm = $this->createForm(ProductFilterEnType::class, $productFilter);
        $filterForm->handleRequest($request);

        if ($filterForm->isSubmitted() && $filterForm->isValid()) {
            try {
                $products = $doctrine->getRepository(Products::class)->findWithSearch($productFilter);
            } catch (\Throwable $th) {
                throw $th;
            }
        }
        
        // Formulaire de filtrage documents
        $docFilterForm = $formsManager->DocFilterForm($request, $doctrine, $lang);

        return $this->render($page, [
            'page_id' => $selected_page->getPageId(),
            'page_slug' => $selected_page->getPageUrl(),
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
            'filterForm' => $filterForm->createView(),
            'docFilterForm' => $docFilterForm->createView(),
            'meta_title' => $selected_page->getPageMetaTitle(),
            'meta_desc' => $selected_page->getPageMetaDesc(),
            'meta_title_en' => $selected_page->getPageMetaTitleEn(),
            'meta_desc_en' => $selected_page->getPageMetaDescEn(),
            'lang' => $langHtml,
        ]);
    }

    #[Route('/fr/{page_slug}', name: 'web_pages')]
    public function page_fr(Request $request, ManagerRegistry $doctrine, string $page_slug, ProductsFunctions $products_function, FormsManager $formsManager, MailerInterface $mailer): Response{
        $page = $this->CallPage(0, $request, $doctrine, $page_slug, $products_function, $formsManager, $mailer);
        return $page;
    }

    #[Route('/en/{page_slug}', name: 'web_pages_en')]
    public function page_en(Request $request, ManagerRegistry $doctrine, string $page_slug, ProductsFunctions $products_function, FormsManager $formsManager, MailerInterface $mailer): Response{
        $page = $this->CallPage(1, $request, $doctrine, $page_slug, $products_function, $formsManager, $mailer);
        return $page;
    }

    // Page Produit
    // --------------------------------------------------------------------
    public function CallProductPage(int $lang, Request $request, ManagerRegistry $doctrine, string $product_slug, ProductsFunctions $products_function, FormsManager $formsManager, MailerInterface $mailer): Response{        
        $headerType = 'header-base';

        // Récupération du produit
        $product = $products_function->getProduct($doctrine, $product_slug, $lang);
        $entityManager = $doctrine->getManager();
        $image = $entityManager->getRepository(ProductsImages::class)->findBy(["image_product" => $product]);

        // Newsletter Form
        $newsForm = $formsManager->NewsletterForm($request);

        // Contact Form
        $contactForm = $formsManager->ContactForm($mailer, $request, $lang);

        if (!$product) {
            throw $this->createNotFoundException(
                'Le produit demandé est introuvable. Contactez le webmaster du site pour remédier au problème.'
            );
        }

        if($lang == 0)
            $template = 'web_pages_others/fr/product.html.twig';
        else
            $template = 'web_pages_others/en/product.html.twig';

        $contactForm = $this->createForm(ContactFormType::class);
        $contactForm->handleRequest($request);
        return $this->render($template, [
            'controller_name' => 'WebPagesOthersController',
            'product' => $product,
            'product_slug' => $product_slug,
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
            'lang' => $lang,
        ]);
    }

    #[Route('/fr/produit/{product_slug}', name: 'product_pages')]
    public function product_page(Request $request, ManagerRegistry $doctrine, string $product_slug, ProductsFunctions $products_function, FormsManager $formsManager, MailerInterface $mailer){
        $product = $this->CallProductPage(0, $request, $doctrine, $product_slug, $products_function, $formsManager, $mailer);
        return $product;
    }

    #[Route('/en/produit/{product_slug}', name: 'product_pages_en')]
    public function product_page_en(Request $request, ManagerRegistry $doctrine, string $product_slug, ProductsFunctions $products_function, FormsManager $formsManager, MailerInterface $mailer){
        $product = $this->CallProductPage(1, $request, $doctrine, $product_slug, $products_function, $formsManager, $mailer);
        return $product;
    }

    // Article de blog
    // --------------------------------------------------------------------
    public function CallArticlePage(int $lang, ManagerRegistry $doctrine, string $post_slug, Request $request, FormsManager $formsManager, MailerInterface $mailer){
        $post = $doctrine->getRepository(PostsList::class)->findOneBy(["post_url" => $post_slug]);
        
        $headerType = 'header-second';
        $page = '';
        $langHtml = '';

        // Newsletter Form
        $newsForm = $formsManager->NewsletterForm($request);
        // Contact Form
        $contactForm = $formsManager->ContactForm($mailer, $request, $lang);

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
            'headerType' => $headerType,
            'lang' => $langHtml,
            'post_id' => $post->getPostId(),
            'post_url' => $post->getPostUrl(),
            'post_image' => $post->getPhotoFilename(),
            'post_title' => $post->getPostName(),
            'post_date' => $post->getCreatedAt(),
            'meta_title' => $post->getPostMetaTitle(),
            'meta_desc' => $post->getPostMetaDesc(),
            'meta_title_en' => $post->getPostMetaTitleEn(),
            'meta_desc_en' => $post->getPostMetaDescEn(),
            'created_at' => $post->getCreatedAt(),
        ]);
    }
    
    #[Route('/fr/blog/{post_slug}', name: 'post_page')]
    public function post_page_fr(ManagerRegistry $doctrine, string $post_slug, Request $request, FormsManager $formsManager, MailerInterface $mailer): Response
    {
        $post = $this->CallArticlePage(0, $doctrine, $post_slug, $request, $formsManager, $mailer);
        return $post;
    }
    
    #[Route('/en/blog/{post_slug}', name: 'post_page_en')]
    public function post_page_en(ManagerRegistry $doctrine, string $post_slug, Request $request, FormsManager $formsManager, MailerInterface $mailer): Response
    {
        $post = $this->CallArticlePage(1, $doctrine, $post_slug, $request, $formsManager, $mailer);
        return $post;
    }

    // Page Option
    // --------------------------------------------------------------------
    public function CallOptionPage(int $lang, ManagerRegistry $doctrine, string $option_slug, Request $request, FormsManager $formsManager, MailerInterface $mailer){
        $model = $doctrine->getRepository(OptionModels::class)->findOneBy(["model_url" => $option_slug]);
        $models = $doctrine->getRepository(OptionModels::class)->findAll();
        $options = $doctrine->getRepository(Options::class)->findBy(['option_model' => $model->getId()]);
        $optionsImages = $doctrine->getRepository(OptionImages::class)->findAll();
        $headerType = 'header-second';
        $page = '';
        $langHtml = '';

        switch($lang){
            case 0:
                $langHtml = "fr";
                $page = 'web_pages_others/fr/option.html.twig';
                if (!$page)
                    throw $this->createNotFoundException('L\'article du site est introuvable. Contactez le webmaster du site à contact@creative-eye.fr pour remédier au problème.');
                break;
            case 1:
                $langHtml = "en";
                $page = 'web_pages_others/en/option.html.twig';
                if (!$page)
                    throw $this->createNotFoundException('This article is unavailable. Please contact the webmaster at contact@creative-eye.fr to resolve the problem.');
                break;
            default:
                throw $this->createNotFoundException('This language is not available. Please contact the webmaster at contact@creative-eye.fr to resolve the problem.');
        }

        // Newsletter Form
        $newsForm = $formsManager->NewsletterForm($request);
        // Contact Form
        $contactForm = $formsManager->ContactForm($mailer, $request, $lang);

        return $this->render($page, [
            'contactForm' => $contactForm->createView(),
            'newsForm' => $newsForm->createView(),
            'headerType' => $headerType,
            'lang' => $langHtml,
            'models' => $models,
            'modelName' => $model->getModelName(),
            'modelMetaTitle' => $model->getModelMetaTitle(),
            'modelMetaDesc' => $model->getModelMetaDesc(),
            'options' => $options,
            'optionsImages' => $optionsImages,
        ]);
    }
    
    #[Route('/fr/option/{option_slug}', name: 'option_page_fr')]
    public function option_page_fr(ManagerRegistry $doctrine, string $option_slug, Request $request, FormsManager $formsManager, MailerInterface $mailer){
        $optionPage = $this->CallOptionPage(0, $doctrine, $option_slug, $request, $formsManager, $mailer);
        return $optionPage;
    }
    
    #[Route('/en/option/{option_slug}', name: 'option_page_en')]
    public function option_page_en(ManagerRegistry $doctrine, string $option_slug, Request $request, FormsManager $formsManager, MailerInterface $mailer){
        $optionPage = $this->CallOptionPage(1, $doctrine, $option_slug, $request, $formsManager, $mailer);
        return $optionPage;
    }
}
