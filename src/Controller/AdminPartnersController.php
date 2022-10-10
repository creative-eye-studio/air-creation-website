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
        $form = $this->createForm(PartnersType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données
            $data = $form->getData();
            $name = $data['name'];
            $manager = $data['manager'];
            $email = $data['email'];
            $partner_cat = $data['partner_cat'];
            $adress = $data['adress'];
            $postcode = $data['postcode'];
            $tel_fixe = $data['tel_fixe'];
            $tel_port = $data['tel_port'];
            $tel_fax = $data['tel_fax'];
            $city = $data['city'];
            $website = $data['website'];
            $coord_long = $data['coord_long'];
            $coord_lat = $data['coord_lat'];

            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $partner = new Partners();

            $partner->setName($name);
            $partner->setManager($manager);
            $partner->setEmail($email);
            $partner->setPartnerCat($partner_cat);
            $partner->setAdress($adress);
            $partner->setPostcode($postcode);
            $partner->setCity($city);
            $partner->setTelFixe($tel_fixe);
            $partner->setTelPort($tel_port);
            $partner->setTelFax($tel_fax);
            $partner->setWebsite($website);
            $partner->setCoordLong($coord_long);
            $partner->setCoordLat($coord_lat);

            $entityManager->persist($partner);
            $entityManager->flush();

            // Redirection vers la fiche créée
            return $this->redirectToRoute('app_admin_partners');
        }

        return $this->render('admin_partners/add-partner.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'AdminPartnersController',
        ]);
    }


    /* MODIFIER UN PARTENAIRE
    ------------------------------------------------------- */
    #[Route('/admin/partners/modifier/{partner_id}', name: 'app_admin_partners_update')]
    public function update_partner(ManagerRegistry $doctrine, Request $request, String $partner_id){

        $form = $this->createForm(PartnersType::class);
        $form->handleRequest($request);

        // Récupération du partenaire souhaité
        $entityManager = $doctrine->getManager();
        $partner = $entityManager->getRepository(Partners::class)->findOneBy(['id' => $partner_id]);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données
            $data = $form->getData();
            $name = $data['name'];
            $manager = $data['manager'];
            $email = $data['email'];
            $partner_cat = $data['partner_cat'];
            $adress = $data['adress'];
            $postcode = $data['postcode'];
            $tel_fixe = $data['tel_fixe'];
            $tel_port = $data['tel_port'];
            $tel_fax = $data['tel_fax'];
            $city = $data['city'];
            $website = $data['website'];
            $coord_long = $data['coord_long'];
            $coord_lat = $data['coord_lat'];

            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();

            $partner->setName($name);
            $partner->setManager($manager);
            $partner->setEmail($email);
            $partner->setPartnerCat($partner_cat);
            $partner->setAdress($adress);
            $partner->setPostcode($postcode);
            $partner->setCity($city);
            $partner->setTelFixe($tel_fixe);
            $partner->setTelPort($tel_port);
            $partner->setTelFax($tel_fax);
            $partner->setWebsite($website);
            $partner->setCoordLong($coord_long);
            $partner->setCoordLat($coord_lat);

            $entityManager->persist($partner);
            $entityManager->flush();

            // Redirection vers la fiche créée
            return $this->redirectToRoute('app_admin_partners');
        }
        
        return $this->render('admin_partners/modify-partner.html.twig',[
            'form' => $form->createView(),
            'controller_name' => 'AdminPartnersController',
            'partner_name' => $partner->getName(),
            'partner_manager' => $partner->getManager(),
            'partner_email' => $partner->getEmail(),
            'partner_cat' => $partner->getPartnerCat(),
            'partner_adress' => $partner->getAdress(),
            'partner_postcode' => $partner->getPostcode(),
            'partner_city' => $partner->getCity(),
            'partner_tel_fixe' => $partner->getTelFixe(),
            'partner_tel_port' => $partner->getTelPort(),
            'partner_tel_fax' => $partner->getTelFax(),
            'partner_website' => $partner->getWebsite(),
            'partner_coord_long' => $partner->getCoordLong(),
            'partner_coord_lat' => $partner->getCoordLat(),
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
