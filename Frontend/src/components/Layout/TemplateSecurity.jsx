import "../../assets/scss/security.scss";
import logo from "../../assets/images/dalena.png"

const TemplateSecurity = ({children}) => {
	return (
		<div id="template-security">


			<section id="securityForm">
				<header>
				<div className="logoTitle"><img src={logo} /></div>
				</header>				
				<div>

					{children}
				</div>
			</section>

		</div>
		)
}

export default TemplateSecurity;