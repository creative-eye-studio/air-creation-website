<?php

namespace App\Entity;

use App\Repository\OptionImagesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OptionImagesRepository::class)]
class OptionImages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'optionImages')]
    private ?Options $option_name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $option_image = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOptionName(): ?Options
    {
        return $this->option_name;
    }

    public function setOptionName(?Options $option_name): self
    {
        $this->option_name = $option_name;

        return $this;
    }

    public function getOptionImage(): ?string
    {
        return $this->option_image;
    }

    public function setOptionImage(?string $option_image): self
    {
        $this->option_image = $option_image;

        return $this;
    }
}
