import {useContext, useState, useEffect} from 'react'
import {ReferencementContext} from './Context/ReferencementContext'
import {ProduitContext} from './Context/ProduitContext'

import Moment from 'moment'
import Caracteristique from './Produit/Caracteristique'
import Description from './Produit/Description'
import Matiere from './Produit/Matiere'
import Information from './Produit/Information'
import Images from './Produit/Images'

import '../../assets/scss/Produit.scss'

import Boutons from './Produit/Boutons'

const Produit = () => {

	const {produit, produitList, indexProduit, categorieFiltre, universFiltre, successUpdates, setSuccessUpdates, setEchecUpdates, echecUpdates} = useContext(ReferencementContext)
	const [information, setInformation] = useState(true)
	const [caracteristique, setCaracteristique] = useState(false)
	const [description, setDescription] = useState(false)
	const [matiere, setMatiere] = useState(false)
	const [images, setImages] = useState(false)

	const [currentPage, setCurrentPage] = useState("Informations")
	const [nextPage, setNextPage] = useState("Caractéristique")

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

	const [styleInformation, setStyleInformation] = useState({
		color : "green",
		fontWeight: "bold"
	})	
	const [styleCaracteristique, setStyleCaracteristique]  = useState({
		color : "red",
		fontWeight: "normal"
	})	
	const [styleDescription, setStyleDescription] = useState({
		color : "red",
		fontWeight: "normal"
	})	
	const [styleMatiere, setStyleMatiere] = useState({
		color : "red",
		fontWeight: "normal"
	})

	useEffect(()=>{
		//information
		setCurrentPage("Informations")
		gotoCurrentPage("Informations")
		setTagsReferencementUpdate(produit.tagsRef)
		produit.prixVenteRemise!= null ? setPrixVenteRemiseUpdate(produit.prixVenteRemise) : setPrixVenteRemiseUpdate(0)
		produit.univers!= null ? setUniversUpdate(produit.univers) : setUniversUpdate("")
		produit.universEn!= null ? setUniversEnUpdate(produit.universEn) : setUniversEnUpdate("")
		produit.marque != null ? setMarqueUpdate(produit.marque) : setMarqueUpdate("")

		//caractéristique
		if(
			produit.categorie == null &&
			produit.sousCategorie == null &&
			produit.couleur == null &&
			produit.paysOrigine == null &&
			produit.grilleTaille == null &&
			produit.attribut == null &&
			produit.filtre == null
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
			setCategorieUpdate(produit.categorie)
			setSousCategorieUpdate(produit.sousCategorie)
			setCouleurUpdate(produit.couleur)
			setCouleurEnUpdate(produit.couleurEn)
			setPaysOrigineUpdate(produit.paysOrigine)
			setGrilleTailleUpdate(produit.grilleTaille)
			setAttributUpdate(produit.attribut)
			setFiltreUpdate(produit.filtre)

		}

		//Description

		if(
			produit.coupe == null &&
			produit.entretien == null&&
			produit.descriptionFr == null &&
			produit.descriptio_en == null &&
			produit.dimensionFr == null &&
			produit.dimensionEn == null &&
			produit.nomProduitFr == null &&
			produit.nomProduitEn == null &&
			produit.taillePorteeMannequin == null 			
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
			setCoupeUpdate(produit.coupe)
			setEntretienUpdate(produit.entretien)
			 setDescriptionFrUpdate(produit.descriptionFr)
			setDescriptionEnUpdate(produit.descriptio_en)
			 setDimensionFrUpdate(produit.dimensionFr)
			setDimensionEnUpdate(produit.dimensionEn)
			setNomProduitFrUpdate(produit.nomProduitFr)
			setNomProduitEnUpdate(produit.nomProduitEn)
			setTailleMannequinUpdate(produit.taillePorteeMannequin)
			setTagsReferencementUpdate(produit.tagsRef)
		}


		produit.matiere1 != null ? 	setMatiere1Update(produit.matiere1) : setMatiere1Update("")
		produit.pourcentMatiere1 != null ? setPourcentMatiere1Update(produit.pourcentMatiere1) : setPourcentMatiere1Update(0)
		produit.matiere2 != null ? 	setMatiere2Update(produit.matiere2) : setMatiere2Update("")
		produit.pourcentMatiere2 != null ? setPourcentMatiere2Update(produit.pourcentMatiere2) : setPourcentMatiere2Update(0)
		produit.matiere3 != null ? 	setMatiere3Update(produit.matiere3) : setMatiere3Update("")
		produit.pourcentMatiere3 != null ? setPourcentMatiere3Update(produit.pourcentMatiere3) : setPourcentMatiere3Update(0)
		produit.matiere4 != null ? 	setMatiere4Update(produit.matiere4) : setMatiere4Update("")
		produit.pourcentMatiere4!=null ? setPourcentMatiere4Update(produit.pourcentMatiere4) : setPourcentMatiere4Update(0)
		produit.matiere5!=null ? 	setMatiere5Update(produit.matiere5) : setMatiere5Update("")
		produit.pourcentMatiere5!=null ? setPourcentMatiere5Update(produit.pourcentMatiere5) : setPourcentMatiere5Update(0)
		produit.matiere6!=null ? 	setMatiere6Update(produit.matiere6) : setMatiere6Update("")
		produit.pourcentMatiere6!=null ? setPourcentMatiere6Update(produit.pourcentMatiere6) : setPourcentMatiere6Update(0)
		produit.matiere7!=null ? 	setMatiere7Update(produit.matiere7) : setMatiere7Update("")
		produit.pourcentMatiere7!=null ? setPourcentMatiere7Update(produit.pourcentMatiere7) : setPourcentMatiere7Update(0)
		produit.matiere8!=null ? 	setMatiere8Update(produit.matiere8) : setMatiere8Update("")
		produit.pourcentMatiere8!=null ? setPourcentMatiere8Update(produit.pourcentMatiere8) : setPourcentMatiere8Update(0)
		produit.matiere9!=null ? 	setMatiere9Update(produit.matiere9) : setMatiere9Update("")
		produit.pourcentMatiere9!=null ? setPourcentMatiere9Update(produit.pourcentMatiere9) : setPourcentMatiere9Update(0)
		produit.matiere10!=null ? setMatiere10Update(produit.matiere10) : setMatiere10Update("")
		produit.pourcentMatiere10!=null ? setPourcentMatiere10Update(produit.pourcentMatiere10) : setPourcentMatiere10Update(0)

		setTotalMatiere(produit.pourcentMatiere1 + produit.pourcentMatiere2 + produit.pourcentMatiere3 + produit.pourcentMatiere4 + produit.pourcentMatiere5 + produit.pourcentMatiere6 + produit.pourcentMatiere7 + produit.pourcentMatiere8 + produit.pourcentMatiere9 + produit.pourcentMatiere10)		
		//Aller à la page à modifier (currentPage)
		
	}, [produit])

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
				pourcentMatiere10: pourcentMatiere10Update? parseFloat(pourcentMatiere10Update):0
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
		<div className="Produit ">
			<header>
				<div className="header-produit">
					<div>
						<h3>Produit 
							{ indexProduit>=0 && produitList  ? <span> ({indexProduit+1}  / {produitList.length} )</span>: "" }
						</h3>

						<h5>
							{
								successUpdates && "Modication réussi"
							}						
							{
								echecUpdates && "Echec de modification"
							}
						</h5>
						<h5>
							{
								categorieFiltre && <span>Categorie : {categorieFiltre}</span>
							}
						</h5>					
						<h5>
							{
								universFiltre && <span>Univers : {universFiltre}</span>
							}
						</h5>
					</div>

					
					<div className="align-btn">
						<Boutons />
						<button onClick={handleClickUpdate} className="btn">Enregistrer les modifications</button>
					</div>	
				</div>
				<nav className="nav-produit">
					<ul>
						<li style={{
								color : styleInformation.color,
								fontWeight: styleInformation.fontWeight,
								border : styleInformation.border
							}} 
							onClick={()=>{gotoCurrentPage("Informations")}}>
							Informations
						</li>
						<li style={{
								color : styleCaracteristique.color,
								fontWeight: styleCaracteristique.fontWeight,
								border : styleCaracteristique.border
					
							}}
							onClick={()=>{gotoCurrentPage("Caractéristique")}}>
							Caractéristique
						</li>
						<li style={{
								color : styleDescription.color,
								fontWeight: styleDescription.fontWeight,
								border : styleDescription.border								
							}}
							onClick={()=>{gotoCurrentPage("Description")}}>
							Description
						</li>
						<li style={{
								color : styleMatiere.color,
								fontWeight: styleMatiere.fontWeight,
								border: styleMatiere.border	
							}}
							onClick={()=>{gotoCurrentPage("Matières")}}>
							Matières
						</li>
						<li style={{
								color : styleMatiere.color,
								fontWeight: styleMatiere.fontWeight,
								border: styleMatiere.border	
							}}
							onClick={()=>{gotoCurrentPage("Images")}}>
							Images
						</li>						
					</ul>
				</nav>				
			</header>
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

			<div className="align-btn">
					<Boutons />
					<div><button onClick={handleClickUpdate} className="btn">Enregistrer les modifications</button></div>
					{
						currentPage != "Images" && <div><button className="btn" onClick={handleClickNExtModif}>Suivant</button></div> 
					}
					
			</div>
				
			</ProduitContext.Provider>
		</div>
		)
}

export default Produit

