import {useContext} from 'react'
import { FiltreContext } from '../../Context/FiltreContext'

const Univers = () => {
    //variable
	const {url, univers, setProduitList, setUniversFiltre, categorieFiltre, universFiltre, marqueFiltre, setProduitExist, setSearch, setAnnuler} = useContext(FiltreContext)

    //Fonction

	const handleChange = (e) => {
		setSearch("")
		setAnnuler(false)
		setProduitExist(true)
		setUniversFiltre(e.target.value)

		let urlListProduit = url

		if(e.target.value!="" && e.target.value){
            urlListProduit += (urlListProduit.search(/[?]/g)) ? "&univers="+e.target.value : "?univers="+e.target.value // marque 
            if(categorieFiltre!="" && categorieFiltre){
                urlListProduit += "&categorie="+ categorieFiltre // marque + categorie
                urlListProduit += marqueFiltre ? "&marque="+marqueFiltre : "" // marque + categorie + univers
            }
            else{
                urlListProduit += marqueFiltre ? "&marque="+marqueFiltre : "" // marque + univers
            }
        }
        else if(categorieFiltre!="" && categorieFiltre){
            urlListProduit += (urlListProduit.search(/[?]/g)) ? "&categorie="+categorieFiltre : "?categorie="+categorieFiltre // categorie
            urlListProduit += marqueFiltre ? "&marque="+marqueFiltre : "" //categorie + univers
        }
        else if(marqueFiltre != "" && marqueFiltre){
            urlListProduit += (urlListProduit.search(/[?]/g)) ? "&marque="+marqueFiltre : "?marque="+marqueFiltre //univers
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
            console.log(urlListProduit)
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
    
    return (<div>
    <label>Univers</label>
    <select value={universFiltre} onChange={
					handleChange
				}>
        <option value="">Tous</option>
        {
        univers &&
        univers.map((item, index)=>(
            <option value={item} key={index}>{item}</option>
        ))
    }
    </select>
    </div>
    )
}

export default Univers;