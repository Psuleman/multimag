import {useContext} from 'react'
import {ReferencementContext} from './Context/ReferencementContext'

const Categorie = () => {

	const {setSearch, setAnnuler, categorie, setProduit, setProduitList, indexProduit,setIndexProduit, setCategorieFiltre, universFiltre, categorieFiltre, setProduitExist} = useContext(ReferencementContext)

	const handleChange = (e) => {
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

	}

	return (
		<div className="filtre">
			<h3>Categorie</h3>
			<div>

			{
				categorie.map((item, index)=>(
					<div key={index}>
						<input type="radio" name="categorie" value={item} onChange={handleChange} /> 
						<label> {item} </label> 
					</div>
					))
			}
			</div>
		</div>
		)
}
export default Categorie


