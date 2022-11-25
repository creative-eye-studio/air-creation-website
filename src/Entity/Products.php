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

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_motor_1 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_motor_img_1 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_motor_2 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_motor_img_2 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_motor_3 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_motor_img_3 = null;

    #[ORM\Column(length: 255)]
    private ?string $product_name = null;

    #[ORM\Column(length: 255)]
    private ?string $product_url = null;

    #[ORM\Column]
    private ?bool $product_old = null;

    #[ORM\Column(length: 255)]
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

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_1 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_2 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_3 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_4 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_5 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_6 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_7 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_8 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_9 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_10 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_11 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_12 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_13 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_14 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_15 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_16 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_17 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_18 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_19 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_20 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_21 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_22 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_23 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_24 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_25 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_26 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_carac_27 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_dim_image = null;

    #[ORM\Column(length: 255)]
    private ?string $product_logo = null;

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

    public function getProductMotor1(): ?string
    {
        return $this->product_motor_1;
    }

    public function setProductMotor1(?string $product_motor_1): self
    {
        $this->product_motor_1 = $product_motor_1;

        return $this;
    }

    public function getProductMotorImg1(): ?string
    {
        return $this->product_motor_img_1;
    }

    public function setProductMotorImg1(string $product_motor_img_1): self
    {
        $this->product_motor_img_1 = $product_motor_img_1;

        return $this;
    }

    /**
     * Get the value of product_motor_2
     */ 
    public function getProductMotor2()
    {
        return $this->product_motor_2;
    }

    /**
     * Set the value of product_motor_2
     *
     * @return  self
     */ 
    public function setProductMotor2($product_motor_2)
    {
        $this->product_motor_2 = $product_motor_2;

        return $this;
    }

    /**
     * Get the value of product_motor_img_2
     */ 
    public function getProductMotorImg2()
    {
        return $this->product_motor_img_2;
    }

    /**
     * Set the value of product_motor_img_2
     *
     * @return  self
     */ 
    public function setProductMotorImg2($product_motor_img_2)
    {
        $this->product_motor_img_2 = $product_motor_img_2;

        return $this;
    }

    /**
     * Get the value of product_motor_3
     */ 
    public function getProductMotor3()
    {
        return $this->product_motor_3;
    }

    /**
     * Set the value of product_motor_3
     *
     * @return  self
     */ 
    public function setProductMotor3($product_motor_3)
    {
        $this->product_motor_3 = $product_motor_3;

        return $this;
    }

    /**
     * Get the value of product_motor_img_3
     */ 
    public function getProductMotorImg3()
    {
        return $this->product_motor_img_3;
    }

    /**
     * Set the value of product_motor_img_3
     *
     * @return  self
     */ 
    public function setProductMotorImg3($product_motor_img_3)
    {
        $this->product_motor_img_3 = $product_motor_img_3;

        return $this;
    }

    public function getProductCarac1(): ?string
    {
        return $this->product_carac_1;
    }

    public function setProductCarac1(?string $product_carac_1): self
    {
        $this->product_carac_1 = $product_carac_1;

        return $this;
    }

    public function getProductCarac2(): ?string
    {
        return $this->product_carac_2;
    }

    public function setProductCarac2(?string $product_carac_2): self
    {
        $this->product_carac_2 = $product_carac_2;

        return $this;
    }

    public function getProductCarac3(): ?string
    {
        return $this->product_carac_3;
    }

    public function setProductCarac3(?string $product_carac_3): self
    {
        $this->product_carac_3 = $product_carac_3;

        return $this;
    }

    public function getProductCarac4(): ?string
    {
        return $this->product_carac_4;
    }

    public function setProductCarac4(?string $product_carac_4): self
    {
        $this->product_carac_4 = $product_carac_4;

        return $this;
    }

    public function getProductCarac5(): ?string
    {
        return $this->product_carac_5;
    }

    public function setProductCarac5(?string $product_carac_5): self
    {
        $this->product_carac_5 = $product_carac_5;

        return $this;
    }

    public function getProductCarac6(): ?string
    {
        return $this->product_carac_6;
    }

    public function setProductCarac6(?string $product_carac_6): self
    {
        $this->product_carac_6 = $product_carac_6;

        return $this;
    }

    public function getProductCarac7(): ?string
    {
        return $this->product_carac_7;
    }

    public function setProductCarac7(?string $product_carac_7): self
    {
        $this->product_carac_7 = $product_carac_7;

        return $this;
    }

    public function getProductCarac8(): ?string
    {
        return $this->product_carac_8;
    }

    public function setProductCarac8(?string $product_carac_8): self
    {
        $this->product_carac_8 = $product_carac_8;

        return $this;
    }

    public function getProductCarac9(): ?string
    {
        return $this->product_carac_9;
    }

    public function setProductCarac9(?string $product_carac_9): self
    {
        $this->product_carac_9 = $product_carac_9;

        return $this;
    }

    public function getProductCarac10(): ?string
    {
        return $this->product_carac_10;
    }

    public function setProductCarac10(?string $product_carac_10): self
    {
        $this->product_carac_10 = $product_carac_10;

        return $this;
    }

    public function getProductCarac11(): ?string
    {
        return $this->product_carac_11;
    }

    public function setProductCarac11(?string $product_carac_11): self
    {
        $this->product_carac_11 = $product_carac_11;

        return $this;
    }

    public function getProductCarac12(): ?string
    {
        return $this->product_carac_12;
    }

    public function setProductCarac12(?string $product_carac_12): self
    {
        $this->product_carac_12 = $product_carac_12;

        return $this;
    }

    public function getProductCarac13(): ?string
    {
        return $this->product_carac_13;
    }

    public function setProductCarac13(?string $product_carac_13): self
    {
        $this->product_carac_13 = $product_carac_13;

        return $this;
    }

    public function getProductCarac14(): ?string
    {
        return $this->product_carac_14;
    }

    public function setProductCarac14(?string $product_carac_14): self
    {
        $this->product_carac_14 = $product_carac_14;

        return $this;
    }

    public function getProductCarac15(): ?string
    {
        return $this->product_carac_15;
    }

    public function setProductCarac15(?string $product_carac_15): self
    {
        $this->product_carac_15 = $product_carac_15;

        return $this;
    }

    public function getProductCarac16(): ?string
    {
        return $this->product_carac_16;
    }

    public function setProductCarac16(?string $product_carac_16): self
    {
        $this->product_carac_16 = $product_carac_16;

        return $this;
    }

    public function getProductCarac17(): ?string
    {
        return $this->product_carac_17;
    }

    public function setProductCarac17(?string $product_carac_17): self
    {
        $this->product_carac_17 = $product_carac_17;

        return $this;
    }

    public function getProductCarac18(): ?string
    {
        return $this->product_carac_18;
    }

    public function setProductCarac18(?string $product_carac_18): self
    {
        $this->product_carac_18 = $product_carac_18;

        return $this;
    }

    public function getProductCarac19(): ?string
    {
        return $this->product_carac_19;
    }

    public function setProductCarac19(?string $product_carac_19): self
    {
        $this->product_carac_19 = $product_carac_19;

        return $this;
    }

    public function getProductCarac20(): ?string
    {
        return $this->product_carac_20;
    }

    public function setProductCarac20(?string $product_carac_20): self
    {
        $this->product_carac_20 = $product_carac_20;

        return $this;
    }

    public function getProductCarac21(): ?string
    {
        return $this->product_carac_21;
    }

    public function setProductCarac21(?string $product_carac_21): self
    {
        $this->product_carac_21 = $product_carac_21;

        return $this;
    }

    public function getProductCarac22(): ?string
    {
        return $this->product_carac_22;
    }

    public function setProductCarac22(?string $product_carac_22): self
    {
        $this->product_carac_22 = $product_carac_22;

        return $this;
    }

    public function getProductCarac23(): ?string
    {
        return $this->product_carac_23;
    }

    public function setProductCarac23(?string $product_carac_23): self
    {
        $this->product_carac_23 = $product_carac_23;

        return $this;
    }

    public function getProductCarac24(): ?string
    {
        return $this->product_carac_24;
    }

    public function setProductCarac24(?string $product_carac_24): self
    {
        $this->product_carac_24 = $product_carac_24;

        return $this;
    }

    public function getProductCarac25(): ?string
    {
        return $this->product_carac_25;
    }

    public function setProductCarac25(?string $product_carac_25): self
    {
        $this->product_carac_25 = $product_carac_25;

        return $this;
    }

    public function getProductCarac26(): ?string
    {
        return $this->product_carac_26;
    }

    public function setProductCarac26(?string $product_carac_26): self
    {
        $this->product_carac_26 = $product_carac_26;

        return $this;
    }

    public function getProductCarac27(): ?string
    {
        return $this->product_carac_27;
    }

    public function setProductCarac27(?string $product_carac_27): self
    {
        $this->product_carac_27 = $product_carac_27;

        return $this;
    }

    public function getProductDimImage(): ?string
    {
        return $this->product_dim_image;
    }

    public function setProductDimImage(string $product_dim_image): self
    {
        $this->product_dim_image = $product_dim_image;

        return $this;
    }

    public function getProductLogo(): ?string
    {
        return $this->product_logo;
    }

    public function setProductLogo(string $product_logo): self
    {
        $this->product_logo = $product_logo;

        return $this;
    }
}
