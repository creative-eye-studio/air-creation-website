<?php

namespace App\Form;

use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PagesAdminFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('page_name', TextType::class, [
                'label' => 'Nom de la page'
            ])
            ->add('page_url', TextType::class, [
                'label' => 'URL de la page',
                'required' => false,
            ])
            ->add('page_model', ChoiceType::class, [
                'choices' => [
                    'Page Standard' => 0,
                    'Page En-tête rouge' => 1,
                ],
                'label' => 'Type de page'
            ])
            ->add('page_content', CKEditorType::class, [
                'label' => 'Contenu de la page'
            ])

            ->add('page_meta_title', TextType::class, [
                'label' => 'Balise Meta Title',
                'required' => false,
            ])
            ->add('page_meta_desc', TextareaType::class, [
                'label' => 'Balise Meta Description',
                'required' => false,
            ])

            ->add('page_submit', SubmitType::class, [
                'label' => 'Envoyer'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
