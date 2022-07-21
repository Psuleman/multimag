import {FormContext} from "./FormContext"
import { useContext } from "react";
import Moment from "moment"
import TemplateInputSelect from "./TemplateInputSelect"

const Information = () => {
    const {infoSku, marqueUpdate, setMarqueUpdate, prixVenteRemiseUpdate, setPrixVenteRemiseUpdate, universUpdate, setUniversUpdate, universEnUpdate, setUniversEnUpdate} = useContext(FormContext)

	return (
		<aside>
			<h3>Information</h3>
			<div>
				<label>SAISON</label>
				<input type="text" value={infoSku.saison}  disabled="disabled"/>
			</div>
			<div>
				<label>REFERENCE FOURNISSEUR</label>
				<input type="text" value={infoSku.referenceFournisseur}  disabled="disabled"/>
			</div>
			<div>
				<label>DATE REFERENCEMENT</label>
				<input type="text" value={Moment(infoSku.dateRef).format("DD-MM-YYYY")} disabled="disabled"/>
			</div>	
			<div>
				<label>DATE ARRIVEE</label>
				<input type="text" value={Moment(infoSku.dateArrivee).format("DD-MM-YYYY")} disabled="disabled"/>
			</div>			
			<div>
				<label>COULEUR REFERENCEMENT</label>
				<input type="text" value={infoSku.couleurFournisseur}  disabled="disabled"/>
			</div>
			<div>
				<label>PRIX DE VENTE (€)</label>
				<input type="number" value={infoSku.prixVente}  disabled="disabled"/>
			</div>			
			<TemplateInputSelect label="PRIX DE VENTE AVEC REMISE" typeInput="number" valeurUpdate={infoSku.prixVenteRemise} attributUpdate={prixVenteRemiseUpdate} setAttributUpdate={setPrixVenteRemiseUpdate} urlAPI="" />
			<TemplateInputSelect label="UNIVERS" typeInput="text" valeurUpdate={infoSku.univers} valeurEnUpdate={infoSku.universEn} attributEnUpdate={universEnUpdate}  setAttributEnUpdate={setUniversEnUpdate} attributUpdate={universUpdate}  setAttributUpdate={setUniversUpdate} urlAPI="http://212.129.3.31:8080/api/univers_refs" />   
			<TemplateInputSelect label="MARQUE" typeInput="text" valeurUpdate={infoSku.marque}  attributUpdate={marqueUpdate}  setAttributUpdate={setMarqueUpdate} urlAPI="http://212.129.3.31:8080/api/marque_refs" />
						
		</aside>

		)
}

export default Information;