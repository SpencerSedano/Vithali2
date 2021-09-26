import React from "react";
//Frame Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//Images
import Office from "../img/office.jpg";
import Eva from "../img/eva.jpg";
import Welcome from "../img/welcome.jpg";
const Nosotros = () => {
	return (
		<div className="nosotros">
			<motion.div
				exit="exit"
				variants={pageAnimation}
				initial="hidden"
				animate="show"
			>
				<div className="office-image-container">
					<img className="office-image" src={Office} alt="Office" />
				</div>
				<div className="images-container">
					<div className="eva-container">
						<img src={Eva} alt="Office" />
						<p>
							Atendidos por nutricionistas especializadas en salud y deporte,
							nuestro centro es un espacio para lograr objetivos como la pérdida
							de peso saludable, aumento de masa muscular, tratamientos
							nutricionales de enfermedades y nutrición para mantener un sistema
							inmunológico saludable.
						</p>
					</div>
					<div className="welcome-container">
						<img src={Welcome} alt="Office" />
						<div>
							<h2>! Queremos que lo logres !</h2>
							<p>
								Por eso te ayudamos con menús fáciles rápidos y deliciosos,
								asesoría de actividad física según tu edad y objetivo
								nutricional Además de la conexión constante online con nuestros
								pacientes para que puedas resolver dudas en cualquier momento
								del día.
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Nosotros;
