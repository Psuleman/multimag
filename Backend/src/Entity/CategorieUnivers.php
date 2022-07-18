<?php

namespace App\Entity;

use App\Repository\CategorieUniversRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategorieUniversRepository::class)]
class CategorieUnivers
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: CategorieRef::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $categorie;

    #[ORM\ManyToOne(targetEntity: UniversRef::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $univers;

    function __construct($tab=[]){
        if($tab["univers"])
            $this->setUnivers($tab["univers"]);

        if($tab["categorie"])
            $this->setCategorie($tab["categorie"]);
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategorie(): ?CategorieRef
    {
        return $this->categorie;
    }

    public function setCategorie(?CategorieRef $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getUnivers(): ?UniversRef
    {
        return $this->univers;
    }

    public function setUnivers(?UniversRef $univers): self
    {
        $this->univers = $univers;

        return $this;
    }
}
