<?php

namespace App\Entity;

use App\Repository\FAQListRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FAQListRepository::class)]
class FAQList
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $faq_name = null;

    #[ORM\Column(length: 255)]
    private ?string $faq_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFaqName(): ?string
    {
        return $this->faq_name;
    }

    public function setFaqName(string $faq_name): self
    {
        $this->faq_name = $faq_name;

        return $this;
    }

    public function getFaqId(): ?string
    {
        return $this->faq_id;
    }

    public function setFaqId(string $faq_id): self
    {
        $this->faq_id = $faq_id;

        return $this;
    }
}
