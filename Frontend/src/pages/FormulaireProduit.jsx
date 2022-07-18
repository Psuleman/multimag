import Template from '../components/layout/Template'
import Formulaire from '../components/ProduitAModifier/Formulaire'
import { useParams } from 'react-router-dom'

const FormulaireProduit = () => {
	//variable
	let { sku } = useParams();

	//fonction

	//render
	return (
		<Template>
			<h2>Produit | SKU : {sku}</h2>
			<Formulaire page="referencement" sku={sku} />
		</Template>
		)
}

export default FormulaireProduit;