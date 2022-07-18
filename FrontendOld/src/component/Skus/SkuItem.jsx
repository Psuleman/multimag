import {useEffect, useState} from 'react'
import Moment from 'moment'

const SkuItem = ({item}) => {
	const [notes, setNotes] = useState("")
	const [btnModif, setBtnModif] = useState(false)

	
	const handleChange = (e) => {
		setNotes(e.target.value)
		setBtnModif(true)
		let totalModif = 1

		if(sessionStorage.getItem('totalmodif'))
			totalModif = parseInt(sessionStorage.getItem('totalmodif')) + 1

		sessionStorage.setItem('totalmodif', totalModif)
	}

	const handleBlur = (e) => {
		if(e.target.value == item.notes)
			setBtnModif(false)
		let totalModif = 1

		if(sessionStorage.getItem('totalmodif'))
			totalModif = parseInt(sessionStorage.getItem('totalmodif')) - 1

		sessionStorage.setItem('totalmodif', totalModif)

		if(sessionStorage.getItem('totalmodif') == 0)
			sessionStorage.removeItem('totalmodif')	
	}


	return (
			<tr>
				<td>{item.sku}</td>
				<td>{Moment(item.dateAjout).format("DD-MM-YYYY")}</td>
				<td>{Moment(item.dateArrivee).format("DD-MM-YYYY")}</td>
				<td>{item.univers}</td>
				<td>{item.marque}</td>
				<td>{item.couleurFnr}</td>
				<td>{item.categorie}</td>
				<td>{item.prixVente}</td>
				<td>{item.season}</td>
				<td><a href={item.lien}>{item.lien}</a></td>
				<td>{item.tag}</td>
				<td><img src={item.picture} alt={item.marque + " " + item.sousCategorie} className="img_miniature"/></td>
				
				<td>{item.boissy}</td>
				<td>{item.sevigne}</td>
				<td>{item.herold}</td>
				<td>{item.cheneviere}</td>
				<td>{item.reference}</td>
				<td>{item.farfetch}</td>
				<td>{item.totalStock}</td>
				<td>
				<input type="text" value={notes} 
					onChange={handleChange}
					onBlur={handleBlur}
				 />
				{
					btnModif==true &&
					<button>modifier</button>
				}
				</td>

			</tr>
		)
}

export default SkuItem;