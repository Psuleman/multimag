import {useContext} from 'react'
import {ReferencementContext} from './Context/ReferencementContext'

const Univers = () => {
	const {setSearch, setAnnuler, univers, setProduit, setProduitList, indexProduit,setIndexProduit, setUniversFiltre, categorieFiltre, universFiltre, setProduitExist} = useContext(ReferencementContext)
	const handleChange = (e) => {
		setSearch("")
		setAnnuler(false)
		setProduitExist(true)
		setIndexProduit(0)
		let urlListProduit = ""

		if(categorieFiltre)
			urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires?categorie='+categorieFiltre+'&univers='+ e.target.value

		else
			urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires?univers='+ e.target.value

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
				setUniversFiltre(e.target.value)
			}else{
				setProduitExist(false)
			}		 
		})
		.catch(function(err){
		 })

	}

	return (
		<div className="univers-item">
			<h3>Univers</h3>
			<div>
				{
				univers.map((item, index)=>(
					<div key={index}>
						<input type="radio" name="univers" value={item} onChange={handleChange} /> 
						<label> {item} </label> 
					</div>					
					))
				}
			</div>
		</div>
		)
}

export default Univers