<?php

namespace App\Entity;

use App\Repository\StocksRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StocksRepository::class)]
class Stocks
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Magasins::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $magasin;

    #[ORM\Column(type: 'integer')]
    private $quantite;

    #[ORM\ManyToOne(targetEntity: Produits::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $produits;

    public function __construct(array $tab = []){
        if($tab){
            if($tab["magasin"])
                $this->setMagasin($tab["magasin"]);            
            if($tab["quantite"])
                $this->setQuantite($tab["quantite"]);    
                    
            if($tab["produits"])
                $this->setProduits($tab["produits"]);        
        }    
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMagasin(): ?Magasins
    {
        return $this->magasin;
    }

    public function setMagasin(?Magasins $magasin): self
    {
        $this->magasin = $magasin;

        return $this;
    }

    public function getQuantite(): ?int
    {
        return $this->quantite;
    }

    public function setQuantite(?int $quantite): self
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getProduits(): ?Produits
    {
        return $this->produits;
    }

    public function setProduits(?Produits $produits_leclaireur): self
    {
        $this->produits = $produits_leclaireur;

        return $this;
    }
}
