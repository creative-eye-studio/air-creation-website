<?php

namespace App\Entity;

use App\Repository\DocumentationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DocumentationRepository::class)]
class Documentation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $doc_name = null;

    #[ORM\Column(length: 255)]
    private ?string $doc_file = null;

    #[ORM\ManyToOne(inversedBy: 'documentations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Products $doc_product_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDocName(): ?string
    {
        return $this->doc_name;
    }

    public function setDocName(?string $doc_name): self
    {
        $this->doc_name = $doc_name;

        return $this;
    }

    public function getDocFile(): ?string
    {
        return $this->doc_file;
    }

    public function setDocFile(string $doc_file): self
    {
        $this->doc_file = $doc_file;

        return $this;
    }

    public function getDocProductId(): ?Products
    {
        return $this->doc_product_id;
    }

    public function setDocProductId(?Products $doc_product_id): self
    {
        $this->doc_product_id = $doc_product_id;

        return $this;
    }
}
