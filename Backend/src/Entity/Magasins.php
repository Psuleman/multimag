<?php

namespace App\Entity;

use App\Repository\MagasinsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MagasinsRepository::class)]
class Magasins
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $code_magasin;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $magasin;


    public function __construct($tab=[])
    {
        $this->setCodeMagasin(11);
        if($tab){
            if($tab["code_magasin"])
                $this->setCodeMagasin($tab["code_magasin"]);

            if($tab["code_magasin"]==0)
                $this->setCodeMagasin(0);
            
            if($tab["magasin"])
                $this->setMagasin($tab["magasin"]);
        }
    }  

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodeMagasin(): ?int
    {
        return $this->code_magasin;
    }

    public function setCodeMagasin(int $code_magasin): self
    {
        $this->code_magasin = $code_magasin;

        return $this;
    }

    public function getMagasin(): ?string
    {
        return $this->magasin;
    }

    public function setMagasin(?string $magasin): self
    {
        $this->magasin = $magasin;

        return $this;
    }
}
