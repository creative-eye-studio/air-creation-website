<?php

namespace App\Entity;

use App\Repository\DocProductsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DocProductsRepository::class)]
class DocProducts
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_name = null;

    #[ORM\Column(nullable: true)]
    private ?int $doc_product = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProductName(): ?string
    {
        return $this->product_name;
    }

    public function setProductName(?string $product_name): self
    {
        $this->product_name = $product_name;

        return $this;
    }

    public function getDocProduct(): ?int
    {
        return $this->doc_product;
    }

    public function setDocProduct(?int $doc_product): self
    {
        $this->doc_product = $doc_product;

        return $this;
    }
}
