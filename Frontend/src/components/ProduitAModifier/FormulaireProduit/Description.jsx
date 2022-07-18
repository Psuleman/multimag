import {FormContext} from "./FormContext"
import { useContext } from "react";

const Description = ({handleClickList}) => {
	const {infoSku} = useContext(FormContext)
	console.log(infoSku)

	return (
		<section>
			<h3>Description</h3>
			<div>
				<label>Entretien</label>
				<input type="text" value={infoSku.entretien}  />
			</div>
			<div>
				<label>Nom produit FR</label>
				<input type="text" value={infoSku.nomProduitFr}  />
			</div>
			<div>
				<label>Nom produit EN</label>
				<input type="text" value={infoSku.nomProduitEn} />
			</div>				
			<div>
				<label>Description produit FR</label>
				<input type="text" value={infoSku.descriptionFr} />
			</div>
			<div>
				<label>Description produit EN</label>
				<input type="text" value={infoSku.descriptioEn} />
			</div>			
			<div>
				<label>Dimension produit FR</label>
				<input type="text" value={infoSku.dimensionFr} />
			</div>
			<div>
				<label>Dimension produit EN</label>
				<input type="text" value={infoSku.dimensionEn} />
			</div>			
			<div>
				<label>Coupe</label>
				<input type="text" value={infoSku.coupe} />
			</div>	
			<div>
				<button className="btn" onClick={handleClickList}>Voir la liste</button>
				<button className="btn">Suivant</button>
			</div>					
						
		</section>
		)
}

export default Description;