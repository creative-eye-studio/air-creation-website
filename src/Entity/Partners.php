<?php

namespace App\Entity;

use App\Config\PartnerProfile;
use App\Repository\PartnersRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PartnersRepository::class)]
class Partners
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column]
    private ?int $partner_cat = null;

    #[ORM\Column(length: 255)]
    private ?string $adress = null;

    #[ORM\Column(length: 255)]
    private ?string $postcode = null;

    #[ORM\Column(length: 255)]
    private ?string $city = null;

    #[ORM\Column(length: 255)]
    private ?string $website = null;

    #[ORM\Column(nullable: true)]
    private ?float $coord_long = null;

    #[ORM\Column(nullable: true)]
    private ?float $coord_lat = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tel_fixe = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tel_port = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tel_fax = null;

    #[ORM\Column(length: 255)]
    private ?string $manager = null;

    #[ORM\Column(length: 255, nullable: true, enumType: PartnerProfile::class)]
    private ?array $partner_subcat = null;

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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPartnerCat(): ?int
    {
        return $this->partner_cat;
    }

    public function setPartnerCat(int $partner_cat): self
    {
        $this->partner_cat = $partner_cat;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    public function getPostcode(): ?string
    {
        return $this->postcode;
    }

    public function setPostcode(string $postcode): self
    {
        $this->postcode = $postcode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(string $website): self
    {
        $this->website = $website;

        return $this;
    }

    public function getCoordLong(): ?float
    {
        return $this->coord_long;
    }

    public function setCoordLong(?float $coord_long): self
    {
        $this->coord_long = $coord_long;

        return $this;
    }

    public function getCoordLat(): ?float
    {
        return $this->coord_lat;
    }

    public function setCoordLat(?float $coord_lat): self
    {
        $this->coord_lat = $coord_lat;

        return $this;
    }

    public function getTelFixe(): ?string
    {
        return $this->tel_fixe;
    }

    public function setTelFixe(?string $tel_fixe): self
    {
        $this->tel_fixe = $tel_fixe;

        return $this;
    }

    public function getTelPort(): ?string
    {
        return $this->tel_port;
    }

    public function setTelPort(?string $tel_port): self
    {
        $this->tel_port = $tel_port;

        return $this;
    }

    public function getTelFax(): ?string
    {
        return $this->tel_fax;
    }

    public function setTelFax(?string $tel_fax): self
    {
        $this->tel_fax = $tel_fax;

        return $this;
    }

    public function getManager(): ?string
    {
        return $this->manager;
    }

    public function setManager(string $manager): self
    {
        $this->manager = $manager;

        return $this;
    }

    public function getPartnerSubcat(): ?array
    {
        return $this->partner_subcat;
    }

    public function setPartnerSubcat(?array $partner_subcat): self
    {
        $this->partner_subcat = $partner_subcat;

        return $this;
    }
}
