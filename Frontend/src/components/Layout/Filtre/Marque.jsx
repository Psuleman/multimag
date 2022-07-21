import {useContext} from 'react'
import { FiltreContext } from '../../Context/FiltreContext'

const Marque = () => {
    //Variable
    const {url, setProduitList, marque, marqueFiltre, setMarqueFiltre, setSearch, setAnnuler, setProduitExist, categorieFiltre, universFiltre} = useContext(FiltreContext)
    
    //fonction
    const handleChange = (e) => {
		setSearch("")
		setAnnuler(false)
		setProduitExist(true)
		setMarqueFiltre(e.target.value)

        let urlListProduit = url

        if(e.target.value!="" && e.target.value){
            (urlListProduit.search(/[?]/g))
            urlListProduit += (urlListProduit.search(/[?]/g)) ? "&marque="+e.target.value:"?marque="+e.target.value // marque 
            if(categorieFiltre!="" && categorieFiltre){
                urlListProduit += "&categorie="+ categorieFiltre // marque + categorie
                urlListProduit += universFiltre ? "&univers="+universFiltre : "" // marque + categorie + univers
            }
            else{
                urlListProduit += universFiltre ? "&univers="+universFiltre : "" // marque + univers
            }
            
        }
        else if(categorieFiltre!="" && categorieFiltre){
            urlListProduit += (urlListProduit.search(/[?]/g)) ? "&categorie="+categorieFiltre: "?categorie="+categorieFiltre // categorie
            urlListProduit += universFiltre ? "&univers="+universFiltre : "" //categorie + univers
        }
        else if(universFiltre != "" && universFiltre){
            urlListProduit += (urlListProduit.search(/[?]/g)) ? "&univers="+universFiltre : "?univers="+universFiltre //univers
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
return (<div>
<label>Marque</label>
<select value={marqueFiltre} onChange={
                    handleChange
                }>
    <option value="">Tous</option>
    {
        marque &&
        marque.map((item, index)=>(
            <option value={item} key={index}>{item}</option>
        ))
    }
</select>
</div>
)
}

export default Marque;