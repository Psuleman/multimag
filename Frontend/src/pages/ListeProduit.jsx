import Template from '../components/layout/Template'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

import '../assets/scss/tableau.scss'
import ValueTableau from '../components/ListeProduit/ValueTableau'

const ListeProduit = () => {
	//variable
	const [skus, setSkus] = useState([])
    const [totalSku, setTotalSku] = useState(-1)
    const [modif, setModif] = useState(false)
	//fonction
	useEffect(() => {
        if (sessionStorage.getItem('totalmodif') && sessionStorage.getItem('totalmodif') > 0 && skus) {
            setModif(true)
        }
        setTimeout(request, 10)
            // request
    }, [])
	const request = () => {
        const url = "http://localhost:8001/api/skus_temporaires"

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
    
	//render
	return (
		<Template>
			<h2>ListeProduit</h2>
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
                        skus && skus.map((item, index) => ( <ValueTableau key = { index }
                            item = { item } />
                        ))
                    } 
				</tbody>
			</table>
		</Template>
		)
}

export default ListeProduit;