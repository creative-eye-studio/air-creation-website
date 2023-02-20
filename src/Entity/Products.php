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

    #[ORM\Column(length: 255)]
    private ?string $product_logo_main = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_logo_second = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $product_desc = null;

    #[ORM\Column(length: 255)]
    private ?string $product_capacity = null;

    #[ORM\Column(length: 255)]
    private ?string $product_wing = null;

    #[ORM\Column(length: 255)]
    private ?string $product_tricycle = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_dim = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_meta_title = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_meta_desc = null;

    #[ORM\Column(length: 255)]
    private ?string $product_slug = null;

    #[ORM\Column(length: 255)]
    private ?string $product_id = null;

    #[ORM\Column(length: 255)]
    private ?string $product_main_thumb = null;

    #[ORM\Column(length: 255)]
    private ?string $product_second_thumb = null;

    #[ORM\OneToMany(mappedBy: 'product_id', targetEntity: ProductsMotors::class)]
    private Collection $productMotor;

    #[ORM\OneToMany(mappedBy: 'image_product', targetEntity: ProductsImages::class)]
    private Collection $image_product;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $product_intro = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_lang = null;

    public function __construct()
    {
        $this->productMotor = new ArrayCollection();
        $this->image_product = new ArrayCollection();
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

    public function getProductLogoMain(): ?string
    {
        return $this->product_logo_main;
    }

    public function setProductLogoMain(string $product_logo_main): self
    {
        $this->product_logo_main = $product_logo_main;

        return $this;
    }

    public function getProductLogoSecond(): ?string
    {
        return $this->product_logo_second;
    }

    public function setProductLogoSecond(?string $product_logo_second): self
    {
        $this->product_logo_second = $product_logo_second;

        return $this;
    }

    public function getProductDesc(): ?string
    {
        return $this->product_desc;
    }

    public function setProductDesc(string $product_desc): self
    {
        $this->product_desc = $product_desc;

        return $this;
    }

    public function getProductCapacity(): ?string
    {
        return $this->product_capacity;
    }

    public function setProductCapacity(string $product_capacity): self
    {
        $this->product_capacity = $product_capacity;

        return $this;
    }

    public function getProductWing(): ?string
    {
        return $this->product_wing;
    }

    public function setProductWing(string $product_wing): self
    {
        $this->product_wing = $product_wing;

        return $this;
    }

    public function getProductTricycle(): ?string
    {
        return $this->product_tricycle;
    }

    public function setProductTricycle(string $product_tricycle): self
    {
        $this->product_tricycle = $product_tricycle;

        return $this;
    }

    public function getProductDim(): ?string
    {
        return $this->product_dim;
    }

    public function setProductDim(?string $product_dim): self
    {
        $this->product_dim = $product_dim;

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

    public function getProductSlug(): ?string
    {
        return $this->product_slug;
    }

    public function setProductSlug(string $product_slug): self
    {
        $this->product_slug = $product_slug;

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

    public function getProductMainThumb(): ?string
    {
        return $this->product_main_thumb;
    }

    public function setProductMainThumb(string $product_main_thumb): self
    {
        $this->product_main_thumb = $product_main_thumb;

        return $this;
    }

    public function getProductSecondThumb(): ?string
    {
        return $this->product_second_thumb;
    }

    public function setProductSecondThumb(string $product_second_thumb): self
    {
        $this->product_second_thumb = $product_second_thumb;

        return $this;
    }

    /**
     * @return Collection<int, ProductsMotors>
     */
    public function getProductMotor(): Collection
    {
        return $this->productMotor;
    }

    public function addProductMotor(ProductsMotors $productMotor): self
    {
        if (!$this->productMotor->contains($productMotor)) {
            $this->productMotor->add($productMotor);
            $productMotor->setProductId($this);
        }

        return $this;
    }

    public function removeProductMotor(ProductsMotors $productMotor): self
    {
        if ($this->productMotor->removeElement($productMotor)) {
            // set the owning side to null (unless already changed)
            if ($productMotor->getProductId() === $this) {
                $productMotor->setProductId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ProductsImages>
     */
    public function getImageProduct(): Collection
    {
        return $this->image_product;
    }

    public function addImageProduct(ProductsImages $imageProduct): self
    {
        if (!$this->image_product->contains($imageProduct)) {
            $this->image_product->add($imageProduct);
            $imageProduct->setImageProduct($this);
        }

        return $this;
    }

    public function removeImageProduct(ProductsImages $imageProduct): self
    {
        if ($this->image_product->removeElement($imageProduct)) {
            // set the owning side to null (unless already changed)
            if ($imageProduct->getImageProduct() === $this) {
                $imageProduct->setImageProduct(null);
            }
        }

        return $this;
    }

    public function getProductIntro(): ?string
    {
        return $this->product_intro;
    }

    public function setProductIntro(?string $product_intro): self
    {
        $this->product_intro = $product_intro;

        return $this;
    }

    public function getProductLang(): ?string
    {
        return $this->product_lang;
    }

    public function setProductLang(?string $product_lang): self
    {
        $this->product_lang = $product_lang;

        return $this;
    }
}
