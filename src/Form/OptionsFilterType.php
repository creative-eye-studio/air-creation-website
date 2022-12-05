<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OptionsFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('product_name', ChoiceType::class, [
                'choices' => [
                    'Tanarg Néo' => 'Tanarg Néo',
                    'Skypper Evo' => 'Skypper Evo',
                    'Skypper Bush' => 'Skypper Bush',
                    'Pixel' => 'Pixel',
                ],
                'label' => "Type de produit souhaité"
            ])
            ->add('product_option', ChoiceType::class, [
                'choices' => [
                    'Les hélices' => 'Les hélices',
                    'Les tableaux de bord' => 'Les tableaux de bord',
                    'Instrument et communication' => 'Instrument et communication',
                    'Instruction' => 'Instruction',
                    'Transport' => 'Transport',
                    'Divers' => 'Divers',
                ],
                'expanded' => true,
                'label' => "Type d'options souhaitée"
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Envoyer"
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
