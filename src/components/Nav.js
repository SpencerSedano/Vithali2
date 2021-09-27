import React from "react";
import bg from "../img/logo.png";
import { Link } from "react-router-dom";
import Toggle from "./Toggle.js";

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
					<div className="dropdown">
						<button>Servicios</button>
						<li>
							<Link className="dropdown-link" to="/servicios/presencial">
								Consulta Presencial
							</Link>
						</li>
						<li>
							<Link className="dropdown-link" to="/servicios/online">
								Consulta Online
							</Link>
						</li>
						<li>
							<Link className="dropdown-link" to="/servicios/empresa">
								Consulta Nutrición para Empresas
							</Link>
						</li>
					</div>
					{/* <div className="dropdown">
						<button>Servicios</button>
						<div>
							<Link className="dropdown-link" to="/servicios/presencial">
								Consulta Presencial
							</Link>

							<Link className="dropdown-link" to="/servicios/online">
								Consulta Online
							</Link>

							<Link className="dropdown-link" to="/servicios/empresa">
								Consulta Nutrición para Empresas
							</Link>
						</div>
					</div> */}

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
