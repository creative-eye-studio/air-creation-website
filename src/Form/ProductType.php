<?php

namespace App\Form;

use App\Entity\Products;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
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
            // CHAMPS OBLIGATOIRES
            ->add('product_name', TextType::class, [
                'label' => 'Nom du produit'
            ])
            ->add('product_logo_main', DropzoneType::class, [
                'label' => "Logo principal du produit",
                'data_class' => null,
                'mapped' => false
            ])
            ->add('product_logo_second', DropzoneType::class, [
                'label' => "Logo secondaire du produit",
                'data_class' => null,
                'mapped' => false
            ])
            ->add('product_main_thumb', DropzoneType::class, [
                'label' => "Image principale du produit",
                'data_class' => null,
                'mapped' => false
            ])
            ->add('product_second_thumb', DropzoneType::class, [
                'label' => "Image secondaire du produit",
                'data_class' => null,
                'mapped' => false
            ])
            ->add('product_desc', CKEditorType::class, [
                'label' => "Description du produit"
            ])
            ->add('product_capacity', ChoiceType::class, [
                'choices' => [
                    "Monoplace" => "Monoplace",
                    "Biplace" => "Biplace"
                ],
                'label' => "Capacité"
            ])
            ->add('product_wing', ChoiceType::class, [
                'choices' => [
                    "IFun" => "IFun",
                    "Nuvix" => "Nuvix",
                    "Bionix" => "Bionix"
                ],
                'label' => "Ailes"
            ])
            ->add('product_tricycle', ChoiceType::class, [
                'choices' => [
                    "Pixel" => "Pixel",
                    "Skypper Bush" => "Skypper Bush",
                    "Skypper Néo" => "Skypper Néo",
                    "Tanarg Néo" => "Tanarg Néo"
                ],
                'label' => "Tricycle"
            ])


            // MOTEUR 1
            ->add('product_motor_name_1', TextType::class, [
                'label' => "Nom du moteur",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_image_1', DropzoneType::class, [
                'label' => "Photo du moteur",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_1_icon', DropzoneType::class, [
                'label' => "Image du Block 1",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_1_title', TextType::class, [
                'label' => "Titre du Block 1",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_1_value', TextType::class, [
                'label' => "Valeur du Block 1",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_2_icon', DropzoneType::class, [
                'label' => "Image du Block 2",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_2_title', TextType::class, [
                'label' => "Titre du Block 2",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_2_value', TextType::class, [
                'label' => "Valeur du Block 2",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_3_icon', DropzoneType::class, [
                'label' => "Image du Block 3",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_3_title', TextType::class, [
                'label' => "Titre du Block 3",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_3_value', TextType::class, [
                'label' => "Valeur du Block 3",
                'mapped' => false,
                'required' => false
            ])

            ->add('product_motor_1_block_4_icon', DropzoneType::class, [
                'label' => "Image du Block 4",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_4_title', TextType::class, [
                'label' => "Titre du Block 4",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_1_block_4_value', TextType::class, [
                'label' => "Valeur du Block 4",
                'mapped' => false,
                'required' => false
            ])

            ->add('product_motor_vitesse_1', CKEditorType::class, [
                'label' => "Informations vitesse",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_vol_1', CKEditorType::class, [
                'label' => "Informations de vol",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_hauteur_1', CKEditorType::class, [
                'label' => "Informations sur la hauteur",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_masse_1', CKEditorType::class, [
                'label' => "Informations sur la masse",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_moteur_1', CKEditorType::class, [
                'label' => "Informations sur le moteur",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_reservoir_1', CKEditorType::class, [
                'label' => "Informations sur le réservoir",
                'mapped' => false,
                'required' => false
            ])

            
            // MOTEUR 2
            ->add('product_motor_name_2', TextType::class, [
                'label' => "Nom du moteur",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_image_2', DropzoneType::class, [
                'label' => "Photo du moteur",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_1_icon', DropzoneType::class, [
                'label' => "Image du Block 1",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_1_title', TextType::class, [
                'label' => "Titre du Block 1",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_1_value', TextType::class, [
                'label' => "Valeur du Block 1",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_2_icon', DropzoneType::class, [
                'label' => "Image du Block 2",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_2_title', TextType::class, [
                'label' => "Titre du Block 2",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_2_value', TextType::class, [
                'label' => "Valeur du Block 2",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_3_icon', DropzoneType::class, [
                'label' => "Image du Block 3",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_3_title', TextType::class, [
                'label' => "Titre du Block 3",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_3_value', TextType::class, [
                'label' => "Valeur du Block 3",
                'mapped' => false,
                'required' => false
            ])

            ->add('product_motor_2_block_4_icon', DropzoneType::class, [
                'label' => "Image du Block 4",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_4_title', TextType::class, [
                'label' => "Titre du Block 4",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_2_block_4_value', TextType::class, [
                'label' => "Valeur du Block 4",
                'mapped' => false,
                'required' => false
            ])

            ->add('product_motor_vitesse_2', CKEditorType::class, [
                'label' => "Informations vitesse",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_vol_2', CKEditorType::class, [
                'label' => "Informations de vol",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_hauteur_2', CKEditorType::class, [
                'label' => "Informations sur la hauteur",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_masse_2', CKEditorType::class, [
                'label' => "Informations sur la masse",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_moteur_2', CKEditorType::class, [
                'label' => "Informations sur le moteur",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_reservoir_2', CKEditorType::class, [
                'label' => "Informations sur le réservoir",
                'mapped' => false,
                'required' => false
            ])


            // MOTEUR 3
            ->add('product_motor_name_3', TextType::class, [
                'label' => "Nom du moteur",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_image_3', DropzoneType::class, [
                'label' => "Photo du moteur",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_3_block_1_icon', DropzoneType::class, [
                'label' => "Image du Block 1",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_3_block_1_title', TextType::class, [
                'label' => "Titre du Block 1",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_3_block_1_value', TextType::class, [
                'label' => "Valeur du Block 1",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_3_block_2_icon', DropzoneType::class, [
                'label' => "Image du Block 2",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_3_block_2_title', TextType::class, [
                'label' => "Titre du Block 2",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_3_block_2_value', TextType::class, [
                'label' => "Valeur du Block 2",
                'mapped' => false,
                'required' => false
            ])

            ->add('product_motor_3_block_3_icon', DropzoneType::class, [
                'label' => "Image du Block 3",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_3_block_3_title', TextType::class, [
                'label' => "Titre du Block 3",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_3_block_3_value', TextType::class, [
                'label' => "Valeur du Block 3",
                'mapped' => false,
                'required' => false
            ])
            
            ->add('product_motor_3_block_4_icon', DropzoneType::class, [
                'label' => "Image du Block 4",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_3_block_4_title', TextType::class, [
                'label' => "Titre du Block 4",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_3_block_4_value', TextType::class, [
                'label' => "Valeur du Block 4",
                'mapped' => false,
                'required' => false
            ])

            ->add('product_motor_vitesse_3', CKEditorType::class, [
                'label' => "Informations vitesse",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_vol_3', CKEditorType::class, [
                'label' => "Informations de vol",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_hauteur_3', CKEditorType::class, [
                'label' => "Informations sur la hauteur",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_masse_3', CKEditorType::class, [
                'label' => "Informations sur la masse",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_moteur_3', CKEditorType::class, [
                'label' => "Informations sur le moteur",
                'mapped' => false,
                'required' => false
            ])
            ->add('product_motor_reservoir_3', CKEditorType::class, [
                'label' => "Informations sur le réservoir",
                'mapped' => false,
                'required' => false
            ])


            // GALERIES
            ->add('product_gallery_vol', DropzoneType::class, [
                'label' => "Galerie 'En vol'",
                'multiple' => true,
                'mapped' => false,
                'required' => false,
                'data_class' => null
            ])
            ->add('product_gallery_atelier', DropzoneType::class, [
                'label' => "Galerie 'Atelier'",
                'multiple' => true,
                'mapped' => false,
                'required' => false,
                'data_class' => null
            ])
            ->add('product_gallery_lifestyle', DropzoneType::class, [
                'label' => "Galerie 'Lifestyle'",
                'multiple' => true,
                'mapped' => false,
                'required' => false,
                'data_class' => null
            ])


            // DIMENSIONS
            ->add('product_dim', DropzoneType::class, [
                'label' => "Dimensions",
                'data_class' => null,
                'mapped' => false,
                'required' => false
            ])
            

            // SEO
            ->add('product_meta_title', TextType::class, [
                'label' => "Meta title du produit",
                'required' => false
            ])

            ->add('product_meta_desc', TextareaType::class, [
                'label' => "Meta description du produit",
                'required' => false
            ])


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
