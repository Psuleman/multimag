<?php

namespace App\Entity;

use App\Repository\ExportProduitTemporaireRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    collectionOperations: [
        'get' => ['method' => 'get'],
        "post" => ['method' => 'post'],

    ],
    itemOperations: [
        'get'=>[
        "controller"=> NotFoundAction::class,
        "output" => false
        ],
        "patch" => ['method' => 'patch'],
        "delete" => ['method' => 'delete']
    ],
    attributes: ["pagination_enabled" => false],
    order: ['sku' => 'ASC'],
)]
#[ApiFilter(SearchFilter::class, properties: ['categorie' => 'exact', 'univers' => 'exact', 'sku' => 'exact', 'marque' => 'exact', 'newProduit' => 'exact',  'referencer' => 'exact'])]
#[ORM\Entity(repositoryClass: ExportProduitTemporaireRepository::class)]
class ExportProduitTemporaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $sku;



    #[ORM\Column(type: 'string', length: 255)]
    private $marque;

    #[ORM\Column(type: 'string', length: 255)]
    private $reference_fournisseur;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $couleur_fournisseur;

    #[ORM\Column(type: 'float')]
    private $prix_vente;

    #[ORM\Column(type: 'float' , nullable: true)]
    private $prix_vente_remise;

    #[ORM\Column(type: 'string', length: 255)]
    private $saison;

    #[ORM\Column(type: 'string', length: 255)]
    private $univers;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $categorie;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $sous_categorie;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $filtre;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $couleur;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $pays_origine;

    #[ORM\Column(type: 'string', length: 255, nullable:true)]
    private $grille_taille;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $attribut;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $taille_stock_id;

    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    private $taille_stock_code;
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $nom_produit_fr;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $nom_produit_en;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $entretien;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $description_fr;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $descriptio_en;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $coupe;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Taille_portee_mannequin;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_1;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pourcent_matiere_1;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_2;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pourcent_matiere_2;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_3;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pourcent_matiere_3;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_4;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pourcent_matiere_4;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_5;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pourcent_matiere_5;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_6;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pourcent_matiere_6;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_7;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pourcent_matiere_7;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_8;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pourcent_matiere_8;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_9;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pourcent_matiere_9;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $matiere_10;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pourcent_matiere_10;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $dimension_fr;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $dimension_en;

    #[ORM\Column(type: 'text', nullable: true)]
    private $pictures;

    #[ORM\Column(type: 'text', nullable: true)]
    private $tags_ref;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $categorie_en;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $sous_categorie_en;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $filtre_en;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $univers_en;

    #[ORM\Column(type: 'string', length: 1, nullable: true)]
    private $univers_abreviation;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $coupeEn;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $entretienEn;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $couleur_en;

    #[ORM\Column(type: 'boolean')]
    private $newProduit;

    #[ORM\Column(type: 'boolean')]
    private $referencer;

    #[ORM\Column(type: 'date', nullable: true)]
    private $dateArrivee;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private $newListAttente;

    #[ORM\Column(type: 'date', nullable: true)]
    private $date_ref;

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



    public function getMarque(): ?string
    {
        return $this->marque;
    }

    public function setMarque(string $marque): self
    {
        $this->marque = ucfirst($marque);

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

    public function getCouleurFournisseur(): ?string
    {
        return $this->couleur_fournisseur;
    }

    public function setCouleurFournisseur(?string $couleur_fournisseur): self
    {
        $this->couleur_fournisseur = $couleur_fournisseur;

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

    public function getPrixVenteRemise(): ?float
    {
        return $this->prix_vente_remise;
    }

    public function setPrixVenteRemise(float $prix_vente_remise): self
    {
        $this->prix_vente_remise = $prix_vente_remise;

        return $this;
    }

    public function getSaison(): ?string
    {
        return $this->saison;
    }

    public function setSaison(string $saison): self
    {
        $this->saison = $saison;

        return $this;
    }

    public function getUnivers(): ?string
    {
        return $this->univers;
    }

    public function setUnivers(string $univers): self
    {
        $this->univers = $univers;

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

    public function getSousCategorie(): ?string
    {
        return $this->sous_categorie;
    }

    public function setSousCategorie(?string $sous_categorie): self
    {
        $this->sous_categorie = $sous_categorie;

        return $this;
    }

    public function getFiltre(): ?string
    {
        return $this->filtre;
    }

    public function setFiltre(?string $filtre=""): self
    {
        $this->filtre = $filtre;

        return $this;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(?string $couleur=""): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    public function getPaysOrigine(): ?string
    {
        return $this->pays_origine;
    }

    public function setPaysOrigine(?string $pays_origine=""): self
    {
        $this->pays_origine = $pays_origine;

        return $this;
    }

    public function getGrilleTaille(): ?string
    {
        return $this->grille_taille;
    }

    public function setGrilleTaille(string $grille_taille=""): self
    {
        $this->grille_taille = $grille_taille;

        return $this;
    }

    public function getAttribut(): ?string
    {
        return $this->attribut;
    }

    public function setAttribut(?string $attribut=""): self
    {
        $this->attribut = $attribut;

        return $this;
    }

    public function getTailleStockId(): ?string
    {
        return $this->taille_stock_id;
    }

    public function setTailleStockId(?string $taille_stock_id): self
    {
        $this->taille_stock_id = $taille_stock_id;

        return $this;
    }

    public function getTailleStockCode(): ?string
    {
        return $this->taille_stock_code;
    }

    public function setTailleStockCode(?string $taille_stock_code): self
    {
        $this->taille_stock_code = $taille_stock_code;

        return $this;
    }

    public function getNomProduitFr(): ?string
    {
        return $this->nom_produit_fr;
    }

    public function setNomProduitFr(?string $nom_produit_fr=""): self
    {
        $this->nom_produit_fr = $nom_produit_fr;

        return $this;
    }

    public function getNomProduitEn(): ?string
    {
        return $this->nom_produit_en;
    }

    public function setNomProduitEn(?string $nom_produit_en=""): self
    {
        $this->nom_produit_en = $nom_produit_en;

        return $this;
    }

    public function getEntretien(): ?string
    {
        return $this->entretien;
    }

    public function setEntretien(?string $entretien=""): self
    {
        $this->entretien = $entretien;

        return $this;
    }

    public function getDescriptionFr(): ?string
    {
        return $this->description_fr;
    }

    public function setDescriptionFr(?string $description_fr=""): self
    {
        $this->description_fr = $description_fr;

        return $this;
    }

    public function getDescriptioEn(): ?string
    {
        return $this->descriptio_en;
    }

    public function setDescriptioEn(?string $descriptio_en=""): self
    {
        $this->descriptio_en = $descriptio_en;

        return $this;
    }

    public function getCoupe(): ?string
    {
        return $this->coupe;
    }

    public function setCoupe(?string $coupe=""): self
    {
        $this->coupe = $coupe;

        return $this;
    }

    public function getTaillePorteeMannequin(): ?string
    {
        return $this->Taille_portee_mannequin;
    }

    public function setTaillePorteeMannequin(?string $Taille_portee_mannequin=""): self
    {
        $this->Taille_portee_mannequin = $Taille_portee_mannequin;

        return $this;
    }

    public function getMatiere1(): ?string
    {
        return $this->matiere_1;
    }

    public function setMatiere1(?string $matiere_1=""): self
    {
        $this->matiere_1 = $matiere_1;

        return $this;
    }

    public function getPourcentMatiere1(): ?float
    {
        return $this->pourcent_matiere_1;
    }

    public function setPourcentMatiere1(?float $pourcent_matiere_1=0): self
    {
        $this->pourcent_matiere_1 = $pourcent_matiere_1;

        return $this;
    }

    public function getMatiere2(): ?string
    {
        return $this->matiere_2;
    }

    public function setMatiere2(?string $matiere_2=""): self
    {
        $this->matiere_2 = $matiere_2;

        return $this;
    }

    public function getPourcentMatiere2(): ?float
    {
        return $this->pourcent_matiere_2;
    }

    public function setPourcentMatiere2(?float $pourcent_matiere_2=0): self
    {
        $this->pourcent_matiere_2 = $pourcent_matiere_2;

        return $this;
    }

    public function getMatiere3(): ?string
    {
        return $this->matiere_3;
    }

    public function setMatiere3(?string $matiere_3=""): self
    {
        $this->matiere_3 = $matiere_3;

        return $this;
    }

    public function getPourcentMatiere3(): ?float
    {
        return $this->pourcent_matiere_3;
    }

    public function setPourcentMatiere3(float $pourcent_matiere_3=0): self
    {
        $this->pourcent_matiere_3 = $pourcent_matiere_3;

        return $this;
    }

    public function getMatiere4(): ?string
    {
        return $this->matiere_4;
    }

    public function setMatiere4(?string $matiere_4=""): self
    {
        $this->matiere_4 = $matiere_4;

        return $this;
    }

    public function getPourcentMatiere4(): ?float
    {
        return $this->pourcent_matiere_4;
    }

    public function setPourcentMatiere4(?float $pourcent_matiere_4=0): self
    {
        $this->pourcent_matiere_4 = $pourcent_matiere_4;

        return $this;
    }

    public function getMatiere5(): ?string
    {
        return $this->matiere_5;
    }

    public function setMatiere5(?string $matiere_5=""): self
    {
        $this->matiere_5 = $matiere_5;

        return $this;
    }

    public function getPourcentMatiere5(): ?float
    {
        return $this->pourcent_matiere_5;
    }

    public function setPourcentMatiere5(?float $pourcent_matiere_5=0): self
    {
        $this->pourcent_matiere_5 = $pourcent_matiere_5;

        return $this;
    }

    public function getMatiere6(): ?string
    {
        return $this->matiere_6;
    }

    public function setMatiere6(?string $matiere_6=""): self
    {
        $this->matiere_6 = $matiere_6;

        return $this;
    }

    public function getPourcentMatiere6(): ?float
    {
        return $this->pourcent_matiere_6;
    }

    public function setPourcentMatiere6(?float $pourcent_matiere_6=0): self
    {
        $this->pourcent_matiere_6 = $pourcent_matiere_6;

        return $this;
    }

    public function getMatiere7(): ?string
    {
        return $this->matiere_7;
    }

    public function setMatiere7(?string $matiere_7=""): self
    {
        $this->matiere_7 = $matiere_7;

        return $this;
    }

    public function getPourcentMatiere7(): ?float
    {
        return $this->pourcent_matiere_7;
    }

    public function setPourcentMatiere7(?float $pourcent_matiere_7=0): self
    {
        $this->pourcent_matiere_7 = $pourcent_matiere_7;

        return $this;
    }

    public function getMatiere8(): ?string
    {
        return $this->matiere_8;
    }

    public function setMatiere8(?string $matiere_8=""): self
    {
        $this->matiere_8 = $matiere_8;

        return $this;
    }

    public function getPourcentMatiere8(): ?float
    {
        return $this->pourcent_matiere_8;
    }

    public function setPourcentMatiere8(?float $pourcent_matiere_8=0): self
    {
        $this->pourcent_matiere_8 = $pourcent_matiere_8;

        return $this;
    }

    public function getMatiere9(): ?string
    {
        return $this->matiere_9;
    }

    public function setMatiere9(?string $matiere_9=""): self
    {
        $this->matiere_9 = $matiere_9;

        return $this;
    }

    public function getPourcentMatiere9(): ?float
    {
        return $this->pourcent_matiere_9;
    }

    public function setPourcentMatiere9(?float $pourcent_matiere_9=0): self
    {
        $this->pourcent_matiere_9 = $pourcent_matiere_9;

        return $this;
    }

    public function getMatiere10(): ?string
    {
        return $this->matiere_10;
    }

    public function setMatiere10(?string $matiere_10=""): self
    {
        $this->matiere_10 = $matiere_10;

        return $this;
    }

    public function getPourcentMatiere10(): ?float
    {
        return $this->pourcent_matiere_10;
    }

    public function setPourcentMatiere10(?float $pourcent_matiere_10=0): self
    {
        $this->pourcent_matiere_10 = $pourcent_matiere_10;

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

    public function setTagsRef(?string $tags_ref): self
    {
        $this->tags_ref = $tags_ref;

        return $this;
    }

    public function getCategorieEn(): ?string
    {
        return $this->categorie_en;
    }

    public function setCategorieEn(?string $categorie_en): self
    {
        $this->categorie_en = $categorie_en;

        return $this;
    }

    public function getSousCategorieEn(): ?string
    {
        return $this->sous_categorie_en;
    }

    public function setSousCategorieEn(?string $sous_categorie_en): self
    {
        $this->sous_categorie_en = $sous_categorie_en;

        return $this;
    }

    public function getFiltreEn(): ?string
    {
        return $this->filtre_en;
    }

    public function setFiltreEn(?string $filtre_en): self
    {
        $this->filtre_en = $filtre_en;

        return $this;
    }


    public function getUniversEn(): ?string
    {
        return $this->univers_en;
    }

    public function setUniversEn(?string $univers_en): self
    {
        $this->univers_en = $univers_en;

        return $this;
    }

    public function getUniversAbreviation(): ?string
    {
        return $this->univers_abreviation;
    }

    public function setUniversAbreviation(?string $univers_abreviation): self
    {
        $this->univers_abreviation = $univers_abreviation;

        return $this;
    }

    public function getCoupeEn(): ?string
    {
        return $this->coupeEn;
    }

    public function setCoupeEn(?string $coupeEn): self
    {
        $this->coupeEn = $coupeEn;

        return $this;
    }

    public function getEntretienEn(): ?string
    {
        return $this->entretienEn;
    }

    public function setEntretienEn(?string $entretienEn): self
    {
        $this->entretienEn = $entretienEn;

        return $this;
    }

    public function getCouleurEn(): ?string
    {
        return $this->couleur_en;
    }

    public function setCouleurEn(?string $couleur_en): self
    {
        $this->couleur_en = $couleur_en;

        return $this;
    }

    public function getNewProduit(): ?bool
    {
        return $this->newProduit;
    }

    public function setNewProduit(bool $newProduit): self
    {
        $this->newProduit = $newProduit;

        return $this;
    }

    public function getReferencer(): ?bool
    {
        return $this->referencer;
    }

    public function setReferencer(bool $referencer): self
    {
        $this->referencer = $referencer;

        return $this;
    }

    public function getDateArrivee(): ?\DateTimeInterface
    {
        return $this->dateArrivee;
    }

    public function setDateArrivee(?\DateTimeInterface $dateArrivee): self
    {
        $this->dateArrivee = $dateArrivee;

        return $this;
    }

    public function getNewListAttente(): ?bool
    {
        return $this->newListAttente;
    }

    public function setNewListAttente(?bool $newListAttente): self
    {
        $this->newListAttente = $newListAttente;

        return $this;
    }

    public function getDateRef(): ?\DateTimeInterface
    {
        return $this->date_ref;
    }

    public function setDateRef(?\DateTimeInterface $date_ref): self
    {
        $this->date_ref = $date_ref;

        return $this;
    }
}
