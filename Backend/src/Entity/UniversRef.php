<?php

namespace App\Entity;

use App\Repository\UniversRefRepository;
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
#[ORM\Entity(repositoryClass: UniversRefRepository::class)]
class UniversRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $univers_ref;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $univers_ref_en;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $univers_ref_abreviation;

    public function __construct($tab=[])
    {
        if($tab){
            if($tab["univers_ref"])
                $this->setUniversRef($tab["univers_ref"]);
            
            if($tab["univers_ref_en"])
                $this->setUniversRefEn($tab["univers_ref_en"]); 

            if($tab["univers_ref_abreviation"])
                $this->setUniversRefAbreviation($tab["univers_ref_abreviation"]);
        }
    } 
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUniversRef(): ?string
    {
        return $this->univers_ref;
    }

    public function setUniversRef(string $univers_ref="A revoir"): self
    {
        $this->univers_ref = $univers_ref;

        return $this;
    }

    public function getUniversRefEn(): ?string
    {
        return $this->univers_ref_en;
    }

    public function setUniversRefEn(?string $univers_ref_en): self
    {
        $this->univers_ref_en = $univers_ref_en;

        return $this;
    }

    public function getUniversRefAbreviation(): ?string
    {
        return $this->univers_ref_abreviation;
    }

    public function setUniversRefAbreviation(?string $univers_ref_abreviation): self
    {
        $this->univers_ref_abreviation = $univers_ref_abreviation;

        return $this;
    }
}
