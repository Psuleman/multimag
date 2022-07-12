<?php

namespace App\Entity;

use App\Repository\EntretienRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

#[ApiResource(
    collectionOperations: [
        'get' => ['method' => 'get'],
    ],
    itemOperations: [
        'get'=>[
        "controller"=> NotFoundAction::class,
        "output" => false
        ],
    ],
    attributes: ["pagination_enabled" => false],
)]
#[ORM\Entity(repositoryClass: EntretienRepository::class)]
class Entretien
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $entretien;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $entretien_en;

    public function __construct($tab=[])
    {
        if($tab){
            if($tab["entretien"])
                $this->setEntretien($tab["entretien"]);
            
            if($tab["entretien_en"])
                $this->setEntretienEn($tab["entretien_en"]);
        }
    }    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEntretien(): ?string
    {
        return $this->entretien;
    }

    public function setEntretien(string $entretien): self
    {
        $this->entretien = $entretien;

        return $this;
    }

    public function getEntretienEn(): ?string
    {
        return $this->entretien_en;
    }

    public function setEntretienEn(?string $entretien_en): self
    {
        $this->entretien_en = $entretien_en;

        return $this;
    }
}
