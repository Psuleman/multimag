import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiltreContext } from "../Context/FiltreContext";
import {PageContext} from "./Context/PageContext"
import Moment from 'moment'

const ValueTableau = ({page, item}) => {
	const {produitFindSkuTemporaire, setProduitFindSkuTemporaire, setEchecUpdates} = useContext(FiltreContext)
	//variable
	const [listeAttente, setListeAttente] = useState(false)
	let navigate = useNavigate();
	let image = "https://leclaireur-shopify.imgix.net/" + item.sku + "/" + item.sku + "-01.png";

	//fonction
	const handleClick = () => {
		let path = `/formulaire-produit/` + item.sku + ``;
    	navigate(path);
	}
	useEffect(()=>{
		if((!item.saison) || (item.referencer) || produitFindSkuTemporaire){
			setListeAttente(true)
		}	

	}, [item])

    const handleClickAdd = () => {
		let data = {}
        //sku , marque, saison, univers, categorie, couleurFournisseur, prixVente, sousCategorie, newProduit, dateAjout, dateArrivee, prixVente, 
		if(item.season){
			data = {
				sku: item.sku,
				marque: item.marque,
				saison: item.season,
				univers: item.univers,
				categorie: item.categorie,
				couleurFournisseur: item.couleurFnr,
				prixVente: item.prixVente,
				sousCategorie: item.sousCategorie,
				newProduit: false,
				referencer: false,
				dateArrivee : item.dateArrivee,
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
			console.log(JSON.stringify(data))
	
			fetch("http://212.129.3.31:8080/api/export_produit_temporaires/", requestOptions)
				.then(response => {
					//response.json()
					if(response.status==201){
						//redirection produit à modifier
					}
					else{
						//redirection reference produit
					}
	
				})
				//.then(data => return data)
				.catch(err=>{
				});		
		}
		else{
			data = {
				sku: item.sku,
				marque: item.marque,
				saison: item.saison,
				univers: item.univers,
				universEn: item.universEn,
				categorie: item.categorie,
				categorieEn: item.categorieEn,
				filtre: item.filtre,
				filtreEn: item.filtreEn,
				couleur: item.couleur,
				couleurEn: item.couleurEn,
				attribut: item.attribut,
				entretien: item.entretien,
				entretienEn: item.entretienEn,
				coupe: item.coupe,
				coupeEn: item.coupeEn,
				dateRef:  Moment(item.dateRef).format("YYYY-MM-DD"),
				referenceFournisseur: item.referenceFournisseur,
				couleurFournisseur: item.couleurFournisseur,
				prixVente: item.prixVente,
				prixVenteRemise: item.prixVenteRemise,

				sousCategorie: item.sousCategorie,
				sousCategorieEn: item.sousCategorieEn,

				paysOrigine: item.paysOrigine,
				grilleTaille: item.grilleTaille,
				nomProduitFr: item.nomProduitFr,
				nomProduitEn: item.nomProduitEn,
				descriptionFr: item.descriptionFr,
				descriptioEn: item.descriptioEn,
				dimensionFrUpdate: item.dimensionFr,
				dimensionEnUpdate: item.dimensionEn,
				taillePorteeMannequin: item.taillePorteeMannequin,
				tagsRef: item.tagsRef,
				

				matiere1: item.matiere1,
				pourcentMatiere1: item.pourcentMatiere1,
				matiere2: item.matiere2,
				pourcentMatiere2: item.pourcentMatiere2,
				matiere3: item.matiere3,
				pourcentMatiere3: item.pourcentMatiere3,
				matiere4: item.matiere4,
				pourcentMatiere4: item.pourcentMatiere4,
				matiere5: item.matiere5,
				pourcentMatiere5: item.pourcentMatiere5,
				matiere6: item.matiere6,
				pourcentMatiere6: item.pourcentMatiere6,
				matiere7: item.matiere7,
				pourcentMatiere7: item.pourcentMatiere7,
				matiere8: item.matiere8,
				pourcentMatiere8: item.pourcentMatiere8,
				matiere9: item.matiere9,
				pourcentMatiere9: item.pourcentMatiere9,
				matiere10: item.matiere10,
				pourcentMatiere10: item.pourcentMatiere10,
				referencer: item.referencer,
				newListAttente: true,
				newProduit: false
		}
		let url = "http://212.129.3.31:8080/api/export_produit_temporaires/" + item.id

		fetch(url, 
				{
					method: 'PATCH',
					//headers: new Headers({accept: 'application/merge-patch+json ', ContentType: 'application/json'}),
					//method: 'POST',
					headers: { 'Content-Type': 'application/merge-patch+json',
					accept: 'application/ld+json'
					},					
					body: JSON.stringify(data)
				})
				.then(res => {
                    if(res.status == 200){
					    setSuccessUpdates(true)
                        setEchecUpdates(false)
                    }
                    else{
                        setEchecUpdates(true)
                        setSuccessUpdates(false)
                    }
					return res;
				}).catch(err => setEchecUpdates(true));
                console.log(JSON.stringify(data))
		}


    }
	
	//render
	return (
			<tr>
				<td>{item.sku}</td>
				<td>{item.saison ? item.saison : item.season}</td>
				<td>{item.marque}</td>
				<td>{item.univers}</td>
				<td>{item.categorie}</td>
				<td><img src={image} alt={item.sousCategorie} className="img_miniature"/></td>
				{
					page == "referencement" && (listeAttente==false) &&
						<td><button onClick={handleClick}>Référencer</button></td>
				}
				{
					page == "referencement" && (listeAttente==true) &&
					<button onClick={handleClickAdd}>Ajouter à la liste d'attente</button>
				}
				{
					page == "modification" && 
						<td>
							<button onClick={handleClick}>Modifier</button>
						</td>				
				}

			</tr>
		)
}

export default ValueTableau;
