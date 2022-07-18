import { useEffect, useState } from 'react'
import Template from '../components/layout/Template'
import ValueTableau from '../components/ProduitAModifier/ValueTableau'

const ReferencementProduit = () => {
	//variable
	const [produitList, setProduitList] = useState()


	//fonction
    useEffect(()=>{
        const urlListProduit = 'http://localhost:8001/api/export_produit_temporaires?referencer=0&newProduit=1'

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
				<h2>Referencement produit</h2>
				<table>
					<thead>
						<tr>
							<th>SKU</th>
							<th>SAISON</th>
							<th>MARQUE</th>
							<th>UNIVERS</th>
							<th>CATEGORIE</th>
							<th>PICTURES</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
					{
						produitList && 
						produitList.map((item)=>(
							<ValueTableau page="referencement" item={item} />					
						))
					}					
					</tbody>
				</table>

			</Template>
		)
}

export default ReferencementProduit