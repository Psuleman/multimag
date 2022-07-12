import {useState, useEffect, useContext} from 'react'
import {ReferencementContext} from './Context/ReferencementContext'
import {ProduitContext} from './Context/ProduitContext'

import Moment from 'moment'
import Caracteristique from './Produit/Caracteristique'
import Description from './Produit/Description'
import Matiere from './Produit/Matiere'
import Information from './Produit/Information'
import Images from './Produit/Images'



const RefProduit = () => {
	const {skuRef, setShowReferencement} = useContext(ReferencementContext)

	const [information, setInformation] = useState(true)
	const [caracteristique, setCaracteristique] = useState(false)
	const [description, setDescription] = useState(false)
	const [matiere, setMatiere] = useState(false)
	const [images, setImages] = useState(false)

	const [currentPage, setCurrentPage] = useState("Informations")
	const [nextPage, setNextPage] = useState("Caractéristique")
	const [successUpdates, setSuccessUpdates] = useState(false)
	const [echecUpdates, setEchecUpdates] = useState(false)

	const [produit, setProduit] = useState({})

	//données à partager
	const [universUpdate, setUniversUpdate] = useState()
	const [universEnUpdate, setUniversEnUpdate] = useState()

	const [categorieUpdate, setCategorieUpdate] = useState()
	const [categorieEnUpdate, setCategorieEnUpdate] = useState()
	
	const [prixVenteRemiseUpdate, setPrixVenteRemiseUpdate] = useState()
	const [marqueUpdate, setMarqueUpdate] = useState()

	const [sousCategorieUpdate, setSousCategorieUpdate] = useState()
	const [sousCategorieEnUpdate, setSousCategorieEnUpdate] = useState()

	const [couleurUpdate, setCouleurUpdate] = useState()
	const [couleurEnUpdate, setCouleurEnUpdate] = useState()

	const [paysOrigineUpdate, setPaysOrigineUpdate] = useState()

	const [grilleTailleUpdate, setGrilleTailleUpdate] = useState()
	const [attributUpdate, setAttributUpdate] = useState()

	const [coupeUpdate, setCoupeUpdate] = useState()
	const [coupeEnUpdate, setCoupeEnUpdate] = useState()

	const [entretienUpdate, setEntretienUpdate] = useState()
	const [entretienEnUpdate, setEntretienEnUpdate] = useState()

	const [descriptionFrUpdate, setDescriptionFrUpdate] = useState()
	const [descriptionEnUpdate, setDescriptionEnUpdate] = useState()

	const [dimensionFrUpdate, setDimensionFrUpdate] = useState()
	const [dimensionEnUpdate, setDimensionEnUpdate] = useState()

	const [nomProduitFrUpdate, setNomProduitFrUpdate] = useState()
	const [nomProduitEnUpdate, setNomProduitEnUpdate] = useState()

	const [filtreUpdate, setFiltreUpdate] = useState()
	const [filtreEnUpdate, setFiltreEnUpdate] = useState()

	const [tailleMannequinUpdate, setTailleMannequinUpdate] = useState()

	const [matiere1Update, setMatiere1Update] = useState()
	const [pourcentMatiere1Update, setPourcentMatiere1Update] = useState()

	const [matiere2Update, setMatiere2Update] = useState()
	const [pourcentMatiere2Update, setPourcentMatiere2Update] = useState()

	const [matiere3Update, setMatiere3Update] = useState()
	const [pourcentMatiere3Update, setPourcentMatiere3Update] = useState()

	const [matiere4Update, setMatiere4Update] = useState()
	const [pourcentMatiere4Update, setPourcentMatiere4Update] = useState()

	const [matiere5Update, setMatiere5Update] = useState()
	const [pourcentMatiere5Update, setPourcentMatiere5Update] = useState()

	const [matiere6Update, setMatiere6Update] = useState()
	const [pourcentMatiere6Update, setPourcentMatiere6Update] = useState()

	const [matiere7Update, setMatiere7Update] = useState()
	const [pourcentMatiere7Update, setPourcentMatiere7Update] = useState()

	const [matiere8Update, setMatiere8Update] = useState()
	const [pourcentMatiere8Update, setPourcentMatiere8Update] = useState()

	const [matiere9Update, setMatiere9Update] = useState()
	const [pourcentMatiere9Update, setPourcentMatiere9Update] = useState()

	const [matiere10Update, setMatiere10Update] = useState()
	const [pourcentMatiere10Update, setPourcentMatiere10Update] = useState()

    const [totalMatiere , setTotalMatiere] = useState()

	const [tagsReferencementUpdate, setTagsReferencementUpdate] = useState() 


	useEffect(()=>{
		setCurrentPage("Informations")
		gotoCurrentPage("Informations")

		const url = "http://212.129.3.31:8080/api/export_produit_temporaires?sku=" + skuRef

		fetch(url,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
		.then(function(res){
		 	if(res.ok){
		 		return res.json()
		 	}
		 })
		.then(function(value){
			setProduit(value[0])

			//Initialisation des données à partager
					//information
		setCurrentPage("Informations")
		gotoCurrentPage("Informations")
		
		setTagsReferencementUpdate(value[0].tagsRef)
		value[0].prixVenteRemise!= null ? setPrixVenteRemiseUpdate(value[0].prixVenteRemise) : setPrixVenteRemiseUpdate(0)
		value[0].univers!= null ? setUniversUpdate(value[0].univers) : setUniversUpdate("")
		value[0].universEn!= null ? setUniversEnUpdate(value[0].universEn) : setUniversEnUpdate("")
		value[0].marque != null ? setMarqueUpdate(value[0].marque) : setMarqueUpdate("")

		//caractéristique
		if(
			value[0].categorie == null &&
			value[0].sousCategorie == null &&
			value[0].couleur == null &&
			value[0].paysOrigine == null &&
			value[0].grilleTaille == null &&
			value[0].attribut == null &&
			value[0].filtre == null
			){
				setCategorieUpdate("")
				setSousCategorieUpdate("")
				setCouleurUpdate("")
				setPaysOrigineUpdate("")
				setGrilleTailleUpdate("")
				setAttributUpdate("")
				setFiltreUpdate("")

			}

		else{
			setCategorieUpdate(value[0].categorie)
			setCategorieEnUpdate(value[0].categorieEn)
			setSousCategorieUpdate(value[0].sousCategorie)
			setSousCategorieEnUpdate(value[0].sousCategorieEn)
			setCouleurUpdate(value[0].couleur)
			setCouleurEnUpdate(value[0].couleurEn)
			setPaysOrigineUpdate(value[0].paysOrigine)
			setGrilleTailleUpdate(value[0].grilleTaille)
			setAttributUpdate(value[0].attribut)
			setFiltreUpdate(value[0].filtre)
			setFiltreEnUpdate(value[0].filtreEn)


		}

		//Description

		if(
			value[0].coupe == null &&
			value[0].entretien == null&&
			value[0].descriptionFr == null &&
			value[0].descriptio_en == null &&
			value[0].dimensionFr == null &&
			value[0].dimensionEn == null &&
			value[0].nomProduitFr == null &&
			value[0].nomProduitEn == null &&
			value[0].taillePorteeMannequin == null 			
			){
				setCoupeUpdate("")
				setEntretienUpdate("")
				setDescriptionFrUpdate("")
				setDescriptionEnUpdate("")
				setDimensionFrUpdate("")
				setDimensionEnUpdate("")
				setNomProduitFrUpdate("")
				setNomProduitEnUpdate("")
				setTailleMannequinUpdate("")
			}

		else{
			setCoupeUpdate(value.coupe)
			setEntretienUpdate(value.entretien)
			 setDescriptionFrUpdate(value.descriptionFr)
			setDescriptionEnUpdate(value.descriptio_en)
			 setDimensionFrUpdate(value.dimensionFr)
			setDimensionEnUpdate(value.dimensionEn)
			setNomProduitFrUpdate(value.nomProduitFr)
			setNomProduitEnUpdate(value.nomProduitEn)
			setTailleMannequinUpdate(value.taillePorteeMannequin)
			setTagsReferencementUpdate(value.tagsRef)
		}


		value[0].matiere1 != null ? 	setMatiere1Update(value[0].matiere1) : setMatiere1Update("")
		value[0].pourcentMatiere1 != null ? setPourcentMatiere1Update(value[0].pourcentMatiere1) : setPourcentMatiere1Update(0)
		value[0].matiere2 != null ? 	setMatiere2Update(value[0].matiere2) : setMatiere2Update("")
		value[0].pourcentMatiere2 != null ? setPourcentMatiere2Update(value[0].pourcentMatiere2) : setPourcentMatiere2Update(0)
		value[0].matiere3 != null ? 	setMatiere3Update(value[0].matiere3) : setMatiere3Update("")
		value[0].pourcentMatiere3 != null ? setPourcentMatiere3Update(value[0].pourcentMatiere3) : setPourcentMatiere3Update(0)
		value[0].matiere4 != null ? 	setMatiere4Update(value[0].matiere4) : setMatiere4Update("")
		value[0].pourcentMatiere4!=null ? setPourcentMatiere4Update(value[0].pourcentMatiere4) : setPourcentMatiere4Update(0)
		value[0].matiere5!=null ? 	setMatiere5Update(value[0].matiere5) : setMatiere5Update("")
		value[0].pourcentMatiere5!=null ? setPourcentMatiere5Update(value[0].pourcentMatiere5) : setPourcentMatiere5Update(0)
		value[0].matiere6!=null ? 	setMatiere6Update(value[0].matiere6) : setMatiere6Update("")
		value[0].pourcentMatiere6!=null ? setPourcentMatiere6Update(value[0].pourcentMatiere6) : setPourcentMatiere6Update(0)
		value[0].matiere7!=null ? 	setMatiere7Update(value[0].matiere7) : setMatiere7Update("")
		value[0].pourcentMatiere7!=null ? setPourcentMatiere7Update(value[0].pourcentMatiere7) : setPourcentMatiere7Update(0)
		value[0].matiere8!=null ? 	setMatiere8Update(value[0].matiere8) : setMatiere8Update("")
		value[0].pourcentMatiere8!=null ? setPourcentMatiere8Update(value[0].pourcentMatiere8) : setPourcentMatiere8Update(0)
		value[0].matiere9!=null ? 	setMatiere9Update(value[0].matiere9) : setMatiere9Update("")
		value[0].pourcentMatiere9!=null ? setPourcentMatiere9Update(value[0].pourcentMatiere9) : setPourcentMatiere9Update(0)
		value[0].matiere10!=null ? setMatiere10Update(value[0].matiere10) : setMatiere10Update("")
		value[0].pourcentMatiere10!=null ? setPourcentMatiere10Update(value[0].pourcentMatiere10) : setPourcentMatiere10Update(0)

		setTotalMatiere(value[0].pourcentMatiere1 + value[0].pourcentMatiere2 + value[0].pourcentMatiere3 + value[0].pourcentMatiere4 + value[0].pourcentMatiere5 + value[0].pourcentMatiere6 + value[0].pourcentMatiere7 + value[0].pourcentMatiere8 + value[0].pourcentMatiere9 + value[0].pourcentMatiere10)		
		//Aller à la page à modifier (currentPage)
		})
		.catch(function(err){
		 })



	}, [skuRef])


	const gotoCurrentPage = (onglet) => {
		setCurrentPage(onglet)
		setSuccessUpdates(false)

		if(onglet == "Informations"){
			setInformation(true)
			setCaracteristique(false)
			setDescription(false)
			setMatiere(false)
			setNextPage("Caractéristique")
			setImages(false)

		}
		if(onglet == "Caractéristique"){
			setInformation(false)
			setCaracteristique(true)
			setDescription(false)
			setMatiere(false)
			setNextPage("Description")
			setImages(false)
			
		}
		if(onglet == "Description"){
			setInformation(false)
			setCaracteristique(false)
			setDescription(true)
			setMatiere(false)
			setNextPage("Matières")
			setImages(false)
		}
		if(onglet == "Matières"){
			setInformation(false)
			setCaracteristique(false)
			setDescription(false)
			setMatiere(true)
			setImages(false)

		}		
		if(onglet == "Images"){
			setInformation(false)
			setCaracteristique(false)
			setDescription(false)
			setMatiere(false)
			setImages(true)
		}

	}

	const handleClickUpdate = () => {
		/**
		 * sous categorie
		 * couleur
		 * pays origine
		 * grille taille
		 * attribut
		 * coupe
		 * entretien
		 * description fr & description en
		 * nom du produit fr & nom du produit en
		 * taille portee par le mannequin
		 */


		if(matiere1Update=="")
			setPourcentMatiere1Update(0)
		if(matiere2Update=="")
			setPourcentMatiere2Update(0)
		if(matiere3Update=="")
			setPourcentMatiere3Update(0)
		if(matiere4Update=="")
		 	setPourcentMatiere4Update(0)
		if(matiere5Update=="")
			setPourcentMatiere5Update(0)
		 if(matiere6Update=="")
			setPourcentMatiere6Update(0)
		if(matiere7Update=="")
			setPourcentMatiere7Update(0)
		if(matiere8Update=="")
			setPourcentMatiere8Update(0)
		if(matiere9Update=="")
			setPourcentMatiere9Update(0)
		if(matiere10Update=="")
			setPourcentMatiere10Update(0)


	/**
     * TAGS
     */
		let tags_text = universUpdate + ',' + universEnUpdate+',Couleur_'+couleurUpdate+',Color_'+ couleurEnUpdate+','+filtreUpdate+','+filtreEnUpdate+','+sousCategorieUpdate+','+sousCategorieEnUpdate+',Catégorie_'+sousCategorieUpdate+',Category_'+sousCategorieEnUpdate+',Créateur_'+marqueUpdate+',Designer_'+marqueUpdate+','+produit.referenceFournisseur+','+categorieUpdate+','+categorieEnUpdate+','+produit.saison
		setTagsReferencementUpdate(tags_text)
		let referencer = false
		if((produit.sousCategorie!="")
			&& (filtreUpdate!="")
			&& (paysOrigineUpdate!="")
			&& (grilleTailleUpdate!="")
			&& (attributUpdate!="")
			//&& (value[i].coupe!="")
			//&& (value[i].entretien!="") A REDEMANDER
			&& (descriptionFrUpdate!="")
			&& (descriptionEnUpdate!="")
			&& (nomProduitFrUpdate!="")
			&& (nomProduitEnUpdate!="")
			&& (matiere1Update!="")
			&& (pourcentMatiere1Update>0)
			){
				referencer = true
			}
		
		let data = {
				sku: produit.sku,
				marque: marqueUpdate ? marqueUpdate : produit.marque,
				saison: produit.saison,
				univers: universUpdate? universUpdate : produit.univers,
				universEn: universEnUpdate? universEnUpdate : produit.universEn,
				categorie: categorieUpdate?categorieUpdate:produit.categorie,
				categorieEn: categorieEnUpdate?categorieEnUpdate:produit.categorieEn,
				filtre: filtreUpdate? filtreUpdate:"",
				filtreEn: filtreEnUpdate? filtreEnUpdate:"",
				couleur: couleurUpdate?couleurUpdate:"",
				couleurEn: couleurEnUpdate?couleurEnUpdate:"",
				attribut: attributUpdate?attributUpdate:"",
				entretien: entretienUpdate?entretienUpdate:"",
				entretienEn: entretienEnUpdate?entretienEnUpdate:"",
				coupe: coupeUpdate?coupeUpdate:"",
				coupeEn: coupeEnUpdate?coupeEnUpdate:"",
				dateRef:  Moment(produit.dateRef).format("YYYY-MM-DD"),
				referenceFournisseur: produit.referenceFournisseur,
				couleurFournisseur: produit.couleurFournisseur,
				prixVente: produit.prixVente,
				prixVenteRemise: prixVenteRemiseUpdate?  parseFloat(prixVenteRemiseUpdate):produit.prixVenteRemise,

				sousCategorie: sousCategorieUpdate?sousCategorieUpdate:produit.sousCategorie,
				sousCategorieEn: sousCategorieEnUpdate?sousCategorieEnUpdate:produit.sousCategorieEn,

				paysOrigine: paysOrigineUpdate?paysOrigineUpdate : "",
				grilleTaille: grilleTailleUpdate?grilleTailleUpdate : "",
				nomProduitFr: nomProduitFrUpdate? nomProduitFrUpdate : "",
				nomProduitEn: nomProduitEnUpdate? nomProduitEnUpdate : "",
				descriptionFr: descriptionFrUpdate? descriptionFrUpdate : "",
				descriptioEn: descriptionEnUpdate? descriptionEnUpdate : "",
				dimensionFrUpdate: dimensionFrUpdate? dimensionFrUpdate : "",
				dimensionEnUpdate: dimensionEnUpdate? dimensionEnUpdate : "",
				taillePorteeMannequin: tailleMannequinUpdate? tailleMannequinUpdate : "",
				tagsRef: tagsReferencementUpdate? tagsReferencementUpdate:"",
				

				matiere1: matiere1Update?matiere1Update : "",
				pourcentMatiere1: pourcentMatiere1Update? parseFloat(pourcentMatiere1Update):0,
				matiere2: matiere2Update?matiere2Update : "",
				pourcentMatiere2: pourcentMatiere2Update? parseFloat(pourcentMatiere2Update):0,
				matiere3: matiere3Update?matiere3Update : "",
				pourcentMatiere3: pourcentMatiere3Update? parseFloat(pourcentMatiere3Update):0,
				matiere4: matiere4Update?matiere4Update : "",
				pourcentMatiere4: pourcentMatiere4Update? parseFloat(pourcentMatiere4Update):0,
				matiere5: matiere5Update?matiere5Update : "",
				pourcentMatiere5: pourcentMatiere5Update? parseFloat(pourcentMatiere5Update):0,
				matiere6: matiere6Update?matiere6Update : "",
				pourcentMatiere6: pourcentMatiere6Update? parseFloat(pourcentMatiere6Update):0,
				matiere7: matiere7Update?matiere7Update : "",
				pourcentMatiere7: pourcentMatiere7Update? parseFloat(pourcentMatiere7Update):0,
				matiere8: matiere8Update?matiere8Update : "",
				pourcentMatiere8: pourcentMatiere8Update? parseFloat(pourcentMatiere8Update):0,
				matiere9: matiere9Update?matiere9Update : "",
				pourcentMatiere9: pourcentMatiere9Update? parseFloat(pourcentMatiere9Update):0,
				matiere10: matiere10Update?matiere10Update : "",
				pourcentMatiere10: pourcentMatiere10Update? parseFloat(pourcentMatiere10Update):0,
				referencer: referencer
		}

		let url = "http://212.129.3.31:8080/api/export_produit_temporaires/" + produit.id

		fetch(url, 
				{
					method: 'PATCH',
					//headers: new Headers({accept: 'application/merge-patch+json ', ContentType: 'application/json'}),
					//method: 'POST',
					headers: { 'Content-Type': 'application/merge-patch+json',
					accept: 'application/ld+json'
					},					
					body: JSON.stringify(data)
				})
				.then(res => {
					setSuccessUpdates(true)
					return res;
				}).catch(err => setEchecUpdates(true));

	}

	const handleClickNExtModif = () => {
			/**
			 * enregister les modification
			 * passer à la page de modification suivante
			 */

			handleClickUpdate()
			gotoCurrentPage(nextPage)
	}


	return (
			<div>
				<h2>SKU : {skuRef}</h2>
							<header>
				<div className="header-produit">
					<div>
						<h5>
							{
								successUpdates && "Modication réussi"
							}						
							{
								echecUpdates && "Echec de modification"
							}
						</h5>
					</div>

					
					<div className="align-btn">
						<button onClick={handleClickUpdate} className="btn">Enregistrer les modifications</button>
					</div>	
				</div>
				<nav className="nav-produit">
					<ul>
						<li onClick={()=>{gotoCurrentPage("Informations")}}>
							Informations
						</li>
						<li onClick={()=>{gotoCurrentPage("Caractéristique")}}>
							Caractéristique
						</li>
						<li onClick={()=>{gotoCurrentPage("Description")}}>
							Description
						</li>
						<li onClick={()=>{gotoCurrentPage("Matières")}}>
							Matières
						</li>
						<li onClick={()=>{gotoCurrentPage("Images")}}>
							Images
						</li>						
					</ul>
				</nav>				
			</header>

			<section>
			<ProduitContext.Provider
				value={{
					marqueUpdate: marqueUpdate, setMarqueUpdate: setMarqueUpdate,

					universUpdate: universEnUpdate, setUniversEnUpdate: setUniversEnUpdate,
					universEnUpdate: universUpdate, setUniversUpdate: setUniversUpdate,

					categorieUpdate: categorieUpdate, setCategorieUpdate: setCategorieUpdate,
					categorieEnUpdate: categorieEnUpdate, setCategorieEnUpdate: setCategorieEnUpdate,

					sousCategorieUpdate: sousCategorieUpdate, setSousCategorieUpdate: setSousCategorieUpdate,
					sousCategorieEnUpdate: sousCategorieEnUpdate, setSousCategorieEnUpdate: setSousCategorieEnUpdate,

					couleurUpdate: couleurUpdate, setCouleurUpdate: setCouleurUpdate,
					couleurEnUpdate: couleurEnUpdate, setCouleurEnUpdate: setCouleurEnUpdate,

					filtreUpdate: filtreUpdate,	setFiltreUpdate: setFiltreUpdate,
					filtreEnUpdate: filtreEnUpdate,	setFiltreEnUpdate: setFiltreEnUpdate,
					
					paysOrigineUpdate: paysOrigineUpdate, setPaysOrigineUpdate: setPaysOrigineUpdate,

					prixVenteRemiseUpdate : prixVenteRemiseUpdate, setPrixVenteRemiseUpdate : setPrixVenteRemiseUpdate,

					grilleTailleUpdate: grilleTailleUpdate, setGrilleTailleUpdate: setGrilleTailleUpdate,

					attributUpdate: attributUpdate, setAttributUpdate: setAttributUpdate,

					coupeUpdate: coupeUpdate, setCoupeUpdate: setCoupeUpdate,
					coupeEnUpdate: coupeEnUpdate, setCoupeEnUpdate: setCoupeEnUpdate,

					entretienUpdate: entretienUpdate, setEntretienUpdate: setEntretienUpdate,
					entretienEnUpdate: entretienEnUpdate, setEntretienEnUpdate: setEntretienEnUpdate,

					descriptionFrUpdate: descriptionFrUpdate, setDescriptionFrUpdate: setDescriptionFrUpdate,
					descriptionEnUpdate: descriptionEnUpdate, setDescriptionEnUpdate: setDescriptionEnUpdate,

					dimensionFrUpdate: dimensionFrUpdate, setDimensionFrUpdate: setDimensionFrUpdate,
					dimensionEnUpdate: dimensionEnUpdate, setDimensionEnUpdate: setDimensionEnUpdate,

					nomProduitFrUpdate: nomProduitFrUpdate, setNomProduitFrUpdate: setNomProduitFrUpdate,
					nomProduitEnUpdate: nomProduitEnUpdate, setNomProduitEnUpdate: setNomProduitEnUpdate,

					tailleMannequinUpdate: tailleMannequinUpdate, setTailleMannequinUpdate: setTailleMannequinUpdate,

					matiere1Update: matiere1Update, setMatiere1Update: setMatiere1Update, 
					pourcentMatiere1Update: pourcentMatiere1Update, setPourcentMatiere1Update: setPourcentMatiere1Update,
					matiere2Update: matiere2Update, setMatiere2Update: setMatiere2Update, 
					pourcentMatiere2Update: pourcentMatiere2Update, setPourcentMatiere2Update: setPourcentMatiere2Update,
					matiere3Update: matiere3Update, setMatiere3Update: setMatiere3Update, 
					pourcentMatiere3Update: pourcentMatiere3Update, setPourcentMatiere3Update: setPourcentMatiere3Update,
					matiere4Update: matiere4Update, setMatiere4Update: setMatiere4Update, 
					pourcentMatiere4Update: pourcentMatiere4Update, setPourcentMatiere4Update: setPourcentMatiere4Update,
					matiere5Update: matiere5Update, setMatiere5Update: setMatiere5Update, 
					pourcentMatiere5Update: pourcentMatiere5Update, setPourcentMatiere5Update: setPourcentMatiere5Update,
					matiere6Update: matiere6Update, setMatiere6Update: setMatiere6Update, 
					pourcentMatiere6Update: pourcentMatiere6Update, setPourcentMatiere6Update: setPourcentMatiere6Update,
					matiere7Update: matiere7Update, setMatiere7Update: setMatiere7Update, 
					pourcentMatiere7Update: pourcentMatiere7Update, setPourcentMatiere7Update: setPourcentMatiere7Update,
					matiere8Update: matiere8Update, setMatiere8Update: setMatiere8Update, 
					pourcentMatiere8Update: pourcentMatiere8Update, setPourcentMatiere8Update: setPourcentMatiere8Update,
					matiere9Update: matiere9Update, setMatiere9Update: setMatiere9Update, 
					pourcentMatiere9Update: pourcentMatiere9Update, setPourcentMatiere9Update: setPourcentMatiere9Update,
					matiere10Update: matiere10Update, setMatiere10Update: setMatiere10Update, 
					pourcentMatiere10Update: pourcentMatiere10Update, setPourcentMatiere10Update: setPourcentMatiere10Update,

					totalMatiere: totalMatiere, setTotalMatiere: setTotalMatiere,
					tagsReferencementUpdate: tagsReferencementUpdate, setTagsReferencementUpdate: setTagsReferencementUpdate,
					produit: produit,

				}}
			>

				{
					information && 
					<Information />
				}
				{
					caracteristique &&
					<Caracteristique />
				}
				{
					description &&
					<Description />
				}
				{
					matiere &&
					<Matiere />
				}				
				{
					images &&
					<Images />
				}
			</ProduitContext.Provider>
			</section>

				<div className="align-btn">
					<div><button onClick={()=>{setShowReferencement(false)}} className="btn">Retour à la liste des produits</button></div>
					<div><button onClick={handleClickUpdate} className="btn">Enregistrer les modifications</button></div>
						{
							currentPage != "Images" && <div><button className="btn" onClick={handleClickNExtModif}>
								{
									matiere ? "Terminer" : "Suivant"
								}
								</button></div> 
						}
				</div>
			</div>
		)
}	

export default RefProduit