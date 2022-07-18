import {ReferencementContext} from './Context/ReferencementContext'
import {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Recherche = () => {


	const {setProduit, setProduitList, indexProduit,setIndexProduit, setProduitExist, setUniversFiltre, setCategorieFiltre, search,	setSearch,	annuler, setAnnuler} = useContext(ReferencementContext)
	
	//fonctions
	const handleSubmit = (e) => {
		setUniversFiltre()
		setCategorieFiltre()
		e.preventDefault()
		setIndexProduit(0)
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
				setProduit(value[indexProduit])
			}else{
				setProduitExist(false)
			}		 
		})
		.catch(function(err){
		 })
	}


	const handleClick = () => {
		setUniversFiltre(false)
		setCategorieFiltre(false)
		setIndexProduit(0)
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

			if(value.length > 0){
				setProduitExist(true)
				setProduit(value[indexProduit])
			}else{
				setProduitExist(false)
			}		 
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
			</form>
			{
				annuler &&			
				<div onClick={handleClick} className="btn">
					Annuler ma recherche
				</div>
			}


		</div>
		)
}

export default Recherche
  