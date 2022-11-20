<?php

namespace App\Form;

use App\Entity\Products;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
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
            // CHAMPS OBLIGATOIRES
            ->add('product_name', TextType::class, [
                'label' => 'Nom du produit'
            ])
            ->add('product_old', CheckboxType::class, [
                'label' => 'Produit ancien',
                'required' => false
            ])
            ->add('product_logo', DropzoneType::class, [
                'label' => 'Logo du produit',
                'mapped' => false,
                'empty_data' => '',
            ])
            ->add('product_thumb', DropzoneType::class, [
                'label' => 'Image du produit',
                'mapped' => false,
                'empty_data' => '',
            ])
            ->add('product_thumb_hover', DropzoneType::class, [
                'label' => 'Image du produit au survol',
                'mapped' => false,
                'empty_data' => '',
            ])

            ->add('product_intro', CKEditorType::class, [
                'label' => 'Présentation',
                'mapped' => false
            ])


            // MOTEURS
            ->add('product_motor_1', TextType::class, [
                'label' => "Moteur 1",
                'required' => false
            ])
            ->add('product_motor_img_1', DropzoneType::class, [
                'label' => "Image",
                'required' => false,
                'empty_data' => '',
            ])
            ->add('product_motor_2', TextType::class, [
                'label' => "Moteur 2",
                'required' => false
            ])
            ->add('product_motor_img_2', DropzoneType::class, [
                'label' => "Image",
                'required' => false,
                'empty_data' => '',
            ])
            ->add('product_motor_3', TextType::class, [
                'label' => "Moteur 3",
                'required' => false
            ])
            ->add('product_motor_img_3', DropzoneType::class, [
                'label' => "Image",
                'required' => false,
                'empty_data' => '',
            ])


            // BLOCKS PRINCIPAUX
            ->add('product_max_speed', TextType::class, [
                'label' => "Champ 1",
                'required' => false
            ])
            ->add('product_stall_speed', TextType::class, [
                'label' => "Champ 2",
                'required' => false
            ])
            ->add('product_mass_speed', TextType::class, [
                'label' => "Champ 3",
                'required' => false
            ])
            ->add('product_consumption', TextType::class, [
                'label' => "Champ 4",
                'required' => false
            ])


            // GALERIES
            ->add('fly_gallery', DropzoneType::class, [
                'label' => "Galerie 'En vol'",
                'data_class' => null,
                'required' => false,
                'multiple' => true,
                'mapped' => false,
            ])

            ->add('lifestyle_gallery', DropzoneType::class, [
                'label' => "Galerie 'Lifestyle'",
                'data_class' => null,
                'required' => false,
                'multiple' => true,
                'mapped' => false,
            ])

            ->add('workshop_gallery', DropzoneType::class, [
                'label' => "Galerie 'L'Atelier'",
                'data_class' => null,
                'required' => false,
                'multiple' => true,
                'mapped' => false,
            ])


            // DESC
            ->add('product_desc', CKEditorType::class, [
                'label' => 'Description',
                'mapped' => false,
                'required' => false
            ])


            // CARACTERISTIQUES
            ->add('product_carac_1', TextType::class, [
                'label' => "Vitesse max (palier)",
                'required' => false
            ])
            ->add('product_carac_2', TextType::class, [
                'label' => "Vitesse min (palier)",
                'required' => false
            ])
            ->add('product_carac_3', TextType::class, [
                'label' => "Vitesse de croisière",
                'required' => false
            ])
            ->add('product_carac_4', TextType::class, [
                'label' => "Vitesse de décrochage",
                'required' => false
            ])
            ->add('product_carac_5', TextType::class, [
                'label' => "Vitesse à ne pas dépasser",
                'required' => false
            ])
            ->add('product_carac_6', TextType::class, [
                'label' => "Vitesse Max (À ne pas dépasser en air très turbulent)",
                'required' => false
            ])
            ->add('product_carac_7', TextType::class, [
                'label' => "Vitesse de finesse max",
                'required' => false
            ])
            ->add('product_carac_8', TextType::class, [
                'label' => "Finesse max",
                'required' => false
            ])
            ->add('product_carac_9', TextType::class, [
                'label' => "Taux de montée",
                'required' => false
            ])
            ->add('product_carac_10', TextType::class, [
                'label' => "Distance de décollage",
                'required' => false
            ])
            ->add('product_carac_11', TextType::class, [
                'label' => "Passage des 15m",
                'required' => false
            ])
            ->add('product_carac_12', TextType::class, [
                'label' => "Masse à vide",
                'required' => false
            ])
            ->add('product_carac_13', TextType::class, [
                'label' => "Masse maximale",
                'required' => false
            ])
            ->add('product_carac_14', TextType::class, [
                'label' => "Charge utile",
                'required' => false
            ])
            ->add('product_carac_15', TextType::class, [
                'label' => "Moteur",
                'required' => false
            ])
            ->add('product_carac_16', TextType::class, [
                'label' => "Puissance",
                'required' => false
            ])
            ->add('product_carac_17', TextType::class, [
                'label' => "Hélice",
                'required' => false
            ])
            ->add('product_carac_18', TextType::class, [
                'label' => "Réduction",
                'required' => false
            ])
            ->add('product_carac_19', TextType::class, [
                'label' => "Capacité du réservoir",
                'required' => false
            ])
            ->add('product_carac_20', TextType::class, [
                'label' => "Consommation",
                'required' => false
            ])
            ->add('product_carac_21', TextType::class, [
                'label' => "Autonomie",
                'required' => false
            ])
            ->add('product_carac_22', TextType::class, [
                'label' => "Hauteur",
                'required' => false
            ])
            ->add('product_carac_23', TextType::class, [
                'label' => "Envergure",
                'required' => false
            ])
            ->add('product_carac_24', TextType::class, [
                'label' => "Longueur",
                'required' => false
            ])
            ->add('product_carac_25', TextType::class, [
                'label' => "Surface alaire",
                'required' => false
            ])
            ->add('product_carac_26', TextType::class, [
                'label' => "Type de profil",
                'required' => false
            ])
            ->add('product_carac_27', TextType::class, [
                'label' => "Capacité",
                'required' => false
            ])


            // DIMENSIONS
            ->add('product_dim', DropzoneType::class, [
                'label' => "Dimensions",
                'data_class' => null,
                'required' => false,
                'multiple' => true,
                'mapped' => false,
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


            // SEO
            ->add('product_meta_title', TextType::class, [
                'label' => 'Meta Title',
                'required' => false,
            ])
            ->add('product_meta_desc', TextareaType::class, [
                'label' => 'Meta Description',
                'required' => false,
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
