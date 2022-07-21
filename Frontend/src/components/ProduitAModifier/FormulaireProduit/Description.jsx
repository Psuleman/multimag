import {FormContext} from "./FormContext"
import { useContext } from "react";
import TemplateInputSelect from "./TemplateInputSelect"

const Description = ({handleClickList}) => {
	const {infoSku, dimensionFrUpdate, dimensionEnUpdate, coupeUpdate, entretienUpdate,  descriptionFrUpdate, 	descriptionEnUpdate, nomProduitFrUpdate, nomProduitEnUpdate, tailleMannequinUpdate, setDimensionFrUpdate, setDimensionEnUpdate, setCoupeUpdate, setEntretienUpdate, setDescriptionFrUpdate, setDescriptionEnUpdate, setNomProduitFrUpdate, setNomProduitEnUpdate, setTailleMannequinUpdate} = useContext(FormContext)
	console.log(infoSku)

	return (
		<aside>
			<h3>Description</h3>
			<TemplateInputSelect label="ENTRETIEN" typeInput="text" valeurUpdate={infoSku.entretien} attributUpdate={entretienUpdate} setAttributUpdate={setEntretienUpdate} urlAPI="http://212.129.3.31:8080/api/entretiens" />
			<div>
				<label>DESCRIPTION PRODUIT FR</label>
				<textarea  value={descriptionFrUpdate} onChange={(e)=>{setDescriptionFrUpdate(e.target.value)}}></textarea>     		
			</div>
			<div>
				<label>DESCRIPTION PRODUIT EN</label>
				<textarea type="text"   value={descriptionEnUpdate} onChange={(e)=>{setDescriptionEnUpdate(e.target.value)}}/>     		
			</div>			
			<div>
				<label>NOM PRODUIT FR</label>
				<input type="text"  value={nomProduitFrUpdate} onChange={(e)=>{setNomProduitFrUpdate(e.target.value)}}/>     		
			</div>
			<div>
				<label>NOM PRODUIT EN</label>
				<input type="text"  value={nomProduitEnUpdate} onChange={(e)=>{setNomProduitEnUpdate(e.target.value)}}/>    		
			</div>				
			
			<div>
				<label>DIMENSION PRODUIT FR</label>
				<input type="text"  value={dimensionFrUpdate} onChange={(e)=>{setDimensionFrUpdate(e.target.value)}} />     		
			</div>
			<div>
				<label>DIMENSION PRODUIT EN</label>
				<input type="text"   value={dimensionEnUpdate} onChange={(e)=>{setDimensionEnUpdate(e.target.value)}}/>    		
			</div>			
			<TemplateInputSelect label="COUPE" typeInput="text" valeurUpdate={infoSku.coupe} attributUpdate={coupeUpdate} setAttributUpdate={setCoupeUpdate} urlAPI="http://212.129.3.31:8080/api/coupes" />
					
		</aside>
		)
}

export default Description;