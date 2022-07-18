import { Link, useNavigate } from "react-router-dom";

import TemplateSecurity from '../components/layout/TemplateSecurity'

const Connexion = () => {
	let navigate = useNavigate();
	
	const handleSubmit = (e) => {
		e.preventDefault()
		let path = `/liste-produit`
    	navigate(path)
	}

	return (
		<TemplateSecurity>
			<header>
				<div><Link className="link" to="/inscription">Inscription</Link></div>
				<div className="link-security-active"><Link className="link" to="/">Connexion</Link></div>
			</header>
			<form onSubmit={handleSubmit}>
			<small>Tous les champs sont obligatoires.</small>
				<div>
					<label>Email</label>
					<input type="email"  />
				</div>
				<div>
					<label>Mot de passe</label>
					<input type="password"  />
				</div>
				<button className="btn">Se connecter</button>					
			</form>
			<footer>
				<p><Link className="link" to="/reinitialisation-motdepasse">Mot de passe oublié?</Link></p>
				<p>Vous n'avez pas de compte? <Link className="link" to="/inscription">S'inscrire</Link></p>

			</footer>
		</TemplateSecurity>
		)
}

export default Connexion;
