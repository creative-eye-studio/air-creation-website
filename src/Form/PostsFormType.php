<?php

namespace App\Form;

use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PostsFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('post_name', TextType::class, [
                'label' => "Nom de l'article"
            ])
            ->add('post_url', TextType::class, [
                'label' => "URL de l'article (Optionnel)",
                'required' => false,
                'attr' => [
                    'placeholder' => "Si le champ n'est pas rempli, l'URL sera le nom de l'article"
                ]
            ])
            ->add('post_content', CKEditorType::class, [
                'label' => "Contenu de l'article"
            ])
            ->add('post_meta_title', TextType::class, [
                'label' => "Meta Titre de l'article (Optionnel)",
                'required' => false,
            ])
            ->add('post_meta_desc', TextareaType::class, [
                'label' => "Meta Description de l'article (Optionnel)",
                'required' => false,
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Envoyer"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
