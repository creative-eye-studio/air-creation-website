<?php

namespace App\Controller;

use App\Entity\Chronologie;
use App\Form\ContactFormType;
use App\Entity\PagesList;
use App\Entity\PostsList;
use App\Form\NewsletterFormType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebPagesIndexController extends AbstractController
{
    #[Route('/fr', name: 'web_index')]
    public function index(Request $request, ManagerRegistry $doctrine): Response
    {

        $index_page = $doctrine->getRepository(PagesList::class)->findBy(["page_url" => "index"]);
        $lasts_posts = $doctrine->getRepository(PostsList::class)->findBy([], ['created_at' => 'DESC'], 3, null);
        $lasts_events = $doctrine->getRepository(Chronologie::class)->findAll();
        $headerType = 'header-base';

        if (!$index_page) {
            throw $this->createNotFoundException(
                'La page d\'accueil du site est introuvable. Contactez le webmaster du site pour remédier au problème.'
            );
        }

        $contactForm = $this->createForm(ContactFormType::class);
        $contactForm->handleRequest($request);
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);

        return $this->render('web_pages_index/index.html.twig', [
            'controller_name' => 'WebPagesIndexController',
            'contactForm' => $contactForm->createView(),
            'newsForm' => $newsForm->createView(),
            'posts' => $lasts_posts,
            'events' => $lasts_events,
            'headerType' => $headerType
        ]);
    }

    #[Route('/fr/index', name: 'web_index_redirect')]
    public function redirectIndex(){
        return $this->redirectToRoute('web_index');
    }

    #[Route('/', name: 'web_index_redirect')]
    public function redirectHome(){
        return $this->redirectToRoute('web_index');
    }
}
