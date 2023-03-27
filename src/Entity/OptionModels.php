<?php

namespace App\Entity;

use App\Repository\OptionModelsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OptionModelsRepository::class)]
class OptionModels
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $model_name = null;

    #[ORM\OneToMany(mappedBy: 'option_model', targetEntity: Options::class)]
    private Collection $options;

    #[ORM\Column(length: 255)]
    private ?string $model_url = null;

    #[ORM\Column(length: 255)]
    private ?string $model_meta_title = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $model_meta_desc = null;

    public function __construct()
    {
        $this->options = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getModelName(): ?string
    {
        return $this->model_name;
    }

    public function setModelName(?string $model_name): self
    {
        $this->model_name = $model_name;

        return $this;
    }

    /**
     * @return Collection<int, Options>
     */
    public function getOptions(): Collection
    {
        return $this->options;
    }

    public function addOption(Options $option): self
    {
        if (!$this->options->contains($option)) {
            $this->options->add($option);
            $option->setOptionModel($this);
        }

        return $this;
    }

    public function removeOption(Options $option): self
    {
        if ($this->options->removeElement($option)) {
            // set the owning side to null (unless already changed)
            if ($option->getOptionModel() === $this) {
                $option->setOptionModel(null);
            }
        }

        return $this;
    }

    public function getModelUrl(): ?string
    {
        return $this->model_url;
    }

    public function setModelUrl(string $model_url): self
    {
        $this->model_url = $model_url;

        return $this;
    }

    public function getModelMetaTitle(): ?string
    {
        return $this->model_meta_title;
    }

    public function setModelMetaTitle(string $model_meta_title): self
    {
        $this->model_meta_title = $model_meta_title;

        return $this;
    }

    public function getModelMetaDesc(): ?string
    {
        return $this->model_meta_desc;
    }

    public function setModelMetaDesc(string $model_meta_desc): self
    {
        $this->model_meta_desc = $model_meta_desc;

        return $this;
    }
}
