<?php

namespace App\Entity;

use App\Repository\ProduitsFournisseurRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProduitsFournisseurRepository::class)]
class ProduitsFournisseur
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $reference_fournisseur;

    #[ORM\Column(type: 'integer')]
    private $annee_sortie;

    #[ORM\ManyToOne(targetEntity: Fournisseurs::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $fournisseur;

    #[ORM\Column(type: 'integer')]
    private $code_saison;

    #[ORM\Column(type: 'string', length: 100, nullable:true)]
    private $saison;


    #[ORM\Column(type: 'string', length: 100)]
    private $grille_taille;

    public function __construct(array $tab = []){
        if($tab){
            if($tab["reference_fournisseur"])
                $this->setReferenceFournisseur($tab["reference_fournisseur"]);            

            if($tab["annee_sortie"])
                $this->setAnneeSortie($tab["annee_sortie"]);        


            if($tab["fournisseur"])
                $this->setFournisseur($tab["fournisseur"]);        

            if($tab["code_saison"])
                $this->setCodeSaison($tab["code_saison"]);   


            if($tab["grille_taille"])
                $this->setGrilleTaille($tab["grille_taille"]);
        }    
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getAnneeSortie(): ?int
    {
        return $this->annee_sortie;
    }

    public function setAnneeSortie(int $annee_sortie): self
    {
        $this->annee_sortie = $annee_sortie;

        return $this;
    }

    public function getFournisseur(): ?Fournisseurs
    {
        return $this->fournisseur;
    }

    public function setFournisseur(?Fournisseurs $fournisseur): self
    {
        $this->fournisseur = $fournisseur;

        return $this;
    }

    public function getCodeSaison(): ?int
    {
        return $this->code_saison;
    }

    public function setCodeSaison(int $code_saison): self
    {
        $this->code_saison = (int)$code_saison;

        return $this;
    }

    public function getSaison(): ?string
    {
        return $this->saison;
    }

    public function setSaison(string $saison): self
    {
        $this->saison = htmlspecialchars($saison);

        return $this;
    }

    public function getGrilleTaille(): ?string
    {
        return $this->grille_taille;
    }

    public function setGrilleTaille(string $grille_taille): self
    {
        $this->grille_taille = htmlspecialchars($grille_taille);

        return $this;
    }
}
