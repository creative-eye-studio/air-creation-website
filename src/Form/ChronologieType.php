<?php

namespace App\Form;

use App\Entity\Chronologie;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Dropzone\Form\DropzoneType;

class ChronologieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('chronologie_date', TextType::class, [
                'label' => 'Année'
            ])
            ->add('chronologie_img', DropzoneType::class, [
                'label' => "Image",
                'mapped' => false,
                'required' => false,
                'empty_data' => '',
            ])
            ->add('chronologie_type', ChoiceType::class, [
                'choices' => [
                    'Origines' => 'origines',
                    'Pionniers' => 'pionniers',
                    'Air Création' => 'air-creation',
                ],
                'label' => 'Section de la chronologie'
            ])
            ->add('chronologie_text', CKEditorType::class, [
                'label' => 'Texte (FR)'
            ])
            ->add('chronologie_text_en', CKEditorType::class, [
                'label' => 'Texte (EN)'
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Enregistrer'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Chronologie::class,
        ]);
    }
}
