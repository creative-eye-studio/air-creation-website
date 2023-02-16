<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DocProductsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('product_name', TextType::class, [
                'label' => 'Nom du produit'
            ])
            ->add('product_type', ChoiceType::class, [
                'choices' => [
                    "Bulletin d'alerte" => 0,
                    "Notre catalogue" => [
                        "Nos ailes (catalogue)" => 3,
                        "Nos tricycles (catalogue)" => 4
                    ],
                    "Nos anciens modèles" => [
                        "Nos ailes (modèles anciens)" => 1,
                        "Nos tricycles (modèles anciens)" => 2
                    ]
                ],
                'label' => "Type de produit"
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Enregistrer"
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
