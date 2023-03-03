<?php

namespace App\Entity;

use App\Repository\OptionsImagesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OptionsImagesRepository::class)]
class OptionsImages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image_name = null;

    #[ORM\ManyToOne(inversedBy: 'optionsImages')]
    private ?Options $image_option = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImageName(): ?string
    {
        return $this->image_name;
    }

    public function setImageName(?string $image_name): self
    {
        $this->image_name = $image_name;

        return $this;
    }

    public function getImageOption(): ?Options
    {
        return $this->image_option;
    }

    public function setImageOption(?Options $image_option): self
    {
        $this->image_option = $image_option;

        return $this;
    }
}
