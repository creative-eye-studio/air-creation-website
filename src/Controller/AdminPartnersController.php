<?php

namespace App\Controller;

use App\Entity\Partners;
use App\Form\PartnersType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminPartnersController extends AbstractController
{

    #[Route('/admin/partners', name: 'app_admin_partners')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $partnersRepoRevendeurs = $entityManager->getRepository(Partners::class)->findBy(['partner_cat'=> 0]);
        $partnersRepoFormateurs = $entityManager->getRepository(Partners::class)->findBy(['partner_cat'=> 1]);
        $partnersRepoTech = $entityManager->getRepository(Partners::class)->findBy(['partner_cat'=> 2]);

        return $this->render('admin_partners/index.html.twig', [
            'controller_name' => 'AdminPartnersController',
            "partnersRepoRevendeurs" => $partnersRepoRevendeurs,
            "partnersRepoFormateurs" => $partnersRepoFormateurs,
            "partnersRepoTech" => $partnersRepoTech
        ]);
    }


    /* AJOUTER UN PARTENAIRE
    ------------------------------------------------------- */
    #[Route('/admin/partners/ajouter', name: 'app_admin_partners_add')]
    public function add_partner(ManagerRegistry $doctrine, Request $request) {
        $partner = new Partners();
        $form = $this->createForm(PartnersType::class, $partner);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données
            $partner = $form->getData();

            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $entityManager->persist($partner);
            $entityManager->flush();

            // Redirection vers la fiche créée
            return $this->redirectToRoute('app_admin_partners');
        }

        return $this->render('admin_partners/add-partner.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    /* MODIFIER UN PARTENAIRE
    ------------------------------------------------------- */
    #[Route('/admin/partners/modifier/{partner_id}', name: 'app_admin_partners_update')]
    public function update_partner(ManagerRegistry $doctrine, Request $request, String $partner_id){

        // Récupération du partenaire souhaité
        $entityManager = $doctrine->getManager();
        $partner = $entityManager->getRepository(Partners::class)->findOneBy(['id' => $partner_id]);
        
        $form = $this->createForm(PartnersType::class, $partner);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données
            $partner = $form->getData();

            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $entityManager->persist($partner);
            $entityManager->flush();

            // Redirection vers la fiche créée
            return $this->redirectToRoute('app_admin_partners');
        }
        
        return $this->render('admin_partners/modify-partner.html.twig',[
            'form' => $form->createView(),
        ]);
    }

    
    /* SUPPRIMER UN PARTENAIRE
    ------------------------------------------------------- */
    #[Route('/admin/partners/supprimer/{partner_id}', name: 'app_admin_partners_delete')]
    
    public function delete_partner(ManagerRegistry $doctrine, String $partner_id)
    {
        $entityManager = $doctrine->getManager();
        $partner = $entityManager->getRepository(Partners::class)->findOneBy(['id' => $partner_id]);

        if (!$partner) {
            throw $this->createNotFoundException(
                "Aucune partenaire n'a été trouvé"
            );
        }

        $entityManager->remove($partner);
        $entityManager->flush();

        return $this->redirectToRoute('app_admin_partners');

    }
}
