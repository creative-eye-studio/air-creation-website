<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class NewsletterFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                "label" => false,
                "attr" => [
                    "placeholder" => "Entrez votre adresse E-Mail",
                    "aria-label" => "Entrez votre adresse E-Mail"
                ]
            ])
            ->add('rgpd', CheckboxType::class, [
                "label" => "En soumettant ce formulaire, j'accepte de transmettre mes données à des fins de relation client",
            ])
            ->add('submit', SubmitType::class, [
                "label" => false
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
