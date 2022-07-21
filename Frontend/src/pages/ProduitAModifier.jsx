import { useEffect, useState } from 'react'
import Template from '../components/layout/Template'
import ValueTableau from '../components/ProduitAModifier/ValueTableau'
import { FiltreContext } from '../components/Context/FiltreContext'

const ProduitAModifier = () => {
	//variable
	const [produitList, setProduitList] = useState()
	const [totalList, setTotalList] = useState(-1)

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

	const url = 'http://212.129.3.31:8080/api/export_produit_temporaires?newProduit=0'

	//fonction
    useEffect(()=>{
        const urlListProduit = 'http://212.129.3.31:8080/api/export_produit_temporaires?newProduit=0'

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
			setTotalList(value.length)
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
				setTotalList(0)
			}
        })
        .catch(function(err){
         })

    }, [])
	//render
	return(
		<FiltreContext.Provider value={{
            produitList: produitList, setProduitList:setProduitList,
			totalList: totalList, setTotalList:setTotalList,
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
					(produitExist && produitList) ? <h2>Produit à modifier | {totalList} produit(s)</h2> : <h2>Produit à modifier</h2>
				}
                {
                    totalList==-1 && 
                    <div className='successMessage'>
                        <h5>Recherche des produits. Patientez</h5>
                    </div>
                }
                {
                    totalList==0 && 
                    <div className='echecMessage'>
                        <h5>Aucun produit</h5>
                    </div>                  
                }	
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
			</FiltreContext.Provider>

		)
}

export default ProduitAModifier