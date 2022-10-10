<?php

namespace App\Controller;

use App\Entity\FAQList;
use App\Entity\SAVManager;
use App\Form\FAQManagerFormType;
use App\Form\SAVTicketStatusType;
use Cocur\Slugify\Slugify;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminSAVManagerController extends AbstractController
{

    /* PAGE SAV
    ------------------------------------------------------- */
    #[Route('/admin/sav-manager', name: 'app_admin_sav_manager')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $faqList = $entityManager->getRepository(FAQList::class)->findAll();
        $requestsSended = $entityManager->getRepository(SAVManager::class)->findBy(['repair_status' => 0]);
        $requestsInProgress = $entityManager->getRepository(SAVManager::class)->findBy(['repair_status' => 1]);
        $requestsValidated = $entityManager->getRepository(SAVManager::class)->findBy(['repair_status' => 2]);
        $requestsCanceled = $entityManager->getRepository(SAVManager::class)->findBy(['repair_status' => 3]);

        return $this->render('admin_sav_manager/index.html.twig', [
            'controller_name' => 'AdminSAVManagerController',
            'faqList' => $faqList,
            'requestsSended' => $requestsSended,
            'requestsInProgress' => $requestsInProgress,
            'requestsValidated' => $requestsValidated,
            'requestsCanceled' => $requestsCanceled,
        ]);
    }

    /* AJOUTER UNE QUESTION
    ------------------------------------------------------- */
    #[Route('/admin/sav-manager/ajouter-question', name: 'app_admin_sav_manager_add_question')]
    public function add_question(ManagerRegistry $doctrine, Request $request) 
    {

        $form = $this->createForm(FAQManagerFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $slugify = new Slugify();

            // Récupération des données du form
            $data = $form->getData();
            $faqName = $data['faq_name'];
            $faqContent = $data['faq_content'];
            $faqId = $slugify->slugify($faqName);
            $faqId = $slugify->slugify($faqName);
            $pageFileName = $faqId . ".html.twig";

            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $faqQuestion = new FAQList();
            $faqQuestion->setFaqName($faqName);
            $faqQuestion->setFaqId($faqId);
            $entityManager->persist($faqQuestion);
            $entityManager->flush();

            // Création du fichier
            $file = fopen("../templates/webpages/faq_questions/" . $pageFileName, 'w', 'w');
            fwrite($file, $faqContent);
            fclose($file);

            // Redirection vers la page crée
            return $this->redirectToRoute('app_admin_sav_manager');
        }

        return $this->render('admin_sav_manager/add-question.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'AdminSAVManagerController',
        ]);
    }

    /* MODIFIER UNE QUESTION
    ------------------------------------------------------- */
    #[Route('/admin/sav-manager/modifier-question/{faq_id}', name: 'app_admin_sav_manager_modify_question')]
    public function modify_question(ManagerRegistry $doctrine, Request $request, String $faq_id)
    {

        $form = $this->createForm(FAQManagerFormType::class);
        $form->handleRequest($request);

        // Récupération de la question souhaitée
        $entityManager = $doctrine->getManager();
        $question = $entityManager->getRepository(FAQList::class)->findOneBy(['faq_id' => $faq_id]);
        $slugify = new Slugify();

        if(!$question) {
            throw $this->createNotFoundException(
                "Aucune question n'a été trouvée"
            );
        }

        // Récupération du contenu de la page
        $quesContent = file_get_contents("../templates/webpages/faq_questions/" . $faq_id . ".html.twig");

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données du form
            $data = $form->getData();
            $faqName = $data['faq_name'];
            $faqContent = $data['faq_content'];
            $faqId = $slugify->slugify($faqName);
            $pageFileName = $faqId . ".html.twig";

            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $question->setFaqName($faqName);
            $question->setFaqId($faqId);
            $entityManager->persist($question);
            $entityManager->flush();

            // Création du fichier
            $file = fopen("../templates/webpages/faq_questions/" . $pageFileName, 'w', 'w');
            fwrite($file, $faqContent);
            fclose($file);

            // Redirection vers la page crée
            return $this->redirectToRoute('app_admin_sav_manager_modify_question', ['faq_id' => $faqId]);
        }

        return $this->render('admin_sav_manager/modify-question.html.twig', [
            'form' => $form->createView(),
            'faqName' => $question->getFaqName(),
            'faqContent' => $quesContent,
            'controller_name' => 'AdminSAVManagerController',
        ]);
    }

    /* SUPPRIMER UNE QUESTION
    ------------------------------------------------------- */
    #[Route('/admin/sav-manager/supprimer-question/{faq_id}', name: 'app_admin_sav_manager_delete_question')]
    public function delete_question(ManagerRegistry $doctrine, String $faq_id)
    {
        // Suppression de la valeur dans la BDD
        $entityManager = $doctrine->getManager();
        $faqQuestion = $entityManager->getRepository(FAQList::class)->findOneBy(['faq_id' => $faq_id]);

        if(!$faqQuestion) {
            throw $this->createNotFoundException(
                "Aucune question n'a été trouvée"
            );
        }

        $entityManager->remove($faqQuestion);
        $entityManager->flush();

        // Suppression du fichier
        unlink("../templates/webpages/faq_questions/" . $faq_id . ".html.twig");

        return $this->redirectToRoute('app_admin_sav_manager');
    }

    /* VOIR UNE FICHE TICKET
    ------------------------------------------------------- */
    #[Route('/admin/sav-manager/ticket/{ticket_number}', name: 'app_admin_sav_ticket')]
    public function ticket_card(ManagerRegistry $doctrine, Request $request, string $ticket_number)
    {
        $form = $this->createForm(SAVTicketStatusType::class);
        $form->handleRequest($request);
        $entityManager = $doctrine->getManager();
        $ticketCard = $entityManager->getRepository(SAVManager::class)->findOneBy(['ticket_number' => $ticket_number]);

        if(!$ticketCard) {
            throw $this->createNotFoundException(
                "Ce ticket n'existe pas"
            );
        }

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données du form
            $data = $form->getData();
            $status = $data['status'];

            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $ticketCard->setRepairStatus($status);
            $entityManager->persist($ticketCard);
            $entityManager->flush();

            // Redirection vers la page crée
            return $this->redirectToRoute('app_admin_sav_ticket', ['ticket_number' => $ticket_number]);
        }

        return $this->render('admin_sav_manager/ticket-card.html.twig', [
            'form' => $form->createView(),
            'ticket' => $ticketCard,
            'controller_name' => 'AdminSAVManagerController'
        ]);
    }
}
