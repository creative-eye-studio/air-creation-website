<?php

namespace App\Entity;

use App\Repository\NewsletterRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: NewsletterRepository::class)]
class Newsletter
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $mail_adress = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMailAdress(): ?string
    {
        return $this->mail_adress;
    }

    public function setMailAdress(?string $mail_adress): self
    {
        $this->mail_adress = $mail_adress;

        return $this;
    }
}
