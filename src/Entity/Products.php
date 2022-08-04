<?php

namespace App\Entity;

use App\Repository\ProductsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductsRepository::class)]
class Products
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $product_name = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $product_desc = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_shop_url = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_doc_url = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $product_colors = [];

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $product_accessories = [];

    #[ORM\Column(type: Types::TEXT)]
    private ?string $product_long_desc = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $product_carac = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProductName(): ?string
    {
        return $this->product_name;
    }

    public function setProductName(string $product_name): self
    {
        $this->product_name = $product_name;

        return $this;
    }

    public function getProductDesc(): ?string
    {
        return $this->product_desc;
    }

    public function setProductDesc(string $product_desc): self
    {
        $this->product_desc = $product_desc;

        return $this;
    }

    public function getProductShopUrl(): ?string
    {
        return $this->product_shop_url;
    }

    public function setProductShopUrl(?string $product_shop_url): self
    {
        $this->product_shop_url = $product_shop_url;

        return $this;
    }

    public function getProductDocUrl(): ?string
    {
        return $this->product_doc_url;
    }

    public function setProductDocUrl(?string $product_doc_url): self
    {
        $this->product_doc_url = $product_doc_url;

        return $this;
    }

    public function getProductColors(): array
    {
        return $this->product_colors;
    }

    public function setProductColors(array $product_colors): self
    {
        $this->product_colors = $product_colors;

        return $this;
    }

    public function getProductAccessories(): array
    {
        return $this->product_accessories;
    }

    public function setProductAccessories(?array $product_accessories): self
    {
        $this->product_accessories = $product_accessories;

        return $this;
    }

    public function getProductLongDesc(): ?string
    {
        return $this->product_long_desc;
    }

    public function setProductLongDesc(string $product_long_desc): self
    {
        $this->product_long_desc = $product_long_desc;

        return $this;
    }

    public function getProductCarac(): ?string
    {
        return $this->product_carac;
    }

    public function setProductCarac(?string $product_carac): self
    {
        $this->product_carac = $product_carac;

        return $this;
    }
}
