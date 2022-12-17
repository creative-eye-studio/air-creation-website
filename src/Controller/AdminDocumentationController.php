<?php

namespace App\Controller;

use App\Entity\DocCategories;
use App\Entity\DocFiles;
use App\Form\DocCategoriesType;
use App\Form\DocFilesType;
use Cocur\Slugify\Slugify;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminDocumentationController extends AbstractController
{
    #[Route('/admin/documentation', name: 'app_admin_documentation')]
    public function index(ManagerRegistry $doctrine, Request $request): Response
    {
        $entityManager = $doctrine->getManager();
        $docCat = new DocCategories();
        $docCatList = $entityManager->getRepository(DocCategories::class)->findAll();
        $docForm = $this->createForm(DocCategoriesType::class, $docCat);
        $docForm->handleRequest($request);

        if ($docForm->isSubmitted() && $docForm->isValid()) {
            $slugify = new Slugify();
            $cat = $docForm->getData();
            $docCat->setSlug($slugify->slugify($docForm->get('name')->getData()));
            $entityManager->persist($cat);
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_documentation');
        }

        return $this->render('admin_documentation/index.html.twig', [
            'cats' => $docCatList,
            'docForm' => $docForm->createView()
        ]);
    }

    #[Route('/admin/documentation/{cat_name}/liste', name: 'admin_doc_files')]
    public function add_docs(ManagerRegistry $doctrine, Request $request, String $cat_name): Response
    {
        $entityManager = $doctrine->getManager();
        $selectCat = $entityManager->getRepository(DocCategories::class)->findOneBy(['slug' => $cat_name]);
        $selectCatSlug = $selectCat->getSlug();
        $docFilesList = $entityManager->getRepository(DocFiles::class)->findBy(['doc_category' => $selectCat]);
        $docForm = $this->createForm(DocFilesType::class);
        $docForm->handleRequest($request);

        if ($docForm->isSubmitted() && $docForm->isValid()) {
            $slugify = new Slugify();
            $file = $docForm->get('files')->getData();

            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugify->slugify($originalFilename);
            $newFilename = $safeFilename . '.' . $file->guessExtension();
            try {
                $file->move(
                    $this->getParameter('docs_directory'),
                    $newFilename
                );
                $docFile = new DocFiles();
                $docFile->setDocName($newFilename);
                $docFile->setDocCategory($selectCat);
                $entityManager->persist($docFile);
                $entityManager->flush();
            } catch (\Throwable $th) {
                throw $th;
            }

            return $this->redirectToRoute('admin_doc_files', ['cat_name' => $selectCatSlug]);
        }

        return $this->render('admin_documentation/files-list.html.twig', [
            'files' => $docFilesList,
            'catname' => $cat_name,
            'docForm' => $docForm->createView()
        ]);
    }

    #[Route('/admin/documentation/delete_doc_file/{selectcatslug}/{id}', name: 'admin_doc_file_delete')]
    public function delete_doc(ManagerRegistry $doctrine, String $selectcatslug, int $id)
    {
        $entityManager = $doctrine->getManager();
        $fileToDel = $entityManager->getRepository(DocFiles::class)->find($id);

        var_dump($selectcatslug);

        $entityManager->remove($fileToDel);
        $entityManager->flush();

        return $this->redirectToRoute('admin_doc_files', ['cat_name' => $selectcatslug]);
    }
}
