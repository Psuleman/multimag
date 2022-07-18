import { useNavigate } from "react-router-dom";

const ValueTableau = ({item}) => {
	//variable
	let navigate = useNavigate();

	//fonction
	const handleClick = () => {
		let path = `/formulaire-produit`;
    	navigate(path);
	}
	return (
			<tr>
				<td>{item.sku}</td>
				<td>{item.saison}</td>
				<td>{item.marque}</td>
				<td>{item.univers}</td>
				<td>{item.categorie}</td>
				<td>images</td>
				<td>{item.tagsRef}</td>
				<td><button onClick={handleClick}>Modifier</button></td>
			</tr>
		)
}

export default ValueTableau;