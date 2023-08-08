<?php

namespace App\Entity;

use App\Repository\PagesListRepository;
<<<<<<< HEAD
=======
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PagesListRepository::class)]
class PagesList
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column]
    private array $page_name = [];

    #[ORM\Column(type: 'string', length: 255)]
    private $page_url;

    #[ORM\Column(type: 'string', length: 255)]
    private $page_id;

    #[ORM\Column]
    private ?bool $blocked_page = null;
<<<<<<< HEAD

    #[ORM\Column]
    private ?int $page_model = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $page_meta_title;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $page_meta_desc = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $page_meta_title_en = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $page_meta_desc_en = null;
=======
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b

    #[ORM\Column]
    private ?bool $status = null;

    #[ORM\Column(nullable: true)]
    private array $page_content = [];

    #[ORM\Column(nullable: true)]
    private array $page_meta_title = [];

    #[ORM\Column]
    private array $page_meta_desc = [];

    #[ORM\OneToMany(mappedBy: 'page', targetEntity: MenuLink::class)]
    private Collection $menuLinks;

    public function __construct()
    {
        $this->menuLinks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPageName(): ?array
    {
        return $this->page_name;
    }

    public function setPageName(?array $page_name): self
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

<<<<<<< HEAD
    public function getPageMetaTitle(): ?string
    {
        return $this->page_meta_title;
    }

    public function setPageMetaTitle(string $page_meta_title): self
    {
        $this->page_meta_title = $page_meta_title;

        return $this;
    }

=======
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
    public function isBlockedPage(): ?bool
    {
        return $this->blocked_page;
    }

    public function setBlockedPage(bool $blocked_page): self
    {
        $this->blocked_page = $blocked_page;

        return $this;
    }

<<<<<<< HEAD
    public function getPageMetaDesc(): ?string
=======
    public function isStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getPageContent(): array
    {
        return $this->page_content;
    }

    public function setPageContent(?array $page_content): static
    {
        $this->page_content = $page_content;

        return $this;
    }

    public function getPageMetaTitle(): array
    {
        return $this->page_meta_title;
    }

    public function setPageMetaTitle(?array $page_meta_title): static
    {
        $this->page_meta_title = $page_meta_title;

        return $this;
    }

    public function getPageMetaDesc(): array
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
    {
        return $this->page_meta_desc;
    }

<<<<<<< HEAD
    public function setPageMetaDesc(?string $page_meta_desc): self
=======
    public function setPageMetaDesc(array $page_meta_desc): static
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
    {
        $this->page_meta_desc = $page_meta_desc;

        return $this;
    }

<<<<<<< HEAD
    public function getPageModel(): ?int
    {
        return $this->page_model;
    }

    public function setPageModel(int $page_model): self
    {
        $this->page_model = $page_model;
=======
    /**
     * @return Collection<int, MenuLink>
     */
    public function getMenuLinks(): Collection
    {
        return $this->menuLinks;
    }

    public function addMenuLink(MenuLink $menuLink): static
    {
        if (!$this->menuLinks->contains($menuLink)) {
            $this->menuLinks->add($menuLink);
            $menuLink->setPage($this);
        }
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b

        return $this;
    }

<<<<<<< HEAD
    public function getPageMetaTitleEn(): ?string
    {
        return $this->page_meta_title_en;
    }

    public function setPageMetaTitleEn(?string $page_meta_title_en): self
    {
        $this->page_meta_title_en = $page_meta_title_en;

        return $this;
    }

    public function getPageMetaDescEn(): ?string
    {
        return $this->page_meta_desc_en;
    }

    public function setPageMetaDescEn(?string $page_meta_desc_en): self
    {
        $this->page_meta_desc_en = $page_meta_desc_en;
=======
    public function removeMenuLink(MenuLink $menuLink): static
    {
        if ($this->menuLinks->removeElement($menuLink)) {
            // set the owning side to null (unless already changed)
            if ($menuLink->getPage() === $this) {
                $menuLink->setPage(null);
            }
        }
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b

        return $this;
    }
}
