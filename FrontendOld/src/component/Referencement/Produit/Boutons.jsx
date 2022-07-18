import {ReferencementContext} from '../Context/ReferencementContext'
import {useContext} from 'react'

const Boutons = () => {
	const {indexProduit, setIndexProduit, produitList, setProduit, setSuccessUpdates} = useContext(ReferencementContext)
	const handleClick = (option) => {
		setSuccessUpdates(false)
		let actuel = parseInt(indexProduit) 

		if(option == "suiv"){
			actuel += 1
		}

		else if(option == "prec"){
			actuel -= 1
		}

		setIndexProduit(actuel)
		setProduit(produitList[actuel])


	}

	return (

			<div className="btn-suiv-prec">
			{
				indexProduit != 0 && <button onClick={()=>{handleClick("prec")}} className="btn">Précédent produit</button>
			}
			{
				indexProduit != (produitList.length - 1) && <button onClick={()=>{handleClick("suiv")}} className="btn">Produit suivant</button>
			}
			</div>
		)
}

export default Boutons