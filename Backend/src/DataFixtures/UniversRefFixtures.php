<?php

namespace App\DataFixtures;

use App\Entity\UniversRef;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UniversRefFixtures extends Fixture
{
	public function load(ObjectManager $manager): void
	{

		$universRef =[
			["univers_ref"=>"Femme", "univers_ref_en"=>"Women", "univers_ref_abreviation"=>"F"], 
			["univers_ref"=>"Homme", "univers_ref_en"=>"Men", "univers_ref_abreviation"=>"H"], 
			["univers_ref"=>"Maison", "univers_ref_en"=>"Home", "univers_ref_abreviation"=>"M"], 
			["univers_ref"=>"Autres", "univers_ref_en"=>"Other", "univers_ref_abreviation"=>"A"], 
		];
			
		sort($universRef);

		foreach ($universRef as $key => $value) {
			// code...
			$value["univers_ref"] = trim($value["univers_ref"]);
			$value["univers_ref_en"] = trim($value["univers_ref_en"]);
			$value["univers_ref_abreviation"] = trim($value["univers_ref_abreviation"]);
				            
			$universRef = new UniversRef($value);
			$find = $manager->getRepository(UniversRef::class)->findOneBy([
				"univers_ref" => $universRef->getUniversRef(),
			]);


            if(!$find){
                $manager->persist($universRef);
                $manager->flush();                
            }
		}
	}
}




