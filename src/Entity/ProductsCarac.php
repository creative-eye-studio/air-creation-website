<?php

namespace App\Entity;

use App\Repository\ProductsCaracRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductsCaracRepository::class)]
class ProductsCarac
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $carac_image = null;

    #[ORM\Column(length: 255)]
    private ?string $carac_label = null;

    #[ORM\ManyToOne(inversedBy: 'productsCaracs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Products $carac_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCaracImage(): ?string
    {
        return $this->carac_image;
    }

    public function setCaracImage(string $carac_image): self
    {
        $this->carac_image = $carac_image;

        return $this;
    }

    public function getCaracLabel(): ?string
    {
        return $this->carac_label;
    }

    public function setCaracLabel(string $carac_label): self
    {
        $this->carac_label = $carac_label;

        return $this;
    }

    public function getCaracId(): ?Products
    {
        return $this->carac_id;
    }

    public function setCaracId(?Products $carac_id): self
    {
        $this->carac_id = $carac_id;

        return $this;
    }
}
