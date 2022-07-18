import Moment from 'moment'

const ValueTableau = ({item}) => {
	//Variable

	//fonction

	//render
	return (
			<tr>
				<td><a href={item.lien}>{item.sku}</a></td>
				<td>{item.season}</td>
				<td>{Moment(item.dateArrivee).format("DD-MM-YYYY")}</td>
				<td>{item.marque}</td>
				<td>{item.univers}</td>
				<td>{item.categorie}</td>
				<td>{item.couleurFnr}</td>
				<td>{item.prixVente}</td>
				<td><img src={item.picture} alt={item.marque + " " + item.sousCategorie} className="img_miniature"/></td>
				<td>{item.totalStock}</td>
			</tr>
		)
}

export default ValueTableau;

