<?php

namespace App\Entity;

use App\Repository\ChronologieRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ChronologieRepository::class)]
class Chronologie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $chronologie_date = null;

    #[ORM\Column(length: 255)]
    private ?string $chronologie_type = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $chronologie_text = null;

    #[ORM\Column(length: 255)]
    private ?string $chronologie_img = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getChronologieDate(): ?string
    {
        return $this->chronologie_date;
    }

    public function setChronologieDate(string $chronologie_date): self
    {
        $this->chronologie_date = $chronologie_date;

        return $this;
    }

    public function getChronologieType(): ?string
    {
        return $this->chronologie_type;
    }

    public function setChronologieType(string $chronologie_type): self
    {
        $this->chronologie_type = $chronologie_type;

        return $this;
    }

    public function getChronologieText(): ?string
    {
        return $this->chronologie_text;
    }

    public function setChronologieText(string $chronologie_text): self
    {
        $this->chronologie_text = $chronologie_text;

        return $this;
    }

    public function getChronologieImg(): ?string
    {
        return $this->chronologie_img;
    }

    public function setChronologieImg(string $chronologie_img): self
    {
        $this->chronologie_img = $chronologie_img;

        return $this;
    }
}
