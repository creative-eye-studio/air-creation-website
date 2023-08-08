<?php

namespace App\Services;

use App\Form\CommonBlockFormType;
use App\Form\CommonBlockFormTypeEn;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;

class CommonBlocksService extends AbstractController {

    function BlockManager(Request $request, String $filePath, String $filePathEn){
        $form = $this->createForm(CommonBlockFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $filesystem = new Filesystem();

            // FR
            $filesystem->dumpFile($filePath, $data['common_block']);

            // EN
            $filesystem->dumpFile($filePathEn, $data['common_block_en']);
        }

        return $form;
    }
<<<<<<< HEAD

    function BlockManagerEn(Request $request, String $filePath){
        $form = $this->createForm(CommonBlockFormTypeEn::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $filesystem = new Filesystem();
            $filesystem->remove([$filePath]);
            $file = fopen($filePath, 'w');
            fwrite($file, $data['common_block']);
        }

        return $form;
    }
=======
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
}