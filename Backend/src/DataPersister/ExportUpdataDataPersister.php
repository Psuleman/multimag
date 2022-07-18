<?php
	namespace App\DataPersister;

	use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
	use App\Entity\CategorieRef;
	use App\Entity\CouleurRef;
	use App\Entity\Coupe;
	use App\Entity\Entretien;
	use Doctrine\ORM\EntityManagerInterface;
	use App\Entity\Pays;
	use App\Entity\ProduitsLeclaireur;
	use App\Entity\Referencement;
	use App\Entity\ExportProduitTemporaire;
	use App\Entity\FiltreRef;
	use App\Entity\GrilleTailleRef;
	use App\Entity\MarqueRef;
	use App\Entity\Matiere;
	use App\Entity\ProduitMatiere;
	use App\Entity\Produits;
	use App\Entity\ProduitsFournisseur;
	use App\Entity\SousCategorieRef;
	use App\Entity\TailleRef;
	use App\Entity\Tarifs;
	use App\Entity\UniversRef;
	use DateTime;

	final class ExportUpdataDataPersister implements ContextAwareDataPersisterInterface
	{

		private $_eventManager;
		protected $newProduct;
		//private $_slugger;


	    public function __construct(EntityManagerInterface $entityManager) 
	    {
	        $this->_entityManager = $entityManager;
	        $this->newProduct = true;
	    }	


		public function supports($data, array $context = []): bool
	    {
	        // TODO: Implement supports() method.
	        return $data instanceof ExportProduitTemporaire;

	    }

	    public function persist($data, array $context = [])
	    {


			if($data->getNewProduit() == false && $data->getNewListAttente()==false){
				//sku , marque, saison, univers, categorie, couleurFournisseur, prixVente, sousCategorie, newProduit, dateAjout, dateArrivee, prixVente,
				/**
				 * prixVenteRemise,  matiere 1 à 10, pourcentage matiere 1 à 10, CategorieEn, sousCategorieEn, filtreEn, UniversEn, universABreviation, couleurEn
				 *  coupeEn, entretienEn, reference fournisseur, taillePorteeMannequin, picture, tagsRef, dateRef, filtre, couleur, grilleTaille, nomProduitFr, nomProduitEn, descriptionFr, descriptioEn, entretien, coupe, attribut, dimensionFr, dimensionEn, paysOrigine,
				 */
				$findExports = $this->_entityManager->getRepository(ExportProduitTemporaire::class)->findOneBy([
					"sku" => $data->getSku()
				]);

				if(!$findExports){
					$produitLeclaireurModif = $this->_entityManager->getRepository(ProduitsLeclaireur::class)->findOneBy([
						"sku" => $data->getSku()
					]);
					$referencementModif = $this->_entityManager->getRepository(Referencement::class)->findOneBy([
						"produit_leclaireur" => $produitLeclaireurModif,
					]);
					$produitModif = $this->_entityManager->getRepository(Produits::class)->findOneBy([
						"produit_leclaireur" => $produitLeclaireurModif
					]);
					
					$tarifModif = $this->_entityManager->getRepository(Tarifs::class)->findOneBy([
						"produit_leclaireur" => $produitLeclaireurModif
					]);
					if($referencementModif->getTaillePorteeMannequin())
						$data->setTaillePorteeMannequin($referencementModif->getTaillePorteeMannequin());

					if($referencementModif->getPictures())
						$data->setPictures($referencementModif->getPictures());

					if($referencementModif->getTagsRef())
						$data->setTagsRef($referencementModif->getTagsRef());

					if($referencementModif->getDateRef())
						$data->setDateRef($referencementModif->getDateRef());

					if($referencementModif->getUniversRef()){
						$data->setUnivers($referencementModif->getUniversRef()->getUniversRef());
						$data->setUniversEn($referencementModif->getUniversRef()->getUniversRefEn());
					}
						

					if($referencementModif->getSousCategorieRef()){
						$data->setSousCategorie($referencementModif->getSousCategorieRef()->getSousCategorieRef());
						$data->setSousCategorieEn($referencementModif->getSousCategorieRef()->getSousCategorieRefEn());
					}
					
					if($referencementModif->getFiltre()){
						$data->setFiltre($referencementModif->getFiltre()->getFiltre());
						$data->setFiltreEn($referencementModif->getFiltre()->getFiltreRefEn());

					}
					
					if($referencementModif->getCouleurRef()){
						$data->setCouleur($referencementModif->getCouleurRef()->getCouleurRef());
						$data->setCouleur($referencementModif->getCouleurRef()->getCouleurRefEn());
					}

					if($referencementModif->getPaysOrigine())
						$data->setPaysOrigine($referencementModif->getPaysOrigine()->getPays());

					if($referencementModif->getAttribut()){
						$data->setAttribut($referencementModif->getAttribut()->getTailleRef());
						$data->setGrilleTaille($referencementModif->getAttribut()->getGrilleTailleRef()->getGrilleTailleRef());

					}

					if($referencementModif->getNomProduitFr())	
						$data->setNomProduitFr($referencementModif->getNomProduitFr());

					if($referencementModif->getNomProduitEn())	
						$data->setNomProduitEn($referencementModif->getNomProduitEn());

					if($referencementModif->getDescriptionFr())	
						$data->setDescriptionFr($referencementModif->getDescriptionFr());

					if($referencementModif->getDescriptionEn())	
						$data->setDescriptioEn($referencementModif->getDescriptionEn());

					if($referencementModif->getCoupe()){
						$data->setCoupe($referencementModif->getCoupe()->getCoupeRef());
						$data->setCoupeEn($referencementModif->getCoupe()->getCoupeRefEn());

					}	

					if($referencementModif->getEntretien()){
						$data->setEntretien($referencementModif->getEntretien()->getEntretien());
						$data->setEntretienEn($referencementModif->getEntretien()->getEntretienEn());
					}

					if($referencementModif->getDimensionFr())	
						$data->setDimensionFr($referencementModif->getDimensionFr());

					if($referencementModif->getDimensionEn())	
						$data->setDimensionEn($referencementModif->getDimensionEn());

					if($produitModif->getProduitFournisseur())	
						$data->setReferenceFournisseur($produitModif->getProduitFournisseur()->getReferenceFournisseur());
						
					if($tarifModif){
						$data->setPrixVente($tarifModif->getPrixVente());
						$data->setPrixVenteRemise($tarifModif->getPrixRemise());
					}


					$produitMatiere = $this->_entityManager->getRepository(ProduitMatiere::class)->findBy([
						"produit" => $produitLeclaireurModif
					]);
					for($i=0; $i<count($produitMatiere); $i++){
						$setMatiere = "setMatiere" . ($i+1);
						$setPourcentage = "setPourcentMatiere" . ($i+1);

						$$setMatiere($produitMatiere[$i]->getMatiere()->getMatiere());
						$$setPourcentage($produitMatiere[$i]->getPourcentageMatiere());
					}

				}
				$data->setNewListAttente(false);


				$this->_entityManager->persist($data);
				$this->_entityManager->flush();	 

			}else{

			/**
			 * marque update 
			 * pays origine
			 * 
			 * sous categorieRef - Referencement
			 * filtre ref - Referencement
			 * couleur - Referencement			 
			 * grille taille - Referencement
			 * attribut - Referencement
			 * coupe - Referencement
			 * entretien - Referencement
			 * description fr - Referencement
			 * description en - Referencement
			 * nom produit fr - Referencement
			 * nom produit en - Referencement
			 * taille portée par le mannequin - Referencement
			 * 
			 * matière - Produit_matiere
			 * poucentageMatiere - Produit_matiere
			 */

			/**
			 * SKU du produit à modifier
			 * pays origine
			 * matiere / pourcentage matiere
			 */
			$findProduitFNR = $this->_entityManager->getRepository(ProduitsFournisseur::class)->findOneBy([
				"reference_fournisseur" => $data->getReferenceFournisseur(),
				"fournisseur" => $data->getMarque(),
			]);

			$findProduitLeclareur = $this->_entityManager->getRepository(ProduitsLeclaireur::class)->findOneBy([
				"sku" => $data->getSku(),
				"date_ajout" => $data->getDateRef()
			]);
			if($findProduitLeclareur){
				$marquefind = $this->_entityManager->getRepository(MarqueRef::class)->findOneBy(["marque" => $data->getMarque()]);
				
				if($marquefind)
					$findProduitLeclareur->setMarqueUpdate($marquefind);
			}


			
			//matiere / pourcentage matiere
			if($data->getMatiere1() != ""){
				$matiere = new Matiere(["matiere" => $data->getMatiere1(), "matiere_en"=>""]);
				$find = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere"=>$matiere->getMatiere()]);
				if($find){
					$produitMatiere = new ProduitMatiere([
						"matiere" => $find,
						"produit" => $findProduitLeclareur,
						"pourcentageMatiere" => $data->getPourcentMatiere1()
					]);
					$this->_entityManager->persist($produitMatiere);

				}
			}
			if($data->getMatiere2() != ""){
				$matiere = new Matiere(["matiere" => $data->getMatiere2(), "matiere_en"=>""]);
				$find = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere"=>$matiere->getMatiere()]);
				if($find){
					$produitMatiere = new ProduitMatiere([
						"matiere" => $find,
						"produit" => $findProduitLeclareur,
						"pourcentageMatiere" => $data->getPourcentMatiere2()
					]);
					$this->_entityManager->persist($produitMatiere);

				}
			}			
			if($data->getMatiere3() != ""){
				$matiere = new Matiere(["matiere" => $data->getMatiere3(), "matiere_en"=>""]);
				$find = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere"=>$matiere->getMatiere()]);
				if($find){
					$produitMatiere = new ProduitMatiere([
						"matiere" => $find,
						"produit" => $findProduitLeclareur,
						"pourcentageMatiere" => $data->getPourcentMatiere3()
					]);
					$this->_entityManager->persist($produitMatiere);

				}
			}
			if($data->getMatiere4() != ""){
				$matiere = new Matiere(["matiere" => $data->getMatiere4(), "matiere_en"=>""]);
				$find = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere"=>$matiere->getMatiere()]);
				if($find){
					$produitMatiere = new ProduitMatiere([
						"matiere" => $find,
						"produit" => $findProduitLeclareur,
						"pourcentageMatiere" => $data->getPourcentMatiere4()
					]);
					$this->_entityManager->persist($produitMatiere);

				}
			}
			if($data->getMatiere5() != ""){
				$matiere = new Matiere(["matiere" => $data->getMatiere5(), "matiere_en"=>""]);
				$find = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere"=>$matiere->getMatiere()]);
				if($find){
					$produitMatiere = new ProduitMatiere([
						"matiere" => $find,
						"produit" => $findProduitLeclareur,
						"pourcentageMatiere" => $data->getPourcentMatiere5()
					]);
					$this->_entityManager->persist($produitMatiere);

				}
			}
			if($data->getMatiere6() != ""){
				$matiere = new Matiere(["matiere" => $data->getMatiere6(), "matiere_en"=>""]);
				$find = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere"=>$matiere->getMatiere()]);
				if($find){
					$produitMatiere = new ProduitMatiere([
						"matiere" => $find,
						"produit" => $findProduitLeclareur,
						"pourcentageMatiere" => $data->getPourcentMatiere6()
					]);
					$this->_entityManager->persist($produitMatiere);

				}
			}
			if($data->getMatiere7() != ""){
				$matiere = new Matiere(["matiere" => $data->getMatiere7(), "matiere_en"=>""]);
				$find = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere"=>$matiere->getMatiere()]);
				if($find){
					$produitMatiere = new ProduitMatiere([
						"matiere" => $find,
						"produit" => $findProduitLeclareur,
						"pourcentageMatiere" => $data->getPourcentMatiere7()
					]);
					$this->_entityManager->persist($produitMatiere);

				}
			}
			if($data->getMatiere8() != ""){
				$matiere = new Matiere(["matiere" => $data->getMatiere8(), "matiere_en"=>""]);
				$find = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere"=>$matiere->getMatiere()]);
				if($find){
					$produitMatiere = new ProduitMatiere([
						"matiere" => $find,
						"produit" => $findProduitLeclareur,
						"pourcentageMatiere" => $data->getPourcentMatiere8()
					]);
					$this->_entityManager->persist($produitMatiere);

				}
			}
			if($data->getMatiere9() != ""){
				$matiere = new Matiere(["matiere" => $data->getMatiere9(), "matiere_en"=>""]);
				$find = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere"=>$matiere->getMatiere()]);
				if($find){
					$produitMatiere = new ProduitMatiere([
						"matiere" => $find,
						"produit" => $findProduitLeclareur,
						"pourcentageMatiere" => $data->getPourcentMatiere9()
					]);
					$this->_entityManager->persist($produitMatiere);

				}
			}
			if($data->getMatiere10() != ""){
				$matiere = new Matiere(["matiere" => $data->getMatiere10(), "matiere_en"=>""]);
				$find = $this->_entityManager->getRepository(Matiere::class)->findOneBy(["matiere"=>$matiere->getMatiere()]);
				if($find){
					$produitMatiere = new ProduitMatiere([
						"matiere" => $find,
						"produit" => $findProduitLeclareur,
						"pourcentageMatiere" => $data->getPourcentMatiere10()
					]);
					$this->_entityManager->persist($produitMatiere);

				}
			}



			/**
			 * REFERENCEMENT
			 */
			/*$findReferencement = $this->_entityManager->getRepository(Produits::class)->findOneBy([
				"sku" => $data->getSku(),
			]);*/

			/*univers_ref
			sous_categorie_ref
			filtre
			couleurRef
			pays_origine
			grille_taille
			attribut
			nom_produit_fr
			nom_produit_en
			description_fr
			description_en
			coupe
			taille_portee_mannequin
			entretien
			notes*/

			$referencement = $this->_entityManager->getRepository(Referencement::class)->findOneBy([
				'produit_leclaireur' => $findProduitLeclareur
			]);
			if($referencement){
				//Univers
				$universFind = $this->_entityManager->getRepository(UniversRef::class)->findOneBy([
					"univers_ref" => $data->getUnivers()
				]);
				if(!$universFind){
					//nouveau univers
					$universFind = new UniversRef(["univers_ref"=>$data->getUnivers(), "univers_ref_en"=>$data->getUniversEn()]);
					$universFind->setUniversRefAbreviation($universFind[0]);
					$this->_entityManager->persist($universFind);
					$referencement->setUniversRef($universFind);
					$data->setUniversEn($universFind->getUniversRefEn());
				}

					//CATEGORIE
				if($data->getCategorie() != ""){
					$categorieFind = $this->_entityManager->getRepository(CategorieRef::class)->findOneBy([
						"categorie_ref" => $data->getCategorie()
					]);

					if(($categorieFind->getCategorieRef() != $data->getCategorieEn()) && $data->getCategorieEn()!=""){
						$categorieFind->setCategorieRefEn($data->getCategorieEn());

						$this->_entityManager->persist($categorieFind);
					}

					$data->setCategorieEn($categorieFind->getCategorieRefEn());

					if(!$categorieFind){ //Si catégorie n'existe pas
						$categorieFind = new CategorieRef(["categorie_ref"=>$data->getCategorie(), "categorie_ref_en"=>$data->getCategorieEn()]);
						$this->_entityManager->persist($categorieFind);
						$data->setCategorieEn($categorieFind->getCategorieRefEn());
					}					
				}


				if($data->getSousCategorie() != ""){
					//SOUS CATEGORIE
					$sousCategorieFind = $this->_entityManager->getRepository(SousCategorieRef::class)->findOneBy([
						"sous_categorie_ref"=>$data->getSousCategorie(),
						"categorie_ref" => $categorieFind
					]);

					if($sousCategorieFind){
						$referencement->setSousCategorieRef($sousCategorieFind);
						if(($sousCategorieFind->getSousCategorieRefEn() != $data->getSousCategorieEn()) && $data->getSousCategorieEn()){
							$sousCategorieFind->setSousCategorieRefEn($data->getSousCategorieEn());
							$this->_entityManager->persist($categorieFind);
						}					
					}
						
						
					else{
						//Si sous categorie n'existe pas
						//... A revoir peut - être 
						$sousCategorieFind = new SousCategorieRef(["sous_categorie_ref"=> $data->getSousCategorie(), "sous_categorie_ref_en"=>$data->getSousCategorieEn()]);
						$sousCategorieFind->setCategorieRef($categorieFind);
						$this->_entityManager->persist($sousCategorieFind);
						$referencement->setSousCategorieRef($sousCategorieFind);
					}					
					$data->setSousCategorieEn($sousCategorieFind->getSousCategorieRefEn());					
				}


				if($data->getFiltre() != "")
				{
					//Filtre
					if($sousCategorieFind){
						$filtreFind = $this->_entityManager->getRepository(FiltreRef::class)->findOneBy([
							"filtre" => $data->getFiltre(),
						]);
						

						if($filtreFind){
							if(($filtreFind->getFiltreRefEn() != $data->getFiltreEn()) && $data->getFiltreEn()){
								$filtreFind->setFiltreRefEn($data->getFiltreEn());
								$this->_entityManager->persist($filtreFind);
								$this->_entityManager->flush();
							}	

							$referencement->setFiltre($filtreFind);

							if(!$data->getFiltreEn()){
								$data->setFiltreEn($filtreFind->getFiltreRefEn());
							}
						}
							

						else if(!$filtreFind && $data->getFiltre()!=""){
							$filtreFind = new FiltreRef(["filtre"=>$data->getFiltre(), "filtre_ref_en"=>$data->getFiltreEn(), "sousCategorieRef"=>""]);
							$filtreFind->setSousCategorieRef($sousCategorieFind);
							$this->_entityManager->persist($filtreFind);
							$referencement->setFiltre($filtreFind);
						}
						
						
						$data->setFiltreEn($filtreFind->getFiltreRefEn());		

						/*if($filtreFind)
							$data->setFiltreEn($filtreFind->getFiltreRefEn());
						*/

					}
				
				}

				

				/*if($data->getCouleur() != ""){
					//Couleurs
					$couleurFind = new CouleurRef();
					$couleurRef = $this->_entityManager->getRepository(CouleurRef::class)->findOneBy(["couleur_ref" => $data->getCouleur()]);
					if($couleurRef){//si c'est déjà dans la base de données
						//$data->setCouleurEn($couleurRef->getCouleurRefEn());
						if(($couleurRef->getCouleurRefEn() != $data->getCouleurEn()) && $data->getCouleurEn()){
							$couleurRef->setCouleurRefEn(ucfirst(strtolower($data->getCouleurEn())));
							$this->_entityManager->persist($couleurRef);
						}
						$data->setCouleurEn($couleurRef->getCouleurRefEn());
						$referencement->setCouleurRef($couleurRef);
					}
						

					else if($data->getCouleur()!=""){
						$couleurFind = new CouleurRef(["couleur_ref"=>$data->getCouleur(), "couleur_ref_en"=>$data->getCouleurEn()]);
						$this->_entityManager->persist($couleurFind);
						$referencement->setCouleurRef($couleurFind);
						//$data->setCouleurEn($couleurFind->getCouleurRefEn());	
						if($couleurFind)	
							$data->setCouleurEn($couleurFind->getCouleurRefEn());						
					}
				
				}*/

				//COULEUR
				if($data->getCouleur() != ""){
					/**
					 * Vérifier dans la base de données
					 * si dans la base de données, verifier si couleur en est la meme.
					 * si couleur en n'est pas la même, modifier
					 * si couleur n'est pas dans la base de données, enregistrer
					 */
					$couleurFind = $this->_entityManager->getRepository(CouleurRef::class)->findOneBy(["couleur_ref" => $data->getCouleur()]);
					if($couleurFind){
						if(($couleurFind->getCouleurRefEn() != $data->getCouleurEn()) && $data->getCouleurEn()){
							$couleurFind->setCouleurEn(ucfirst(strtolower($data->getCouleurEn())));
						}
					}
					else{
						$couleurFind = new CouleurRef(["couleur_ref"=>$data->getCouleur(), "couleur_ref_en"=>$data->getCouleurEn()]);
					}
					$this->_entityManager->persist($couleurFind);
					$referencement->setCouleurRef($couleurFind);
					$data->setCouleurEn($couleurFind->getCouleurRefEn());

				}

				//Pays Origine
				if($data->getPaysOrigine()!="")
				{
					$paysOrigine = new Pays(["pays"=>$data->getPaysOrigine()]);
					$findPays = $this->_entityManager->getRepository(Pays::class)->findOneBy(["pays"=>$paysOrigine->getPays()]);

					if($findPays)
						$referencement->setPaysOrigine($findPays);
					else{
						$this->_entityManager->persist($paysOrigine);
						$referencement->setPaysOrigine($paysOrigine);
					}

					$this->_entityManager->persist($paysOrigine);
					$referencement->setPaysOrigine($paysOrigine);
				}

				
				//Grille taille à revoir avec Benedicte
				if($data->getGrilleTaille()!=""){
					$grilleTailleRef = $this->_entityManager->getRepository(GrilleTailleRef::class)->findOneBy(["grilleTailleRef" => $data->getGrilleTaille()]);
					if($grilleTailleRef){}
						//$referencement->setGrilleTailleRef($grilleTailleRef);

					else if(!$grilleTailleRef && $data->getAttribut()!=""){
						$grilleTailleFind = new GrilleTailleRef(["attribut" => $data->getAttribut()]);
						$this->_entityManager->persist($grilleTailleFind);
						$grilleTailleRef = $grilleTailleFind;
					}	
					//Attribut  = Taille ref
					$stock_id = $grilleTailleRef->getGrilleTailleRef() . "_" . $data->getAttribut();
					$tailleReferencement = new TailleRef(["taille_ref" => $data->getAttribut(), "grille_taille_ref"=>$grilleTailleRef, "stock_id"=>$stock_id,	"stock_code"=>""]);

					$attributFind = $this->_entityManager->getRepository(TailleRef::class)->findOneBy([
						"taille_ref" => $tailleReferencement->getTailleRef(),
						"grille_taille_ref" => $grilleTailleRef
					]);

					if($attributFind){
						$referencement->setAttribut($attributFind);
						$tailleReferencement = $attributFind;				
					}	

					else if($data->getGrilleTaille()!=""){
						$this->_entityManager->persist($tailleReferencement);
						$referencement->setAttribut($tailleReferencement);
					}
					
					$data->setTailleStockId($tailleReferencement->getStockId());	
					$data->setTailleStockCode($tailleReferencement->getStockCode());	
				}


				if($data->getEntretien() != ""){
					//Entretien
					$entretienFind = $this->_entityManager->getRepository(Entretien::class)->findOneBy(["entretien" => $data->getEntretien()]);
					if($entretienFind){
						if(($entretienFind->getEntretienEn() != $data->getEntretienEn()) && $data->getEntretienEn()){
							$entretienFind->setEntretienEn($data->getEntretienEn());
							$this->_entityManager->persist($tailleReferencement);
						}
						
						$referencement->setEntretien($entretienFind);
					}
						

					else if($data->getEntretien()!=""){
						$entretien = new Entretien(["entretien"=>$data->getEntretien(), "entretien_en"=>""]);
						$this->_entityManager->persist($entretien);
						$referencement->setEntretien($entretien);
					}	
					$data->setEntretienEn($entretienFind->getEntretienEn());					
				}

				//Nom produit
				$referencement->setNomProduitFr($data->getNomProduitFr());
				$referencement->setNomProduitEn($data->getNomProduitEn());

				//Description
				$referencement->setDescriptionFr($data->getDescriptionFr());
				$referencement->setDescriptionEn($data->getDescriptioEn());
				//Dimension
				$referencement->setDimensionFr($data->getDimensionFr());
				$referencement->setDimensionEn($data->getDimensionEn());

				if($data->getCoupe() != ""){
					//coupe
					$coupeFind = $this->_entityManager->getRepository(Coupe::class)->findOneBy(["coupe_ref" => $data->getCoupe()]);
					if($coupeFind){
						if(($coupeFind->getCoupeRefEn() != $data->getCoupeEn()) && $data->getCoupeEn()){
							$coupeFind->setCoupeRefEn($data->getCoupeEn());
							$this->_entityManager->persist($entretien);
						}
						$referencement->setCoupe($coupeFind);
					}
						

					else if($data->getCoupe()!=""){
						$coupeFind = new Coupe(["coupe_ref"=>$data->getCoupe(), "coupe_ref_en" =>""]);
						$this->_entityManager->persist($coupeFind);
						$referencement->setCoupe($coupeFind);
					}	
					$data->setCoupeEn($coupeFind->getCoupeRefEn());					
				}

				//date_ref
				if($data->getDateRef())
					$referencement->setDateRef($data->getDateRef());
				//taille mannequin
				if($data->getTaillePorteeMannequin())
					$referencement->setTaillePorteeMannequin($data->getTaillePorteeMannequin());

				
				$this->_entityManager->persist($data);

				/**
				 * tags dans referencement
				 */
				/*$tags_ref = $data->getUnivers() . "," . $data->getUniversEn() . ',';
				$tags_ref .= "Couleur_".$data->getCouleur().",Color_Test,".$data->getCouleurEn();
				$tags_ref .= $data->getFiltre() .",". $data->getFiltreEn().",";//Filtre à modifier dans ExportUpdateDataPersister
				$tags_ref .= $data->getSousCategorie() . "," . $data->getSousCategorieEn() . ',';
				$tags_ref .= "Catégorie_" . $data->getSousCategorie() . ",Category_" . $data->getSousCategorieEn() . ',';
				$tags_ref .= "Créateur_" . $data->getMarque() . ",Designer_" . $data->getMarque() . ',';
				$tags_ref .= $data->getReferenceFournisseur() . ',';
				$tags_ref .= $data->getCategorie() . "," . $data->getCategorieEn() . ',';
				$tags_ref .= $data->getSaison();

				$referencement->setTagsRef($tags_ref);*/
				$this->_entityManager->persist($referencement);
			}




	        $this->_entityManager->persist($data);
	        $this->_entityManager->flush();	 
		}//end else

	    }

	    public function remove($data, array $context = [])
	    {
	        // TODO: Implement remove() method.
	        //appellé pour une opération delete
	        $this->_entityManager->remove($data);
	        $this->_entityManager->flush();	   
	    }
	}