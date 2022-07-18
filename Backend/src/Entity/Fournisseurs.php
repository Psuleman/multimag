<?php

namespace App\Entity;

use App\Repository\FournisseursRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FournisseursRepository::class)]
class Fournisseurs
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $code_fournisseur;

    #[ORM\Column(type: 'string', length: 255)]
    private $nom_fournisseur;


    public function __construct(array $tab=[])
    {
        if($tab){
            if($tab["code_fournisseur"])
                $this->setCodeFournisseur($tab["code_fournisseur"]);

            if($tab["nom_fournisseur"])
                $this->setNomFournisseur($tab["nom_fournisseur"]);
        }
    }    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodeFournisseur(): ?string
    {
        return $this->code_fournisseur;
    }

    public function setCodeFournisseur(string $code_fournisseur): self
    {
        $this->code_fournisseur = htmlspecialchars($code_fournisseur);

        return $this;
    }

    public function getNomFournisseur(): ?string
    {
        return $this->nom_fournisseur;
    }

    public function setNomFournisseur(string $nom_fournisseur): self
    {
        $this->nom_fournisseur = htmlspecialchars($nom_fournisseur);

        return $this;
    }
}
