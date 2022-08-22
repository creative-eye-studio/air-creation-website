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
                    'Monsieur' => 'Monsieur',
                    'Madame' => 'Madame',
                ],
                'label' => null,
                'expanded' => true
            ])
            ->add('lname', TextType::class, [
                'label' => null,
                'attr' => [
                    'placeholder' => 'Nom',
                    'aria-label' => 'Nom'
                ]
            ])
            ->add('fname', TextType::class, [
                'label' => null,
                'attr' => [
                    'placeholder' => 'Prénom',
                    'aria-label' => 'Prénom'
                ]
            ])
            ->add('phone', TelType::class, [
                'label' => null,
                'attr' => [
                    'placeholder' => 'Téléphone',
                    'aria-label' => 'Téléphone'
                ]
            ])
            ->add('email', EmailType::class, [
                'label' => null,
                'attr' => [
                    'placeholder' => 'Adresse E-Mail',
                    'aria-label' => 'Adresse E-Mail'
                ]
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
                    'Contacter le service commercial' => 'Contacter le service commercial',
                    'Déposer ma candidature' => 'Déposer ma candidature',
                ]
            ])
            ->add('message', TextareaType::class, [
                'label' => null,
                'attr' => [
                    'placeholder' => 'Détails de la demande',
                    'aria-label' => 'Détails de la demande'
                ]
            ])
            ->add('submit_button', SubmitType::class, [
                'label' => 'Envoyer'
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
