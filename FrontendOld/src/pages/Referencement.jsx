import React, {useState, useEffect} from 'react'

import '../assets/scss/Referencement.scss'
import Recherche from '../component/Referencement/Recherche'
import Univers from '../component/Referencement/Univers'
import Categorie from '../component/Referencement/Categorie'
import Produit from '../component/Referencement/Produit'

import {ReferencementContext} from '../component/Referencement/Context/ReferencementContext'

const Referencement = () => {

	/**
	 * RECUPERER Univers et Categorie et ExportProduits
	 */

	 const [univers, setUnivers] = useState()
	 const [categorie, setCategorie] = useState()
	 const [produitList, setProduitList] = useState()
	 const [produit, setProduit] = useState()
	 const [categorieFiltre, setCategorieFiltre] = useState()
	 const [universFiltre, setUniversFiltre] = useState()

	 const [search, setSearch] = useState("")
	 const [annuler, setAnnuler] = useState(false)

	 const [produitExist, setProduitExist] = useState(true)
	 const [indexProduit, setIndexProduit] = useState(0)
	 const [successUpdates, setSuccessUpdates] = useState(false)

	 useEffect(()=>{

	 	sessionStorage.clear()
	 	sessionStorage.setItem("indexProduit", 0)

	 	setIndexProduit(parseInt(sessionStorage.getItem("indexProduit")))

	 	const urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires'
	 	const urlListCategorie = 'http://212.129.3.31:8080/api/categorie_refs'
	 	const urlListUnivers = 'http://212.129.3.31:8080/api/univers_refs'

	 	/**
	 	 * LISTE PRODUIT
	 	 */
		fetch(urlListProduit,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
		.then(function(res){
		 	if(res.ok){
		 		return res.json()
		 	}
		 })
		.then(function(value){
		 	setProduitList(value)

			if(value.length > 0){
				setProduitExist(true)
				setProduit(value[indexProduit])
				let tabCategory = []
				let tabUnivers = []
				for(let item in value)
				{
					tabCategory.push(value[item].categorie)
					tabUnivers.push(value[item].univers)
				}

				tabCategory = [... new Set(tabCategory)]
				tabUnivers = [... new Set(tabUnivers)]
				setCategorie(tabCategory)
				setUnivers(tabUnivers)
			}
			else{
					setProduitExist(false)
			}		 
		})
		.catch(function(err){
		 })
	}, [])





	return (
			<ReferencementContext.Provider className="referencement"
				value = {{
					produitList : produitList,
					setProduitList : setProduitList,

					successUpdates : successUpdates,
					setSuccessUpdates : setSuccessUpdates,

					univers : univers,
					categorie : categorie,

					produit : produit,
					setProduit: setProduit,

					indexProduit : indexProduit,
					setIndexProduit : setIndexProduit,

					categorieFiltre : categorieFiltre,
					setCategorieFiltre : setCategorieFiltre,

					universFiltre : universFiltre,
					setUniversFiltre : setUniversFiltre,

					setProduitExist : setProduitExist,
					search: search,
					setSearch: setSearch,
					annuler: annuler,
					setAnnuler: setAnnuler,
				}}
			>
				<div className="layout-referencement">
					<div className="recherche-filtre">
						<Recherche />
					{
						univers && 
								<Univers/>
					}

					{
						categorie &&
						<div>
							<Categorie />
						</div>
					}
						
					</div>

					<div className="produit">
						{
							produitExist ?
								(produit ? <Produit /> : <p>Patienter ...</p>) : <h5>Aucun nouveau produit trouvé</h5> 
						}

					</div>

				</div>
			</ReferencementContext.Provider>
		)
} 

export default Referencement