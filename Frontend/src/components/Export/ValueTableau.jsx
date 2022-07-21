import { useNavigate } from "react-router-dom";
import Moment from "moment";

const ValueTableau = ({item}) => {
	//variable
	let navigate = useNavigate();

	//fonction
	const handleClick = () => {
		let path = `/formulaire-produit/` + item.sku +``;
    	navigate(path);
	}
	return (
			<tr>
				<td>{item.sku}</td>
				<td>{Moment(item.dateRef).format("DD-MM-YYYY")}</td>
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