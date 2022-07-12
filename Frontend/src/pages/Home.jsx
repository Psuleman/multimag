import '../assets/scss/Home.scss'
import {useState, useEffect} from 'react'
import Papa from "papaparse"
import Moment from 'moment'

const Home = () => {
	const [file, setFile] = useState()
	const [data, setData] = useState()
	const [patienceImport, setPatienceImport] = useState(false)
	const [finImport, setFinImport] = useState(false)
	const [totaldata, setTotaldata] = useState()
	const [totalNewProduct, setTotalNewProduct] = useState()
useEffect(()=>{
		if(data){
		//setTotaldata(data.length)
		/**
		 * Récupérer les articles des 4 années précédante
		 */
		let dateNow = Moment().format('YY')
		dateNow = parseInt(dateNow)

		
		//Comparaison
		//setTotalNewProduct(data.length)
		let compteur = 0
		let compteurNewProduct = 0

		for(let item in data)
		{
			if(parseInt(data[item][0])>0)
			{
				let dateArr = Moment(data[item][1], 'DD/MM/YYYY').format()

				let donnesJson = {
					sku : parseInt(data[item][0]),
					taille : data[item][23],
					dateArrivee : "" + Moment(dateArr).format("YYYY-MM-DD"),
					// "2022-02-02"
					codeFournisseur : ""+ data[item][2],
					nomFournisseur : ""+ data[item][3],
					referenceFournisseur : ""+data[item][4],
					codeCouleur : ""+ data[item][5],
					referenceCouleur1 : ""+ data[item][6],
					referenceCouleur2 : ""+ (data[item][7]?data[item][7]:""),
					codeSaison : data[item][8]?parseInt(data[item][8]):0,
					codeFamille1 : data[item][10] ?parseInt(data[item][10]):0,
					libelleFamille1 : ""+ (data[item][11]?data[item][11]: ""),
					codeFamille2 : data[item][12]?parseInt(data[item][12]):0,
					libelleFamille2 : ""+ (data[item][13]?data[item][13]: ""),
					codeFamille3 : data[item][14] ?parseInt(data[item][14]):0,
					libelleFamille3 : ""+ (data[item][15]?data[item][15]:""),
					codeFamille4 : data[item][16] ?parseInt(data[item][16]):0,
					libelleFamille4 : ""+ (data[item][17]?data[item][17]:""),
					codeFamille5 : data[item][18] ?parseInt(data[item][18]):0,
					libelleFamille5 : ""+ (data[item][19]?data[item][19]:""),
					codeFamille6 : data[item][20] ?parseInt(data[item][20]):0,
					libelleFamille6 : ""+ (data[item][21]?data[item][21]:""),
					stockMag0 : data[item][26] ?parseInt(data[item][26]):0,
					stockMag3 : data[item][28] ?parseInt(data[item][28]):0,
					stockMag7 : data[item][30] ?parseInt(data[item][30]):0,
					stockMag9 : data[item][32] ?parseInt(data[item][32]):0,
					stockMag11 : data[item][34] ?parseInt(data[item][34]):0,
					stockMag12 : data[item][36] ?parseInt(data[item][36]):0,
					stockMag14 : data[item][38] ?parseInt(data[item][38]):0,
					stockMag18 : data[item][40] ?parseInt(data[item][40]):0,
					stockMag20 : data[item][42] ?parseInt(data[item][42]):0,
					stockMag60 : data[item][44] ?parseInt(data[item][44]):0,
					grilleTaille : ""+(data[item][22]?data[item][22]:""),
					prixVente : data[item][24]?parseFloat(data[item][24]):0,
					anneeSortie : data[item][9]?parseInt(data[item][9]):0
					}
					
					//request post
					
					const requestOptions = {
					        method: 'POST',
					        headers: { 'Content-Type': 'application/json',
					        accept: 'application/json'
					    	},
					        body: JSON.stringify(donnesJson)
					    };
					    fetch('http://localhost:8001/api/produits_temporaires', requestOptions)
					        .then(response => {
								//response.json()
								
								if(response.status==201){
									compteurNewProduct++
									
								}
								compteur++
								if(compteur == data.length){
									setFinImport(true)
									setTotalNewProduct(compteurNewProduct)
									console.log("fin import")

								}
							})
					        //.then(data => return data)
					        .catch(err=>{
								//console.log(err)
							});
						
						console.log(JSON.stringify(donnesJson))					      

					
			}



			
		}
	}
		

}, [data])

	const handleSubmit = (e) => {
		e.preventDefault()
		setPatienceImport(true)
		let fichier = file[0].name
		fichier = fichier.split('.')
		let extension = fichier[1]

		if(file){
			if(extension == "csv"){
				Papa.parse(file[0],{
				complete: function(resultat){
					//setData(resultat.data)
					let donnees = resultat.data
					setTotaldata(donnees.length)
					let dateAnterieur = Moment().subtract(15,'d').format('YYYY-MM-DD')
					let tabTemporaire = []
					for(let i in donnees){
						let dateProduit = Moment(donnees[i][1], 'DD/MM/YYYY').format("YYYY-MM-DD")
						if(Moment(dateProduit).isAfter(dateAnterieur)){
							//console.log(dateAnterieur)
								tabTemporaire.push(donnees[i])
						}

					}
					setData(tabTemporaire)
				}})

			}
		}
		
		}

	


	return (
			<div className="home">
				<div className='formHome'>
					<h2>Importer le fichier product.csv</h2>
					<div>
						<form onSubmit={handleSubmit}>
							<div><label>Votre fichier : </label><input type="file" onChange={(e)=>{setFile(e.target.files)}}  /></div>
							<div><button>Valider</button></div>
						</form>
						<div>
							{
								totaldata &&
								<h5>{totaldata} produits importer</h5>
							}
							{
								patienceImport &&
								<h5>Traitement des données en cour ...</h5>
								
							}
							{
								finImport &&
								<div>
									<h5>Fichier importer</h5>
									{
										totaldata && 
										<div>
											{
												totalNewProduct>1 ?
												<h5>{totalNewProduct} nouveaux produits sur {totaldata} produits importer</h5> 
												: 
												<h5>{totalNewProduct} nouveau produit sur {totaldata} produits importer</h5> 
											}
										</div>
									}
								</div>	
							}
						</div>
					</div>
				</div>


			</div>
		)
} 

export default Home