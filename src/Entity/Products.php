<?php

namespace App\Entity;

use App\Repository\ProductsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductsRepository::class)]
class Products
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $product_name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_shop_url = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_doc_url = null;

    #[ORM\Column(length: 255)]
    private ?string $product_url = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_meta_title = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $product_meta_desc = null;

    #[ORM\Column(length: 255)]
    private ?string $product_thumb = null;

    #[ORM\OneToMany(mappedBy: 'doc_product_id', targetEntity: Documentation::class)]
    private Collection $documentations;

    #[ORM\OneToMany(mappedBy: 'image_product', targetEntity: ProductsImages::class)]
    private Collection $productsImages;

    #[ORM\Column(length: 255)]
    private ?string $product_id = null;

    public function __construct()
    {
        $this->documentations = new ArrayCollection();
        $this->productsImages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProductName(): ?string
    {
        return $this->product_name;
    }

    public function setProductName(string $product_name): self
    {
        $this->product_name = $product_name;

        return $this;
    }

    public function getProductShopUrl(): ?string
    {
        return $this->product_shop_url;
    }

    public function setProductShopUrl(?string $product_shop_url): self
    {
        $this->product_shop_url = $product_shop_url;

        return $this;
    }

    public function getProductDocUrl(): ?string
    {
        return $this->product_doc_url;
    }

    public function setProductDocUrl(?string $product_doc_url): self
    {
        $this->product_doc_url = $product_doc_url;

        return $this;
    }

    public function getProductUrl(): ?string
    {
        return $this->product_url;
    }

    public function setProductUrl(string $product_url): self
    {
        $this->product_url = $product_url;

        return $this;
    }

    public function getProductMetaTitle(): ?string
    {
        return $this->product_meta_title;
    }

    public function setProductMetaTitle(?string $product_meta_title): self
    {
        $this->product_meta_title = $product_meta_title;

        return $this;
    }

    public function getProductMetaDesc(): ?string
    {
        return $this->product_meta_desc;
    }

    public function setProductMetaDesc(?string $product_meta_desc): self
    {
        $this->product_meta_desc = $product_meta_desc;

        return $this;
    }

    public function getProductThumb(): ?string
    {
        return $this->product_thumb;
    }

    public function setProductThumb(string $product_thumb): self
    {
        $this->product_thumb = $product_thumb;

        return $this;
    }

    /**
     * @return Collection<int, Documentation>
     */
    public function getDocumentations(): Collection
    {
        return $this->documentations;
    }

    public function addDocumentation(Documentation $documentation): self
    {
        if (!$this->documentations->contains($documentation)) {
            $this->documentations->add($documentation);
            $documentation->setDocProductId($this);
        }

        return $this;
    }

    public function removeDocumentation(Documentation $documentation): self
    {
        if ($this->documentations->removeElement($documentation)) {
            // set the owning side to null (unless already changed)
            if ($documentation->getDocProductId() === $this) {
                $documentation->setDocProductId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ProductsImages>
     */
    public function getProductsImages(): Collection
    {
        return $this->productsImages;
    }

    public function addProductsImage(ProductsImages $productsImage): self
    {
        if (!$this->productsImages->contains($productsImage)) {
            $this->productsImages->add($productsImage);
            $productsImage->setImageProduct($this);
        }

        return $this;
    }

    public function removeProductsImage(ProductsImages $productsImage): self
    {
        if ($this->productsImages->removeElement($productsImage)) {
            // set the owning side to null (unless already changed)
            if ($productsImage->getImageProduct() === $this) {
                $productsImage->setImageProduct(null);
            }
        }

        return $this;
    }

    public function getProductId(): ?string
    {
        return $this->product_id;
    }

    public function setProductId(string $product_id): self
    {
        $this->product_id = $product_id;

        return $this;
    }
}
