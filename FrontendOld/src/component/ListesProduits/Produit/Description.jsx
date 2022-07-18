import {useState, useEffect, useContext} from 'react'
import {ProduitContext} from '../Context/ProduitContext'

import TemplateInputSelect from '../templateInputSelect'

        
const Description = () => {
	const {produit, dimensionFrUpdate, dimensionEnUpdate, coupeUpdate,	entretienUpdate,  descriptionFrUpdate, 	descriptionEnUpdate, nomProduitFrUpdate, nomProduitEnUpdate, tailleMannequinUpdate} = useContext(ProduitContext)
	const {setDimensionFrUpdate, setDimensionEnUpdate, setCoupeUpdate, setEntretienUpdate, setDescriptionFrUpdate, setDescriptionEnUpdate, setNomProduitFrUpdate, setNomProduitEnUpdate, setTailleMannequinUpdate} = useContext(ProduitContext)


        return (
        	<div className="description">
				<h4>Description</h4>
        		<div className="label_value"><div>SKU : </div><div>{produit.sku}</div></div>
        		
				<TemplateInputSelect label="ENTRETIEN" typeInput="text" valeurUpdate={produit.entretien} attributUpdate={entretienUpdate} setAttributUpdate={setEntretienUpdate} urlAPI="http://212.129.3.31:8080/api/entretiens" />
				<div className="label_value">
					<div>DESCRIPTION FR : </div>
        			<div><textarea  value={descriptionFrUpdate} onChange={(e)=>{setDescriptionFrUpdate(e.target.value)}}></textarea></div>     		
        		</div>

        		<div className="label_value">
					<div>DESCRIPTION EN : </div>
        			<div><textarea type="text"   value={descriptionEnUpdate} onChange={(e)=>{setDescriptionEnUpdate(e.target.value)}}/></div>     		
        		</div>


        		<div className="label_value">
					<div>NOM DU PRODUIT FR : </div>
        			<div><input type="text"  value={nomProduitFrUpdate} onChange={(e)=>{setNomProduitFrUpdate(e.target.value)}}/></div>     		
        		</div>
        		<div className="label_value">
					<div>NOM DU PRODUIT EN : </div>
        			<div><input type="text"  value={nomProduitEnUpdate} onChange={(e)=>{setNomProduitEnUpdate(e.target.value)}}/></div>     		
        		</div>

        		<div className="label_value">
					<div>DIMENSION FR : </div>
        			<div><input type="text"  value={dimensionFrUpdate} onChange={(e)=>{setDimensionFrUpdate(e.target.value)}} /></div>     		
        		</div>

        		<div className="label_value">
					<div>DIMENSION EN : </div>
        			<div><input type="text"   value={dimensionEnUpdate} onChange={(e)=>{setDimensionEnUpdate(e.target.value)}}/></div>     		
        		</div>
				<TemplateInputSelect label="COUPE" typeInput="text" valeurUpdate={produit.coupe} attributUpdate={coupeUpdate} setAttributUpdate={setCoupeUpdate} urlAPI="http://212.129.3.31:8080/api/coupes" />



				
			</div>
		)	
}
export default Description