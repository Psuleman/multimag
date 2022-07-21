import { Link } from "react-router-dom";

import TemplateSecurity from '../components/layout/TemplateSecurity'

const ResetPassword = () => {
	return (
			<TemplateSecurity>
				<header>
					<div id="reset-assword" className="link-security-active"><Link to="/reinitialisation-motdepasse" className="link">Réinitialisez votre mot de passe</Link></div>
				</header>			
				<form>
					<small>Tous les champs sont obligatoires.</small>
					<div>
						<label>Email</label>
						<input type="email" required />
					</div>
					<div>
						<label>Nouveau mot de passe</label>
						<input type="password" required />
					</div>
					<div>
						<label>Confirmation de votre mot de passe</label>
						<input type="password" required />
					</div>
					<button>Valider</button>		
				</form>
				<footer>
					<p>Vous vous souvenez de votre mot de passe? <Link className="link" to="/">Se connecter</Link></p>
					<p>Vous n'avez pas de compte? <Link className="link" to="/inscription">S'inscrire</Link></p>
				</footer>
			</TemplateSecurity>
		)
}

export default ResetPassword;