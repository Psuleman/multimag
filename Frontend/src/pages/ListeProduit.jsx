import Template from '../components/layout/Template'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { FiltreContext } from '../components/Context/FiltreContext';

import '../assets/scss/tableau.scss'
import ValueTableau from '../components/ListeProduit/ValueTableau'

const ListeProduit = () => {
	//variable
	const [skus, setSkus] = useState([])
    const [totalSku, setTotalSku] = useState(-1)
    const [univers, setUnivers] = useState()
    const [universFiltre, setUniversFiltre] = useState()
    const [categorie, setCategorie] = useState()
    const [categorieFiltre, setCategorieFiltre] = useState()

    const [marque, setMarque] = useState(false)
    const [marqueFiltre, setMarqueFiltre] = useState()

    const [search, setSearch] = useState("")
    const [annuler, setAnnuler] = useState(false)
    const [produitExist, setProduitExist] = useState(true)
    const [produitFindSkuTemporaire, setProduitFindSkuTemporaire] = useState(false)
    const [skuRef, setSkuRef] = useState()

    const url = "http://212.129.3.31:8080/api/skus_temporaires"
	//fonction
	useEffect(() => {
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
                if(value.length > 0){

                    let tabCategory = []
                    let tabUnivers = []
                    let tabMarque = []
    
                    for(let item in value)
                    {
                        tabCategory.push(value[item].categorie)
                        tabUnivers.push(value[item].univers)
                        tabMarque.push(value[item].marque)
    
                    }
    
                    tabCategory = [... new Set(tabCategory)]
                    tabUnivers = [... new Set(tabUnivers)]
                    tabMarque = [... new Set(tabMarque)]
    
                    setCategorie(tabCategory)
                    setUnivers(tabUnivers)
                    setMarque(tabMarque)
                    setProduitExist(true)
                }
                else{
                    setProduitExist(false)
                    setTotalSku(0)
                }

            })
            .catch(function(err) {
                //(err)
            })
    }
    
	//render
	return (
        <FiltreContext.Provider value={{
            produitList: skus, setProduitList:setSkus,
            totalList: totalSku, setTotalList:setTotalSku,

            univers : univers,
            categorie : categorie,
            marque : marque,

            categorieFiltre : categorieFiltre, setCategorieFiltre : setCategorieFiltre,
            universFiltre : universFiltre, setUniversFiltre : setUniversFiltre,
            marqueFiltre : marqueFiltre, setMarqueFiltre : setMarqueFiltre,

            search: search, setSearch: setSearch,
            annuler: annuler, setAnnuler: setAnnuler,
            setSkuRef : setSkuRef,
            skuRef : skuRef,

            setProduitExist : setProduitExist,
            produitExist : produitExist,

            produitFindSkuTemporaire : produitFindSkuTemporaire,
            setProduitFindSkuTemporaire : setProduitFindSkuTemporaire,
            
            url: url

        }}>
		<Template>
            {
                totalSku != -1 ? <h2>ListeProduit | {totalSku} produit(s)</h2> : <h2>ListeProduit</h2>
            }
            {
                totalSku==-1 && 
                <div className='successMessage'>
                    <h5>Recherche des produits. Patientez</h5>
                </div>
            }			
			<table>
				<thead>
					<tr>
						<th>SKU</th>
						<th>SAISON</th>
						<th>REÇU LE</th>
						<th>MARQUE</th>
						<th>UNIVERS</th>
						<th>CATEGORIE</th>
						<th>COULEUR</th>
						<th>PRIX</th>
						<th>PICTURES</th>
						<th>TOTAL STOCK</th>
					</tr>
				</thead>
				<tbody>
					{
                        produitExist &&
                        skus && skus.map((item, index) => ( <ValueTableau key = { index }
                            item = { item } />
                        ))
                    } 
                    {
                        !produitExist && 
                        <div className='echecMessage'>
                            <h5>Aucun produit</h5>
                        </div>
                    }                    

				</tbody>
			</table>
		</Template>
        </FiltreContext.Provider>

		)
}

export default ListeProduit;