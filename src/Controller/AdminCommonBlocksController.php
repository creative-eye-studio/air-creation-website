<?php

namespace App\Controller;

use App\Form\CommonBlockFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminCommonBlocksController extends AbstractController
{
    #[Route('/admin/header', name: 'add_admin_header')]
    public function header_manage(Request $request): Response
    {
        $headerContent = file_get_contents('../templates/webpages/common_blocks/header.html.twig');

        $form = $this->createForm(CommonBlockFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $filesystem = new Filesystem();
            $filesystem->remove(['../templates/webpages/common_blocks/header.html.twig']);
            $file = fopen('../templates/webpages/common_blocks/header.html.twig', 'w');
            fwrite($file, $data['common_block']);

            // Redirection vers la page crée
            return $this->redirectToRoute('add_admin_header');
        }

        return $this->render('common_blocks/header.html.twig', [
            'form' => $form->createView(),
            'headerContent' => $headerContent,
            'controller_name' => 'AdminCommonBlocksController',
        ]);
    }

    #[Route('/admin/footer', name: 'add_admin_footer')]
    public function footer_manage(Request $request): Response
    {
        $footerContent = file_get_contents('../templates/webpages/common_blocks/footer.html.twig');

        $form = $this->createForm(CommonBlockFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $filesystem = new Filesystem();
            $filesystem->remove(['../templates/webpages/common_blocks/footer.html.twig']);
            $file = fopen('../templates/webpages/common_blocks/footer.html.twig', 'w');
            fwrite($file, $data['common_block']);

            // Redirection vers la page crée
            return $this->redirectToRoute('add_admin_footer');
        }

        return $this->render('common_blocks/footer.html.twig', [
            'form' => $form->createView(),
            'footerContent' => $footerContent,
            'controller_name' => 'AdminCommonBlocksController',
        ]);
    }
}
