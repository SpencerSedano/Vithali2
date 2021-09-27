import React from "react";
import Welcome from "../img/welcome.jpg";
import { Link } from "react-router-dom";
function Section() {
	return (
		<div className="section">
			<div className="welcome-text">
				<h1>!Bienvenido!</h1>
				<p>
					En Vithali, trabajamos día a día para brindarte salud y bienestar a
					través de la nutrición. Por ello, aquí encontrarás un equipo humano y
					profesional de excelencia que te acompañará en tu proceso personal, en
					cualquier etapa de tu vida. Todas las nutricionistas son profesionales
					y altamente capacitadas para atender a nuestros pacientes
				</p>
				<h2>¡Te invitamos a conocernos!</h2>
				<div className="button-container">
					<Link className="planes-link" to="/">
						<h2>Puedes conocer nuestros planes aquí</h2>
					</Link>
				</div>
			</div>
			<div className="welcome-image">
				<img src={Welcome} alt="welcome" />
			</div>
		</div>
	);
}

export default Section;
