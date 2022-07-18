import { useEffect, useState } from 'react'
import Template from '../components/layout/Template'
import ValueTableau from '../components/ProduitAModifier/ValueTableau'

const ProduitAModifier = () => {
	//variable
	const [produitList, setProduitList] = useState()


	//fonction
    useEffect(()=>{
        const urlListProduit = 'http://localhost:8001/api/export_produit_temporaires?newProduit=0'

        /**
         * LISTE PRODUIT
         */
        fetch(urlListProduit,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
        .then(function(res){
            if(res.ok){
                return res.json()
            }
         })
        .then(function(value){
            setProduitList(value)
        })
        .catch(function(err){
         })

    }, [])
	//render
	return(
			<Template>
				<h2>Produit à modifier </h2>
				<table>
					<thead>
						<tr>
							<th>SKU</th>
							<th>SAISON</th>
							<th>MARQUE</th>
							<th>UNIVERS</th>
							<th>CATEGORIE</th>
							<th>PICTURES</th>
							<th>ACTION</th>
						</tr>
					</thead> 
					<tbody>
						{
							produitList && 
							produitList.map((item)=>(
								<ValueTableau page="modification" item={item} />					
							))
						}
						</tbody>
				</table>
			</Template>
		)
}

export default ProduitAModifier