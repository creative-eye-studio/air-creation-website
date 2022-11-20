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
    private ?string $product_url = null;

    #[ORM\Column]
    private ?bool $product_old = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_thumb = null;

    #[ORM\Column(length: 255)]
    private ?string $product_thumb_hover = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_meta_title = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $product_meta_desc = null;

    #[ORM\OneToMany(mappedBy: 'doc_product_id', targetEntity: Documentation::class)]
    private Collection $documentations;

    #[ORM\OneToMany(mappedBy: 'image_product', targetEntity: ProductsImages::class)]
    private Collection $productsImages;

    #[ORM\Column(length: 255)]
    private ?string $product_id = null;

    #[ORM\Column(length: 255)]
    private ?string $product_capacity = null;

    #[ORM\Column(length: 255)]
    private ?string $product_wing = null;

    #[ORM\Column(length: 255)]
    private ?string $product_tricycle = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_max_speed = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_stall_speed = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_mass_speed = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_consumption = null;

    #[ORM\OneToMany(mappedBy: 'carac_id', targetEntity: ProductsCarac::class)]
    private Collection $productsCaracs;

    #[ORM\OneToMany(mappedBy: 'motor_product', targetEntity: ProductsMotors::class)]
    private Collection $productsMotors;

    public function __construct()
    {
        $this->documentations = new ArrayCollection();
        $this->productsImages = new ArrayCollection();
        $this->productsCaracs = new ArrayCollection();
        $this->productsMotors = new ArrayCollection();
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

    public function getProductThumbHover(): ?string
    {
        return $this->product_thumb_hover;
    }

    public function setProductThumbHover(string $product_thumb_hover): self
    {
        $this->product_thumb_hover = $product_thumb_hover;

        return $this;
    }

    public function isProductOld(): ?bool
    {
        return $this->product_old;
    }

    public function setProductOld(bool $product_old): self
    {
        $this->product_old = $product_old;

        return $this;
    }

    public function getProductMaxSpeed(): ?string
    {
        return $this->product_max_speed;
    }

    public function setProductMaxSpeed(?string $product_max_speed): self
    {
        $this->product_max_speed = $product_max_speed;

        return $this;
    }

    public function getProductStallSpeed(): ?string
    {
        return $this->product_stall_speed;
    }

    public function setProductStallSpeed(?string $product_stall_speed): self
    {
        $this->product_stall_speed = $product_stall_speed;

        return $this;
    }

    public function getProductMassSpeed(): ?string
    {
        return $this->product_mass_speed;
    }

    public function setProductMassSpeed(?string $product_mass_speed): self
    {
        $this->product_mass_speed = $product_mass_speed;

        return $this;
    }

    public function getProductConsumption(): ?string
    {
        return $this->product_consumption;
    }

    public function setProductConsumption(?string $product_consumption): self
    {
        $this->product_consumption = $product_consumption;

        return $this;
    }

    /**
     * @return Collection<int, ProductsCarac>
     */
    public function getProductsCaracs(): Collection
    {
        return $this->productsCaracs;
    }

    public function addProductsCarac(ProductsCarac $productsCarac): self
    {
        if (!$this->productsCaracs->contains($productsCarac)) {
            $this->productsCaracs->add($productsCarac);
            $productsCarac->setCaracId($this);
        }

        return $this;
    }

    public function removeProductsCarac(ProductsCarac $productsCarac): self
    {
        if ($this->productsCaracs->removeElement($productsCarac)) {
            // set the owning side to null (unless already changed)
            if ($productsCarac->getCaracId() === $this) {
                $productsCarac->setCaracId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ProductsMotors>
     */
    public function getProductsMotors(): Collection
    {
        return $this->productsMotors;
    }

    public function addProductsMotor(ProductsMotors $productsMotor): self
    {
        if (!$this->productsMotors->contains($productsMotor)) {
            $this->productsMotors->add($productsMotor);
            $productsMotor->setMotorProduct($this);
        }

        return $this;
    }

    public function removeProductsMotor(ProductsMotors $productsMotor): self
    {
        if ($this->productsMotors->removeElement($productsMotor)) {
            // set the owning side to null (unless already changed)
            if ($productsMotor->getMotorProduct() === $this) {
                $productsMotor->setMotorProduct(null);
            }
        }

        return $this;
    }
}
