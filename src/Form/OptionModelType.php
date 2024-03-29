<?php

namespace App\Form;

use App\Entity\OptionModels;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType as TypeTextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OptionModelType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('model_name', TypeTextType::class, [
                'label' => "Non du modèle",
                'required' => false
            ])
            ->add('model_meta_title', TypeTextType::class, [
                'label' => "Meta title du modèle",
                'required' => false
            ])
            ->add('model_meta_desc', TextareaType::class, [
                'label' => "Meta description du modèle",
                'required' => false
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Envoyer"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => OptionModels::class,
        ]);
    }
}
