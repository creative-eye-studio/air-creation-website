<?php

namespace App\Form;

use App\Entity\Products;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
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
                'mapped' => false,
                'required' => false,
                'empty_data' => '',
            ])
            ->add('product_intro', CKEditorType::class, [
                'label' => 'Présentation',
                'mapped' => false
            ])

            // CRITERES DE RECHERCHE
            ->add('product_capacity', ChoiceType::class, [
                'choices'  => [
                    'Monoplace' => 'Monoplace',
                    'Biplace' => 'Biplace',
                ],
                'label' => 'Capacité',
            ])
            ->add('product_wing', ChoiceType::class, [
                'choices'  => [
                    'IFun' => 'IFun',
                    'Nuvix' => 'Nuvix',
                    'BioniX' => 'BioniX',
                ],
                'label' => 'Aile',
            ])
            ->add('product_tricycle', ChoiceType::class, [
                'choices'  => [
                    'Pixel' => 'Pixel',
                    'Skypper Evo' => 'Skypper Evo',
                    'Tanarg Néo' => 'Tanarg Néo',
                ],
                'label' => 'Tricycle',
            ])

            // IMAGES
            ->add('product_color_imgs', DropzoneType::class, [
                'label' => "Coloris",
                'data_class' => null,
                'required' => false,
                'multiple' => true,
                'mapped' => false,
            ])
            ->add('product_access_imgs', DropzoneType::class, [
                'label' => "Accessoires",
                'data_class' => null,
                'required' => false,
                'multiple' => true,
                'mapped' => false,
            ])
            ->add('product_gallery_imgs', DropzoneType::class, [
                'label' => "Galerie d'images",
                'data_class' => null,
                'required' => false,
                'multiple' => true,
                'mapped' => false,
            ])

            // DESC
            ->add('product_desc', CKEditorType::class, [
                'label' => 'Description',
                'mapped' => false
            ])

            // CARAC
            ->add('product_carac', CKEditorType::class, [
                'label' => 'Caractéristiques',
                'mapped' => false
            ])

            // DIMS
            ->add('product_dims', CKEditorType::class, [
                'label' => 'Dimensions',
                'mapped' => false
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
