<?php

namespace App\Form;

use App\Classes\DocSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DocFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('wing', ChoiceType::class, [
                'choices'  => [
                    "Bulletin d'alerte" => 0,
                    "Nos anciens modèles" => [
                        "Nos ailes (anciens)" => 1,
                        "Nos tricycles (anciens)" => 2
                    ],
                    "Nos modèles actuels" => [
                        "Nos ailes (actuels)" => 3,
                        "Nos tricycles (actuels)" => 4
                    ],
                ],
                'label' => 'Nos documents'
            ])
            ->add('tricycle', ChoiceType::class, [
                'choices' => [
                    "Alerte" => "Alerte",
                    "iFun 13" => "iFun 13",
                    "iFun 16" => "iFun 16",
                    "iFun XL" => "iFun XL",
                    "Nuvix" => "Nuvix",
                    "BioniX 15" => "BioniX 15",
                    "BioniX²" => "BioniX²",
                    "Pixel" => "Pixel",
                    "Skypper Evo" => "Skypper Evo",
                    "Skypper Bush" => "Skypper Bush",
                    "Tanarg Néo" => "Tanarg Néo"
                ],
                'label' => 'Nos produits',
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Rechercher"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
            'data_class' => DocSearch::class,
            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}