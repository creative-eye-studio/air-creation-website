<?php

namespace App\Form;

use App\Entity\ProductsMotors;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Dropzone\Form\DropzoneType;

class ProductMotorType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('motor_name', TextType::class, [
                'label' => "Nom du moteur",
                'required' => false
            ])
            ->add('motor_image', DropzoneType::class, [
                'label' => "Image du moteur",
                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ProductsMotors::class,
        ]);
    }
}
