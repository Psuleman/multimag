<?php

namespace App\Entity;

use App\Repository\TarifsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TarifsRepository::class)]
class Tarifs
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'float')]
    private $prix_vente;

    #[ORM\ManyToOne(targetEntity: Pays::class)]
    private $pays;

    #[ORM\ManyToOne(targetEntity: ProduitsLeclaireur::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $produit_leclaireur;

    #[ORM\Column(type: 'float', nullable: true)]
    private $prix_remise;

    public function __construct(array $tab = []){
        if($tab){
            if($tab["prix_vente"])
                $this->setPrixVente($tab["prix_vente"]);            

            if($tab["pays"])
                $this->setPays($tab["pays"]);        
            if($tab["produit_leclaireur"])
                $this->setProduitLeclaireur($tab["produit_leclaireur"]);        
        }    
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPays(): ?Pays
    {
        return $this->pays;
    }

    public function setPays(?Pays $pays): self
    {
        $this->pays = $pays;

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

    public function getPrixRemise(): ?float
    {
        return $this->prix_remise;
    }

    public function setPrixRemise(?float $prix_remise): self
    {
        $this->prix_remise = $prix_remise;

        return $this;
    }
}
