<?php

namespace App\Entity;

use App\Repository\SkusTemporaireRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

#[ApiResource(
    collectionOperations: [
        'get',
    ],
    itemOperations: [
        'get'=>[
        "controller"=> NotFoundAction::class,
        "output" => false
        ],
    ],
    attributes: ["pagination_enabled" => false],
)]
#[ApiFilter(SearchFilter::class, properties: ['categorie' => 'exact', 'univers' => 'exact', 'sku' => 'exact', 'marque' => 'exact'])]
#[ORM\Entity(repositoryClass: SkusTemporaireRepository::class)]
class SkusTemporaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $sku;

    #[ORM\Column(type: 'date')]
    private $date_ajout;

    #[ORM\Column(type: 'date')]
    private $date_arrivee;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $univers;

    #[ORM\Column(type: 'string', length: 255)]
    private $marque;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $categorie;

    #[ORM\Column(type: 'float')]
    private $prix_vente;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Boissy;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Sevigne;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Herold;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Cheneviere;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Reference;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $total_stock;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $season;


    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $lien;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $tag;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $picture;

    #[ORM\Column(type: 'text', nullable: true)]
    private $notes;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $farfetch;

    #[ORM\Column(type: 'string', length: 255)]
    private $sous_categorie;

    #[ORM\Column(type: 'string', length: 255)]
    private $couleurFnr;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSku(): ?int
    {
        return $this->sku;
    }

    public function setSku(int $sku): self
    {
        $this->sku = $sku;

        return $this;
    }

    public function getDateAjout(): ?\DateTimeInterface
    {
        return $this->date_ajout;
    }

    public function setDateAjout(\DateTimeInterface $date_ajout): self
    {
        $this->date_ajout = $date_ajout;

        return $this;
    }

    public function getDateArrivee(): ?\DateTimeInterface
    {
        return $this->date_arrivee;
    }

    public function setDateArrivee(\DateTimeInterface $date_arrivee): self
    {
        $this->date_arrivee = $date_arrivee;

        return $this;
    }

    public function getUnivers(): ?string
    {
        return $this->univers;
    }

    public function setUnivers(?string $univers): self
    {
        $this->univers = $univers;

        return $this;
    }

    public function getMarque(): ?string
    {
        return $this->marque;
    }

    public function setMarque(string $marque): self
    {
        $this->marque = $marque;

        return $this;
    }

    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(?string $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getPrixVente(): ?float
    {
        return $this->prix_vente;
    }

    public function setPrixVente(float $prix_vente): self
    {
        $this->prix_vente = $prix_vente;

        return $this;
    }

    public function getBoissy(): ?int
    {
        return $this->Boissy;
    }

    public function setBoissy(?int $Boissy): self
    {
        $this->Boissy = $Boissy;

        return $this;
    }

    public function getSevigne(): ?int
    {
        return $this->Sevigne;
    }

    public function setSevigne(?int $Sevigne): self
    {
        $this->Sevigne = $Sevigne;

        return $this;
    }

    public function getHerold(): ?int
    {
        return $this->Herold;
    }

    public function setHerold(?int $Herold): self
    {
        $this->Herold = $Herold;

        return $this;
    }

    public function getCheneviere(): ?int
    {
        return $this->Cheneviere;
    }

    public function setCheneviere(?int $Cheneviere): self
    {
        $this->Cheneviere = $Cheneviere;

        return $this;
    }

    public function getReference(): ?int
    {
        return $this->Reference;
    }

    public function setReference(?int $Reference): self
    {
        $this->Reference = $Reference;

        return $this;
    }

    public function getTotalStock(): ?int
    {
        return $this->total_stock;
    }

    public function setTotalStock(?int $total_stock): self
    {
        $this->total_stock = $total_stock;

        return $this;
    }

    public function getSeason(): ?string
    {
        return $this->season;
    }

    public function setSeason(string $season): self
    {
        $this->season = $season;

        return $this;
    }

    public function getLien(): ?string
    {
        return $this->lien;
    }

    public function setLien(?string $lien): self
    {
        $this->lien = $lien;

        return $this;
    }

    public function getTag(): ?string
    {
        return $this->tag;
    }

    public function setTag(?string $tag): self
    {
        $this->tag = $tag;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getNotes(): ?string
    {
        return $this->notes;
    }

    public function setNotes(?string $notes=""): self
    {
        $this->notes = htmlspecialchars($notes);

        return $this;
    }

    public function getFarfetch(): ?int
    {
        return $this->farfetch;
    }

    public function setFarfetch(?int $farfetch): self
    {
        $this->farfetch = $farfetch;

        return $this;
    }

    public function getSousCategorie(): ?string
    {
        return $this->sous_categorie;
    }

    public function setSousCategorie(?string $sous_categorie): self
    {
        $this->sous_categorie = $sous_categorie;

        return $this;
    }

    public function getCouleurFnr(): ?string
    {
        return $this->couleurFnr;
    }

    public function setCouleurFnr(string $couleurFnr): self
    {
        $this->couleurFnr = $couleurFnr;

        return $this;
    }



}
