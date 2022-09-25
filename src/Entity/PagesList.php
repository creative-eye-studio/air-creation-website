<?php

namespace App\Entity;

use App\Repository\PagesListRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PagesListRepository::class)]
class PagesList
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $page_name;

    #[ORM\Column(type: 'string', length: 255)]
    private $page_url;

    #[ORM\Column(type: 'string', length: 255)]
    private $page_id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $page_meta_title;

    #[ORM\Column]
    private ?bool $blocked_page = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $page_meta_desc = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPageName(): ?string
    {
        return $this->page_name;
    }

    public function setPageName(string $page_name): self
    {
        $this->page_name = $page_name;

        return $this;
    }

    public function getPageUrl(): ?string
    {
        return $this->page_url;
    }

    public function setPageUrl(string $page_url): self
    {
        $this->page_url = $page_url;

        return $this;
    }

    public function getPageId(): ?string
    {
        return $this->page_id;
    }

    public function setPageId(string $page_id): self
    {
        $this->page_id = $page_id;

        return $this;
    }

    public function getPageMetaTitle(): ?string
    {
        return $this->page_meta_title;
    }

    public function setPageMetaTitle(string $page_meta_title): self
    {
        $this->page_meta_title = $page_meta_title;

        return $this;
    }

    public function isBlockedPage(): ?bool
    {
        return $this->blocked_page;
    }

    public function setBlockedPage(bool $blocked_page): self
    {
        $this->blocked_page = $blocked_page;

        return $this;
    }

    public function getPageMetaDesc(): ?string
    {
        return $this->page_meta_desc;
    }

    public function setPageMetaDesc(?string $page_meta_desc): self
    {
        $this->page_meta_desc = $page_meta_desc;

        return $this;
    }
}
