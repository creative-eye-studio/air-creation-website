<?php

namespace App\Form;

use App\Entity\OptionModels;
use App\Entity\Options;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OptionsFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('option_name_fr', TextType::class, [
                'label' => "Nom de l'option (FR)",
                'required' => false
            ])
            ->add('option_name_en', TextType::class, [
                'label' => "Nom de l'option (EN)",
                'required' => false
            ])
            ->add('option_content_fr', TextareaType::class, [
                'label' => "Contenu de l'option (FR)",
                'required' => false
            ])
            ->add('option_content_en', TextareaType::class, [
                'label' => "Contenu de l'option (EN)",
                'required' => false
            ])

            ->add('option_model', EntityType::class, [
                'class' => OptionModels::class,
                'choice_label' => 'model_name',
                'label' => "Modèle"
            ])

            ->add('submit', SubmitType::class, [
                'label' => "Envoyer"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Options::class,
        ]);
    }
}
