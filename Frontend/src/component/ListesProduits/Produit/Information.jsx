import {ProduitContext} from '../Context/ProduitContext'
import {useContext, useState, useEffect } from 'react'
import Moment from 'moment'

import TemplateInputSelect from '../templateInputSelect'

const Information = () => {

    const {produit, marqueUpdate, setMarqueUpdate, prixVenteRemiseUpdate, setPrixVenteRemiseUpdate, universUpdate, setUniversUpdate, universEnUpdate, setUniversEnUpdate} = useContext(ProduitContext)
    const [tabImage, setTabImage] = useState()


    return(
        <div className='information'>
            <h4>Information</h4>
            <div>
                <div className="label_value"><div>SKU : </div><div><input type="number" value={produit.sku} disabled="disabled"/></div></div>
                <div className="label_value"><div>SAISON : </div><div><input type="text" value={produit.saison}  disabled="disabled"/></div></div>
                <div className="label_value"><div>FNR REF : </div><div><input type="text" value={produit.referenceFournisseur}  disabled="disabled"/></div></div>
                <div className="label_value"><div>DATE DE REF : </div><div><input type="text" value={Moment(produit.dateRef).format("DD-MM-YYYY")} disabled="disabled"/></div></div>
                <div className="label_value"><div>DATE ARRIVEE : </div><div><input type="text" value={Moment(produit.dateArrivee).format("DD-MM-YYYY")} disabled="disabled"/></div></div>
                <div className="label_value"><div>FNR COULEUR : </div><div><input type="text" value={produit.couleurFournisseur}  disabled="disabled"/></div></div>
                <div className="label_value"><div>PRIX DE VENTE (€) : </div><div><input type="number" value={produit.prixVente}  disabled="disabled"/></div></div>
                
                <TemplateInputSelect label="PRIX DE VENTE AVEC REMISE" typeInput="number" valeurUpdate={produit.prixVenteRemise} attributUpdate={prixVenteRemiseUpdate} setAttributUpdate={setPrixVenteRemiseUpdate} urlAPI="" />
                <TemplateInputSelect label="UNIVERS" typeInput="text" valeurUpdate={produit.univers} valeurEnUpdate={produit.universEn} attributEnUpdate={universEnUpdate}  setAttributEnUpdate={setUniversEnUpdate} attributUpdate={universUpdate}  setAttributUpdate={setUniversUpdate} urlAPI="http://212.129.3.31:8080/api/univers_refs" />   

                

                <TemplateInputSelect label="MARQUE" typeInput="text" valeurUpdate={produit.marque}  attributUpdate={marqueUpdate}  setAttributUpdate={setMarqueUpdate} urlAPI="http://212.129.3.31:8080/api/marque_refs" />

                
            </div>


           
        </div>
    )

}

export default Information


