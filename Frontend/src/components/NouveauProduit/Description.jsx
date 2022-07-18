const Description = () => {
	
	return (
		<section id="description">
			<div>
				<label>Univers</label>
				<div><input type="checkbox" value="Homme"  /> <label>Homme</label></div>
				<div><input type="checkbox" value="Femme"  /> <label>Femme</label></div>
				<div><input type="checkbox" value="Maison"  /> <label>Maison</label></div>
			</div>
			<div>
				<label>Catégorie</label>
				<input type="text"  />
			</div>				
			<div>
				<label>Sous catégorie</label>
				<input type="text"  />
			</div>
			<div>
				<label>Grille taille</label>
				<input type="text"  />
			</div>				
			<div>
				<label>Quantité</label>
				<input type="number"  />
			</div>							<div>
				<label>Prix</label>
				<input type="number"  />
			</div>
			<div>					
				<button className="btn">Précédent</button>							
				<button className="btn">Terminer</button>
			</div>							
		</section>	
	)
}

export default Description;