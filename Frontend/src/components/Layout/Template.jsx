import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/template.scss";
import Categorie from "./Filtre/Categorie"
import Univers from "./Filtre/Univers"
import Marque from "./Filtre/Marque"
import Recherche from "./Filtre/Recherche"
import logo from "../../assets/images/dalena.png"
const Template = ({children}) => {
	//variable
	const [searchFiltre, setSearchFiltre] = useState()
	//fonction

	return (
		<div id="template">
			<header id="navbar-horizontale">
				<div id="title-menu">Multimag</div>
				<div id="sidebar">
					<section>
						<Recherche />
					</section>
					<section>
						<div id="avatar"><img src="" alt="A" /></div>
						
						<button className="btn">Déconnexion</button>
					</section>
				</div>
			</header>
			<section id="navbar-verticale">
				<header>
					<h1>Multimag</h1>
				</header>
				{/*<button id="eclipse-navbar-verticale">E</button>*/}
				<div id="align-navbar">
				<div>
				<nav>
					<h4>MENU</h4>
					<ul>
						<li><Link className="link-navbar" to="/liste-produit">Liste des produits</Link></li>
						<li><Link className="link-navbar" to="/nouveau-produit">Nouveau produit</Link></li>
						<li><Link className="link-navbar" to="/referencement-produit">Referencement Produit</Link></li>
						<li><Link className="link-navbar" to="/produit-a-modifier">Produit à modifier</Link></li>
						<li><Link className="link-navbar" to="/export">Export</Link></li>
						<li><Link className="link-navbar" to="/mon-compte">Mon compte</Link></li>
					</ul>
				</nav>
				<aside>
					<h4>FILTRE</h4>
					<Categorie />
					<Univers />
					<Marque />
									
				</aside>
				</div>
				<footer>
					<p>Besoins d'aide? <span>Nous contacter</span></p>
					<div className="logo"><img src={logo} /></div>
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