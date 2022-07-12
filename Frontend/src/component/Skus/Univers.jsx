import {useContext} from 'react'
import { PimContext } from './Context/PimContext'

const Univers = () => {
	const {univers, setProduitList, setUniversFiltre, categorieFiltre, universFiltre, marqueFiltre, setProduitExist, setSearch, setAnnuler} = useContext(PimContext)

	const handleChange = (e) => {
		setSearch("")
		setAnnuler(false)
		setUniversFiltre(e.target.value)


		let urlListProduit = "http://212.129.3.31:8080/api/skus_temporaires"

		if(e.target.value!="" && e.target.value){
            urlListProduit += "?univers="+e.target.value // marque 
            if(categorieFiltre!="" && categorieFiltre){
                urlListProduit += "&categorie="+ categorieFiltre // marque + categorie
                urlListProduit += marqueFiltre ? "&marque="+marqueFiltre : "" // marque + categorie + univers
            }
            else{
                urlListProduit += marqueFiltre ? "&marque="+marqueFiltre : "" // marque + univers
            }
        }
        else if(categorieFiltre!="" && categorieFiltre){
            urlListProduit += "?categorie="+categorieFiltre // categorie
            urlListProduit += marqueFiltre ? "&marque="+marqueFiltre : "" //categorie + univers
        }
        else if(marqueFiltre != "" && marqueFiltre){
            urlListProduit += "?marque="+marqueFiltre //univers
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
            <h3>Univers</h3>
            <div>
                <select value={universFiltre} onChange={
                    handleChange
                }>
                    <option value="">Tout</option>

                {
                    univers &&
                    univers.map((item, index)=>(
                            <option value={item} key={index}>{item}</option>

                        ))
                }
                </select>			
            </div>
        </div>
    )
}
export default Univers

