import { Link } from "react-router-dom";

import TemplateSecurity from '../components/layout/TemplateSecurity'
import { DataContext } from "../components/Inscription/Context/DataContext";
import DataContextProvider from "../components/Inscription/Context/DataContext";
import Formulaire from "../components/Inscription/Formulaire";

const Inscritpion = () => {
	return (
			<TemplateSecurity>
				<header>
					<div className="link-security-active"><Link className="link" to="/inscription">Inscription</Link></div>
					<div><Link className="link" to="/">Connexion</Link></div>
				</header>
				<DataContextProvider>
					<Formulaire />			
				</DataContextProvider>			

				<footer>
					<p>Déjà inscrit? <Link className="link" to="/">Se connecter</Link></p>
					<p>Besoins d'aide? <span>Nous contacter</span></p>
				</footer>
			</TemplateSecurity>
		)
}

export default Inscritpion;