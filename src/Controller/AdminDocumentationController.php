<?php

namespace App\Controller;

use App\Entity\DocProducts;
use App\Entity\DocFiles;
use App\Form\DocFilesType;
use App\Form\DocProductsType;
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
        $docCat = new DocProducts();
        $docCatList = $entityManager->getRepository(DocProducts::class)->findAll();
        $docForm = $this->createForm(DocProductsType::class, $docCat);
        $docForm->handleRequest($request);

        if ($docForm->isSubmitted() && $docForm->isValid()) {
            $product = $docForm->getData();
            $entityManager->persist($product);
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_documentation');
        }

        return $this->render('admin_documentation/index.html.twig', [
            'cats' => $docCatList,
            'docForm' => $docForm->createView()
        ]);
    }


    #[Route('/admin/documentation/{id}/liste', name: 'admin_doc_files')]
    public function add_docs(ManagerRegistry $doctrine, Request $request, int $id): Response
    {
        $entityManager = $doctrine->getManager();
        $selectCat = $entityManager->getRepository(DocProducts::class)->findOneBy(['id' => $id]);
        $docFilesList = $entityManager->getRepository(DocFiles::class)->findBy(['doc_model' => $selectCat->getId()]);
        $docForm = $this->createForm(DocFilesType::class);
        $docForm->handleRequest($request);

        if ($docForm->isSubmitted() && $docForm->isValid()) {
            $slugify = new Slugify();
            $files = $docForm->get('files')->getData();
            $locale = $docForm->get('locale')->getData();

            foreach ($files as $file) {
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
                    $docFile->setDocModel($selectCat);
                    $docFile->setDocLocal($locale);
                    $entityManager->persist($docFile);
                    $entityManager->flush();
                } catch (\Throwable $th) {
                    throw $th;
                }
            }

            return $this->redirectToRoute('admin_doc_files', ['id' => $selectCat->getId()]);
        }

        return $this->render('admin_documentation/files-list.html.twig', [
            'files' => $docFilesList,
            'catname' => $id,
            'docForm' => $docForm->createView()
        ]);
    }


    #[Route('/admin/documentation/category-manager/{id}', name: 'admin_cat_manager')]
    public function cat_manager(ManagerRegistry $doctrine, Request $request, int $id){
        $entityManager = $doctrine->getManager();
        $category = $entityManager->getRepository(DocProducts::class)->findOneBy(['id' => $id]);

        $docForm = $this->createForm(DocProductsType::class, $category);
        $docForm->handleRequest($request);
        if ($docForm->isSubmitted() && $docForm->isValid()) {
            $entityManager->persist($category);
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_documentation');
        }

        return $this->render('admin_documentation/cat-manager.html.twig', [
            'docForm' => $docForm->createView()
        ]);
    }


    #[Route('/admin/documentation/delete_doc_file/{selectcatslug}/{id}', name: 'admin_doc_file_delete')]
    public function delete_doc(ManagerRegistry $doctrine, int $selectcatslug, int $id)
    {
        $entityManager = $doctrine->getManager();
        $fileToDel = $entityManager->getRepository(DocFiles::class)->find($id);

        $entityManager->remove($fileToDel);
        $entityManager->flush();

        return $this->redirectToRoute('admin_doc_files', ['id' => $selectcatslug]);
    }


    #[Route('/admin/documentation/delete_doc_file/{id}', name: 'admin_doc_cat_delete')]
    public function delete_cat(ManagerRegistry $doctrine, int $id)
    {
        $entityManager = $doctrine->getManager();
        $catToDel = $entityManager->getRepository(DocProducts::class)->find($id);
        $filesOfCat = $entityManager->getRepository(DocFiles::class)->findBy(['doc_model' => $id]);

        if ($filesOfCat) {
            foreach ($filesOfCat as $file) {
                $entityManager->remove($file);
                $entityManager->flush();
            }
        }
        
        $entityManager->remove($catToDel);
        $entityManager->flush();

        return $this->redirectToRoute('app_admin_documentation');
    }

}
