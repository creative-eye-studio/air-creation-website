<?php

namespace App\Form;

use App\Entity\Chronologie;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChronologieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('chronologie_date', TextType::class, [
                'label' => 'Année'
            ])
            ->add('chronologie_type', ChoiceType::class, [
                'choices' => [
                    'Origines' => 'origines',
                    'Pionniers' => 'pionniers',
                    'Air Création' => 'air-creation',
                ],
                'label' => 'Section de la chronologie'
            ])
            ->add('chronologie_text', TextareaType::class, [
                'label' => 'Texte'
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Enregistrer'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Chronologie::class,
        ]);
    }
}
