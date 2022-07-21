import { FiltreContext } from "../../Context/FiltreContext";
import {useContext} from 'react'

const Categorie = () => {
    //variable
	const {categorie, setCategorieFiltre, categorieFiltre, universFiltre, marqueFiltre,setProduitList, setProduitExist, setSearch, setAnnuler, url} = useContext(FiltreContext)

    //fonction
	const handleChange = (e) => {
		setSearch("")
		setAnnuler(false)
		setProduitExist(true)
		setCategorieFiltre(e.target.value)

		let urlListProduit = url

		if(e.target.value!="" && e.target.value){
			if(urlListProduit.search(/[?]/g))
				urlListProduit += "&categorie="+e.target.value // marque
			else 
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
			if(urlListProduit.search(/[?]/g))
				urlListProduit += "&marque="+marqueFiltre // categorie
			else
				urlListProduit += "?marque="+marqueFiltre // categorie

			urlListProduit += universFiltre ? "&univers="+universFiltre : "" //categorie + univers
		}
		else if(universFiltre != "" && universFiltre){
			if(urlListProduit.search(/[?]/g))
				urlListProduit += "&univers="+universFiltre //univers
			else
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
            console.log(urlListProduit)
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

    //render
    return (
    <div>
        <label>Catégorie</label>
        <select  value={categorieFiltre} onChange={
					handleChange
				}>
            <option value="">Tous</option>
            {
				categorie &&
				categorie.map((item, index)=>(
					<option value={item} key={index}>{item}</option>
						))
				}
        </select>
    </div>
)
}

export default Categorie;