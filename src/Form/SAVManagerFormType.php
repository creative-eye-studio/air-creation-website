<?php

namespace App\Form;

use App\Entity\Products;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SAVManagerFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            /* ONGLET 1
            ------------------------------------------*/
            ->add('sav_lname', TextType::class, [
                'label' => 'Nom'
            ])
            ->add('sav_fname', TextType::class, [
                'label' => 'Prénom'
            ])
            ->add('sav_society', TextType::class, [
                'label' => 'Société (Optionnel)',
                'required' => false
            ])
            ->add('sav_adress', TextType::class, [
                'label' => 'Adresse'
            ])
            ->add('sav_adress_comp', TextType::class, [
                'label' => 'Complément d\'adresse (Optionnel)',
                'required' => false
            ])
            ->add('sav_postcode', TextType::class, [
                'label' => 'Code postal'
            ])
            ->add('sav_city', TextType::class, [
                'label' => 'Ville'
            ])
            ->add('sav_country', TextType::class, [
                'label' => 'Pays'
            ])
            ->add('sav_phone_1', TelType::class, [
                'label' => 'Téléphone 1'
            ])
            ->add('sav_phone_2', TelType::class, [
                'label' => 'Téléphone 2',
                'required' => false
            ])
            ->add('sav_email', EmailType::class, [
                'label' => 'Adresse E-Mail'
            ])

            /* ONGLET 2
            ------------------------------------------*/
            ->add('sav_product', EntityType::class, [
                'class' => Products::class,
                'choice_label' => 'Nom du produit'
            ])
            ->add('sav_product_not_found', TextareaType::class, [
                'label' => 'Si vous ne trouvez pas l\'article concerné, merci d\'indiquer la référence ci-dessous',
                'required' => false
            ])
            ->add('sav_serial_number', NumberType::class, [
                'label' => 'Numéro de série (Optionnel)',
                'required' => false
            ])
            ->add('sav_date_invoice', DateType::class, [
                'label' => 'Date de facturation',
                'required' => false
            ])
            ->add('sav_invoice_number', NumberType::class, [
                'label' => 'Numéro de facture (Optionnel)',
                'required' => false
            ])
            ->add('sav_guarantee', CheckboxType::class, [
                'label' => 'L\'article est encore sous garantie',
                'required' => false
            ])
            ->add('sav_request', TextareaType::class, [
                'label' => 'Description de la demande',
            ])
            ->add('sav_submit', SubmitType::class, [
                'label' => 'Envoyer'
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
