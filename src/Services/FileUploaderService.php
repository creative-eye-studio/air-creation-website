<?php

namespace App\Services;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Cocur\Slugify\Slugify;

class FileUploaderService extends AbstractController{

    public function ThumbUploader(object $image, string $imageName, string $imageExt){
        $slugify = new Slugify();
        $originalFileName = pathinfo($imageName, PATHINFO_FILENAME);
        $safeFilename = $slugify->slugify($originalFileName);
        $newFilename = $safeFilename . '.' . $imageExt;
        try {
            $image->move(
                $this->getParameter('thumbs_directory'),
                $newFilename
            );
        } catch (\Throwable $th) {
            throw $this->createNotFoundException(
                $th
            );
        }
    }

    public function LogoUploader(object $image, string $imageName, string $imageExt){
        $slugify = new Slugify();
        $originalFileName = pathinfo($imageName, PATHINFO_FILENAME);
        $safeFilename = $slugify->slugify($originalFileName);
        $newFilename = $safeFilename . '.' . $imageExt;
        try {
            $image->move(
                $this->getParameter('logos_directory'),
                $newFilename
            );
        } catch (\Throwable $th) {
            throw $this->createNotFoundException(
                $th
            );
        }
    }
    
}