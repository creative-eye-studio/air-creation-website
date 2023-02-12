<?php

namespace App\Form;

use App\Classes\DocSearch;
use App\Entity\DocProducts;
use App\Repository\DocProductsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DocFilterType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('product_type', ChoiceType::class, [
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
                'label' => 'Nos types de documents'
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Rechercher",
                'attr' => [
                    'class' => "rounded"
                ]
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