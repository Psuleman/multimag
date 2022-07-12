<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\MarqueRefRepository;
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
#[ORM\Entity(repositoryClass: MarqueRefRepository::class)]
class MarqueRef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    public function __construct($marque){
        if($marque)
            $this->setMarque($marque);
    }

    #[ORM\Column(type: 'string', length: 255)]
    private $marque;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMarque(): ?string
    {
        return $this->marque;
    }

    public function setMarque(string $marque): self
    {
        $this->marque = $marque;

        return $this;
    }
}
