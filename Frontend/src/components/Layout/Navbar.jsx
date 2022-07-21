import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
	return (
			<div className="navbarLink">
				<Link className="navlink" to="/" className="link-navbar">Home</Link>
				<Link className="navlink" to="/skus" className="link-navbar">Skus</Link>
				<Link className="navlink" to="/referencement" className="link-navbar">Referencement</Link>

			</div>
		);
}

export default Navbar