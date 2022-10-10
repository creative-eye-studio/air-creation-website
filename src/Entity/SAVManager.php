<?php

namespace App\Entity;

use App\Repository\SAVManagerRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SAVManagerRepository::class)]
class SAVManager
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $lname = null;

    #[ORM\Column(length: 255)]
    private ?string $fname = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $society = null;

    #[ORM\Column(length: 255)]
    private ?string $adress_1 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $adress_2 = null;

    #[ORM\Column(length: 255)]
    private ?string $postcode = null;

    #[ORM\Column(length: 255)]
    private ?string $city = null;

    #[ORM\Column(length: 255)]
    private ?string $country = null;

    #[ORM\Column(length: 255)]
    private ?string $phone_1 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $phone_2 = null;

    #[ORM\Column(length: 255)]
    private ?string $mail_adress = null;

    #[ORM\Column(length: 255)]
    private ?string $product = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $product_custom = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $serial_number = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $invoice_date = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $invoice_number = null;

    #[ORM\Column]
    private ?bool $guarantee = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $ticket_number = null;

    #[ORM\Column]
    private ?float $repair_status = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLname(): ?string
    {
        return $this->lname;
    }

    public function setLname(string $lname): self
    {
        $this->lname = $lname;

        return $this;
    }

    public function getFname(): ?string
    {
        return $this->fname;
    }

    public function setFname(string $fname): self
    {
        $this->fname = $fname;

        return $this;
    }

    public function getSociety(): ?string
    {
        return $this->society;
    }

    public function setSociety(?string $society): self
    {
        $this->society = $society;

        return $this;
    }

    public function getAdress1(): ?string
    {
        return $this->adress_1;
    }

    public function setAdress1(string $adress_1): self
    {
        $this->adress_1 = $adress_1;

        return $this;
    }

    public function getAdress2(): ?string
    {
        return $this->adress_2;
    }

    public function setAdress2(?string $adress_2): self
    {
        $this->adress_2 = $adress_2;

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

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getPhone1(): ?string
    {
        return $this->phone_1;
    }

    public function setPhone1(string $phone_1): self
    {
        $this->phone_1 = $phone_1;

        return $this;
    }

    public function getPhone2(): ?string
    {
        return $this->phone_2;
    }

    public function setPhone2(?string $phone_2): self
    {
        $this->phone_2 = $phone_2;

        return $this;
    }

    public function getMailAdress(): ?string
    {
        return $this->mail_adress;
    }

    public function setMailAdress(string $mail_adress): self
    {
        $this->mail_adress = $mail_adress;

        return $this;
    }

    public function getProduct(): ?string
    {
        return $this->product;
    }

    public function setProduct(string $product): self
    {
        $this->product = $product;

        return $this;
    }

    public function getProductCustom(): ?string
    {
        return $this->product_custom;
    }

    public function setProductCustom(?string $product_custom): self
    {
        $this->product_custom = $product_custom;

        return $this;
    }

    public function getSerialNumber(): ?string
    {
        return $this->serial_number;
    }

    public function setSerialNumber(string $serial_number): self
    {
        $this->serial_number = $serial_number;

        return $this;
    }

    public function getInvoiceDate(): ?\DateTimeInterface
    {
        return $this->invoice_date;
    }

    public function setInvoiceDate(\DateTimeInterface $invoice_date): self
    {
        $this->invoice_date = $invoice_date;

        return $this;
    }

    public function getInvoiceNumber(): ?string
    {
        return $this->invoice_number;
    }

    public function setInvoiceNumber(?string $invoice_number): self
    {
        $this->invoice_number = $invoice_number;

        return $this;
    }

    public function isGuarantee(): ?bool
    {
        return $this->guarantee;
    }

    public function setGuarantee(bool $guarantee): self
    {
        $this->guarantee = $guarantee;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getTicketNumber(): ?string
    {
        return $this->ticket_number;
    }

    public function setTicketNumber(string $ticket_number): self
    {
        $this->ticket_number = $ticket_number;

        return $this;
    }

    public function getRepairStatus(): ?float
    {
        return $this->repair_status;
    }

    public function setRepairStatus(float $repair_status): self
    {
        $this->repair_status = $repair_status;

        return $this;
    }
}
