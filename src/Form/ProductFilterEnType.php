<?php

namespace App\Form;

use App\Classes\ProductsSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductFilterEnType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('filter_capacity', ChoiceType::class, [
                'choices'  => [
                    'Every capacities' => "",
                    "Monoplace" => "Monoplace",
                    'Biplace' => 'Biplace',
                ],
                'label' => false,
                'required' => false
            ])
            ->add('filter_wing', ChoiceType::class, [
                'choices'  => [
                    'Every wings types' => "",
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
                    'Every tricycles types' => "",
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
