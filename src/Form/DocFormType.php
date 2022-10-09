<?php

namespace App\Form;

use App\Entity\Documentation;
use App\Entity\Products;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DocFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('doc_name', HiddenType::class, [
                'mapped' => false,
                'required' => false
            ])
            ->add('doc_file', FileType::class, [
                'label' => 'Fichiers',
                'mapped' => false,
                'multiple' => true
            ])
            ->add('doc_product_id', EntityType::class, [
                'class' => Products::class,
                'label' => 'Produit',
                'choice_value' => 'id',
                'choice_label' => 'product_name'
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Envoyer"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Documentation::class,
        ]);
    }
}
