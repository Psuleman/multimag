import {FormContext} from "./FormContext"
import { useContext, useState, useEffect } from "react";
import TemplateInputSelect from "./TemplateInputSelect";

const Caracteristique = () => {
	//variables
	const {infoSku, tagsReferencementUpdate, categorieUpdate, categorieEnUpdate, sousCategorieUpdate, sousCategorieEnUpdate, couleurUpdate, couleurEnUpdate, paysOrigineUpdate, grilleTailleUpdate, attributUpdate, filtreUpdate, filtreEnUpdate, setTagsReferencementUpdate, setCategorieUpdate, setCategorieEnUpdate, setSousCategorieUpdate, setSousCategorieEnUpdate, setCouleurUpdate, setCouleurEnUpdate, setPaysOrigineUpdate, setGrilleTailleUpdate, setAttributUpdate, setFiltreUpdate, setFiltreEnUpdate} = useContext(FormContext)
	const [sousCategorie, setSousCategorie] = useState()
	const [filtres, setFiltres] = useState()

	const [paysOrigine, setPaysOrigine] = useState()

	const [couleurs, setCouleurs] = useState()
	const [attributs, setAttributs] = useState()
	const [grilleTailles, setGrilleTailles] = useState()
	const [sousCategorieSelect, setSousCategorieSelect] = useState()

	const [grilleTailleValue, setGrilleTailleValue] = useState()

	const [autreSousCategorie, setAutreSousCategorie] = useState("")
	const [autreFiltre, setAutreFiltre] = useState("")
	const [autreCouleur, setAutreCouleur] = useState("")
	const [autrePays, setAutrePays] = useState("")
	const [autregrilleTaille, setAutreGrilleTaille] = useState("")
	const [autreAttribut, setAutreAttribut] = useState("")

	const [sousCategorieAutre, setSousCategorieAutre] = useState(false)
	const [filtreAutre, setFiltreAutre] = useState(false)
	const [grilleTailleAutre, setGrilleTailleAutre] = useState(false)
	const [attributAutre, setAttributAutre] = useState(false)
	
	//fonction
	useEffect(()=>{
		setSousCategorieSelect(infoSku.sousCategorie)

		const urlSousCategorie = 'http://212.129.3.31:8080/api/sous_categorie_refs?categorie_ref='+ infoSku.categorie +'&sous_categorie_ref=' + infoSku.sousCategorie

		const urlFiltre = 'http://212.129.3.31:8080/api/filtre_refs'

		const urlGrilleTaille = 'http://212.129.3.31:8080/api/grille_taille_refs'

		const urlAttribut = 'http://212.129.3.31:8080/api/taille_refs' //Taille referencement


		setGrilleTailleValue(grilleTailleUpdate)
		/**
		 * GRILLE TAILLE
		  */
		 fetch(urlGrilleTaille,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
		 .then(function(res){
			  if(res.ok){
				  return res.json()
			  }
		  })
		 .then(function(value){
			setGrilleTailles(value)
		  })
		 .catch(function(err){
		  })	
		  
		 /**
		  * ATTRIBUT = TAILLE de referencement
		  */
		 fetch(urlAttribut,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
		 .then(function(res){
			  if(res.ok){
				  return res.json()
			  }
		  })
		 .then(function(value){
			 let tab=[]
			if(grilleTailleValue){
				for(let i  in value){
					if(value[i].grille_taille_ref.grilleTailleRef == grilleTailleUpdate){
						tab.push(value[i])
					}
				}
				setAttributs(tab)
			}
			else
			 setAttributs(value)
		  })
		 .catch(function(err){
		  })

  
		/**
		 * SOUS CATEGORIE
		 */
		fetch(urlSousCategorie,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
		.then(function(res){
		 	if(res.ok){
		 		return res.json()
		 	}
		 })
		.then(function(value){
			setSousCategorie(value)
		 })
		.catch(function(err){
		 })

		 /**
		  * FILTRE
		  */
		fetch(urlFiltre,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
		.then(function(res){
		 	if(res.ok){
		 		return res.json()
		 	}
		 })
		.then(function(value){
			setFiltres(value)
			let tab = []
			if(sousCategorieUpdate){
				for(let i in value){
					if(value[i].sousCategorieRef.sous_categorie_ref === sousCategorieUpdate){
						tab.push(value[i])
					}									
				}
				setFiltres(tab)
				if(tab.length==0){
					setFiltreAutre(true)
				}
			}

		 })
		.catch(function(err){
		 })	

		 if(!filtres){
			 if(sousCategorie)
			 	setFiltres(sousCategorie)
		 }



	}, [infoSku, grilleTailleUpdate, sousCategorieUpdate])
	//render
	return (
		<aside>
			<h3>Caractéristique</h3>
			<TemplateInputSelect label="CATEGORIE" typeInput="text" valeurUpdate={infoSku.categorie} valeurEnUpdate={infoSku.categorieEn} attributUpdate={categorieUpdate} setAttributUpdate={setCategorieUpdate} attributEnUpdate={categorieEnUpdate}  setAttributEnUpdate={setCategorieEnUpdate} urlAPI="http://212.129.3.31:8080/api/categorie_refs" />

			{
				sousCategorieAutre && 
				<TemplateInputSelect label="SOUS CATEGORIE" typeInput="text" valeurEnUpdate={infoSku.sousCategorieEn} attributEnUpdate={sousCategorieEnUpdate} setAttributEnUpdate={setSousCategorieUpdate} valeurUpdate={infoSku.sousCategorie} attributUpdate={sousCategorieUpdate} setAttributUpdate={setSousCategorieUpdate} urlAPI="http://212.129.3.31:8080/api/sous_categorie_refs" />
			}
        		{!sousCategorieAutre && <div><label>SOUS CATEGORIES : </label>
						{
							sousCategorie ?        			
							<select value={sousCategorieUpdate} onChange={(e)=>{setSousCategorieUpdate(e.target.value)}}>
								<option onClick={() => {
									setSousCategorieAutre(true)
								}}>Autres</option>
								{
									sousCategorie.map((item, index)=>(
										<option  value={item.sousCategorieRef} key={index}>{item.sousCategorieRef}</option>       					
										))
								}
								</select>
								:
								<select disabled="disabled" />
						}
        		</div>
				}
				{
					filtreAutre && 
					<TemplateInputSelect label="FILTRE" typeInput="text" valeurEnUpdate={infoSku.filtreEn} attributEnUpdate={filtreEnUpdate} setAttributEnUpdate={setFiltreEnUpdate} valeurUpdate={infoSku.filtre} attributUpdate={filtreUpdate} setAttributUpdate={setFiltreUpdate} urlAPI="http://212.129.3.31:8080/api/filtre_refs" />
				}
        		{!filtreAutre && <div><label>FILTRES : </label>

						{
							filtres?        			
							<select  value={filtreUpdate} onChange={(e)=>{
								setFiltreUpdate(e.target.value)
								}}>
								<option onClick={() => {
									setFiltreAutre(true)
								}}>Autres</option>
								{
									filtres.map((item, index)=>(
										<option  value={item.filtre} key={index}>{item.filtre}</option>       						
										))
								}
							</select>
							: <select disabled="disabled" />
							}
					</div>

				}  					
        		<TemplateInputSelect label="COULEUR" typeInput="text" valeurEnUpdate={infoSku.couleurEn} attributEnUpdate={couleurEnUpdate} setAttributEnUpdate={setCouleurEnUpdate}  valeurUpdate={infoSku.couleur} attributUpdate={couleurUpdate} setAttributUpdate={setCouleurUpdate} urlAPI="http://212.129.3.31:8080/api/couleur_refs" /> 

        		<TemplateInputSelect   label="PAYS ORIGINE" typeInput="text" valeurUpdate={infoSku.paysOrigine} attributUpdate={paysOrigineUpdate} setAttributUpdate={setPaysOrigineUpdate} urlAPI="http://212.129.3.31:8080/api/pays" /> 
				<TemplateInputSelect  label="GRILLE DE TAILLE" typeInput="text" valeurUpdate={infoSku.grilleTaille} attributUpdate={grilleTailleUpdate} setAttributUpdate={setGrilleTailleUpdate} urlAPI="http://212.129.3.31:8080/api/grille_taille_refs" />

				{
					attributAutre && 
					<TemplateInputSelect  label="ATTRIBUT" typeInput="text" valeurUpdate={infoSku.attribut} attributUpdate={attributUpdate} setAttributUpdate={setAttributUpdate} urlAPI="http://212.129.3.31:8080/api/taille_refs" />
				}		
        		{!attributAutre && <div><label>ATTRIBUT : </label>
						{
							attributs?        			
							<select  value={attributUpdate} onChange={(e)=>{setAttributUpdate(e.target.value)}}>
								<option onClick={() => {
									setAttributAutre(true)
								}}>Autres</option>
								{
									attributs.map((item, index)=>(
										<option  value={item.taille_ref} key={index}>{item.taille_ref}</option>       						
										))
								}
							</select>
							: <select disabled="disabled" />
							}

        		</div>  } 			
						
		</aside>

		)
}

export default Caracteristique;