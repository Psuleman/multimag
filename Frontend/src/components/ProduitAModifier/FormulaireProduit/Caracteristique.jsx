import {FormContext} from "./FormContext"
import { useContext } from "react";

const Caracteristique = () => {

	const {infoSku} = useContext(FormContext)

	return (
		<section>
			<h3>Caractéristique</h3>
			<div>
				<label>Categorie</label>
				<input type="text" value={infoSku.entretien}  />
			</div>
			<div>
				<label>Sous catégorie</label>
				<input type="text" value={infoSku.nomProduitFr}  />
			</div>
			<div>
				<label>Filtre</label>
				<input type="text" value={infoSku.nomProduitEn} />
			</div>				
			<div>
				<label>Couleur</label>
				<input type="text" value={infoSku.descriptionFr} />
			</div>
			<div>
				<label>Pays origine</label>
				<input type="text" value={infoSku.descriptioEn} />
			</div>			
			<div>
				<label>Grille de taille</label>
				<input type="text" value={infoSku.dimensionFr} />
			</div>
			<div>
				<label>Attribut</label>
				<input type="text" value={infoSku.dimensionEn} />
			</div>			
				
						
		</section>

		)
}

export default Caracteristique;