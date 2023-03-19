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
                    "Toute la documentation" => 0,
                    "Bulletin d'alerte" => 6,
                    "Notre catalogue" => [
                        "Nos ailes (catalogue)" => 3,
                        "Nos tricycles (catalogue)" => 4
                    ],
                    "Nos anciens modèles" => [
                        "Nos ailes (modèles anciens)" => 1,
                        "Nos tricycles (modèles anciens)" => 2
                    ]
                ],
                'label' => false
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