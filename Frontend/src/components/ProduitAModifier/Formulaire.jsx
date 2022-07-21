import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Caracteristique from "./FormulaireProduit/Caracteristique";
import Information from "./FormulaireProduit/Information";
import Description from './FormulaireProduit/Description'
import {FormContext} from "./FormulaireProduit/FormContext"
import Matiere from "./FormulaireProduit/Matiere";
import Boutons from "./FormulaireProduit/Boutons";

const Formulaire = ({page, sku}) => {
	//variable
	const [currentPage, setCurrentPage] = useState("Information")
	const {handleClickUpdate, successUpdates, setSuccessUpdates, setEchecUpdates, echecUpdates, totalMatiere} = useContext(FormContext)
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

	const handleClick = (option) => {
		setSuccessUpdates(false)
		setEchecUpdates(false)
		//enregister les données
		handleClickUpdate()
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
			<section className="formulaire">
				{successUpdates && <div className="successMessage"><h5>Modification réussi</h5></div>}
				{echecUpdates && <div className="echecMessage">Echec de modification</div>}
			{
				(currentPage == "Information") && <Information />
			}
			{
				(currentPage == "Caracteristique") && <Caracteristique />
			}
			{
				(currentPage == "Description") && <Description />
			}
			{
				(currentPage == "Matiere") && <Matiere />
			}
			{
				(totalMatiere>100) &&
				<div className="echecMessage"><h5>Pourcentage total doit être entre 0 et 100</h5></div>
			}
			<div id="btn_form_produit">
				
				<button className="btn" onClick={handleClickList}>Voir la liste</button>
				{
					totalMatiere<=100 && currentPage=="Matiere" && <button className="btn" onClick={()=>{handleClick("save")}}>Terminer</button>				
				}
				{
					totalMatiere<=100 && currentPage!="Matiere" && <button className="btn" onClick={()=>{handleClick("save")}}>Enregistrer</button>				
				}

				{
					(currentPage != "Information" && totalMatiere<=100) && <button className="btn" onClick={()=>{
						handleClick("prec")}}
						>Précédent</button>
				}
				{
					(currentPage != "Matiere" && totalMatiere<=100) && <button className="btn" onClick={()=>{
						handleClick("suiv")
					}}>Suivant</button>
				}

				{
					(totalMatiere>100) && <button className="btn" disabled>Enregistrer</button>				
				}

				{
					(totalMatiere>100) && <button className="btn" disabled>Précédent</button>
				}
				{
					(totalMatiere>100) && <button className="btn"disabled>Suivant</button>
				}
			</div>					
			</section>

		)
}

export default Formulaire;