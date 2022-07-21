<?php

namespace App\Entity;

use App\Repository\CoupeRepository;
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
#[ORM\Entity(repositoryClass: CoupeRepository::class)]
class Coupe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $coupe_ref;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $coupe_ref_en;

    public function __construct($tab=[])
    {
        if($tab){
            if($tab["coupe_ref"])
                $this->setCoupeRef($tab["coupe_ref"]);
            
            if($tab["coupe_ref_en"])
                $this->setCoupeRefEn($tab["coupe_ref_en"]);
        }
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCoupeRef(): ?string
    {
        return $this->coupe_ref;
    }

    public function setCoupeRef(string $coupe_ref): self
    {
        $this->coupe_ref = $coupe_ref;

        return $this;
    }

    public function getCoupeRefEn(): ?string
    {
        return $this->coupe_ref_en;
    }

    public function setCoupeRefEn(?string $coupe_ref_en): self
    {
        $this->coupe_ref_en = $coupe_ref_en;

        return $this;
    }
}
