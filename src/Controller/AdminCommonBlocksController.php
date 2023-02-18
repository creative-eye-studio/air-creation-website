<?php

namespace App\Controller;

use App\Services\CommonBlocksService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminCommonBlocksController extends AbstractController
{
    #[Route('/admin/header', name: 'add_admin_header')]
    public function header_manage(CommonBlocksService $block, Request $request): Response
    {
        $file = '../templates/webpages/blocks/header.html.twig';
        $content = file_get_contents($file);
        $form = $block->BlockManager($request, $file);

        $file_en = '../templates/webpages/blocks/header_en.html.twig';
        $content_en = file_get_contents($file_en);
        $form_en = $block->BlockManagerEn($request, $file_en);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->redirectToRoute('add_admin_header');
        }

        if ($form_en->isSubmitted() && $form_en->isValid()) {
            return $this->redirectToRoute('add_admin_header');
        }

        return $this->render('common_blocks/header.html.twig', [
            'form' => $form->createView(),
            'form_en' => $form_en->createView(),
            'content' => $content,
            'content_en' => $content_en,
            'controller_name' => 'AdminCommonBlocksController',
        ]);
    }

    #[Route('/admin/footer', name: 'add_admin_footer')]
    public function footer_manage(CommonBlocksService $block, Request $request): Response
    {
        $file = '../templates/webpages/blocks/footer.html.twig';
        $file_en = '../templates/webpages/blocks/footer_en.html.twig';
        $content = file_get_contents($file);
        $content_en = file_get_contents($file_en);
        $form = $block->BlockManager($request, $file);
        $form_en = $block->BlockManagerEn($request, $file_en);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->redirectToRoute('add_admin_footer');
        }

        return $this->render('common_blocks/footer.html.twig', [
            'form' => $form->createView(),
            'form_en' => $form_en->createView(),
            'content' => $content,
            'content_en' => $content_en,
            'controller_name' => 'AdminCommonBlocksController',
        ]);
    }
}
