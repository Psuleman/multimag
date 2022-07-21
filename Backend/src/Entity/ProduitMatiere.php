<?php

namespace App\Entity;

use App\Repository\ProduitMatiereRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProduitMatiereRepository::class)]
class ProduitMatiere
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: ProduitsLeclaireur::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $produit;

    #[ORM\ManyToOne(targetEntity: matiere::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $matiere;

    #[ORM\Column(type: 'integer')]
    private $pourcentageMatiere;

    public function __construct(array $tab = []){
        if($tab){
            if($tab["matiere"])
                $this->setMatiere($tab["matiere"]);              
                
                if($tab["produit"])
                $this->setProduit($tab["produit"]);            

            if($tab["pourcentageMatiere"])
                $this->setPourcentageMatiere($tab["pourcentageMatiere"]);    
        }    
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduit(): ?ProduitsLeclaireur
    {
        return $this->produit;
    }

    public function setProduit(?ProduitsLeclaireur $produit): self
    {
        $this->produit = $produit;

        return $this;
    }

    public function getMatiere(): ?matiere
    {
        return $this->matiere;
    }

    public function setMatiere(?matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    public function getPourcentageMatiere(): ?int
    {
        return $this->pourcentageMatiere;
    }

    public function setPourcentageMatiere(int $pourcentageMatiere): self
    {
        $this->pourcentageMatiere = $pourcentageMatiere;

        return $this;
    }
}
