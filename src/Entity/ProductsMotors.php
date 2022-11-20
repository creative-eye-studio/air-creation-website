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

    #[ORM\Column(length: 255)]
    private ?string $motor_name = null;

    #[ORM\ManyToOne(inversedBy: 'productsMotors')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Products $motor_product = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMotorName(): ?string
    {
        return $this->motor_name;
    }

    public function setMotorName(string $motor_name): self
    {
        $this->motor_name = $motor_name;

        return $this;
    }

    public function getMotorProduct(): ?Products
    {
        return $this->motor_product;
    }

    public function setMotorProduct(?Products $motor_product): self
    {
        $this->motor_product = $motor_product;

        return $this;
    }
}
