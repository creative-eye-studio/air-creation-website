<?php

namespace App\Services;

use App\Entity\PagesList;
use App\Form\PagesAdminFormType;
use Cocur\Slugify\Slugify;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class PagesService extends AbstractController{
    
    function PageManager(ManagerRegistry $doctrine, Request $request, bool $newPage, string $page_id = null)
    {
        $entityManager = $doctrine->getManager();

        // CREATION / RECUPERATION D'UNE PAGE
        // --------------------------------------------------------
        if ($newPage) {
            $page = new PagesList();
        } else {
            $page = $entityManager->getRepository(PagesList::class)->findOneBy(['page_id' => $page_id]);
            if (!$page) {
                throw $this->createNotFoundException("Aucune page n'a été trouvée");
            }
        }

        // INITIALISATION DU FORMULAIRE
        // --------------------------------------------------------
        $form = $this->createForm(PagesAdminFormType::class, $page);
        $form->handleRequest($request);

        // ENVOI DU FORMULAIRE
        // --------------------------------------------------------
        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données du formulaire
            $page = $form->getData();

            // Création du nom
            $name = [$form->get('page_name_fr')->getData()];
            $page->setPageName($name);

            // Création du slug
            $slugify = new Slugify();
            $slugName = $slugify->slugify($name[0]);
            $slugUrl = $slugify->slugify($form->get('page_url')->getData());

            // Création de l'ID Page
            if ($newPage) {
                $page->setPageId($slugName);
            }

            // Création / Modification de l'URL
            $page->setPageUrl(empty($form->get('page_url')->getData()) ? ($newPage ? $slugName : $page->getPageUrl()) : $slugUrl);

            // Création / Modification du Meta Title
            $metaTitle = [$form->get('page_meta_title_fr')->getData() ?: $name[0]];
            $page->setPageMetaTitle([$metaTitle]);

            // Création / Modification du Meta Desc
            $metaDesc = [$form->get('page_meta_desc_fr')->getData() ?: ''];
            $page->setPageMetaDesc($metaDesc);

            // Création / Modification du contenu
            $pageContent = [htmlspecialchars($form->get('page_content_fr')->getData()) ?: "Contenu à ajouter"];
            $page->setPageContent($pageContent);

            // Envoi des données vers la BDD
            $entityManager->persist($page);
            $entityManager->flush();
<<<<<<< HEAD

            // Création / Modification du fichier TWIG
            if ($newPage) {
                $file = fopen("../templates/webpages/pages/fr/" . $slugName . '.html.twig', 'w');
                $file_en = fopen("../templates/webpages/pages/en/" . $slugName . '.html.twig', 'w');
            } else {
                $pageFileName = $page->getPageId() . '.html.twig';
                unlink("../templates/webpages/pages/fr/" . $pageFileName);
                unlink("../templates/webpages/pages/en/" . $pageFileName);
                $file = fopen("../templates/webpages/pages/fr/" . $pageFileName, 'w');
                $file_en = fopen("../templates/webpages/pages/en/" . $pageFileName, 'w');
            }
            fwrite($file, $form->get('page_content')->getData());
            fclose($file);
            fwrite($file_en, $form->get('page_content_en')->getData());
            fclose($file_en);
=======
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
        }

        return $form;
    }
}