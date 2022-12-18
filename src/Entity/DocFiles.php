<?php

namespace App\Entity;

use App\Repository\DocFilesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DocFilesRepository::class)]
class DocFiles
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $doc_name = null;

    #[ORM\ManyToOne(inversedBy: 'docFiles')]
    #[ORM\JoinColumn(nullable: false)]
    private ?DocCategories $doc_category = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDocName(): ?string
    {
        return $this->doc_name;
    }

    public function setDocName(string $doc_name): self
    {
        $this->doc_name = $doc_name;

        return $this;
    }

    public function getDocCategory(): ?DocCategories
    {
        return $this->doc_category;
    }

    public function setDocCategory(?DocCategories $doc_category): self
    {
        $this->doc_category = $doc_category;

        return $this;
    }
}
