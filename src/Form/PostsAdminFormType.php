<?php

namespace App\Form;

use App\Entity\PostsList;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
<<<<<<< HEAD
use Symfony\Component\Form\Extension\Core\DataTransformer\DateTimeImmutableToDateTimeTransformer;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
=======
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
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
            // FR
            ->add('post_name_fr', TextType::class, [
                'label' => "Nom de l'article (FR)",
                'mapped' => false
            ])
            ->add('post_content_fr', CKEditorType::class, [
                'label' => "Contenu de l'article (FR)",
                'mapped' => false
            ])
            ->add('post_meta_title_fr', TextType::class, [
                'label' => "Meta Title de l'article (FR)",
                'required' => false,
                'mapped' => false
            ])
            ->add('post_meta_desc_fr', TextareaType::class, [
                'label' => "Meta Description de l'article (FR)",
                'required' => false,
                'mapped' => false
            ])

            // GLOBAL
            ->add('post_thumb', DropzoneType::class, [
                'label' => "Image de l'article",
                'required' => false,
                'mapped' => false
            ])
            ->add('post_url', HiddenType::class, [
                'label' => "URL de l'article (Optionnel)",
                'required' => false
            ])
<<<<<<< HEAD
            ->add('created_at', DateTimeType::class, [
                'label' => "Date de l'article",
                'widget' => 'single_text',
                'mapped' => false,
                'input' => 'datetime_immutable',
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
=======
            ->add('online', ChoiceType::class, [
                'label' => "Visibilité de l'article",
                'choices' => [
                    "En brouillon" => false,
                    "Publié" => true
                ]
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
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
