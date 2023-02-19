<?php

namespace App\Form;

use App\Entity\PostsList;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Dropzone\Form\DropzoneType;

class PostsAdminFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('post_name', TextType::class, [
                'label' => "Nom de l'article"
            ])
            ->add('post_url', TextType::class, [
                'label' => "URL de l'article (Optionnel)",
                'required' => false
            ])
            ->add('photo_filename', DropzoneType::class, [
                'label' => "Image de l'article (Jpg, Jpeg, Png)",
                'data_class' => null,
                'mapped' => false
            ])
            ->add('post_content', CKEditorType::class, [
                'label' => "Contenu de l'article (FR)",
                'mapped' => false
            ])
            ->add('post_meta_title', TextType::class, [
                'label' => "Titre de l'article (FR)",
                'required' => false
            ])
            ->add('post_meta_desc', TextareaType::class, [
                'label' => "Meta Description de l'article (FR- Optionnel)",
                'required' => false
            ])
            ->add('post_content_en', CKEditorType::class, [
                'label' => "Contenu de l'article (EN)",
                'mapped' => false,
                'required' => false
            ])
            ->add('post_meta_title_en', TextType::class, [
                'label' => "Titre de l'article (EN)",
                'required' => false
            ])
            ->add('post_meta_desc_en', TextareaType::class, [
                'label' => "Meta Description de l'article (EN - Optionnel)",
                'required' => false
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Enregistrer"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PostsList::class,
        ]);
    }
}
