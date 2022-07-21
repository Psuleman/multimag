<?php

namespace App\Entity;

use App\Repository\ProduitsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProduitsRepository::class)]
class Produits
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: ProduitsLeclaireur::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $produit_leclaireur;

    #[ORM\ManyToOne(targetEntity: ProduitsFournisseur::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $produit_fournisseur;

    #[ORM\Column(type: 'string', length: 100)]
    private $taille;

    #[ORM\Column(type: 'string', length: 255)]
    private $code_couleur;

    #[ORM\Column(type: 'string', length: 255)]
    private $reference_couleur;

    public function __construct(array $tab = []){
        if($tab){
            if($tab["produit_leclaireur"])
                $this->setProduitLeclaireur($tab["produit_leclaireur"]);            

            if($tab["produit_fournisseur"])
                $this->setProduitFournisseur($tab["produit_fournisseur"]);    

            if($tab["code_couleur"])
                $this->setCodeCouleur($tab["code_couleur"]);    
            
            if($tab["reference_couleur"])
                $this->setReferenceCouleur($tab["reference_couleur"]);    

            if($tab["taille"])
                $this->setTaille($tab["taille"]);

        }    
    }


    public function getId(): ?int
    {
        return $this->id;
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

    public function getProduitFournisseur(): ?ProduitsFournisseur
    {
        return $this->produit_fournisseur;
    }

    public function setProduitFournisseur(?ProduitsFournisseur $produit_fournisseur): self
    {
        $this->produit_fournisseur = $produit_fournisseur;

        return $this;
    }
    public function getTaille(): ?string
    {
        return $this->taille;
    }

    public function setTaille(string $taille): self
    {
        $this->taille = htmlspecialchars($taille);

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

    public function getReferenceCouleur(): ?string
    {
        return $this->reference_couleur;
    }

    public function setReferenceCouleur(?string $reference_couleur): self
    {
        $this->reference_couleur = $reference_couleur;

        return $this;
    }
}
