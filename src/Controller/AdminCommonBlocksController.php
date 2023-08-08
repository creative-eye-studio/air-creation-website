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
<<<<<<< HEAD
        $file = '../templates/webpages/blocks/fr/header.html.twig';
        $content = file_get_contents($file);
        $form = $block->BlockManager($request, $file);

        $file_en = '../templates/webpages/blocks/en/header.html.twig';
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
=======
        return $this->blockManager($block, $request, "header.html.twig", 'add_admin_header');
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
    }

    #[Route('/admin/footer', name: 'add_admin_footer')]
    public function footer_manage(CommonBlocksService $block, Request $request): Response
    {
<<<<<<< HEAD
        $file = '../templates/webpages/blocks/fr/footer.html.twig';
        $content = file_get_contents($file);
        $form = $block->BlockManager($request, $file);
        
        $file_en = '../templates/webpages/blocks/en/footer.html.twig';
        $content_en = file_get_contents($file_en);
        $form_en = $block->BlockManagerEn($request, $file_en);
=======
        return $this->blockManager($block, $request, "footer.html.twig", 'add_admin_footer');
    }
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b

    private function blockManager(CommonBlocksService $block, Request $request, String $block_html, String $redirect_route){
        // Path
        $path = '../templates/webpages/blocks/';

        // Fichiers
        $file = $path . 'fr/' . $block_html;
        $file_en = $path . 'en/' . $block_html;

        if (!file_exists($file)) {
            file_put_contents($file, '');
        }
<<<<<<< HEAD

        return $this->render('common_blocks/footer.html.twig', [
=======
        
        if (!file_exists($file_en)) {
            file_put_contents($file_en, '');
        }

        // Contenu
        $content = file_get_contents($file);
        $content_en = file_get_contents($file_en);
        $form = $block->BlockManager($request, $file, $file_en);

        // Submit du form
        if ($form->isSubmitted() && $form->isValid()) {
            return $this->redirectToRoute($redirect_route);
        }

        // Return
        return $this->render('common_blocks/' . $block_html, [
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
            'form' => $form->createView(),
            'form_en' => $form_en->createView(),
            'content' => $content,
            'content_en' => $content_en,
<<<<<<< HEAD
            'controller_name' => 'AdminCommonBlocksController',
=======
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
        ]);
    }
}
