<?php

namespace App\Form;

use App\Entity\Products;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('product_name', TextType::class, [
                'label' => 'Nom du produit *' 
            ])
            ->add('product_desc', CKEditorType::class, [
                'label' => 'Courte description *'
            ])
            ->add('product_shop_url', UrlType::class, [
                'label' => 'Lien vers la page E-Commerce',
                'required' => false
            ])
            ->add('product_doc_url', UrlType::class, [
                'label' => 'Lien vers la documentation',
                'required' => false
            ])
            ->add('product_colors', FileType::class, [
                'label' => 'Coloris',
                'multiple' => true,
                'data_class' => null,
                'required' => false
            ])
            ->add('product_accessoiries', FileType::class, [
                'label' => 'Accessoires',
                'multiple' => true,
                'data_class' => null,
                'required' => false
            ])
            ->add('product_long_desc', CKEditorType::class, [
                'label' => 'Présentation détaillée du produit *'
            ])
            ->add('product_carac', CKEditorType::class, [
                'label' => 'Caractéristiques du produit (Utiliser le tableau pour la mise en page) *',
            ])
            ->add('product_images', FileType::class, [
                'label' => 'Images du produit',
                'multiple' => true,
                'data_class' => null,
                'required' => false
            ])
            ->add('product_submit', SubmitType::class, [
                'label' => 'Envoyer'
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
