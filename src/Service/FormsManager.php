<?php

namespace App\Service;

use App\Classes\ProductsSearch;
use App\Classes\DocSearch;
use App\Entity\DocProducts;
use App\Form\NewsletterFormType;
use App\Form\ContactFormType;
use App\Form\ContactFormEnType;
use App\Form\DocFilterType;
use App\Form\DocFilterEnType;
use App\Form\ProductFilterType;
use App\Form\ProductFilterEnType;
use Doctrine\Persistence\ManagerRegistry;
use Mailjet\Client;
use Mailjet\Resources;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class FormsManager extends AbstractController{

    public function NewsletterForm(Request $request){
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);

        if ($newsForm->isSubmitted() && $newsForm->isValid()) {
            $client = new Client($this->getParameter('mailjet_public'), $this->getParameter('mailjet_private'), true, ['version' => 'v3']);
            $body = [
                'Email' => $newsForm->get('email')->getData(),
            ];
            $response = $client->post(Resources::$Contact, ['body' => $body]);
            if (!$response->success())
                dump($response->getReasonPhrase());
        }

        return $newsForm;
    }

    public function ContactForm(MailerInterface $mailer, Request $request, int $lang){
        if ($lang == 0) {
            $contactForm = $this->createForm(ContactFormType::class);
        } else {
            $contactForm = $this->createForm(ContactFormEnType::class);
        }
        $contactForm->handleRequest($request);

        if ($contactForm->isSubmitted() && $contactForm->isValid()) {
            $data = $contactForm->getData();
            $emailForm = (new Email())
                ->from($data['mail'])
                ->to('contact@aircreation.com')
                ->subject($data['subject'] . ' - Air Création')
                ->html(
                    "
                        <p>Nom : ". $data['lname'] ."<br />
                        Prénom : ". $data['fname'] ."<br />
                        Téléphone : ". $data['phone'] ."<br />
                        E-Mail : ". $data['mail'] ."<br />
                        Profil : ". $data['customer_type'] ."</p>

                        <p>Message :<br />
                        ". $data['message'] ." </p>
                    "
                );

            try {
                $mailer->send($emailForm);
            } catch (TransportExceptionInterface $e) {
                throw $e;
            }
        }
        return $contactForm;
    }

    public function DocFilterForm(Request $request, ManagerRegistry $doctrine, int $lang){
        $docFilter = new DocSearch();
        if ($lang == 0) 
            $docFilterForm = $this->createForm(DocFilterType::class, $docFilter);
        else 
            $docFilterForm = $this->createForm(DocFilterEnType::class, $docFilter);

        $docFilterForm->handleRequest($request);
        
        if ($docFilterForm->isSubmitted() && $docFilterForm->isValid()) {
            $documents = $doctrine->getRepository(DocProducts::class)->findDocWithSearch($docFilter);
        }
        
        return $docFilterForm;
    }

    public function ProductFilterForm(Request $request, ManagerRegistry $doctrine, int $lang){
        $productFilter = new ProductsSearch();
        if ($lang == 0) 
            $filterForm = $this->createForm(ProductFilterType::class, $productFilter);
        else
            $filterForm = $this->createForm(ProductFilterEnType::class, $productFilter);
        
        $filterForm->handleRequest($request);
        if ($filterForm->isSubmitted() && $filterForm->isValid())
            $products = $doctrine->getRepository(DocProducts::class)->findWithSearch($productFilter);
        
        return $filterForm;
    }

}