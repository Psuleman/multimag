import {useContext, useState} from 'react'
import { FiltreContext } from '../../Context/FiltreContext'

const Recherche = () => {


	const {setProduit, setProduitList,produitFindSkuTemporaire, 
		setProduitFindSkuTemporaire, setProduitExist, setUniversFiltre, setCategorieFiltre, search,	setSearch,	annuler, setAnnuler} = useContext(FiltreContext)
	//fonctions
	const handleSubmit = (e) => {
		e.preventDefault()
		setUniversFiltre()
		setCategorieFiltre()
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
        <form onSubmit = {handleSubmit}>
        <input type="search" placeholder="Rechercher un sku" 
            value={search} 
            onChange={(e)=>{
                setSearch(e.target.value)
                setAnnuler(true)
            }} 
        />
        <button type='submit'>Rechercher</button>
        {
            annuler &&
            <button onClick={handleClick}>Annuler</button>
        }
    </form>
    )
}

export default Recherche