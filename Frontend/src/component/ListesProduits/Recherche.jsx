import {ReferencementContext} from './Context/ReferencementContext'
import {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Recherche = () => {


	const {setProduit, setProduitList, indexProduit,setIndexProduit,produitFindSkuTemporaire, 
		setProduitFindSkuTemporaire, setProduitExist, setUniversFiltre, setCategorieFiltre, search,	setSearch,	annuler, setAnnuler} = useContext(ReferencementContext)
	//fonctions
	const handleSubmit = (e) => {
		setUniversFiltre()
		setCategorieFiltre()
		e.preventDefault()
		setSearch((oldState)=>{
			let newState = parseInt(oldState)

			if(isNaN(newState))
				newState = ""

			return newState
		})

		let urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires?sku=' + search

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
				setProduitFindSkuTemporaire(false)
			}else{
				//setProduitExist(false)
				/**
				 * recherche dans sku temporaire
				 */

				urlListProduit = "http://212.129.3.31:8080/api/skus_temporaires?sku=" + search
				fetch(urlListProduit,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
				.then(function(res){
					 if(res.ok){
						 return res.json()
					 }
				 })
				.then(function(value2){
					setProduitList(value2)
					if(value2.length > 0){
						setProduitExist(true)
						
						setProduitFindSkuTemporaire(true)
					}
					else{
						setProduitExist(false)
						setProduitFindSkuTemporaire(false)
					}
					
				})
				.catch(function(err){
				})
			}	 
		})
		.catch(function(err){
		 })
	}


	const handleClick = () => {
		setUniversFiltre(false)
		setCategorieFiltre(false)
		setSearch("")

		setAnnuler(false)
		let urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires'
		fetch(urlListProduit,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
		.then(function(res){
		 	if(res.ok){
		 		return res.json()
		 	}
		 })
		.then(function(value){
		 	setProduitList(value)
		 
		})
		.catch(function(err){
		 })	}

	//render
	return (
		<div className="recherche">
			<h3>Rechercher un sku</h3>
			<form onSubmit = {handleSubmit}>
				<input type="search" value={search} 
				onChange={(e)=>{
					setSearch(e.target.value)
					setAnnuler(true)
				}} />
				<button className="btn">Rechercher</button>			
				{
					annuler &&			
					<span onClick={handleClick} className="btn">
						Annuler ma recherche
					</span>
				}
			</form>



		</div>
		)
}

export default Recherche
  