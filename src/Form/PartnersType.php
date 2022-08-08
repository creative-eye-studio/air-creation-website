<?php

namespace App\Form;

use App\Entity\Partners;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PartnersType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom de la société'
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email de la société'
            ])
            ->add('partner_cat', ChoiceType::class, [
                'choices'=> [
                    'Revendeur' => 0,
                    'Formateur' => 1,
                ],
                'label' => "Catégorie du partenaire"
            ])
            ->add('adress', TextType::class, [
                'label' => "Adresse postale"
            ])
            ->add('postcode', TextType::class, [
                'label' => "Code postal"
            ])
            ->add('city', TextType::class, [
                'label' => "Ville"
            ])
            ->add('website', UrlType::class, [
                'label' => "Site Internet"
            ])
            ->add('coord_long', TextType::class, [
                'label' => "Coordonnées Longitude"
            ])
            ->add('coord_lat', TextType::class, [
                'label' => "Coordonnées Latitude"
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Envoyer"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Partners::class,
        ]);
    }
}
