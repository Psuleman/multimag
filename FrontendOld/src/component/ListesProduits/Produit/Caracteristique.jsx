import {ProduitContext} from '../Context/ProduitContext'
import {useContext, useState, useEffect } from 'react'

import TemplateInputSelect from '../templateInputSelect'

const Caracteristique = () => {
	const {produit, tagsReferencementUpdate, categorieUpdate, categorieEnUpdate, sousCategorieUpdate, sousCategorieEnUpdate, couleurUpdate, couleurEnUpdate, paysOrigineUpdate, grilleTailleUpdate, attributUpdate, filtreUpdate, filtreEnUpdate} = useContext(ProduitContext)

	const {setTagsReferencementUpdate, setCategorieUpdate, setCategorieEnUpdate, setSousCategorieUpdate, setSousCategorieEnUpdate, setCouleurUpdate, setCouleurEnUpdate, setPaysOrigineUpdate, setGrilleTailleUpdate, setAttributUpdate, setFiltreUpdate, setFiltreEnUpdate} = useContext(ProduitContext)

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

	useEffect(()=>{
		setSousCategorieSelect(produit.sousCategorie)

		const urlSousCategorie = 'http://212.129.3.31:8080/api/sous_categorie_refs?categorie_ref='+ produit.categorie +'&sous_categorie_ref=' + produit.sousCategorie

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


	}, [produit, grilleTailleUpdate, sousCategorieUpdate])


	return (
			<div className="caracteristique">
				<h4>Caracteristique</h4>
        		<div className="label_value"><div>SKU : </div><div><input type="number" value={produit.sku} disabled="disabled"/></div></div>

				<TemplateInputSelect label="CATEGORIE" typeInput="text" valeurUpdate={produit.categorie} valeurEnUpdate={produit.categorieEn} attributUpdate={categorieUpdate} setAttributUpdate={setCategorieUpdate} attributEnUpdate={categorieEnUpdate}  setAttributEnUpdate={setCategorieEnUpdate} urlAPI="http://212.129.3.31:8080/api/categorie_refs" />

				{
					sousCategorieAutre && 
					<div>
						<TemplateInputSelect label="SOUS CATEGORIE" typeInput="text" valeurEnUpdate={produit.sousCategorieEn} attributEnUpdate={sousCategorieEnUpdate} setAttributEnUpdate={setSousCategorieUpdate} valeurUpdate={produit.sousCategorie} attributUpdate={sousCategorieUpdate} setAttributUpdate={setSousCategorieUpdate} urlAPI="http://212.129.3.31:8080/api/sous_categorie_refs" />
					</div>
				}

        		{!sousCategorieAutre && <div className="label_value"><div>SOUS CATEGORIES : </div>
					<div>
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
        		</div>
				}

				{
					filtreAutre && 
					<div>
						<TemplateInputSelect label="FILTRE" typeInput="text" valeurEnUpdate={produit.filtreEn} attributEnUpdate={filtreEnUpdate} setAttributEnUpdate={setFiltreEnUpdate} valeurUpdate={produit.filtre} attributUpdate={filtreUpdate} setAttributUpdate={setFiltreUpdate} urlAPI="http://212.129.3.31:8080/api/filtre_refs" />

					</div>
				}
        		{!filtreAutre && <div className="label_value"><div>FILTRES : </div>
				<div>
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

        		</div>  
				}     	

        		<TemplateInputSelect label="COULEUR" typeInput="text" valeurEnUpdate={produit.couleurEn} attributEnUpdate={couleurEnUpdate} setAttributEnUpdate={setCouleurEnUpdate}  valeurUpdate={produit.couleur} attributUpdate={couleurUpdate} setAttributUpdate={setCouleurUpdate} urlAPI="http://212.129.3.31:8080/api/couleur_refs" /> 

        		<TemplateInputSelect   label="PAYS ORIGINE" typeInput="text" valeurUpdate={produit.paysOrigine} attributUpdate={paysOrigineUpdate} setAttributUpdate={setPaysOrigineUpdate} urlAPI="http://212.129.3.31:8080/api/pays" /> 

				<TemplateInputSelect  label="GRILLE DE TAILLE" typeInput="text" valeurUpdate={produit.grilleTaille} attributUpdate={grilleTailleUpdate} setAttributUpdate={setGrilleTailleUpdate} urlAPI="http://212.129.3.31:8080/api/grille_taille_refs" />

				

				{
					attributAutre && 
					<TemplateInputSelect  label="ATTRIBUT" typeInput="text" valeurUpdate={produit.attribut} attributUpdate={attributUpdate} setAttributUpdate={setAttributUpdate} urlAPI="http://212.129.3.31:8080/api/taille_refs" />
				}

        		{!attributAutre && <div className="label_value"><div>ATTRIBUT : </div>
				<div>
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
					</div>

        		</div>  }   

				</div>

        	)

}

export default Caracteristique