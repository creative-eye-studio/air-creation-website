<?php

namespace App\Service;

use App\Form\NewsletterFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Mailjet\Resources;

class FormsManager extends AbstractController{

    public function NewsletterForm(Request $request){
        $newsForm = $this->createForm(NewsletterFormType::class);
        $newsForm->handleRequest($request);

        if ($newsForm->isSubmitted() && $newsForm->isValid()) {
            $contactMail = $newsForm->getData('email');

            $apiKey = getenv('8d5a09810a8c3e6118b42e219de4f54e');
            $apiSecret = getenv('2bcb7c2dda3645dbba1b5269eac57591');
            $client = new \Mailjet\Client($apiKey, $apiSecret, true, ['version' => 'v3']);
            $body = [
                'IsExcludedFromCampaigns' => false,
                'Email' => $contactMail
            ];
            $response = $client->post(Resources::$Contact, ['body' => $body]);
            $response->success();
        }

        return $newsForm;
    }

}