<?php

namespace App\Entity;

use App\Repository\ProduitsTemporaireRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

#[ApiResource(

    attributes: ["pagination_enabled" => false],
)]
#[ORM\Entity(repositoryClass: ProduitsTemporaireRepository::class)]
class ProduitsTemporaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $sku;

    #[ORM\Column(type: 'date')]
    private $date_arrivee;

    #[ORM\Column(type: 'string', length: 255)]
    private $code_fournisseur;

    #[ORM\Column(type: 'string', length: 255)]
    private $nom_fournisseur;

    #[ORM\Column(type: 'string', length: 255)]
    private $reference_fournisseur;

    #[ORM\Column(type: 'string', length: 255)]
    private $code_couleur;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $reference_couleur_1;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $reference_couleur_2;

    #[ORM\Column(type: 'integer')]
    private $code_saison;

    #[ORM\Column(type: 'integer')]
    private $code_famille_1;

    #[ORM\Column(type: 'string', length: 255)]
    private $libelle_famille_1;

    #[ORM\Column(type: 'integer')]
    private $code_famille_2;

    #[ORM\Column(type: 'string', length: 255)]
    private $libelle_famille_2;

    #[ORM\Column(type: 'integer')]
    private $code_famille_3;

    #[ORM\Column(type: 'string', length: 255)]
    private $libelle_famille_3;

    #[ORM\Column(type: 'integer')]
    private $code_famille_4;

    #[ORM\Column(type: 'string', length: 255)]
    private $libelle_famille_4;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_famille_5;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $libelle_famille_5;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_famille_6;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $libelle_famille_6;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock_mag_0;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock_mag_3;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock_mag_7;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock_mag_9;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock_mag_11;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock_mag_12;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock_mag_14;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock_mag_18;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock_mag_20;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock_mag_60;

    #[ORM\Column(type: 'string', length: 100)]
    private $grille_taille;

    #[ORM\Column(type: 'string', length: 100)]
    private $taille;

    #[ORM\Column(type: 'float')]
    private $prix_vente;

    #[ORM\Column(type: 'integer')]
    private $annee_sortie;

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

    public function getDateArrivee(): ?\DateTimeInterface
    {
        return $this->date_arrivee;
    }

    public function setDateArrivee(\DateTimeInterface $date_arrivee): self
    {
        $this->date_arrivee = $date_arrivee;

        return $this;
    }

    public function getCodeFournisseur(): ?string
    {
        return $this->code_fournisseur;
    }

    public function setCodeFournisseur(string $code_fournisseur): self
    {
        $this->code_fournisseur = $code_fournisseur;

        return $this;
    }

    public function getNomFournisseur(): ?string
    {
        return $this->nom_fournisseur;
    }

    public function setNomFournisseur(string $nom_fournisseur): self
    {
        $this->nom_fournisseur = $nom_fournisseur;

        return $this;
    }

    public function getReferenceFournisseur(): ?string
    {
        return $this->reference_fournisseur;
    }

    public function setReferenceFournisseur(string $reference_fournisseur): self
    {
        $this->reference_fournisseur = $reference_fournisseur;

        return $this;
    }

    public function getCodeCouleur(): ?string
    {
        return $this->code_couleur;
    }

    public function setCodeCouleur(string $code_couleur): self
    {
        $this->code_couleur = $code_couleur;

        return $this;
    }

    public function getReferenceCouleur1(): ?string
    {
        return $this->reference_couleur_1;
    }

    public function setReferenceCouleur1(?string $reference_couleur_1): self
    {
        $this->reference_couleur_1 = $reference_couleur_1;

        return $this;
    }

    public function getReferenceCouleur2(): ?string
    {
        return $this->reference_couleur_2;
    }

    public function setReferenceCouleur2(?string $reference_couleur_2): self
    {
        $this->reference_couleur_2 = $reference_couleur_2;

        return $this;
    }

    public function getCodeSaison(): ?int
    {
        return $this->code_saison;
    }

    public function setCodeSaison(int $code_saison): self
    {
        $this->code_saison = $code_saison;

        return $this;
    }

    public function getCodeFamille1(): ?int
    {
        return $this->code_famille_1;
    }

    public function setCodeFamille1(int $code_famille_1): self
    {
        $this->code_famille_1 = $code_famille_1;

        return $this;
    }

    public function getLibelleFamille1(): ?string
    {
        return $this->libelle_famille_1;
    }

    public function setLibelleFamille1(string $libelle_famille_1): self
    {
        $this->libelle_famille_1 = $libelle_famille_1;

        return $this;
    }

    public function getCodeFamille2(): ?int
    {
        return $this->code_famille_2;
    }

    public function setCodeFamille2(int $code_famille_2): self
    {
        $this->code_famille_2 = $code_famille_2;

        return $this;
    }

    public function getLibelleFamille2(): ?string
    {
        return $this->libelle_famille_2;
    }

    public function setLibelleFamille2(string $libelle_famille_2): self
    {
        $this->libelle_famille_2 = $libelle_famille_2;

        return $this;
    }

    public function getCodeFamille3(): ?int
    {
        return $this->code_famille_3;
    }

    public function setCodeFamille3(int $code_famille_3): self
    {
        $this->code_famille_3 = $code_famille_3;

        return $this;
    }

    public function getLibelleFamille3(): ?string
    {
        return $this->libelle_famille_3;
    }

    public function setLibelleFamille3(string $libelle_famille_3): self
    {
        $this->libelle_famille_3 = $libelle_famille_3;

        return $this;
    }

    public function getCodeFamille4(): ?int
    {
        return $this->code_famille_4;
    }

    public function setCodeFamille4(int $code_famille_4): self
    {
        $this->code_famille_4 = $code_famille_4;

        return $this;
    }

    public function getLibelleFamille4(): ?string
    {
        return $this->libelle_famille_4;
    }

    public function setLibelleFamille4(string $libelle_famille_4): self
    {
        $this->libelle_famille_4 = $libelle_famille_4;

        return $this;
    }

    public function getCodeFamille5(): ?int
    {
        return $this->code_famille_5;
    }

    public function setCodeFamille5(?int $code_famille_5): self
    {
        $this->code_famille_5 = $code_famille_5;

        return $this;
    }

    public function getLibelleFamille5(): ?string
    {
        return $this->libelle_famille_5;
    }

    public function setLibelleFamille5(?string $libelle_famille_5): self
    {
        $this->libelle_famille_5 = $libelle_famille_5;

        return $this;
    }

    public function getCodeFamille6(): ?int
    {
        return $this->code_famille_6;
    }

    public function setCodeFamille6(int $code_famille_6): self
    {
        $this->code_famille_6 = $code_famille_6;

        return $this;
    }

    public function getLibelleFamille6(): ?string
    {
        return $this->libelle_famille_6;
    }

    public function setLibelleFamille6(?string $libelle_famille_6): self
    {
        $this->libelle_famille_6 = $libelle_famille_6;

        return $this;
    }

    public function getStockMag0(): ?int
    {
        return $this->stock_mag_0;
    }

    public function setStockMag0(int $stock_mag_0): self
    {
        $this->stock_mag_0 = $stock_mag_0;

        return $this;
    }

    public function getStockMag3(): ?int
    {
        return $this->stock_mag_3;
    }

    public function setStockMag3(?int $stock_mag_3): self
    {
        $this->stock_mag_3 = $stock_mag_3;

        return $this;
    }

    public function getStockMag7(): ?int
    {
        return $this->stock_mag_7;
    }

    public function setStockMag7(?int $stock_mag_7): self
    {
        $this->stock_mag_7 = $stock_mag_7;

        return $this;
    }

    public function getStockMag9(): ?int
    {
        return $this->stock_mag_9;
    }

    public function setStockMag9(?int $stock_mag_9): self
    {
        $this->stock_mag_9 = $stock_mag_9;

        return $this;
    }
    public function getStockMag11(): ?int
    {
        return $this->stock_mag_11;
    }

    public function setStockMag11(int $stock_mag_11): self
    {
        $this->stock_mag_11 = $stock_mag_11;

        return $this;
    }

    public function getStockMag12(): ?int
    {
        return $this->stock_mag_12;
    }

    public function setStockMag12(?int $stock_mag_12): self
    {
        $this->stock_mag_12 = $stock_mag_12;

        return $this;
    }

    public function getStockMag14(): ?int
    {
        return $this->stock_mag_14;
    }

    public function setStockMag14(?int $stock_mag_14): self
    {
        $this->stock_mag_14 = $stock_mag_14;

        return $this;
    }

    public function getStockMag18(): ?int
    {
        return $this->stock_mag_18;
    }

    public function setStockMag18(?int $stock_mag_18): self
    {
        $this->stock_mag_18 = $stock_mag_18;

        return $this;
    } 

    public function getStockMag20(): ?int
    {
        return $this->stock_mag_20;
    }

    public function setStockMag20(?int $stock_mag_20): self
    {
        $this->stock_mag_20 = $stock_mag_20;

        return $this;
    }    

    public function getStockMag60(): ?int
    {
        return $this->stock_mag_60;
    }

    public function setStockMag60(?int $stock_mag_60): self
    {
        $this->stock_mag_60 = $stock_mag_60;

        return $this;
    }

    public function getGrilleTaille(): ?string
    {
        return $this->grille_taille;
    }

    public function setGrilleTaille(string $grille_taille): self
    {
        $this->grille_taille = $grille_taille;

        return $this;
    }

    public function getTaille(): ?string
    {
        return $this->taille;
    }

    public function setTaille(string $taille): self
    {
        $this->taille = $taille;

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

    public function getAnneeSortie(): ?int
    {
        return $this->annee_sortie;
    }

    public function setAnneeSortie(int $annee_sortie): self
    {
        $this->annee_sortie = $annee_sortie;

        return $this;
    }
}
