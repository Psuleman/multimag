<?php

namespace App\DataFixtures;

use App\Entity\Coupe;



use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CoupeFixtures extends Fixture
{
	public function load(ObjectManager $manager): void
	{


		$coupes = [
		["coupe_ref"=>"La coupe est slim.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est skinny.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est droite.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est près du corps.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est cintrée.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est ample.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est large.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est évasée.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est ajustée.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est structurée.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est asymétrique.", "coupe_ref_en" =>""], 
		["coupe_ref"=>"La coupe est trapèze.", "coupe_ref_en" =>""], 
		 
		];


		sort($coupes);

		foreach ($coupes as $key => $value) {
			// code...
			$value["coupe_ref"] = trim($value["coupe_ref"]);
			$value["coupe_ref_en"] = trim($value["coupe_ref_en"]);
			$coupes = new Coupe($value);
			$find = $manager->getRepository(Coupe::class)->findOneBy([
				"coupe_ref" => $coupes->getCoupeRef(),
			]);


            if(!$find){
                $manager->persist($coupes);
                $manager->flush();                
            }
		}
	}
}




