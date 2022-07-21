<?php

namespace App\Entity;

use App\Repository\ReferencementRepository;
use Doctrine\ORM\Mapping as ORM;
use DateTime;

#[ORM\Entity(repositoryClass: ReferencementRepository::class)]
class Referencement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'date', nullable: true)]
    private $date_ref;

    #[ORM\ManyToOne(targetEntity: UniversRef::class)]
    private $univers_ref;

    #[ORM\ManyToOne(targetEntity: SousCategorieRef::class)]
    private $sous_categorie_ref;

    #[ORM\ManyToOne(targetEntity: FiltreRef::class)]
    private $filtre;

    #[ORM\ManyToOne(targetEntity: CouleurRef::class)]
    private $couleurRef;

    #[ORM\ManyToOne(targetEntity: Pays::class)]
    private $pays_origine;

    #[ORM\ManyToOne(targetEntity: TailleRef::class)]
    private $attribut;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $nom_produit_fr;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $nom_produit_en;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $description_fr;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $description_en;

    #[ORM\ManyToOne(targetEntity: Coupe::class)]
    private $coupe;

    #[ORM\ManyToOne(targetEntity: Entretien::class)]
    private $entretien;

    #[ORM\Column(type: 'text', nullable: true)]
    private $notes;

    #[ORM\ManyToOne(targetEntity: ProduitsLeclaireur::class)]
    private $produit_leclaireur;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $dimension_fr;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $dimension_en;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $taille_portee_mannequin;

    #[ORM\Column(type: 'text', nullable: true)]    
    private $pictures;

    #[ORM\Column(type: 'text', nullable: true)]
    private $tags_ref;


    public function __construct(array $tab = []){
        $this->setDateRef(new DateTime("now"));
        if($tab){      

            if($tab["univers_ref"])
                $this->setUniversRef($tab["univers_ref"]);        
      

            if($tab["sous_categorie_ref"])
                $this->setSousCategorieRef($tab["sous_categorie_ref"]);  

            if($tab["produit_leclaireur"])
                    $this->setProduitLeclaireur($tab["produit_leclaireur"]);  
        }    
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateRef(): ?\DateTimeInterface
    {
        return $this->date_ref;
    }

    public function setDateRef(\DateTimeInterface $date_ref): self
    {
        $this->date_ref = $date_ref;

        return $this;
    }

    public function getUniversRef(): ?UniversRef
    {
        return $this->univers_ref;
    }

    public function setUniversRef(?UniversRef $univers_ref): self
    {
        $this->univers_ref = $univers_ref;

        return $this;
    }


    public function getSousCategorieRef(): ?SousCategorieRef
    {
        return $this->sous_categorie_ref;
    }

    public function setSousCategorieRef(?SousCategorieRef $sous_categorie_ref): self
    {
        $this->sous_categorie_ref = $sous_categorie_ref;

        return $this;
    }

    public function getFiltre(): ?FiltreRef
    {
        return $this->filtre;
    }

    public function setFiltre(?FiltreRef $filtre): self
    {
        $this->filtre = $filtre;

        return $this;
    }

    public function getCouleurRef(): ?CouleurRef
    {
        return $this->couleurRef;
    }

    public function setCouleurRef(?CouleurRef $couleurRef): self
    {
        $this->couleurRef = $couleurRef;

        return $this;
    }

    public function getPaysOrigine(): ?Pays
    {
        return $this->pays_origine;
    }

    public function setPaysOrigine(?Pays $pays_origine): self
    {
        $this->pays_origine = $pays_origine;

        return $this;
    }

    public function getAttribut(): ?TailleRef
    {
        return $this->attribut;
    }

    public function setAttribut(?TailleRef $attribut): self
    {
        $this->attribut = $attribut;

        return $this;
    }

    public function getNomProduitFr(): ?string
    {
        return $this->nom_produit_fr;
    }

    public function setNomProduitFr(?string $nom_produit_fr): self
    {
        $this->nom_produit_fr = $nom_produit_fr;

        return $this;
    }

    public function getNomProduitEn(): ?string
    {
        return $this->nom_produit_en;
    }

    public function setNomProduitEn(?string $nom_produit_en): self
    {
        $this->nom_produit_en = $nom_produit_en;

        return $this;
    }

    public function getDescriptionFr(): ?string
    {
        return $this->description_fr;
    }

    public function setDescriptionFr(?string $description_fr): self
    {
        $this->description_fr = $description_fr;

        return $this;
    }

    public function getDescriptionEn(): ?string
    {
        return $this->description_en;
    }

    public function setDescriptionEn(?string $description_en): self
    {
        $this->description_en = $description_en;

        return $this;
    }

    public function getCoupe(): ?Coupe
    {
        return $this->coupe;
    }

    public function setCoupe(?Coupe $coupe): self
    {
        $this->coupe = $coupe;

        return $this;
    }


    public function getEntretien(): ?entretien
    {
        return $this->entretien;
    }

    public function setEntretien(?entretien $entretien): self
    {
        $this->entretien = $entretien;

        return $this;
    }

    public function getNotes(): ?string
    {
        return $this->notes;
    }

    public function setNotes(?string $notes): self
    {
        $this->notes = $notes;

        return $this;
    }

    public function getProduitLeclaireur(): ?ProduitsLeclaireur
    {
        return $this->produit_leclaireur;
    }

    public function setProduitLeclaireur(?ProduitsLeclaireur $produit_leclaireur): self
    {
        $this->produit_leclaireur = $produit_leclaireur;

        return $this;
    }

    public function getDimensionFr(): ?string
    {
        return $this->dimension_fr;
    }

    public function setDimensionFr(?string $dimension_fr): self
    {
        $this->dimension_fr = $dimension_fr;

        return $this;
    }

    public function getDimensionEn(): ?string
    {
        return $this->dimension_en;
    }

    public function setDimensionEn(?string $dimension_en): self
    {
        $this->dimension_en = $dimension_en;

        return $this;
    }

    public function getTaillePorteeMannequin(): ?string
    {
        return $this->taille_portee_mannequin;
    }

    public function setTaillePorteeMannequin(?string $taille_portee_mannequin): self
    {
        $this->taille_portee_mannequin = $taille_portee_mannequin;

        return $this;
    }

    public function getPictures(): ?string
    {
        return $this->pictures;
    }

    public function setPictures(?string $pictures): self
    {
        $this->pictures = $pictures;

        return $this;
    }

    public function getTagsRef(): ?string
    {
        return $this->tags_ref;
    }

    public function setTagsRef(?string $tags_ref=""): self
    {
        $this->tags_ref = $tags_ref;

        return $this;
    }

}
