<?php

namespace App\Entity;

use App\Repository\SousCategorieFNRRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SousCategorieFNRRepository::class)]
class SousCategorieFNR
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $code_sous_categorie;

    #[ORM\Column(type: 'string', length: 255)]
    private $sous_categorie;

    public function __construct(array $tab = []){

        if($tab)
        {
            if($tab["code_sous_categorie"])
                $this->setCodeSousCategorie($tab["code_sous_categorie"]);

            if($tab["sous_categorie"])
                $this->setSousCategorie($tab["sous_categorie"]);
        }        
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodeSousCategorie(): ?string
    {
        return $this->code_sous_categorie;
    }

    public function setCodeSousCategorie(string $code_sous_categorie): self
    {
        $this->code_sous_categorie = $code_sous_categorie;

        return $this;
    }

    public function getSousCategorie(): ?string
    {
        return $this->sous_categorie;
    }

    public function setSousCategorie(string $sous_categorie): self
    {
        $this->sous_categorie = $sous_categorie;

        return $this;
    }
}
