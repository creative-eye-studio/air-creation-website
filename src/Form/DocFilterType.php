<?php

namespace App\Form;

use App\Classes\DocSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DocFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
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
            ->add('filter_name', TextType::class, [
                'label' => 'Nom du produit',
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