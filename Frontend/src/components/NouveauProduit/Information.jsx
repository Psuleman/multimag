const Information = () => {
	return (
		<section id="information">			
			<div>
				<label>Fournisseur</label>
				<input type="text"  />
			</div>
			<div>
				<label>Référence produit fournisseur</label>
				<input type="text"  />
			</div>				
			<div>
				<label>Référence couleur fournisseur</label>
				<input type="text"  />
			</div>
			<div>
				<label>Saison</label>
				<select>
					<option>Printemps / Eté</option>
					<option>Automne / Hivers</option>
				</select>
			</div>
			<div>
				<label>Année sortie</label>
				<input type="number"  />
			</div>				
			<div>
				<label>Mode acquisition</label>
				<select>
					<option>lorem</option>
					<option>lorem</option>
				</select>							
			</div>						
			<button className="btn">Suivant</button>
		</section>
		)
}

export default Information;