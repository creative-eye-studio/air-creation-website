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
    private ?DocProducts $doc_model = null;

    #[ORM\Column]
    private ?int $DocLocal = null;

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

    public function getDocModel(): ?DocProducts
    {
        return $this->doc_model;
    }

    public function setDocModel(?DocProducts $doc_model): self
    {
        $this->doc_model = $doc_model;

        return $this;
    }

    public function getDocLocal(): ?int
    {
        return $this->DocLocal;
    }

    public function setDocLocal(int $DocLocal): self
    {
        $this->DocLocal = $DocLocal;

        return $this;
    }
}
