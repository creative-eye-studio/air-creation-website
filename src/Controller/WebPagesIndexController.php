<?php

namespace App\Controller;

<<<<<<< HEAD
use App\Entity\Chronologie;
use App\Entity\PagesList;
use App\Entity\PostsList;
use App\Service\FormsManager;
=======
use App\Entity\GlobalSettings;
use App\Entity\Menu;
use App\Entity\PagesList;
use App\Entity\PostsList;
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
<<<<<<< HEAD
use Symfony\Component\Mailer\MailerInterface;
=======
use Symfony\Component\Intl\Locales;
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
use Symfony\Component\Routing\Annotation\Route;


class WebPagesIndexController extends AbstractController
{
<<<<<<< HEAD
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
        $contactForm = $formsManager->ContactForm($mailer, $request, $lang);

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
=======
    #region Page
    // Page Generator
    // -----------------------------------------------------------------------------------------------------------------
    private function showPage(ManagerRegistry $doctrine, Request $request, string $page_id): Response
    {
        $page_base = $doctrine->getRepository(PagesList::class);
        $page = $page_base->findOneBy(['page_url' => $page_id]);
        $post_base = $doctrine->getRepository(PostsList::class);
        $posts = $post_base->findAll();
        $menus = $doctrine->getRepository(Menu::class);

        $lang = $request->getLocale();
        $locales = Locales::getLocales();
        $localesSite = [
            $locales[280], // FR
            $locales[96] // EN
        ];

        $lang = array_search($lang, $localesSite);
        $meta_title = $page->getPageMetaTitle()[$lang];
        $meta_desc = $page->getPageMetaDesc()[$lang];
        $page_content = $page->getPageContent()[$lang];

        if (!$page || !$page->isStatus()) {
            return (!$page) ? $this->redirectToRoute('web_index') : throw $this->createNotFoundException("Cette page n'est pas disponible");
        }

        $settings = $doctrine->getRepository(GlobalSettings::class)->findOneBy(['id' => 0]);

        return $this->render('web_pages_views/index.html.twig', [
            'page_content' => htmlspecialchars_decode($page_content),
            'posts' => $posts,
            'lang' => $lang,
            'lang_page' => $localesSite[$lang],
            'meta_title' => $meta_title,
            'meta_desc' => $meta_desc,
            'settings' => $settings,
            'menus' => $menus,
        ]);
    }

    // Index Page
    // -----------------------------------------------------------------------------------------------------------------
    #[Route('/{_locale}', name: 'web_index', requirements: ['_locale' => 'fr'])]
    public function index(ManagerRegistry $doctrine, Request $request): Response
    {
        return $this->showPage($doctrine, $request, 'index');
    }


    // Other Page
    // -----------------------------------------------------------------------------------------------------------------
    #[Route('/{_locale}/{page_slug}', name: 'web_page', requirements: ['_locale' => 'fr'])]
    public function page(ManagerRegistry $doctrine, Request $request, string $page_slug): Response
    {
        return ($page_slug === 'index') ? $this->redirectBase() : $this->showPage($doctrine, $request, $page_slug);
    }

    // Redirections
    // -----------------------------------------------------------------------------------------------------------------
    #[Route('/', name: 'web_redirect')]
    public function redirectBase(){
        return $this->redirectToRoute('web_index');
    }
    #endregion

    #region Post
    // Post Generator
    // -----------------------------------------------------------------------------------------------------------------
    public function showPost(ManagerRegistry $doctrine, Request $request, string $post_url){
        $post = $doctrine->getRepository(PostsList::class)->findOneBy(["post_url" => $post_url]);
        $menus = $doctrine->getRepository(Menu::class);
        $statut = $post->isOnline();

        if (!$statut) {
            throw $this->createNotFoundException("Cet article n'est pas disponible");
        }

        $lang = $request->getLocale();
        $locales = Locales::getLocales();
        $localesSite = [
            $locales[280], // FR
            $locales[96] // EN
        ];
        
        $lang = array_search($lang, $localesSite);
        $meta_title = $post->getPostMetaTitle()[array_search($lang, $localesSite)];
        $meta_desc = $post->getPostMetaDesc()[array_search($lang, $localesSite)];
        $post_content = $post->getPostContent()[array_search($lang, $localesSite)];

        return $this->render('web_pages_views/post.html.twig', [
            'post_slug' => $post->getPostUrl(),
            'post_thumb' => $post->getPostThumb(),
            'post_content' => htmlspecialchars_decode($post_content),
            'menus' => $menus,
            'lang' => $lang,
            'lang_page' => $localesSite[$lang],
            'meta_title' => $meta_title,
            'meta_desc' => $meta_desc,
        ]);
    }

    // Post Page
    // -----------------------------------------------------------------------------------------------------------------
    #[Route('/{_locale}/blog/{post_url}', name: 'web_post', requirements: ['_locale' => 'fr|en'])]
    public function post(ManagerRegistry $doctrine, Request $request, string $post_url): Response
    {
        return $this->showPost($doctrine, $request, $post_url);
    }

    #endregion
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
}
