import { useNavigate } from "react-router-dom";

const ValueTableau = ({page, item}) => {
	//variable
	let navigate = useNavigate();
	let image = "https://leclaireur-shopify.imgix.net/" + item.sku + "/" + item.sku + "-01.png";

	//fonction
	const handleClick = () => {
		let path = `/formulaire-produit/` + item.sku + ``;
    	navigate(path);
	}
	//render
	return (
			<tr>
				<td>{item.sku}</td>
				<td>{item.saison}</td>
				<td>{item.marque}</td>
				<td>{item.univers}</td>
				<td>{item.categorie}</td>
				<td><img src={image} alt={item.sousCategorie} className="img_miniature"/></td>
				{
					page == "referencement" && 
						<button onClick={handleClick}>Référencer</button>
				}
				{
					page == "modification" && 
						<td>
							<button>Retirer</button>
							<button onClick={handleClick}>Modifier</button>
						</td>				
				}

			</tr>
		)
}

export default ValueTableau;
