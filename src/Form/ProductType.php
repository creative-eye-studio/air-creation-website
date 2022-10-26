<?php

namespace App\Form;

use App\Entity\Products;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Dropzone\Form\DropzoneType;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // RESUME
            ->add('product_name', TextType::class, [
                'label' => 'Nom du produit'
            ])
            ->add('product_thumb', DropzoneType::class, [
                'label' => 'Image du produit',
                'data_class' => null
            ])
            ->add('product_intro', CKEditorType::class, [
                'label' => 'Présentation',
                'mapped' => false
            ])

            // DESC
            ->add('product_desc', CKEditorType::class, [
                'label' => 'Description',
                'mapped' => false
            ])

            // CARAC
            ->add('product_envergure', NumberType::class, [
                'label' => 'Envergure',
            ])
            ->add('product_surface_alaire', NumberType::class, [
                'label' => 'Surface alaire',
            ])
            ->add('product_surface', NumberType::class, [
                'label' => 'Hauteur',
            ])
            ->add('product_charge', NumberType::class, [
                'label' => 'Charge utile',
            ])
            ->add('product_masse', NumberType::class, [
                'label' => 'Masse à vide',
            ])
            ->add('product_masse_max', NumberType::class, [
                'label' => 'Masse maximum',
            ])
            
            ->add('product_motor_type')

            ->add('product_motor_pouls', NumberType::class, [
                'label' => 'Puissance moteur',
            ])
            ->add('product_speed_min', NumberType::class, [
                'label' => 'Vitesse minimale',
            ])
            ->add('product_speed_max', NumberType::class, [
                'label' => 'Vitesse maximale',
            ])
            ->add('product_elec_conso', NumberType::class, [
                'label' => 'Consommation électrique',
            ])
            ->add('product_fly_dist', NumberType::class, [
                'label' => 'Distance de roulement au décollage',
            ])
            ->add('product_fly_amount', NumberType::class, [
                'label' => 'Taux de montée',
            ])
            ->add('product_color', TextType::class, [
                'label' => 'Couleur',
            ])

            // IMAGES
            ->add('product_color_imgs', DropzoneType::class, [
                'label' => "Coloris",
                'multiple' => true,
                'mapped' => false,
                'data_class' => null,
                'required' => false
            ])
            ->add('product_access_imgs', DropzoneType::class, [
                'label' => "Accessoires",
                'multiple' => true,
                'mapped' => false,
                'data_class' => null,
                'required' => false
            ])
            ->add('product_gallery_imgs', DropzoneType::class, [
                'label' => "Galerie d'images",
                'multiple' => true,
                'mapped' => false,
                'data_class' => null,
                'required' => false
            ])

            // SEO
            ->add('product_meta_title', TextType::class, [
                'label' => 'Meta Title',
            ])
            ->add('product_meta_desc', TextareaType::class, [
                'label' => 'Meta Description',
            ])

            // HIDDEN
            ->add('product_url', HiddenType::class)
            ->add('product_id', HiddenType::class)

            // SUBMIT
            ->add('product_submit', SubmitType::class, [
                'label' => "Enregistrer"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Products::class,
        ]);
    }
}
