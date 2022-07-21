import { useContext, useState } from "react"
import FormContext from "./FormContext"

const Boutons = () => {
	//variable
	const [currentPage, setCurrentPage] = useState("Information")
	const {handleClickUpdate} = useContext(FormContext)
	let navigate = useNavigate();
	let path=``

	//fonction
	const handleClickList = () => {
		if(page = "referencement")
	    	path = `/referencement-produit`;

	    if(page= "modification")
	    	path = `/produit-a-modifier`;
	    navigate(path);
	}

	const handleClick = (option) => {
		//enregister les données

		//les pages
		let pageActuelle = currentPage
		let pageSuivant = currentPage
		let pagePrecedant = currentPage
		
		if(pageActuelle == "Information"){
			pageSuivant = "Caracteristique"
		}
		if(pageActuelle == "Caracteristique"){
			pageSuivant = "Description"
			pagePrecedant = "Information"
		}
		if(pageActuelle == "Description"){
			pageSuivant = "Matiere"
			pagePrecedant = "Caracteristique"
		}
		if(pageActuelle == "Matiere"){
			pagePrecedant = "Description"
		}
		//passer à la page suivant 
		if(option == "suiv"){
			setCurrentPage(pageSuivant)
		}
		//passer à la page précédent
		else if(option == "prec"){
			setCurrentPage(pagePrecedant)
		}
		//rester sur la même page
		else{
			setCurrentPage(pageActuelle)
		}

	}
    //render
    return (
    <div id="btn_form_produit">
    <button className="btn" onClick={handleClickList}>Voir la liste</button>
    <button className="btn" onClick={()=>{handleClick("save")}}>Enregistrer</button>
    {
        (currentPage != "Information") && <button className="btn" onClick={()=>{
            handleClick("prec")}}
            >Précédent</button>
    }
    {
        (currentPage != "Matiere") && <button className="btn" onClick={()=>{
            handleClick("suiv")
        }}>Suivant</button>
    }

    </div>
)
}

export default Boutons;