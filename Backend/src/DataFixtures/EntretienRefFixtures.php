<?php

namespace App\DataFixtures;

use App\Entity\Entretien;



use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class EntretienRefFixtures extends Fixture
{
	public function load(ObjectManager $manager): void
	{


		$universRefTab = [["entretien"=>"Brosser.", "entretien_en"=>""], 
			["entretien"=>"En machine, température max 30°C.", "entretien_en"=>""], 
			["entretien"=>"En machine, température max 40°C.", "entretien_en"=>""], 
			["entretien"=>"Lavage à la main.", "entretien_en"=>""], 
			["entretien"=>"Nettoyage à sec.", "entretien_en"=>""], 
			["entretien"=>"Nettoyage chez un spécialiste.", "entretien_en"=>""], 
			["entretien"=>"Nettoyer avec une brosse douce. Pulverisez le daim avec un agent anti-tâches avant d’être porté. ", "entretien_en"=>""], 
			["entretien"=>"Nettoyer avec une éponge imbibée, puis cirer.", "entretien_en"=>""], 
			["entretien"=>"Nettoyer avec une éponge imbibée.", "entretien_en"=>""], 
			["entretien"=>"Utiliser une brosse pour nubuck.", "entretien_en"=>""], 
			["entretien"=>"Nettoyer avec un chiffon, sans savon ni détergeant abrasif.", "entretien_en"=>""],

			];

		sort($universRefTab);

		foreach ($universRefTab as $key => $value) {
			// code...
			$value["entretien"] = trim($value["entretien"]);
			$value["entretien_en"] = trim($value["entretien_en"]);			
			$universRef = new Entretien($value);
			$find = $manager->getRepository(Entretien::class)->findOneBy([
				"entretien" => $universRef->getEntretien(),
			]);


            if(!$find){
                $manager->persist($universRef);
                $manager->flush();                
            }
		}
	}
}




