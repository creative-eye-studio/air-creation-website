<?php

namespace App\Entity;

use App\Repository\DocCategoriesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DocCategoriesRepository::class)]
class DocCategories
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    #[ORM\OneToMany(mappedBy: 'doc_category', targetEntity: DocFiles::class)]
    private Collection $docFiles;

    #[ORM\Column]
    private ?bool $old_product = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $wing = null;

    public function __construct()
    {
        $this->docFiles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return Collection<int, DocFiles>
     */
    public function getDocFiles(): Collection
    {
        return $this->docFiles;
    }

    public function addDocFile(DocFiles $docFile): self
    {
        if (!$this->docFiles->contains($docFile)) {
            $this->docFiles->add($docFile);
            $docFile->setDocCategory($this);
        }

        return $this;
    }

    public function removeDocFile(DocFiles $docFile): self
    {
        if ($this->docFiles->removeElement($docFile)) {
            // set the owning side to null (unless already changed)
            if ($docFile->getDocCategory() === $this) {
                $docFile->setDocCategory(null);
            }
        }

        return $this;
    }

    public function isOldProduct(): ?bool
    {
        return $this->old_product;
    }

    public function setOldProduct(bool $old_product): self
    {
        $this->old_product = $old_product;

        return $this;
    }

    public function getWing(): ?string
    {
        return $this->wing;
    }

    public function setWing(?string $wing): self
    {
        $this->wing = $wing;

        return $this;
    }
}
