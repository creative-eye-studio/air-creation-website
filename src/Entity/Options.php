<?php

namespace App\Entity;

use App\Repository\OptionsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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

    #[ORM\ManyToOne(inversedBy: 'options')]
    private ?OptionModels $option_model = null;

    #[ORM\OneToMany(mappedBy: 'image_option', targetEntity: OptionsImages::class)]
    private Collection $optionsImages;

    public function __construct()
    {
        $this->optionsImages = new ArrayCollection();
    }

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

    public function getOptionModel(): ?OptionModels
    {
        return $this->option_model;
    }

    public function setOptionModel(?OptionModels $option_model): self
    {
        $this->option_model = $option_model;

        return $this;
    }

    /**
     * @return Collection<int, OptionsImages>
     */
    public function getOptionsImages(): Collection
    {
        return $this->optionsImages;
    }

    public function addOptionsImage(OptionsImages $optionsImage): self
    {
        if (!$this->optionsImages->contains($optionsImage)) {
            $this->optionsImages->add($optionsImage);
            $optionsImage->setImageOption($this);
        }

        return $this;
    }

    public function removeOptionsImage(OptionsImages $optionsImage): self
    {
        if ($this->optionsImages->removeElement($optionsImage)) {
            // set the owning side to null (unless already changed)
            if ($optionsImage->getImageOption() === $this) {
                $optionsImage->setImageOption(null);
            }
        }

        return $this;
    }
}
