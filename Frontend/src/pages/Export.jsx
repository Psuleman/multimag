import { useEffect, useState } from 'react'
import Template from '../components/layout/Template'
import ValueTableau from '../components/Export/ValueTableau'

const Export = () => {
	//variable
	const [list, setList] = useState()

	//fonction
    const handleSubmit = (e) => {
        e.preventDefault();
        request()
    }

    const request = () => {
        let url = 'http://localhost:8001/api/export_produit_temporaires'

        
        /**
         * LISTE PRODUIT
         */
       fetch(url,{method: 'GET',headers: {accept: 'application/json'},cache: "default"})
       .then(function(res){
            if(res.ok){
                return res.json()
            }
        })
       .then(function(value){
           setNbrProduit(value.length)
           var itemExport = false
           var tab = []
           for(let i in value){
               
               if((value[i].sousCategorie!="") && (value[i].sousCategorieEn!="")
                   && (value[i].filtre!="") && (value[i].filtreEn!="")
                   && (value[i].paysOrigine!="") 
                   && (value[i].grilleTaille!="")
                   && (value[i].attribut!="")
                   && (value[i].descriptionFr!="")
                   && (value[i].descriptioEn!="")
                   && (value[i].nomProduitFr!="")
                   && (value[i].nomProduitEn!="")
                   && (value[i].matiere1!="")
                   && (value[i].pourcentMatiere1>0)
                   && (value[i].referencer==1)
               ){
                   if(dateMax || dateMin){
                       if(value[i].dateRef >= dateMin || value[i].dateRef <= dateMax){
                           tab.push(value[i])
                           
                       }
                   }
                   else{
                        tab.push(value[i])
                   }
               }

           }

               if( nbrProduit<1 ){
               }
           setList(tab)
           setNbrProduitRef(tab.length)

       })
       .catch(function(err){
            //console.log(err)
        })
    }
    
    useEffect(()=>{
        request()
    }, [])
	//render	
	return(

			<Template>
				<h2>Export </h2>
				<section id="plageDate">
                <form onSubmit={handleSubmit} className="option">
                    <div>
                        <label>Produit référencer du </label>
                        <input type="date" onChange={(e)=>{setDateMin(e.target.value)}} />
                    </div>
                    <div>
                        <label>au </label>
                        <input type="date" onChange={(e)=>{setDateMax(e.target.value)}} />
                    </div> 

                    <button>Valider</button>              
                </form>
            	</section>
				<button className="btn">Exporter</button>
				<table>
					<thead>
						<tr>
							<th>SKU</th>
							<th>SAISON</th>
							<th>MARQUE</th>
							<th>UNIVERS</th>
							<th>CATEGORIE</th>
							<th>PICTURES</th>
							<th>TAG</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						{
							list && 
							list.map((item, index)=>(
								<ValueTableau item={item} />
							))
						}
						
					</tbody>
				</table>
			</Template>
		)
}

export default Export