<?php

namespace App\Entity;

use App\Repository\CouleurRefRepository;
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
)]#[ORM\Entity(repositoryClass: CouleurRefRepository::class)]
class CouleurRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $couleur_ref;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $couleur_ref_en;

    public function __construct($tab=[])
    {
        if($tab){
            if($tab["couleur_ref"])
                $this->setCouleurRef($tab["couleur_ref"]);
            
            if($tab["couleur_ref_en"])
                $this->setCouleurRefEn($tab["couleur_ref_en"]);
        }
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCouleurRef(): ?string
    {
        return $this->couleur_ref;
    }

    public function setCouleurRef(string $couleur_ref): self
    {
        $this->couleur_ref = $couleur_ref;

        return $this;
    }

    public function getCouleurRefEn(): ?string
    {
        return $this->couleur_ref_en;
    }

    public function setCouleurRefEn(?string $couleur_ref_en): self
    {
        $this->couleur_ref_en = $couleur_ref_en;

        return $this;
    }
}
