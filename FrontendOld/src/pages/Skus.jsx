import { useState, useEffect } from 'react'
import '../assets/scss/Skus.scss'

import SkuItem from '../component/Skus/SkuItem'

const Skus = () => {

    /**
     * RECUPERER LES SKUS 
     * Méthode GET
     */

    const [skus, setSkus] = useState([])
    const [totalSku, setTotalSku] = useState(-1)
    const [modif, setModif] = useState(false)
    useEffect(() => {
        if (sessionStorage.getItem('totalmodif') && sessionStorage.getItem('totalmodif') > 0 && skus) {
            setModif(true)
        }
        setTimeout(request, 10)
            // request
    }, [])


    const request = () => {
        const url = "http://212.129.3.31:8080/api/skus_temporaires"

        fetch(url, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
                cache: "default",
            })
            .then(function(res) {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(function(value) {
                setSkus(value.sort())

                setTotalSku(value.length)

            })
            .catch(function(err) {
                //(err)
            })
    }

    return ( <div className = "skus" >
        <h2> PIM - SKUS </h2> {/**<button > Mettre à jour les données </button>*/}
        {
            !skus ?
                <h5> Recherche des produits, veuillez patienter... </h5> :
                <h5> 
                {
                    totalSku == -1 && 'Recherche des produits, veuillez patienter ...'
                } 
                {
                    totalSku == 0 && 'Aucun produit'
                } 
                {
                    totalSku == 1 && '1 produit'
                } 
                {
                    totalSku > 1 && totalSku + ' produits'
                } 
                </h5>
        }


        {
            totalSku > 0 &&
                <div>
                    <div> 
                        {
                        modif && < button > Appliquer tous les modification </button>
                        } 
                    </div> 
                    <table className = "listSkus" >
                    <thead>
                    <tr >
                        <th rowSpan = "2" > SKU </th> 
                        <th rowSpan = "2" > AJOUTÉ </th> 
                        <th rowSpan = "2" > REÇU LE </th> 
                        <th rowSpan = "2" > UNIVERS </th> 
                        <th rowSpan = "2" > MARQUE </th> 
                        <th rowSpan = "2" > REFERENCE COULEUR </th> 
                        <th rowSpan = "2" > CATEGORIE </th> 
                        <th rowSpan = "2" > PRIX DE VENTE </th> 
                        <th rowSpan = "2" > SEASON </th> 
                        <th rowSpan = "2" > LIEN </th> 
                        <th rowSpan = "2" > TAG </th> 
                        <th rowSpan = "2" > PICTURE </th>
                        <th colSpan = "7"> Stock </th> 
                        <th rowSpan = "2" >NOTES <small > A saisir / modifier si besoin </small> </th>								 
                    </tr> 
                    <tr>
                        <th rowSpan = "1" > BOISSY </th> 
                        <th rowSpan = "1" > SEVIGNE </th> 
                        <th rowSpan = "1" > HEROLD </th> 
                        <th rowSpan = "1" > CHENEVIERE </th> 
                        <th rowSpan = "1" > REFERENCE </th> 
                        <th rowSpan = "1" > FARFETCH </th> 
                        <th rowSpan = "1" > TOTAL STOCK </th>										 
                    </tr> 
                </thead> 
                <tbody > 
                    {
                        skus && skus.map((item, index) => ( <SkuItem key = { index }
                            item = { item } />
                        ))
                    } 
                </tbody> 
                </table> 
            </div>
        } </div>
    )
}

export default Skus

/**
 * afficher un tableau 
 */