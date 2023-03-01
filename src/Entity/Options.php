<?php

namespace App\Entity;

use App\Repository\OptionsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OptionsRepository::class)]
class Options
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $option_name_fr = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $option_name_en = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $option_content_fr = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $option_content_en = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOptionNameFr(): ?string
    {
        return $this->option_name_fr;
    }

    public function setOptionNameFr(?string $option_name_fr): self
    {
        $this->option_name_fr = $option_name_fr;

        return $this;
    }

    public function getOptionNameEn(): ?string
    {
        return $this->option_name_en;
    }

    public function setOptionNameEn(?string $option_name_en): self
    {
        $this->option_name_en = $option_name_en;

        return $this;
    }

    public function getOptionContentFr(): ?string
    {
        return $this->option_content_fr;
    }

    public function setOptionContentFr(?string $option_content_fr): self
    {
        $this->option_content_fr = $option_content_fr;

        return $this;
    }

    public function getOptionContentEn(): ?string
    {
        return $this->option_content_en;
    }

    public function setOptionContentEn(?string $option_content_en): self
    {
        $this->option_content_en = $option_content_en;

        return $this;
    }
}
