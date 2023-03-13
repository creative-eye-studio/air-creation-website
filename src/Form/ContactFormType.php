<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('gender', ChoiceType::class, [
                'choices'  => [
                    'Madame' => 'Madame',
                    'Monsieur' => 'Monsieur',
                ],
                'label' => 'Civilité',
                'expanded' => true
            ])
            ->add('lname', TextType::class, [
                'label' => 'Nom',
            ])
            ->add('fname', TextType::class, [
                'label' => 'Prénom',
            ])
            ->add('phone', TelType::class, [
                'label' => 'Téléphone',
            ])
            ->add('email', EmailType::class, [
                'label' => 'Adresse E-Mail',
            ])
            ->add('customer_type', ChoiceType::class, [
                'choices'  => [
                    'Client' => 'Client',
                    'Distributeur France' => 'Distributeur France',
                    'Distributeur International' => 'Distributeur International',
                ],
                'label' => 'Vous êtes',
                'expanded' => true
            ])
            ->add('subject', ChoiceType::class, [
                'choices' => [
                    'Catégorie de la demande' => null,
                    'Contacter le service commercial' => 1,
                    'Déposer ma candidature' => 2,
                    'Contacter le SAV' => 3,
                    'Autre' => 4,
                ],
                'label' => false
            ])
            ->add('message', TextareaType::class, [
                'label' => false,
                'attr' => [
                    'placeholder' => 'Détails de la demande',
                    'aria-label' => 'Détails de la demande'
                ]
            ])
            ->add('submit_button', SubmitType::class, [
                'label' => 'Envoyer',
                'attr' => [
                    'class' => 'rounded'
                ]
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
