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
    public function index(): Response
    {
        return $this->render('admin_partners/index.html.twig', [
            'controller_name' => 'AdminPartnersController',
        ]);
    }

    #[Route('/admin/partners/ajouter', name: 'app_admin_partners_add')]
    public function add_partner(ManagerRegistry $doctrine, Request $request) {
        $form = $this->createForm(PartnersType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données
            $data = $form->getData();
            $name = $data['name'];
            $email = $data['email'];
            $partner_cat = $data['partner_cat'];
            $adress = $data['adress'];
            $postcode = $data['postcode'];
            $city = $data['city'];
            $website = $data['website'];
            $coord_long = $data['coord_long'];
            $coord_lat = $data['coord_lat'];

            // Envoi des données vers la BDD
            $entityManager = $doctrine->getManager();
            $partner = new Partners();

            $partner->setName($name);
            $partner->setEmail($email);
            $partner->setPartnerCat($partner_cat);
            $partner->setAdress($adress);
            $partner->setPostcode($postcode);
            $partner->setCity($city);
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
}
