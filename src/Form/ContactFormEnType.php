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

class ContactFormEnType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('gender', ChoiceType::class, [
                'choices'  => [
                    'Madam' => 'Madam',
                    'Sir' => 'Sir',
                ],
                'label' => 'Civility',
                'expanded' => true
            ])
            ->add('lname', TextType::class, [
                'label' => 'Last Name',
                'attr' => [
                    'id' => 'contact_form_lname'
                ]
            ])
            ->add('fname', TextType::class, [
                'label' => 'First Name',
            ])
            ->add('phone', TelType::class, [
                'label' => 'Phone',
            ])
            ->add('mail', EmailType::class, [
                'label' => 'Email adress',
            ])
            ->add('customer_type', ChoiceType::class, [
                'choices'  => [
                    'Customer' => 'Client',
                    'France Distributor' => 'Distributeur France',
                    'International Distributor' => 'Distributeur International',
                ],
                'label' => 'You are',
                'expanded' => true
            ])
            ->add('subject', ChoiceType::class, [
                'choices' => [
                    'Request' => "",
                    'Contact Marketing Service' => "Demande auprès du service commercial",
                    'Contact SAV Service' => "Demande de SAV",
                    'Other' => "Message depuis le site Internet",
                ],
                'label' => false
            ])
            ->add('message', TextareaType::class, [
                'label' => false,
                'attr' => [
                    'placeholder' => 'Request details',
                    'aria-label' => 'Request details'
                ]
            ])
            ->add('submit_button', SubmitType::class, [
                'label' => 'Send',
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