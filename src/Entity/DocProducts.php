<?php

namespace App\Entity;

use App\Repository\DocProductsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DocProductsRepository::class)]
class DocProducts
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_name = null;

    #[ORM\Column(nullable: true)]
    private ?int $product_type = null;

    #[ORM\OneToMany(mappedBy: 'doc_model', targetEntity: DocFiles::class)]
    private Collection $docFiles;

    public function __construct()
    {
        $this->docFiles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProductName(): ?string
    {
        return $this->product_name;
    }

    public function setProductName(?string $product_name): self
    {
        $this->product_name = $product_name;

        return $this;
    }

    public function getProductType(): ?int
    {
        return $this->product_type;
    }

    public function setProductType(?int $product_type): self
    {
        $this->product_type = $product_type;

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
            $docFile->setDocModel($this);
        }

        return $this;
    }

    public function removeDocFile(DocFiles $docFile): self
    {
        if ($this->docFiles->removeElement($docFile)) {
            // set the owning side to null (unless already changed)
            if ($docFile->getDocModel() === $this) {
                $docFile->setDocModel(null);
            }
        }

        return $this;
    }
}
