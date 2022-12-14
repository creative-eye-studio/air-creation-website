<?php

namespace App\Entity;

use App\Repository\ProductsMotorsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductsMotorsRepository::class)]
class ProductsMotors
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_1_image = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_1_name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_1_value = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_2_image = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_2_title = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_2_value = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_3_image = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_3_title = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_3_value = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_4_image = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_4_title = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_block_4_value = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_infos_vitesse = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_infos_vol = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_infos_hauteur = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_infos_masse = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_infos_moteur = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_infos_reservoir = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $motor_main_image = null;

    #[ORM\ManyToOne(inversedBy: 'productsMotors')]
    private ?Products $product_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setProductId(?Products $product_id): self
    {
        $this->product_id = $product_id;

        return $this;
    }

    public function getMotorName(): ?string
    {
        return $this->motor_name;
    }

    public function setMotorName(?string $motor_name): self
    {
        $this->motor_name = $motor_name;

        return $this;
    }

    public function getMotorBlock1Image(): ?string
    {
        return $this->motor_block_1_image;
    }

    public function setMotorBlock1Image(?string $motor_block_1_image): self
    {
        $this->motor_block_1_image = $motor_block_1_image;

        return $this;
    }

    public function getMotorBlock1Name(): ?string
    {
        return $this->motor_block_1_name;
    }

    public function setMotorBlock1Name(?string $motor_block_1_name): self
    {
        $this->motor_block_1_name = $motor_block_1_name;

        return $this;
    }

    public function getMotorBlock1Value(): ?string
    {
        return $this->motor_block_1_value;
    }

    public function setMotorBlock1Value(?string $motor_block_1_value): self
    {
        $this->motor_block_1_value = $motor_block_1_value;

        return $this;
    }

    public function getMotorBlock2Image(): ?string
    {
        return $this->motor_block_2_image;
    }

    public function setMotorBlock2Image(?string $motor_block_2_image): self
    {
        $this->motor_block_2_image = $motor_block_2_image;

        return $this;
    }

    public function getMotorBlock2Title(): ?string
    {
        return $this->motor_block_2_title;
    }

    public function setMotorBlock2Title(?string $motor_block_2_title): self
    {
        $this->motor_block_2_title = $motor_block_2_title;

        return $this;
    }

    public function getMotorBlock2Value(): ?string
    {
        return $this->motor_block_2_value;
    }

    public function setMotorBlock2Value(?string $motor_block_2_value): self
    {
        $this->motor_block_2_value = $motor_block_2_value;

        return $this;
    }

    public function getMotorBlock3Image()
    {
        return $this->motor_block_3_image;
    }

    public function setMotorBlock3Image($motor_block_3_image)
    {
        $this->motor_block_3_image = $motor_block_3_image;

        return $this;
    }

    public function getMotorBlock3Title()
    {
        return $this->motor_block_3_title;
    }

    public function setMotorBlock3Title($motor_block_3_title)
    {
        $this->motor_block_3_title = $motor_block_3_title;

        return $this;
    }
    
    public function getMotorBlock3Value()
    {
        return $this->motor_block_3_value;
    }

    public function setMotorBlock3Value($motor_block_3_value)
    {
        $this->motor_block_3_value = $motor_block_3_value;

        return $this;
    }

    public function getMotorBlock4Image()
    {
        return $this->motor_block_4_image;
    }

    public function setMotorBlock4Image($motor_block_4_image)
    {
        $this->motor_block_4_image = $motor_block_4_image;

        return $this;
    }

    public function getMotorBlock4Title()
    {
        return $this->motor_block_4_title;
    }

    public function setMotorBlock4Title($motor_block_4_title)
    {
        $this->motor_block_4_title = $motor_block_4_title;

        return $this;
    }
    
    public function getMotorBlock4Value()
    {
        return $this->motor_block_4_value;
    }

    public function setMotorBlock4Value($motor_block_4_value)
    {
        $this->motor_block_4_value = $motor_block_4_value;

        return $this;
    }

    public function getMotorInfosVitesse(): ?string
    {
        return $this->motor_infos_vitesse;
    }

    public function setMotorInfosVitesse(?string $motor_infos_vitesse): self
    {
        $this->motor_infos_vitesse = $motor_infos_vitesse;

        return $this;
    }

    public function getMotorInfosVol(): ?string
    {
        return $this->motor_infos_vol;
    }

    public function setMotorInfosVol(?string $motor_infos_vol): self
    {
        $this->motor_infos_vol = $motor_infos_vol;

        return $this;
    }

    public function getMotorInfosHauteur(): ?string
    {
        return $this->motor_infos_hauteur;
    }

    public function setMotorInfosHauteur(?string $motor_infos_hauteur): self
    {
        $this->motor_infos_hauteur = $motor_infos_hauteur;

        return $this;
    }

    public function getMotorInfosMasse(): ?string
    {
        return $this->motor_infos_masse;
    }

    public function setMotorInfosMasse(?string $motor_infos_masse): self
    {
        $this->motor_infos_masse = $motor_infos_masse;

        return $this;
    }

    public function getMotorInfosMoteur(): ?string
    {
        return $this->motor_infos_moteur;
    }

    public function setMotorInfosMoteur(?string $motor_infos_moteur): self
    {
        $this->motor_infos_moteur = $motor_infos_moteur;

        return $this;
    }

    public function getMotorInfosReservoir(): ?string
    {
        return $this->motor_infos_reservoir;
    }

    public function setMotorInfosReservoir(?string $motor_infos_reservoir): self
    {
        $this->motor_infos_reservoir = $motor_infos_reservoir;

        return $this;
    }

    public function getMotorMainImage(): ?string
    {
        return $this->motor_main_image;
    }

    public function setMotorMainImage(?string $motor_main_image): self
    {
        $this->motor_main_image = $motor_main_image;

        return $this;
    }

    public function getProductId(): ?Products
    {
        return $this->product_id;
    }
}
