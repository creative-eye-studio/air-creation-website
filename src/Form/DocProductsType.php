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
                    "Nos modèles" => [
                        "Ailes en stocks" => 1,
                        "Tricycles en stocks" => 2,
                    ],
                    "Nos anciens modèles" => [
                        "Nos anciennes ailes" => 3,
                        "Nos anciens tricycles" => 4,
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
