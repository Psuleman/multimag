import {FormContext} from "./FormContext"
import { useContext } from "react";

const Information = () => {
    const {infoSku} = useContext(FormContext)

	return (
		<section>
			<h3>Information</h3>
			<div>
				<label>Saison</label>
				<input type="text" value={infoSku.entretien}  />
			</div>
			<div>
				<label>Référence fournisseur</label>
				<input type="text" value={infoSku.nomProduitFr}  />
			</div>
			<div>
				<label>Date référencement</label>
				<input type="text" value={infoSku.nomProduitEn} />
			</div>				
			<div>
				<label>Couleur fournisseur</label>
				<input type="text" value={infoSku.descriptionFr} />
			</div>
			<div>
				<label>Prix de vente (€)</label>
				<input type="text" value={infoSku.descriptioEn} />
			</div>			
			<div>
				<label>Remise (en pourcentage)</label>
				<input type="text" value={infoSku.dimensionFr} />
			</div>
			<div>
				<label>Univers</label>
				<input type="text" value={infoSku.dimensionEn} />
			</div>			
			<div>
				<label>Marque</label>
				<input type="text" value={infoSku.dimensionEn} />
			</div>					
						
		</section>

		)
}

export default Information;