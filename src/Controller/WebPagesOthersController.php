<?php

namespace App\Controller;

use App\Entity\PagesList;
use App\Service\ProductsFunctions;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebPagesOthersController extends AbstractController
{
    #[Route('/fr/{page_slug}', name: 'web_pages')]
    public function index(ManagerRegistry $doctrine, string $page_slug, ProductsFunctions $products_function): Response
    {
        $selected_page = $doctrine->getRepository(PagesList::class)->findOneBy(["page_url" => $page_slug]);

        if (!$selected_page) {
            throw $this->createNotFoundException(
                'La page demandée est introuvable. Contactez le webmaster du site pour remédier au problème.'
            );
        }

        if($selected_page->getPageModel() == 1){
            $products = $products_function->getProducts($doctrine);
        }

        return $this->render('web_pages_others/index.html.twig', [
            'controller_name' => 'WebPagesOthersController',
            'page_id' => $selected_page->getPageId(),
            'products' => $products
        ]);
    }
}
