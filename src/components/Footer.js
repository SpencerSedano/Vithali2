import React from "react";
import Logo from "../img/logo.png";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
function Footer() {
	return (
		<footer>
			<div className="lists-links">
				<ul>
					<h3>Servicios</h3>
					<li>Consulta Online</li>
					<li>Consulta Presencial</li>
					<li>Nutrición para empresas</li>
				</ul>
				<ul>
					<h3>Tienda</h3>
					<li>Balanzas</li>
					<li>Mancuernas</li>
				</ul>
			</div>
			<div className="same-row">
				<div className="copyright">
					<img src={Logo} alt="Vithali" />
					<p>COPYRIGHT 2021 VITHALI NUTRICIÓN PERÚ S.A.C.</p>
				</div>
				<div className="social-media">
					<img src={Facebook} alt="Facebook" />
					<img src={Instagram} alt="Instagram" />
					<img src={Twitter} alt="Twitter" />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
