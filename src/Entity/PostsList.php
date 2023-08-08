<?php

namespace App\Entity;

use App\Repository\PostsListRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PostsListRepository::class)]
class PostsList
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column]
    private array $post_name = [];

    #[ORM\Column]
    private array $post_content = [];

    #[ORM\Column]
    private array $post_meta_title = [];

<<<<<<< HEAD
    #[ORM\Column(length: 255)]
    private ?string $photo_filename = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $post_meta_title = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $post_meta_desc = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $post_meta_title_en = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $post_meta_desc_en = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;
=======
    #[ORM\Column(nullable: true)]
    private ?array $post_meta_desc = null;

    #[ORM\Column(length: 255)]
    private ?string $post_url = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $post_thumb = null;

    #[ORM\Column(nullable: true)]
    private ?bool $online = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    #[ORM\ManyToOne(inversedBy: 'postsLists')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author = null;

    #[ORM\OneToMany(mappedBy: 'post', targetEntity: MenuLink::class)]
    private Collection $menuLinks;

    public function __construct()
    {
        $this->menuLinks = new ArrayCollection();
    }
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPostName(): array
    {
        return $this->post_name;
    }

    public function setPostName(array $post_name): static
    {
        $this->post_name = $post_name;

        return $this;
    }

    public function getPostUrl(): ?string
    {
        return $this->post_url;
    }

    public function setPostUrl(string $post_url): static
    {
        $this->post_url = $post_url;

        return $this;
    }

    public function getPostThumb(): ?string
    {
        return $this->post_thumb;
    }

    public function setPostThumb(?string $post_thumb): static
    {
        $this->post_thumb = $post_thumb;

        return $this;
    }

    public function getPostContent(): array
    {
        return $this->post_content;
    }

    public function setPostContent(array $post_content): static
    {
        $this->post_content = $post_content;

        return $this;
    }

    public function getPostMetaTitle(): array
    {
        return $this->post_meta_title;
    }

    public function setPostMetaTitle(array $post_meta_title): static
    {
        $this->post_meta_title = $post_meta_title;

        return $this;
    }

    public function getPostMetaDesc(): ?array
    {
        return $this->post_meta_desc;
    }

    public function setPostMetaDesc(?array $post_meta_desc): static
    {
        $this->post_meta_desc = $post_meta_desc;

        return $this;
    }

<<<<<<< HEAD
=======
    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): static
    {
        $this->author = $author;

        return $this;
    }

>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

<<<<<<< HEAD
    public function setCreatedAt(\DateTimeImmutable $created_at): self
=======
    public function setCreatedAt(\DateTimeImmutable $created_at): static
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
    {
        $this->created_at = $created_at;

        return $this;
    }

<<<<<<< HEAD
    public function getPhotoFilename(): ?string
    {
        return $this->photo_filename;
    }

    public function setPhotoFilename(string $photo_filename): self
    {
        $this->photo_filename = $photo_filename;
=======
    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeImmutable $updated_at): static
    {
        $this->updated_at = $updated_at;
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b

        return $this;
    }

<<<<<<< HEAD
    public function getPostMetaTitleEn(): ?string
    {
        return $this->post_meta_title_en;
    }

    public function setPostMetaTitleEn(?string $post_meta_title_en): self
    {
        $this->post_meta_title_en = $post_meta_title_en;
=======
    public function isOnline(): ?bool
    {
        return $this->online;
    }

    public function setOnline(?bool $online): static
    {
        $this->online = $online;
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b

        return $this;
    }

<<<<<<< HEAD
    public function getPostMetaDescEn(): ?string
    {
        return $this->post_meta_desc_en;
    }

    public function setPostMetaDescEn(?string $post_meta_desc_en): self
    {
        $this->post_meta_desc_en = $post_meta_desc_en;
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
            $menuLink->setPost($this);
        }

        return $this;
    }

    public function removeMenuLink(MenuLink $menuLink): static
    {
        if ($this->menuLinks->removeElement($menuLink)) {
            // set the owning side to null (unless already changed)
            if ($menuLink->getPost() === $this) {
                $menuLink->setPost(null);
            }
        }
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b

        return $this;
    }
}
