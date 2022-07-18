import {useContext} from 'react'
import {ReferencementContext} from './Context/ReferencementContext'

const Marque = () => {
    const {setProduitList, marque, marqueFiltre, setMarqueFiltre, setSearch, setAnnuler, setProduitExist, categorieFiltre, universFiltre} = useContext(ReferencementContext)


    const handleChange = (e) => {
		setSearch("")
		setAnnuler(false)
		setProduitExist(true)
		setMarqueFiltre(e.target.value)

        let urlListProduit = "http://212.129.3.31:8080/api/export_produit_temporaires"

        if(e.target.value!="" && e.target.value){
            urlListProduit += "?marque="+e.target.value // marque 
            if(categorieFiltre!="" && categorieFiltre){
                urlListProduit += "&categorie="+ categorieFiltre // marque + categorie
                urlListProduit += universFiltre ? "&univers="+universFiltre : "" // marque + categorie + univers
            }
            else{
                urlListProduit += universFiltre ? "&univers="+universFiltre : "" // marque + univers
            }
            
        }
        else if(categorieFiltre!="" && categorieFiltre){
            urlListProduit += "?categorie="+categorieFiltre // categorie
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
            <h3>Marque</h3>
            <div>
                <select value={marqueFiltre} onChange={
                    handleChange
                }>
                
                <option value="">Tout</option>
                {
                    marque &&
                    marque.map((item, index)=>(
                            <option value={item} key={index}>{item}</option>
                        ))
                }
                </select>			
            </div>
        </div>
    )
}
export default Marque