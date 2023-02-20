<?php

namespace App\Service;

use App\Form\NewsletterFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Mailjet\Client;
use Mailjet\Resources;

class FormsManager extends AbstractController{

    public function NewsletterForm(Request $request){
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);

        if ($newsForm->isSubmitted() && $newsForm->isValid()) {
            $client = new Client(getenv($this->getParameter('mailjet_public')), getenv($this->getParameter('mailjet_private')), true, ['version' => 'v3.1']);
            $body = [
                'Email' => $newsForm->get('email')->getData(),
                'Action' => 'addnoforce',
            ];
            $response = $client->post(Resources::$Contact, ['body' => $body]);
            if ($response->success()) {
                dump("Utilisateur enregistré");
            } else {
                dump($response);
                dump($response->getReasonPhrase());
            }
        }

        return $newsForm;
    }

}