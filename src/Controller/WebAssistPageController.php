<?php

namespace App\Controller;

use App\Entity\SAVManager;
use App\Form\SAVManagerFormType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebAssistPageController extends AbstractController
{
    #[Route('/fr/demande-assistance', name: 'app_web_assist_page')]
    public function index(ManagerRegistry $doctrine, Request $request): Response
    {
        $form = $this->createForm(SAVManagerFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupération des données du formulaire
            $data = $form->getData();
            $lname = $data['sav_lname'];
            $fname = $data['sav_fname'];
            $society = $data['sav_society'];
            $adress1 = $data['sav_adress'];
            $adress2 = $data['sav_adress_comp'];
            $postcode = $data['sav_postcode'];
            $city = $data['sav_city'];
            $country = $data['sav_country'];
            $phone1 = $data['sav_phone_1'];
            $phone2 = $data['sav_phone_2'];
            $email = $data['sav_email'];
            $product = $data['sav_product'];
            $customProduct = $data['sav_product_not_found'];
            $serialNumber = $data['sav_serial_number'];
            $dateInvoice = $data['sav_date_invoice'];
            $numberInvoice = $data['sav_invoice_number'];
            $guarantee = $data['sav_guarantee'];
            $description = $data['sav_request'];

            // Envoi vers la BDD
            $savManager = new SAVManager;
            $savManager->setLname($lname);
            $savManager->setFname($fname);
            $savManager->setSociety($society);
            $savManager->setAdress1($adress1);
            $savManager->setAdress2($adress2);
            $savManager->setPostcode($postcode);
            $savManager->setCity($city);
            $savManager->setCountry($country);
            $savManager->setPhone1($phone1);
            $savManager->setPhone2($phone2);
            $savManager->setMailAdress($email);
            $savManager->setProduct($product);
            $savManager->setProductCustom($customProduct);
            $savManager->setSerialNumber(strval($serialNumber));
            $savManager->setInvoiceDate($dateInvoice);
            $savManager->setInvoiceNumber($numberInvoice);
            $savManager->setGuarantee($guarantee);
            $savManager->setDescription($description);
            $savManager->setTicketNumber(bin2hex(random_bytes(6)));
            $savManager->setRepairStatus(0);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($savManager);
            $entityManager->flush();

            // Redirection vers la page crée
            return $this->redirectToRoute('app_web_assist_page');

        }

        return $this->render('web_assist_page/index.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'WebAssistPageController',
        ]);
    }
}
