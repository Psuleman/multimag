import { Link } from "react-router-dom";

import TemplateSecurity from '../components/layout/TemplateSecurity'

const Inscritpion = () => {
	return (
			<TemplateSecurity>
				<header>
					<div className="link-security-active"><Link className="link" to="/inscription">Inscription</Link></div>
					<div><Link className="link" to="/">Connexion</Link></div>
				</header>			
				<form>
				<small>Tous les champs sont obligatoires.</small>
					<div>
						<label>Nom complet</label>
						<input type="text" required />
					</div>
					<div>
						<label>Email</label>
						<input type="email" required />
					</div>
					<div>
						<label>Mot de passe</label>
						<input type="password" required />
					</div>
					<div>
						<label>Confirmation de votre mot de passe</label>
						<input type="password" required />
					</div>
					<button>S'inscrire</button>		
				</form>
				<footer>
					<p>Déjà inscrit? <Link className="link" to="/">Se connecter</Link></p>
				</footer>
			</TemplateSecurity>
		)
}

export default Inscritpion;