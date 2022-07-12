<?php

	namespace App\DataPersister;

	use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
	use App\Entity\CategorieRef;
	use App\Entity\CategorieUnivers;
	use Doctrine\ORM\EntityManagerInterface;
	use App\Entity\ProduitsTemporaire;
	use App\Entity\SousCategorieFNR;
	use App\Entity\Magasins;
	use App\Entity\Fournisseurs;
	use App\Entity\Pays;
	use App\Entity\ProduitsFournisseur;
	use App\Entity\ProduitsLeclaireur;
	use App\Entity\Produits;
	use App\Entity\Tarifs;
	use App\Entity\Stocks;
	use App\Entity\UniversRef;
	use App\Entity\SousCategorieRef;
	use App\Entity\Referencement;
	use App\Entity\SkusTemporaire;
	use App\Entity\ExportProduitTemporaire;
use App\Entity\FiltreRef;
use DateTime;
	final class ProductsDataPersister implements ContextAwareDataPersisterInterface
	{

		private $_eventManager;
		protected $newProduct;
		//private $_slugger;

	    public function majuscule($mot)
	    {
	            $mot = str_replace(["à", "â"], "a", $mot);
	            $mot = str_replace(["è", "é", "ê"], "e", $mot);
	            $mot = str_replace(["ï", "î", "ì"], "i", $mot);
	            $mot = str_replace(["ù", "û"], "i", $mot);
	            $mot = str_replace(["ô"], "o", $mot);        

	            return strtoupper($mot);
	    }

		public function minuscule($mot)
		{
			$mot = strtolower($mot);
			$mot[0] = strtoupper($mot[0]);
			return trim($mot);	
		}

		public function extraireString($mot, $debut, $nombredeCaractère){
			$result = "";

			for($i=$debut; $i<$nombredeCaractère; $i++){
				$result .= $mot[$i];
			}
			return $result;
			
		}

	    public function __construct(EntityManagerInterface $entityManager) 
	    {
	        $this->_entityManager = $entityManager;
	        $this->newProduct = true;
	    }	


		public function supports($data, array $context = []): bool
	    {
	        // TODO: Implement supports() method.
	        return $data instanceof ProduitsTemporaire;

	    }

	    public function persist($data, array $context = [])
	    {
	    	

	    	/**
	         * sous categorie
	         * magasin
	         * Fournisseur
	         * pays
	         * produitsFournisseur
	         * ProduitsLeclaireur
	         * Produits
	         * Tarifs
	         * Stocks
	         * 
	         * si nouveau produits
	         * Produits temporaire
	         * CategorieRef
	         * SousCategorieRef
	         * UniversRef
	         * Referencement
	         * Export
	         * 
	         */

			$filename='fichier_csv/products.csv';

/********************************************************************************************/
			//sous categorie
	    	$sousCategorie = new SousCategorieFNR([
	    		"code_sous_categorie"=>$data->getCodeFamille3(), 
	    		"sous_categorie"=>$data->getLibelleFamille3()
	    	]);
	    	$find = $this->_entityManager->getRepository(SousCategorieFNR::class)->findOneBy([
	    		"code_sous_categorie" => $sousCategorie->getCodeSousCategorie(),
	    		"sous_categorie" => $sousCategorie->getSousCategorie()
	    		]);	    	

	    	if(!$find)
	    		$this->_entityManager->persist($sousCategorie);
	    	else{
			    		$sousCategorie = $find;	    		
	    	
	    	}
			
	
/********************************************************************************************/
	    	
			//Fournisseur

			$marque = $data->getNomFournisseur();
			$marque = strtolower($marque);
	
			$tab = explode(" ", $marque);
			$marqueUpdate = "";
			foreach($tab as $valeur){
				$marqueUpdate .= ucfirst($valeur) . " ";
			}
			

			$marque = trim($marqueUpdate);
			$marque = str_replace("Homme", "", $marque);
			$marque = str_replace("Femme", "", $marque);
			$marque = str_replace("Maison", "", $marque);
			$marque = trim($marque);
			//$data->setNomFournisseur(ucwords($data->getNomFournisseur()));
			$data->setNomFournisseur(ucwords($marque));
	    	$fournisseur = new Fournisseurs(["code_fournisseur"=>$data->getCodeFournisseur(), "nom_fournisseur"=>$data->getNomFournisseur()]);
	    	$find = $this->_entityManager->getRepository(Fournisseurs::class)->findOneBy([
	    		"code_fournisseur" => $fournisseur->getCodeFournisseur(),
	    		"nom_fournisseur" => $fournisseur->getNomFournisseur()
	    		]);	    	

	    	if(!$find)
	    		$this->_entityManager->persist($fournisseur);
	    	else{
			    		$fournisseur = $find;
	    	}


/********************************************************************************************/
			//pays
			$pays = new Pays(["pays"=>"France", "continent"=>""]);
	    	$find = $this->_entityManager->getRepository(Pays::class)->findOneBy([
	    		"pays" => "France",
	    		]);	    	

	    	if(!$find)
	    		$this->_entityManager->persist($pays);
	    	else{
			    		$pays = $find;    		
	    	}

/********************************************************************************************/
			//produitsFournisseur
	    	$produitsFournisseur = new ProduitsFournisseur([
	    		"reference_fournisseur"=>$data->getReferenceFournisseur(), 
	    		"annee_sortie"=>$data->getAnneeSortie(),	    		
	    		"fournisseur"=>$fournisseur, 
	    		"code_saison"=>$data->getCodeSaison(), 
	    		"grille_taille"=>$data->getGrilleTaille()
	    	]);

			if($data->getCodeSaison() == 1)
				$produitsFournisseur->setSaison("SS");
			
			else
				$produitsFournisseur->setSaison("FF");

	    	$find = $this->_entityManager->getRepository(ProduitsFournisseur::class)->findOneBy([
	    		"reference_fournisseur" => $produitsFournisseur->getReferenceFournisseur(),
	    		"annee_sortie" => $produitsFournisseur->getAnneeSortie(),
	    		"fournisseur" => $produitsFournisseur->getFournisseur(),
	    		"saison" => $produitsFournisseur->getSaison(),
	    		"grille_taille" => $produitsFournisseur->getGrilleTaille()
	    		]);	    	

	    	if(!$find)
	    		$this->_entityManager->persist($produitsFournisseur);
	    	else{
			    		$produitsFournisseur = $find;	    		
	    	}
/********************************************************************************************/

			//ProduitsLeclaireur
	    	$produits_leclaireur = new ProduitsLeclaireur([
	    		"sku" => $data->getSku(),
	    		"code_mode_aquisition" => $data->getCodeFamille2(),
	    		"mode_acquisition" => $data->getLibelleFamille2(),
	    		"code_tag" => $data->getCodeFamille4(),
	    		"tag" => $data->getLibelleFamille4(),
	    		"code_famille_5" => $data->getCodeFamille5(),
	    		"famille_5" => $data->getLibelleFamille5(),
	    		"code_famille_6" => $data->getCodeFamille6(),
	    		"famille_6" => $data->getLibelleFamille6(),
	    		"date_arrivee" => $data->getDateArrivee(),
	    		"date_ajout" => new \DateTime("now")

	    	]);

	    	$find = $this->_entityManager->getRepository(ProduitsLeclaireur::class)->findOneBy([
	    		"sku" => $produits_leclaireur->getSku(),
	    		"mode_acquisition" => $produits_leclaireur->getModeAcquisition(),
	    		"tag" => $produits_leclaireur->getTag(),
	    		"famille_5" => $produits_leclaireur->getFamille5(),
	    		"famille_6" => $produits_leclaireur->getFamille6(),
	    		"date_arrivee" => $produits_leclaireur->getDateArrivee(),
	    		"date_ajout" => $produits_leclaireur->getDateAjout()
	    		]);	    	

	    	if(!$find)
	    		$this->_entityManager->persist($produits_leclaireur);
	    	else{
			    		$produits_leclaireur = $find;
	    	}
/********************************************************************************************/
$code_couleur = $data->getCodeCouleur();
$reference_couleur_1 = $data->getReferenceCouleur1() ? $data->getReferenceCouleur1() : "";
$reference_couleur_2 =$data->getReferenceCouleur2() ? $data->getReferenceCouleur2() : "" ;
$result = preg_match("#[\#]{1,}#i", $reference_couleur_1, $delimiter);
if($result){
	$donnees = explode($delimiter[0], $reference_couleur_1);

	if(count($donnees)>=2){
		$code_couleur .= $donnees[0];
		$reference_couleur_1 = $donnees[1];                        
	}
	if(count($donnees)>=3){
		$reference_couleur_2 = $donnees[2] . "" . $reference_couleur_2;
	}
}   
$result = preg_match("#[\#]{1,}#i", $reference_couleur_2, $delimiter);
if($result){
	$donnees = explode("#", $reference_couleur_2);

		//echo count($donnees);
	if(count($donnees)>=2){
		$reference_couleur_1 .= $donnees[0];                    
		$reference_couleur_2 = $donnees[1];                        
	}
	else{
		$reference_couleur_2 = " " . $donnees[0];
	}

}
//$reference_couleur_2 = $data->getReferenceCouleur2();
$reference_couleur_1 = str_replace("#", '', $reference_couleur_1);
$reference_couleur_2 = str_replace("#", "", $reference_couleur_2);

			//Produits
	    	$produits = new Produits([
	    		"produit_leclaireur" => $produits_leclaireur,
	    		"produit_fournisseur" => $produitsFournisseur, 
	    		"taille" => $data->getTaille(),
				"code_couleur" => $data->getCodeCouleur(),
				"reference_couleur" => $reference_couleur_1 . "" . $reference_couleur_2
	    	]);
	    	
	    	$find = $this->_entityManager->getRepository(Produits::class)->findOneBy([
	    		"produit_leclaireur" => $produits->getProduitLeclaireur(),
	    		"produit_fournisseur" => $produits->getProduitFournisseur(),
	    		"taille" => $produits->getTaille()
	    		]);	    	

	    	if(!$find)
	    		$this->_entityManager->persist($produits);
	    	else{
			    		$produits = $find;
			    		$this->newProduct = false;	    	
    		
	    	}
			
/********************************************************************************************/

			//Tarifs
	    	$tarifs = new Tarifs([
	    		"prix_vente"=>$data->getPrixVente(), 
		    	"pays"=>$pays,
		    	"produit_leclaireur"=>$produits_leclaireur
		    ]);
	    	$find = $this->_entityManager->getRepository(Tarifs::class)->findOneBy([
	    		"prix_vente" => $tarifs->getPrixVente(),
	    		"pays" => $tarifs->getPays(),
	    		"produit_leclaireur" => $tarifs->getProduitLeclaireur()
	    		]);	    	

	    	if(!$find)
	    		$this->_entityManager->persist($tarifs);
	    	else{
			    		$tarifs = $find;
	    	}

/********************************************************************************************/

			//Stocks
			$tabmag = [
				["magasin" => 0 , "quantite"=> $data->getStockMag0()],
				["magasin" => 3, "quantite"=> $data->getStockMag3()],
				["magasin" => 7, "quantite"=> $data->getStockMag7()],
				["magasin" => 9, "quantite"=> $data->getStockMag9()],
				["magasin" => 11, "quantite"=> $data->getStockMag11()],
				["magasin" => 12, "quantite"=> $data->getStockMag12()],
				["magasin" => 14, "quantite"=> $data->getStockMag14()],
				["magasin" => 18, "quantite"=> $data->getStockMag18()],
				["magasin" => 20, "quantite"=> $data->getStockMag20()],
				["magasin" => 60, "quantite"=> $data->getStockMag60()],
				];

			foreach($tabmag as $key=>$value)
			{
				if((int)$value["quantite"] != 0){

					//Recherche le magasin
			    	$magasinItem = $this->_entityManager->getRepository(Magasins::class)->findOneBy([
			    		"code_magasin" => $value["magasin"],
			    		]);
			    	//initialiser stock
			    	$Stock = new Stocks([
			    		"magasin"=>$magasinItem, 
			    		"quantite"=>(int)$value["quantite"],
			    		"produits"=>$produits
		    			]);


		    		$find = $this->_entityManager->getRepository(Stocks::class)->findOneBy([
			    		"magasin" => $Stock->getMagasin(),
			    		"quantite" => $Stock->getQuantite(),
			    		"produits" => $Stock->getProduits()
			    		]);	    	
			    	if(!$find)
			    		$this->_entityManager->persist($Stock);
			    	else{
			    		$Stock = $find;				
			    	}
			    }
	  		
	    	}



/********************************************************************************************/

			if($this->newProduct){
/**
				 * Referencement
				 */
				//date_ref
				//univers_ref
				//sous_categorie_ref
				
				/******* UNIVERS + CATEGORIE **************/
				$categorieMotCle = $data->getLibelleFamille1(); //ex : VET. Homme ou BIJOUTERIE
				$motCleCat = "#^";
				$univers_referencement = "Autres";
				$result = preg_match("#[. ]#i", $categorieMotCle, $delimiter); //Délimitateur
				if($result){
					/**
					 * On récupère catégorie
					 * On récupère univers
					 */
					$donnees = explode($delimiter[0], $categorieMotCle);
					$categorieMotCle = trim($this->majuscule($donnees[0]));
					$motCleCat .= $categorieMotCle;
					$univers_referencement = trim($this->majuscule($donnees[1]));
				}
				else{
					/**
					 * on extrait une partie de CatégorieRef
					 */
					$categorieMotCle = trim($this->majuscule($categorieMotCle));
					$motCleCat .= $categorieMotCle;

				}

				/**
				 * CATEGORIE
				 * On instancie CategorieRef
				 * On récupère la liste de Catégorie Ref
				 * si Categorie n'existe pas => on persiste
				 */
				//On instancie CategorieRef
				$categorieRef = new CategorieRef([
					"categorie_ref" => $this->minuscule($categorieMotCle),
					"categorie_ref_en" => ""
					]);	
				$motCleCat .= "#i";
				//liste CatégorieRef
				$categorieRefTab = $this->_entityManager->getRepository(CategorieRef::class)->findAll();

				//récupère la liste de CatégorieRef
				foreach($categorieRefTab as $value){
					$categorie = $this->majuscule($value->getCategorieRef());
					$rechercheCategorysRef = preg_match($motCleCat, $categorie); 
					if($rechercheCategorysRef){
						$categorieRef = $value;
						break;
					} 
				}
				if(!$categorieRef->getId()){
					/**
					 * Faire une recherche dans les sous catégorie
					 * Sinon dans les filtre
					 */
					$motCleCat = "#^";
					$motCleCat .= $this->majuscule($categorieMotCle);
					$motCleCat .= "#i";
										

					$findFiltre = $this->_entityManager->getRepository(FiltreRef::class)->findAll();
					foreach($findFiltre as $value){
						$filtre = $this->majuscule($value->getFiltre());
						$rechercheCategorysRef = preg_match($motCleCat, $filtre); 
						if($rechercheCategorysRef){
							$categorieRef = $value->getSousCategorieRef()->getCategorieRef();
							break;
						} 
						if(!$categorieRef->getId()){
							//recherche dans sous catégorie
							$findSousCategorie = $this->_entityManager->getRepository(SousCategorieRef::class)->findAll();
							foreach($findSousCategorie as $value){
								$sousCategorieReferencement = $this->majuscule($value->getSousCategorieRef());
								$rechercheCategorysRef = preg_match($motCleCat, $sousCategorieReferencement); 
								if($rechercheCategorysRef){
									$categorieRef = $value->getCategorieRef();
									break;
								} 
							}
						
						}	
					}	

					$this->_entityManager->persist($categorieRef);
				}
					

				 /**
				  * UNIVERS REF
				  */
				$universRefObjet = new UniversRef(["univers_ref" => $univers_referencement, "univers_ref_en"=>"", "univers_ref_abreviation"=>""]);

				$universRefTab = $this->_entityManager->getRepository(UniversRef::class)->findAll();

		        foreach ($universRefTab as $key => $value) {
		            // code...
		            $motCle = '#^'. $this->majuscule($value->getUniversRefAbreviation()) . "#i";

		            $rechercheUniversRef = preg_match($motCle, $universRefObjet->getUniversRef());
		            
		            if($rechercheUniversRef){
		                $universRefObjet = $value;
		                break;
		            }    
		        }

				if($universRefObjet->getUniversRef() == "Autres"){ //SI univers = autres
					$universFind = $this->_entityManager->getRepository(UniversRef::class)->findOneBy([
						"univers_ref" => "Maison"
					]);
					$categorieUnivers = $this->_entityManager->getRepository(CategorieUnivers::class)->findBy([
						//"categorie" => $categorieRef,
						"univers"=> $universFind
					]);
					foreach($categorieUnivers as $value){
						if($value->getCategorie()->getCategorieRef() == $categorieRef->getCategorieRef())
						{
							$universRefObjet = $universFind;
						}
					}	
					
					//Recherche dans categorieUnivers
					/*$categorieUnivers = $this->_entityManager->getRepository(CategorieUnivers::class)->findOneBy([
						"categorie" => $categorieRef
					]);

					//si les données existe
					if($categorieUnivers){
						$universRefObjet = $this->_entityManager->getRepository(UniversRef::class)->findOneBy([
							"univers_ref"=> $categorieUnivers->getUnivers()->getUniversRef()
						]);
					}*/

				}

				if($this->majuscule($data->getLibelleFamille1()) == "DESIGN"){
					$universRefObjet = $this->_entityManager->getRepository(UniversRef::class)->findOneBy([
						"univers_ref" => "Maison"
					]);
				}
				if(
					$universRefObjet->getUniversRef() != "Femme" && 
					$universRefObjet->getUniversRef() != "Homme" && 
					$universRefObjet->getUniversRef() != "Maison" && 
					$universRefObjet->getUniversRef() != "Autres" 
				){
					$universTemp = $universRefObjet->getUniversRef();
					$universRefObjet = $this->_entityManager->getRepository(UniversRef::class)->findOneBy([
						"univers_ref" => "Autres"
					]);
					if(!$categorieRef->getId())
						$categorieRef->setCategorieRef($categorieRef->getCategorieRef() . " " . strtolower($universTemp) );
				}



		        /*************************** SOUS CATEGORIE REFERENCEMENT *************************/
		        $sousCategorieMotCle = $this->minuscule($sousCategorie->getSousCategorie());
		        $SouscategorieRefObjet = new SousCategorieRef(["sous_categorie_ref"=>$sousCategorieMotCle, "sous_categorie_ref_en" => ""]);
		        $sousCategorieRefTab = $this->_entityManager->getRepository(SousCategorieRef::class)->findAll();

		        foreach ($sousCategorieRefTab as $key => $value) {
		            // code...
		            $motCle = '#^'. $SouscategorieRefObjet->getSousCategorieRef() . "#i";
		            $SousCategory = $this->majuscule($value->getSousCategorieRef());
		            $rechercheSousCategorysRef = preg_match($motCle, $SousCategory);
		            if($rechercheSousCategorysRef){
		                $SouscategorieRefObjet = $value;
						$categorieRef = $value->getCategorieRef();
		                break;
		            }    
		        }

				if(!$SouscategorieRefObjet->getId()){
					$SouscategorieRefObjet->setCategorieRef($categorieRef);
					$this->_entityManager->persist($SouscategorieRefObjet);
					//Filtre
					$filtre = new FiltreRef([
						"filtre" => $SouscategorieRefObjet->getSousCategorieRef(),
						"filtre_ref_en" => ""
					]);
					$filtre->setSousCategorieRef($SouscategorieRefObjet);
					$this->_entityManager->persist($filtre);
				}
				
				$referencement = new Referencement([
					"univers_ref" => $universRefObjet,
					"sous_categorie_ref" => $SouscategorieRefObjet,
					"produit_leclaireur" => $produits_leclaireur
				]);
				//$referencement->setGrilleTailleRef($grille_taille);

		    	$find = $this->_entityManager->getRepository(Referencement::class)->findOneBy([
		    		"univers_ref" => $referencement->getUniversRef(),
		    		"sous_categorie_ref" => $referencement->getSousCategorieRef(),
					"produit_leclaireur" => $produits_leclaireur,
		    		]);
				

		    	if(!$find)
				{
					$img = "";
					for($i=1; $i<10; $i++)
						$img .= "https://leclaireur-shopify.imgix.net/" . $data->getSku() . "/" . $data->getSku() . "-0".$i.".png;";

					$img .= "https://leclaireur-shopify.imgix.net/" . $data->getSku() . "/" . $data->getSku() . "-360.mp4";
					
					$referencement->setPictures($img);

					/**
					 * tags dans referencement
					 */

					$tags_ref = $universRefObjet->getUniversRef() . "," . $universRefObjet->getUniversRefEn() . ',';
					$tags_ref .= "Couleur_,Color_,";
					$tags_ref .= ",,";//Filtre à modifier dans ExportUpdateDataPersister
					$tags_ref .= $SouscategorieRefObjet->getSousCategorieRef() . "," . $SouscategorieRefObjet->getSousCategorieRefEn() . ',';
					$tags_ref .= "Catégorie_" . $SouscategorieRefObjet->getSousCategorieRef() . ",Category_" . $SouscategorieRefObjet->getSousCategorieRefEn() . ',';
					$tags_ref .= "Créateur_" . $fournisseur->getNomFournisseur() . ",Designer_" . $fournisseur->getNomFournisseur() . ',';
					$tags_ref .= $produitsFournisseur->getReferenceFournisseur() . ',';
					if($categorieRef)
						$tags_ref .= $categorieRef->getCategorieRef() . "," . $categorieRef->getCategorieRefEn() . ',';
					$tags_ref .= $produitsFournisseur->getSaison() . "" . $produitsFournisseur->getAnneeSortie();

					$referencement->setTagsRef($tags_ref);

		    		$this->_entityManager->persist($referencement);
				}

		    	else{
				    $referencement = $find;
		    	}

				/**
				 * Skus Temporaire
				 */
				$find = $this->_entityManager->getRepository(SkusTemporaire::class)->findOneBy([
					"sku" => $data->getSku()
				]);

				$boissy = $data->getStockMag18(); //mag 18
				$sevigne = $data->getStockMag7(); //mag 7
				$herold = $data->getStockMag14(); //mag 14
				$cheneviere = $data->getStockMag0(); //mag 0
				$reference = $data->getStockMag9(); //mag 9
				$farfetch = $data->getStockMag3(); //mag 3
				$total_stock = $boissy + $sevigne + $herold + $cheneviere + $reference + $farfetch;

				if($find){

					$skus = $find;
					$boissy += $skus->getBoissy(); //mag 18
					$sevigne += $skus->getSevigne(); //mag 7
					$herold += $skus->getHerold(); //mag 14
					$cheneviere += $skus->getCheneviere(); //mag 0
					$reference += $skus->getReference(); //mag 9
					$farfetch += $skus->getFarfetch(); //mag 9
					$total_stock = $boissy + $sevigne + $herold + $cheneviere + $reference + $farfetch;
				}
				else{
					$skus = new SkusTemporaire();
					$skus->setSku($data->getSku());
					$skus->setDateAjout($produits_leclaireur->getDateAjout());
					$skus->setDateArrivee($produits_leclaireur->getDateArrivee());
					$skus->setUnivers($universRefObjet->getUniversRef());
					$skus->setMarque($fournisseur->getNomFournisseur());
					$skus->setCouleurFnr($reference_couleur_1 . "" . $reference_couleur_2);
					if($SouscategorieRefObjet->getCategorieRef()->getCategorieRef() && $categorieRef)
						$skus->setCategorie($SouscategorieRefObjet->getCategorieRef()->getCategorieRef());

					$skus->setPrixVente($data->getPrixVente());					
					$saison_skus = "" . $produitsFournisseur->getSaison() . "" . $produitsFournisseur->getAnneeSortie();
					$skus->setSeason($saison_skus);
					//$skus->setCarryOverFrom(); A revoir
					$lien = "https://leclaireur.com/products/" . $data->getSku();
					$skus->setLien($lien);
					$skus->setTag($produits_leclaireur->getTag());
					$lien = "https://leclaireur-shopify.imgix.net/" . $data->getSku() . "/" . $data->getSku() . "-01.png";
					$skus->setPicture($lien);
					$skus->setNotes($referencement->getNotes());
					$skus->setSousCategorie($SouscategorieRefObjet->getSousCategorieRef());			
			}

				//stocks
				$skus->setBoissy($boissy);
				$skus->setSevigne($sevigne);
				$skus->setHerold($herold);
				$skus->setCheneviere($cheneviere);
				$skus->setReference($reference);
				$skus->setFarfetch($farfetch);
				$skus->setTotalStock($total_stock);

				$this->_entityManager->persist($skus);
				/*********************************************************************/

				//Table export
				$exportTable = new ExportProduitTemporaire();
				$exportTable->setSku($skus->getSku());
				$exportTable->setDateArrivee($data->getDateArrivee());
				$exportTable->setMarque($skus->getMarque());
				$exportTable->setCategorie($skus->getCategorie());
				$exportTable->setCategorieEn($categorieRef->getCategorieRefEn());
				$exportTable->setReferenceFournisseur($produitsFournisseur->getReferenceFournisseur());
				$exportTable->setCouleurFournisseur($skus->getCouleurFnr());
				$exportTable->setPrixVente($skus->getPrixVente());
				//$exportTable->setPrixVenteRemise();
				$exportTable->setSaison($skus->getSeason());
				$exportTable->setUnivers($skus->getUnivers());
				$exportTable->setUniversEn($universRefObjet->getUniversRefEn());
				$exportTable->setUniversAbreviation($universRefObjet->getUniversRefAbreviation());
				$exportTable->setSousCategorie($SouscategorieRefObjet->getSousCategorieRef());
				$exportTable->setSousCategorieEn($SouscategorieRefObjet->getSousCategorieRefEn());
				$exportTable->setTagsRef($referencement->getTagsRef());

				$exportTable->setFiltre("");
				$exportTable->setFiltreEn("");
				$exportTable->setCouleur("");
				$exportTable->setCouleurEn("");
				$exportTable->setPaysOrigine("");
				$exportTable->setGrilleTaille("");
				$exportTable->setAttribut("");
				$exportTable->setNomProduitFr("");
				$exportTable->setNomProduitEn("");
				$exportTable->setEntretien("");
				$exportTable->setEntretienEn("");
				$exportTable->setDescriptionFr("");
				$exportTable->setDescriptioEn("");
				$exportTable->setCoupe("");
				$exportTable->setCoupeEn("");
				$exportTable->setTaillePorteeMannequin("");
				$exportTable->setMatiere1("");
				$exportTable->setPourcentMatiere1(0);
				$exportTable->setMatiere2("");
				$exportTable->setPourcentMatiere2(0);
				$exportTable->setMatiere3("");
				$exportTable->setPourcentMatiere3(0);
				$exportTable->setMatiere4("");
				$exportTable->setPourcentMatiere4(0);
				$exportTable->setMatiere5("");
				$exportTable->setPourcentMatiere5(0);
				$exportTable->setMatiere6("");
				$exportTable->setPourcentMatiere6(0);
				$exportTable->setMatiere7("");
				$exportTable->setPourcentMatiere7(0);
				$exportTable->setMatiere8("");
				$exportTable->setPourcentMatiere8(0);
				$exportTable->setMatiere9("");
				$exportTable->setPourcentMatiere9(0);
				$exportTable->setMatiere10("");
				$exportTable->setPourcentMatiere10(0);
				$exportTable->setDimensionFr("");
				$exportTable->setDimensionEn("");
				$exportTable->setPictures($referencement->getPictures());
				$exportTable->setNewProduit(true);
				$exportTable->setReferencer(false);
				//$exportTable->setGrilleTaille($grille_taille->getGrilleTaille());

				$find = $this->_entityManager->getRepository(ExportProduitTemporaire::class)->findOneBy([
							"sku" => $exportTable->getSku()
							]);

				if(!$find)
		        	$this->_entityManager->persist($exportTable);
					

		        $this->_entityManager->persist($data);
		        $this->_entityManager->flush();
		        return $data;				
			}
			else{
				return "le produits est déjà dans la base de données";
			}

	    }

	    public function remove($data, array $context = [])
	    {
	        // TODO: Implement remove() method.
	        //appellé pour une opération delete
	        $this->_entityManager->remove($data);
	        $this->_entityManager->flush();	   
	    }
	}