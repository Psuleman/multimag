import { Link } from "react-router-dom";
import "./Navbar.scss"
import dalena from './dalena.png'

const Navbar = () => {
	return (
			<div className="navbarLink">
				<div>
					<span>EXPORT MULTIMAG</span>
					<Link className="navlink link-navbar" to="/">Home</Link>
					<Link className="navlink link-navbar" to="/skus">PIM</Link>
					<Link className="navlink link-navbar" to="/liste-produit">Les produits à référencer</Link>					
					<Link className="navlink link-navbar" to="/produit-en-attente">Les produits en attente pour modification</Link>					
					<Link className="navlink link-navbar" to="/export-file">Exporter les produits</Link>					
				</div>
				<div>
					<img src={dalena} alt="Dalena" className="logo" />
				</div>			
			</div>
		);
}

export default Navbar