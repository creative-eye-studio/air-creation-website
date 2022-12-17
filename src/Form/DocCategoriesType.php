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
                    'Tous types d\'ailes' => "",
                    'IFun' => 'IFun',
                    'Nuvix' => 'Nuvix',
                    'BioniX' => 'BioniX',
                ],
                'label' => 'Aile',
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
