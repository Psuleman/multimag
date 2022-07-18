import { useEffect, useState } from "react";
import Moment from "moment";
import Export from "../component/Export/Export";
import "../assets/scss/Export.scss";

const ExportFile = () => {
    const [list, setList] = useState()
    const [message, setMessage] = useState()
    const [nbrProduit, setNbrProduit] = useState(0)
    const [nbrProduitRef, setNbrProduitRef] = useState(0)
    const [dateMin, setDateMin] = useState()
    const [dateMax, setDateMax] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        request()
    }

    const request = () => {
        let url = 'http://212.129.3.31:8080/api/export_produit_temporaires'

        
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

    if( nbrProduit==0 && list ){
        setMessage("Aucun produit prêt pour import")
    }
    return (
        <div>
            <h3>Produits prêt pour exporter</h3>
            <section id="plageDate">
                <form onSubmit={handleSubmit}>
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
            {
                message && 
                <h4>{message}</h4>
            }
            {
                list && (<div>
                    
                    
                    {nbrProduitRef && <Export list={list}/>}

            <h2>{nbrProduitRef} {nbrProduitRef > 1 ? "produits" : "produit"} référencer parmi les {nbrProduit} {nbrProduit > 1 ? "produits" : "produit"}</h2>

            <table className="listSkus">
                <tr>
                <th>SKU</th>
                <th>DATE DE REF</th>
                <th>MARQUE</th>
                <th>FNR REF</th>
                <th>FNR COULEUR</th>
                <th>PRIX DE VENTE</th>
                <th>PRIX DE VENTE AVEC REMISE</th>
                <th>SAISON</th>
                <th>UNIVERS</th>
                <th>CATEGORIES</th>
                <th>SOUS CATEGORIES</th>
                <th>FILTRES</th>
                <th>COULEUR</th>
                <th>PAYS D'ORIGINE</th>
                <th>ENTRETIEN</th>
                <th>GRILLE DE TAILLE</th>                
                <th>ATTRIBUT</th>
                <th>NOM DU PRODUIT FR</th>                
                <th>NOM DU PRODUIT EN</th>
                <th>DESCRIPTION FR</th>                
                <th>DESCRIPTION EN</th>
                <th>TAGS</th>
                <th>IMAGES</th>
                <th>MATIERE 1</th>
                <th>% MATIERE 1</th>                
                <th>MATIERE 2</th>
                <th>% MATIERE 2</th>                
                <th>MATIERE 3</th>
                <th>% MATIERE 3</th>                
                <th>MATIERE 4</th>
                <th>% MATIERE 4</th>                
                <th>MATIERE 5</th>
                <th>% MATIERE 5</th>                
                <th>MATIERE 6</th>
                <th>% MATIERE 6</th>                
                <th>MATIERE 7</th>
                <th>% MATIERE 7</th>                
                <th>MATIERE 8</th>
                <th>% MATIERE 8</th>                
                <th>MATIERE 9</th>
                <th>% MATIERE 9</th>                
                <th>MATIERE 10</th>
                <th>% MATIERE 10</th>                                
                <th>COUPE</th>
                <th>DIMENSIONS FR</th>                
                <th>DIMENSIONS EN</th>
                <th>TAILLE PORTÉE PAR LE MANNEQUIN</th>                
                </tr>
                { list &&
                    list.map((item, index)=>{
                        index = "ref" + index
                        return (<tr>
                    <td key={index}>{item.sku}</td>
                    <td key={index}>{Moment(item.dateRef).format("DD-MM-YYYY")}</td>
                    <td key={index}>{item.marque}</td>
                    <td key={index}>{item.referenceFournisseur}</td>
                    <td key={index}>{item.couleurFournisseur}</td>
                    <td key={index}>{item.prixVente} €</td>
                    <td key={index}>{item.prixVenteRemise && item.prixVenteRemise+"€" } </td>
                    <td key={index}>{item.saison}</td>
                    <td key={index}>{item.univers}</td>
                    <td key={index}>{item.categorie}</td>
                    <td key={index}>{item.sousCategorie}</td>
                    <td key={index}>{item.filtre}</td>
                    <td key={index}>{item.couleur}</td>
                    <td key={index}>{item.paysOrigine}</td>
                    <td key={index}>{item.entretien}</td>
                    <td key={index}>{item.grilleTaille}</td>
                    <td key={index}>{item.attribut}</td>
                    <td key={index}>{item.nomProduitFr}</td>
                    <td key={index}>{item.nomProduitEn}</td>
                    <td key={index}>{item.descriptionFr}</td>
                    <td key={index}>{item.descriptioEn}</td>
                    <td key={index}>{item.tagsRef}</td>
                    <td key={index}>{item.pictures}</td>
                    <td key={index}>{item.matiere1}</td>
                    <td key={index}>{item.pourcentMatiere1}%</td>
                    <td key={index}>{item.matiere2}</td>
                    <td key={index}>{item.pourcentMatiere2?item.pourcentMatiere2+"%":""}</td>
                    <td key={index}>{item.matiere3}</td>
                    <td key={index}>{item.pourcentMatiere3?item.pourcentMatiere3+"%":""}</td>
                    <td key={index}>{item.matiere4}</td>
                    <td key={index}>{item.pourcentMatiere4?item.pourcentMatiere4+"%":""}</td>
                    <td key={index}>{item.matiere5}</td>
                    <td key={index}>{item.pourcentMatiere5?item.pourcentMatiere5+"%":""}</td>
                    <td key={index}>{item.matiere6}</td>
                    <td key={index}>{item.pourcentMatiere6?item.pourcentMatiere6+"%":""}</td>
                    <td key={index}>{item.matiere7}</td>
                    <td key={index}>{item.pourcentMatiere7?item.pourcentMatiere7+"%":""}</td>
                    <td key={index}>{item.matiere8}</td>                    
                    <td key={index}>{item.pourcentMatiere8?item.pourcentMatiere8+"%":""}</td>
                    <td key={index}>{item.matiere9}</td>
                    <td key={index}>{item.pourcentMatiere9?item.pourcentMatiere9+"%":""}</td>
                    <td key={index}>{item.matiere10}</td>
                    <td key={index}>{item.pourcentMatiere10?item.pourcentMatiere10+"%":""}</td>
                    <td key={index}>{item.coupe}</td>  
                    <td key={index}>{item.dimensionFr}</td>  
                    <td key={index}>{item.dimensionEn}</td>  
                    <td key={index}>{item.taillePorteeMannequin}</td>  
                                                             
                    </tr>)}
                    )
                }
            </table>
            </div>)
}
        </div>
    )
}


export default ExportFile;