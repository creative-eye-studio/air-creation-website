<?php

namespace App\Controller;

use App\Entity\Chronologie;
use App\Entity\PagesList;
use App\Entity\PostsList;
use App\Service\FormsManager;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;

class WebPagesIndexController extends AbstractController
{
    public function CallIndexPage(int $lang, Request $request, ManagerRegistry $doctrine, FormsManager $formsManager, MailerInterface $mailer){
        $selected_page = $doctrine->getRepository(PagesList::class)->findOneBy(["page_url" => "index"]);
        $lasts_posts = $doctrine->getRepository(PostsList::class)->findBy([], ['created_at' => 'DESC'], 3, null);
        $lasts_events = $doctrine->getRepository(Chronologie::class)->findAll();
        $headerType = 'header-base';
        $page = '';
        $langHtml = '';

        switch($lang){
            case 0:
                $langHtml = "fr";
                $page = 'web_pages_index/index.html.twig';
                if (!$page)
                    throw $this->createNotFoundException('La page d\'accueil du site est introuvable. Contactez le webmaster du site à contact@creative-eye.fr pour remédier au problème.');
                break;
            case 1:
                $langHtml = "en";
                $page = 'web_pages_index/index_en.html.twig';
                if (!$page)
                    throw $this->createNotFoundException('Homepage is unavailable. Please contact the webmaster at contact@creative-eye.fr to resolve the problem.');
                break;
            default:
                throw $this->createNotFoundException('This language is not available. Please contact the webmaster at contact@creative-eye.fr to resolve the problem.');
        }

        // Contact Form
        $contactForm = $formsManager->ContactForm($mailer, $request);

        // Newsletter Form
        $newsForm = $formsManager->NewsletterForm($request);

        return $this->render($page, [
            'page_id' => $selected_page->getPageId(),
            'page_slug' => $selected_page->getPageUrl(),
            'contactForm' => $contactForm->createView(),
            'newsForm' => $newsForm->createView(),
            'meta_title' => $selected_page->getPageMetaTitle(),
            'meta_desc' => $selected_page->getPageMetaDesc(),
            'meta_title_en' => $selected_page->getPageMetaTitleEn(),
            'meta_desc_en' => $selected_page->getPageMetaDescEn(),
            'posts' => $lasts_posts,
            'events' => $lasts_events,
            'headerType' => $headerType,
            'lang' => $langHtml,
        ]);
    }

    #[Route('/fr', name: 'web_index')]
    public function index(Request $request, ManagerRegistry $doctrine, FormsManager $formsManager, MailerInterface $mailer): Response
    {
        $page = $this->CallIndexPage(0, $request, $doctrine, $formsManager, $mailer);
        return $page;
    }

    #[Route('/en', name: 'web_index_en')]
    public function index_en(Request $request, ManagerRegistry $doctrine, FormsManager $formsManager, MailerInterface $mailer): Response
    {
        $page = $this->CallIndexPage(1, $request, $doctrine, $formsManager, $mailer);
        return $page;
    }

    #[Route('/', name: 'web_redirect')]
    public function redirectHome(){
        return $this->redirectToRoute('web_index');
    }

    #[Route('/fr/index', name: 'web_index_redirect')]
    public function redirectIndex(){
        return $this->redirectToRoute('web_index');
    }

    #[Route('/en/index', name: 'web_index_redirect_en')]
    public function redirectIndexEn(){
        return $this->redirectToRoute('web_index_en');
    }
}
