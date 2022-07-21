import Template from '../components/layout/Template'
import Formulaire from '../components/ProduitAModifier/Formulaire'
import { useParams } from 'react-router-dom'
import FormContextProvider from '../components/ProduitAModifier/FormulaireProduit/FormContext'

const FormulaireProduit = () => {
	//variable
	let { sku } = useParams();

	//fonction

	//render
	return (
		<Template>
			<FormContextProvider sku={sku}>
				<h2>Produit | SKU : {sku}</h2>
				<Formulaire page="referencement" sku={sku} />
			</FormContextProvider>			
		</Template>

		)
}

export default FormulaireProduit;