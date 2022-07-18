<?php

namespace App\Entity;

use App\Repository\ProduitsLeclaireurRepository;
use Doctrine\ORM\Mapping as ORM;
use DateTime;

#[ORM\Entity(repositoryClass: ProduitsLeclaireurRepository::class)]
class ProduitsLeclaireur
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $sku;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_tag;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $tag;

    #[ORM\Column(type: 'date')]
    private $date_arrivee;

    #[ORM\ManyToOne(targetEntity: MarqueRef::class)]
    private $marque_update;

    #[ORM\Column(type: 'date')]
    private $date_ajout;

    #[ORM\ManyToOne(targetEntity: Pays::class)]
    private $pays_origine; //date aujourd'hui

    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_famille_5;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $famille_5;
    
    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_famille_6;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $famille_6;

    
    #[ORM\Column(type: 'integer', nullable: true)]
    private $code_mode_aquisition;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $mode_acquisition;

    public function __construct(array $tab = []){
        if($tab){
            if($tab["sku"])
                $this->setSku($tab["sku"]);            

            if($tab["code_mode_aquisition"])
                $this->setCodeModeAquisition($tab["code_mode_aquisition"]); 

            if($tab["mode_acquisition"])
                $this->setModeAcquisition($tab["mode_acquisition"]);        

            if($tab["tag"])
                $this->setTag($tab["tag"]);
            
            if($tab["code_tag"])
                $this->setCodeTag($tab["code_famille_5"]);                        
            
            if($tab["code_famille_5"])
                $this->setCodeFamille5($tab["code_famille_5"]);      

            if($tab["famille_5"])
                $this->setFamille5($tab["famille_5"]);  
            
            if($tab["code_famille_6"])
                $this->setCodeFamille6($tab["code_famille_5"]);   

            if($tab["famille_6"])
                $this->setFamille6($tab["famille_6"]);        

            if($tab["date_arrivee"])
                $this->setDateArrivee($tab["date_arrivee"]);

            if($tab["date_ajout"])
                $this->setDateAjout($tab["date_ajout"]);
        }    
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSku(): ?int
    {
        return $this->sku;
    }

    public function setSku(int $sku): self
    {
        $this->sku = $sku;

        return $this;
    }

    public function getCodeTag(): ?int
    {
        return $this->code_tag;
    }

    public function setCodeTag(int $code_tag): self
    {
        $this->code_tag = $code_tag;

        return $this;
    }

    public function getTag(): ?string
    {
        return $this->tag;
    }

    public function setTag(string $tag): self
    {
        $this->tag = $tag;

        return $this;
    }


    public function getCodeFamille5(): ?int
    {
        return $this->code_famille_5;
    }

    public function setCodeFamille5(int $code_famille_5): self
    {
        $this->code_famille_5 = $code_famille_5;

        return $this;
    }

    public function getFamille5(): ?string
    {
        return $this->famille_5;
    }

    public function setFamille5(string $famille_5): self
    {
        $this->famille_5 = $famille_5;

        return $this;
    }

    public function getCodeFamille6(): ?int
    {
        return $this->code_famille_6;
    }

    public function setCodeFamille6(int $code_famille_6): self
    {
        $this->code_famille_6 = $code_famille_6;

        return $this;
    }

    public function getFamille6(): ?string
    {
        return $this->famille_6;
    }

    public function setFamille6(string $famille_6): self
    {
        $this->famille_6 = $famille_6;

        return $this;
    }

    public function getDateArrivee(): ?\DateTimeInterface
    {
        return $this->date_arrivee;
    }

    public function setDateArrivee(\DateTimeInterface $date_arrivee): self
    {
        $this->date_arrivee = $date_arrivee;

        return $this;
    }

    public function getMarqueUpdate(): ?MarqueRef
    {
        return $this->marque_update;
    }

    public function setMarqueUpdate(?MarqueRef $marque_update): self
    {
        $this->marque_update = $marque_update;

        return $this;
    }

    public function getDateAjout(): ?\DateTimeInterface
    {
        return $this->date_ajout;
    }

    public function setDateAjout(\DateTimeInterface $date_ajout=new \DateTime("now")): self
    {
        $this->date_ajout = $date_ajout;

        return $this;
    }

    public function getPaysOrigine(): ?Pays
    {
        return $this->pays_origine;
    }

    public function setPaysOrigine(?Pays $pays_origine): self
    {
        $this->pays_origine = $pays_origine;

        return $this;
    }
    
    public function getCodeModeAquisition(): ?int
    {
        return $this->code_mode_aquisition;
    }

    public function setCodeModeAquisition(int $code_mode_aquisition): self
    {
        $this->code_mode_aquisition = $code_mode_aquisition;

        return $this;
    }

    public function getModeAcquisition(): ?string
    {
        return $this->mode_acquisition;
    }

    public function setModeAcquisition(string $mode_acquisition): self
    {
        $this->mode_acquisition = $mode_acquisition;

        return $this;
    }
}
