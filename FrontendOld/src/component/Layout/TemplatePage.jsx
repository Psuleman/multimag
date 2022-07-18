import { Link } from "react-router-dom";
import "../../assets/scss/template.scss";


const Template = ({children}) => {
	return (
		<div id="template">
			<header id="navbar-horizontale">
				<div id="title-menu">Gestion des produits</div>
				<div id="sidebar">
					<section>
						<form>
							<input type="search" placeholder="Rechercher un sku" required />
							<button>Rechercher</button>
						</form>

					</section>
					<section>
						<div id="avatar"><img src="" alt="A" /></div>
						
						<button className="btn">Déconnexion</button>
					</section>
				</div>
			</header>
			<section id="navbar-verticale">
				<header>
					Multimag
				</header>
				<div id="align-navbar">
				<div>
				<nav>
					<h4>MENU</h4>
					<ul>
						<li><Link className="link-navbar" to="/liste-produit">Liste des produits</Link></li>
						<li><Link className="link-navbar" to="/mon-compte">Mon compte</Link></li>
						<li className="display-nav">
							<Link className="link-navbar" to="/notification">Notification</Link>
							<div className="nbr-navbar"><p>2</p></div>
						</li>
					</ul>
				</nav>
				<aside>
					<h4>FILTRE</h4>
					<div>
						<label>Catégorie</label>
						<select>
							<option>Tous</option>
						</select>
					</div>
					<div>
						<label>Univers</label>
						<select>
							<option>Tous</option>
						</select>
					</div>
					<div>
						<label>Marque</label>
						<select>
							<option>Tous</option>
						</select>
					</div>										
				</aside>
				</div>
				<footer>
					<p>Besoins d'aide? <span>Nous contacter</span></p>
					<div className="logo"/>				
				</footer>
				</div>
			</section>

			<section id="container">
				{children}
			</section>
		</div>
		)
}

export default Template;