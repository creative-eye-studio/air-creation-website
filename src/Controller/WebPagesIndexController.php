<?php

namespace App\Controller;

use App\Entity\Chronologie;
use App\Form\ContactFormType;
use App\Entity\PagesList;
use App\Entity\PostsList;
use App\Form\NewsletterFormType;
use App\Service\FormsManager;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebPagesIndexController extends AbstractController
{
    #[Route('/fr', name: 'web_index')]
    public function index(Request $request, ManagerRegistry $doctrine, FormsManager $formsManager): Response
    {
        $page = $this->CallIndexPage(true, $request, $doctrine, $formsManager);
        return $page;
    }

    #[Route('/en', name: 'web_index_en')]
    public function index_en(Request $request, ManagerRegistry $doctrine, FormsManager $formsManager): Response
    {
        $page = $this->CallIndexPage(false, $request, $doctrine, $formsManager);
        return $page;
    }

    #[Route('/', name: 'web_index_redirect')]
    public function redirectHome(){
        return $this->redirectToRoute('web_index');
    }

    #[Route('/fr/index', name: 'web_index_redirect')]
    public function redirectIndex(){
        return $this->redirectToRoute('web_index');
    }

    #[Route('/en/index', name: 'web_index_redirect')]
    public function redirectIndexEn(){
        return $this->redirectToRoute('web_index_en');
    }

    public function CallIndexPage(bool $french, Request $request, ManagerRegistry $doctrine, FormsManager $formsManager){
        $index_page = $doctrine->getRepository(PagesList::class)->findOneBy(["page_url" => "index"]);
        $lasts_posts = $doctrine->getRepository(PostsList::class)->findBy([], ['created_at' => 'DESC'], 3, null);
        $lasts_events = $doctrine->getRepository(Chronologie::class)->findAll();
        $headerType = 'header-base';

        if (!$index_page && $french) {
            throw $this->createNotFoundException(
                'La page d\'accueil du site est introuvable. Contactez le webmaster du site à contact@creative-eye.fr pour remédier au problème.'
            );
        } elseif(!$index_page && !$french) {
            throw $this->createNotFoundException(
                'Homepage is unavailable. Please contact the webmaster at contact@creative-eye.fr to resolve the problem.'
            );
        }

        $contactForm = $this->createForm(ContactFormType::class);
        $contactForm->handleRequest($request);
        $newsForm = $formsManager->NewsletterForm($request);
        if ($french) {
            $page = 'web_pages_index/index.html.twig';
        } else {
            $page = 'web_pages_index/index_en.html.twig';
        }

        return $this->render($page, [
            'controller_name' => 'WebPagesIndexController',
            'contactForm' => $contactForm->createView(),
            'newsForm' => $newsForm->createView(),
            'meta_title' => $index_page->getPageMetaTitle(),
            'meta_desc' => $index_page->getPageMetaDesc(),
            'posts' => $lasts_posts,
            'events' => $lasts_events,
            'headerType' => $headerType,
        ]);
    }
}
