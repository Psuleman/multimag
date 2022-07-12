import '../../assets/scss/CarteProduit.scss'
import {ReferencementContext} from './Context/ReferencementContext'
import {useContext, useState} from 'react'

const CarteProduit = ({sku, img, altimg, categorie, univers}) => {

    const {setShowReferencement, setSkuRef, produitFindSkuTemporaire, setProduitFindSkuTemporaire, produitList} = useContext(ReferencementContext)

    const handleClick = () => {
        setShowReferencement(true)
        setSkuRef(sku)
    }

    const handleClickAdd = () => {
        //sku , marque, saison, univers, categorie, couleurFournisseur, prixVente, sousCategorie, newProduit, dateAjout, dateArrivee, prixVente, 
        let data = {
            sku: produitList[0].sku,
            marque: produitList[0].marque,
            saison: produitList[0].season,
            univers: produitList[0].univers,
            categorie: produitList[0].categorie,
            couleurFournisseur: produitList[0].couleurFnr,
            prixVente: produitList[0].prixVente,
            sousCategorie: produitList[0].sousCategorie,
            newProduit: false,
            referencer: false,
            dateArrivee : produitList[0].dateArrivee,
            newListAttente : true
          }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            accept: 'application/json'
            },
            body: JSON.stringify(data)
        };
        setProduitFindSkuTemporaire(false)

        fetch("http://212.129.3.31:8080/api/export_produit_temporaires/", requestOptions)
            .then(response => {
                //response.json()
                
                if(response.status==201){
                    
                }

            })
            //.then(data => return data)
            .catch(err=>{
            });
    }

    return (
        <div className="carte-produit">
            <header>SKU : {sku}</header>

            <div className="contentCarte">
                <img src={img} alt={altimg} />
                <div>{categorie}</div>
                <div>{univers}</div>
            </div>   
            {
                produitFindSkuTemporaire ? 
                <footer><button onClick={handleClickAdd}>Ajouter à la liste d'attente</button></footer>
                :
                <footer><button onClick={handleClick}>Référencer</button></footer>
            }         
            
        </div>
    )
}

export default CarteProduit;