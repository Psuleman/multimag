<?php

namespace App\DataFixtures;

use App\Entity\Magasins;



use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class MagasinsFixtures extends Fixture
{
	public function load(ObjectManager $manager): void
	{
		
		$magasins =[
			["code_magasin" => 0, "magasin" => "Entrepot"],
			["code_magasin" => 3, "magasin" => "Farfetch shooting au Portugal"],
			["code_magasin" => 4, "magasin" => "Braderie"],
			["code_magasin" => 7, "magasin" => "Boutique Sevigne"],
			["code_magasin" => 9, "magasin" => "Référencement Farfetch"],
			["code_magasin" => 11, "magasin" => ""],
			["code_magasin" => 12, "magasin" => "Référencement Leclaireur"],
			["code_magasin" => 14, "magasin" => "Boutique Herold"],
			["code_magasin" => 18, "magasin" => "Boutique Boissy"],
			["code_magasin" => 20, "magasin" => ""],
			["code_magasin" => 50, "magasin" => "Ventes internet Farfetch"],
			["code_magasin" => 51, "magasin" => "Ventes internet Leclaireur"],
			["code_magasin" => 60, "magasin" => "Marchandise défectueux"]
		];


		sort($magasins);

		foreach ($magasins as $key => $value) {
			// code...
			$value["code_magasin"] = (int) $value["code_magasin"];
			$value["magasin"] = trim($value["magasin"]);
								
			$categorieRef = new Magasins($value);
			$find = $manager->getRepository(Magasins::class)->findOneBy([
				"code_magasin" => $categorieRef->getCodeMagasin(),
			]);


            if(!$find){
                $manager->persist($categorieRef);
                $manager->flush();                
            }
		}
	}
}




