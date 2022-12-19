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