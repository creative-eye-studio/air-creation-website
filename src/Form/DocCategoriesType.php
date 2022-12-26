<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DocCategoriesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => "Nom de la catégorie"
            ])
            ->add('old_product', CheckboxType::class, [
                'label' => "Produit ancien",
                'required' => false
            ])
            ->add('wing', ChoiceType::class, [
                'choices'  => [
                    "IFun" => "IFun",
                    "IFun 16" => "IFun 16",
                    "IFun XL" => "IFun XL",
                    "BioniX 15" => "BioniX 15",
                    "BioniX²" => "BioniX²",
                    "NuviX" => "NuviX",
                    "Bio 15" => "Bio 15",
                    "Bio²" => "Bio²",
                ],
                'label' => 'Aile',
                'required' => false
            ])
            ->add('tricycle', ChoiceType::class, [
                'choices' => [
                    "Pixel" => "Pixel",
                    "Skypper Bush" => "Skypper Bush",
                    "Skypper Evo" => "Skypper Evo",
                    "Tanarg Néo" => "Tanarg Néo"
                ],
                'label' => "Tricycle",
                'required' => false
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Enregistrer la catégorie"
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
