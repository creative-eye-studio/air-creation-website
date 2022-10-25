<?php

namespace App\Entity;

use App\Repository\ProductsImagesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductsImagesRepository::class)]
class ProductsImages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $image_name = null;

    #[ORM\ManyToOne(inversedBy: 'productsImages')]
    private ?Products $image_product = null;

    #[ORM\Column]
    private ?int $image_type = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImageName(): ?string
    {
        return $this->image_name;
    }

    public function setImageName(string $image_name): self
    {
        $this->image_name = $image_name;

        return $this;
    }

    public function getImageProduct(): ?Products
    {
        return $this->image_product;
    }

    public function setImageProduct(?Products $image_product): self
    {
        $this->image_product = $image_product;

        return $this;
    }

    public function getImageType(): ?int
    {
        return $this->image_type;
    }

    public function setImageType(int $image_type): self
    {
        $this->image_type = $image_type;

        return $this;
    }
}
