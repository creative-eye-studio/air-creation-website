<?php

namespace App\Form;

use App\Classes\ProductsSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('filter_capacity', ChoiceType::class, [
                'choices'  => [
                    'Toutes les capacités' => "",
                    "Monoplace" => "Monoplace",
                    'Biplace' => 'Biplace',
                ],
                'label' => false,
                'required' => false
            ])
            ->add('filter_wing', ChoiceType::class, [
                'choices'  => [
                    'Tous types d\'ailes' => "",
                    "iFun 13" => "IFun",
                    "iFun 16" => "iFun 16",
                    "iFun XL" => "iFun XL",
                    "BioniX 15" => "BioniX 15",
                    "BioniX²" => "BioniX²",
                    "NuviX" => "NuviX",
                ],
                'label' => false,
                'required' => false
            ])
            ->add('filter_tricycle', ChoiceType::class, [
                'choices'  => [
                    'Tous types de tricycles' => "",
                    "Pixel" => "Pixel",
                    "Skypper Bush" => "Skypper Bush",
                    "Skypper Evo" => "Skypper Evo",
                    "Tanarg Néo" => "Tanarg Néo"
                ],
                'label' => false,
                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
            'data_class' => ProductsSearch::class,
            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
