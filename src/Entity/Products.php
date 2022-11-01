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

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_meta_title = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $product_meta_desc = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_thumb = null;

    #[ORM\OneToMany(mappedBy: 'doc_product_id', targetEntity: Documentation::class)]
    private Collection $documentations;

    #[ORM\OneToMany(mappedBy: 'image_product', targetEntity: ProductsImages::class)]
    private Collection $productsImages;

    #[ORM\Column(length: 255)]
    private ?string $product_id = null;

    #[ORM\Column]
    private ?float $product_envergure = null;

    #[ORM\Column]
    private ?float $product_surface_alaire = null;

    #[ORM\Column]
    private ?float $product_surface = null;

    #[ORM\Column]
    private ?float $product_charge = null;

    #[ORM\Column]
    private ?float $product_masse = null;

    #[ORM\Column]
    private ?float $product_masse_max = null;

    #[ORM\Column(length: 255)]
    private ?string $product_motor_type = null;

    #[ORM\Column]
    private ?float $product_motor_pouls = null;

    #[ORM\Column]
    private ?float $product_speed_min = null;

    #[ORM\Column]
    private ?float $product_speed_max = null;

    #[ORM\Column]
    private ?float $product_elec_conso = null;

    #[ORM\Column]
    private ?float $product_fly_dist = null;

    #[ORM\Column(length: 255)]
    private ?string $product_color = null;

    #[ORM\Column]
    private ?float $product_fly_amount = null;

    #[ORM\Column(length: 255)]
    private ?string $product_type = null;

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

    public function getProductEnvergure(): ?float
    {
        return $this->product_envergure;
    }

    public function setProductEnvergure(float $product_envergure): self
    {
        $this->product_envergure = $product_envergure;

        return $this;
    }

    public function getProductSurfaceAlaire(): ?float
    {
        return $this->product_surface_alaire;
    }

    public function setProductSurfaceAlaire(float $product_surface_alaire): self
    {
        $this->product_surface_alaire = $product_surface_alaire;

        return $this;
    }

    public function getProductSurface(): ?float
    {
        return $this->product_surface;
    }

    public function setProductSurface(float $product_surface): self
    {
        $this->product_surface = $product_surface;

        return $this;
    }

    public function getProductCharge(): ?float
    {
        return $this->product_charge;
    }

    public function setProductCharge(float $product_charge): self
    {
        $this->product_charge = $product_charge;

        return $this;
    }

    public function getProductMasse(): ?float
    {
        return $this->product_masse;
    }

    public function setProductMasse(float $product_masse): self
    {
        $this->product_masse = $product_masse;

        return $this;
    }

    public function getProductMasseMax(): ?float
    {
        return $this->product_masse_max;
    }

    public function setProductMasseMax(float $product_masse_max): self
    {
        $this->product_masse_max = $product_masse_max;

        return $this;
    }

    public function getProductMotorType(): ?string
    {
        return $this->product_motor_type;
    }

    public function setProductMotorType(string $product_motor_type): self
    {
        $this->product_motor_type = $product_motor_type;

        return $this;
    }

    public function getProductMotorPouls(): ?float
    {
        return $this->product_motor_pouls;
    }

    public function setProductMotorPouls(float $product_motor_pouls): self
    {
        $this->product_motor_pouls = $product_motor_pouls;

        return $this;
    }

    public function getProductSpeedMin(): ?float
    {
        return $this->product_speed_min;
    }

    public function setProductSpeedMin(float $product_speed_min): self
    {
        $this->product_speed_min = $product_speed_min;

        return $this;
    }

    public function getProductSpeedMax(): ?float
    {
        return $this->product_speed_max;
    }

    public function setProductSpeedMax(float $product_speed_max): self
    {
        $this->product_speed_max = $product_speed_max;

        return $this;
    }

    public function getProductElecConso(): ?float
    {
        return $this->product_elec_conso;
    }

    public function setProductElecConso(float $product_elec_conso): self
    {
        $this->product_elec_conso = $product_elec_conso;

        return $this;
    }

    public function getProductFlyDist(): ?float
    {
        return $this->product_fly_dist;
    }

    public function setProductFlyDist(float $product_fly_dist): self
    {
        $this->product_fly_dist = $product_fly_dist;

        return $this;
    }

    public function getProductColor(): ?string
    {
        return $this->product_color;
    }

    public function setProductColor(string $product_color): self
    {
        $this->product_color = $product_color;

        return $this;
    }

    public function getProductFlyAmount(): ?float
    {
        return $this->product_fly_amount;
    }

    public function setProductFlyAmount(float $product_fly_amount): self
    {
        $this->product_fly_amount = $product_fly_amount;

        return $this;
    }

    public function getProductType(): ?string
    {
        return $this->product_type;
    }

    public function setProductType(string $product_type): self
    {
        $this->product_type = $product_type;

        return $this;
    }
}
