const Template = ({childer}) => {
	return (
		<div>
			<header>
				<h3>Produit</h3>
				<nav>
					<ul>
						<li>Informations</li>
						<li>Caractéristique</li>
						<li>Description</li>
						<li>Matières</li>
					</ul>
				</nav>				
			</header>
			<section>
				{children}
			</section>
		</div>
		)
}