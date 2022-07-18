import {useContext} from 'react'
import {ReferencementContext} from './Context/ReferencementContext'

const Categorie = () => {

	const {categorie, setCategorieFiltre, categorieFiltre, universFiltre, marqueFiltre,setProduitList, setProduitExist, setSearch, setAnnuler} = useContext(ReferencementContext)

	/*const handleChange = (e) => {
		setSearch("")
		setAnnuler(false)
		setProduitExist(true)
		setIndexProduit(0)

		let urlListProduit = ""

		if(universFiltre)
			urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires?categorie='+e.target.value+'&univers='+ universFiltre
		else
			urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires?categorie='+e.target.value

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
				setCategorieFiltre(e.target.value)
			}
			else{
				setProduitExist(false)
			}	 
		})
		.catch(function(err){
		 })

	}*/

	const handleChange = (e) => {
		setSearch("")
		setAnnuler(false)
		setProduitExist(true)
		setCategorieFiltre(e.target.value)
		//let urlListProduit = ""

/*		if(universFiltre){
			if(e.target.value!="")
				urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires?categorie='+e.target.value+'&univers='+ universFiltre
			else
				urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires?univers='+ universFiltre
		}
		else{
			if(e.target.value!="")
				urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires?categorie='+e.target.value

			else
				urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires'		
		}
*/

		let urlListProduit = "http://212.129.3.31:8080/api/export_produit_temporaires"

		if(e.target.value!="" && e.target.value){
			urlListProduit += "?categorie="+e.target.value // marque 
			if(marqueFiltre!="" && marqueFiltre){
				urlListProduit += "&marque="+ marqueFiltre // marque + categorie
				urlListProduit += universFiltre ? "&univers="+universFiltre : "" // marque + categorie + univers
			}
			else{
				urlListProduit += universFiltre ? "&univers="+universFiltre : "" // marque + univers
			}
			
		}
		else if(marqueFiltre!="" && marqueFiltre){
			urlListProduit += "?marque="+marqueFiltre // categorie
			urlListProduit += universFiltre ? "&univers="+universFiltre : "" //categorie + univers
		}
		else if(universFiltre != "" && universFiltre){
			urlListProduit += "?univers="+universFiltre //univers
		}
		else{
			urlListProduit += "" //tout
		}


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
			}
			else{
				setProduitExist(false)
			}

		})
		.catch(function(err){
		 })

	}

	return (
		<div>
			<h3>Categorie</h3>
			<div>
				<select value={categorieFiltre} onChange={
					handleChange
				}>
					<option value="">Tout</option>

				{
					categorie &&
					categorie.map((item, index)=>(
							<option value={item} key={index}>{item}</option>

						))
				}
				</select>			
			</div>
		</div>
		)
}
export default Categorie


