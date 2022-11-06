<?php

namespace App\Form;

use App\Classes\ProductsSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
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
                'label' => 'Capacité',
                'required' => false
            ])
            ->add('filter_wing', ChoiceType::class, [
                'choices'  => [
                    'Tous types d\'ailes' => "",
                    'IFun' => 'IFun',
                    'Nuvix' => 'Nuvix',
                    'BioniX' => 'BioniX',
                ],
                'label' => 'Aile',
                'required' => false
            ])
            ->add('filter_tricycle', ChoiceType::class, [
                'choices'  => [
                    'Tous types de tricycles' => "",
                    'Pixel' => 'Pixel',
                    'Skypper Evo' => 'Skypper Evo',
                    'Tanarg Néo' => 'Tanarg Néo',
                ],
                'label' => 'Tricycle',
                'required' => false
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
