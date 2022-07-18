import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Caracteristique from "../../../../FrontendOld/src/component/Referencement/Produit/Caracteristique";
import Information from "../../../../FrontendOld/src/component/Referencement/Produit/Information";
import Description from './FormulaireProduit/Description'
import {FormContext} from "./FormulaireProduit/FormContext"
import Matiere from "./FormulaireProduit/Matiere";

const Formulaire = ({page, sku}) => {
	//variable
	const [infoSku, setInfoSku] = useState()

	useEffect(()=>{
		const url = "http://localhost:8001/api/export_produit_temporaires?sku=" + sku
        fetch(url,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
        .then(function(res){
            if(res.ok){
                return res.json()
            }
         })
        .then(function(value){
            setInfoSku(value[0])
			console.log(value[0])
        })
        .catch(function(err){
         })

	},[sku])

	let navigate = useNavigate();
	let path=``
	//fonction
	//récupérer les information de sku 

	const handleClickList = () => {
		if(page = "referencement")
	    	path = `/referencement-produit`;

	    if(page= "modification")
	    	path = `/produit-a-modifier`;
	    navigate(path);
	}

	//render
	return (
		<section>
			<FormContext.Provider value=
			{{
				infoSku: infoSku,
				setInfoSku: setInfoSku,
			}}
			>
				{
					infoSku &&
					<section>
						<Information />
						<Caracteristique />
						<Description />
						<Matiere />
					</section>
				}
			</FormContext.Provider>
		</section>
		)
}

export default Formulaire;