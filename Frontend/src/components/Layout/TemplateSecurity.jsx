import "../../assets/scss/security.scss";

const TemplateSecurity = ({children}) => {
	return (
		<div id="template-security">


			<section id="securityForm">
				<header>
					<h1>Gestion des produits</h1>
				</header>				
				<div>

					{children}
				</div>
			</section>

			<footer>
				<p>Besoins d'aide? <span>Nous contacter</span></p>
				<div className="logo"/>
			</footer>


		</div>
		)
}

export default TemplateSecurity;