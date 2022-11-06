<?php

namespace App\Form;

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
                    'Monoplace' => 'Monoplace',
                    'Biplace' => 'Biplace',
                ],
                'label' => 'Capacité',
            ])
            ->add('filter_wing', ChoiceType::class, [
                'choices'  => [
                    'IFun' => 'IFun',
                    'Nuvix' => 'Nuvix',
                    'BioniX' => 'BioniX',
                ],
                'label' => 'Aile',
            ])
            ->add('filter_tricycle', ChoiceType::class, [
                'choices'  => [
                    'Pixel' => 'Pixel',
                    'Skypper Evo' => 'Skypper Evo',
                    'Tanarg Néo' => 'Tanarg Néo',
                ],
                'label' => 'Tricycle',
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
