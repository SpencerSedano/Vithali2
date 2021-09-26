import React from "react";
import bg from "../img/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="container">
			<nav>
				<Link to="/">
					<img src={bg} alt="Vithali" />
				</Link>
				<ul>
					<li>
						<Link to="/" className="nav-items">
							Inicio
						</Link>
					</li>
					<li>
						<Link to="/nosotros" className="nav-items">
							Nosotros
						</Link>
					</li>
					<li>
						<Link to="/servicios" className="nav-items">
							Servicios
						</Link>
					</li>
					<li>
						<Link to="/contacto" className="nav-items">
							Contacto
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
