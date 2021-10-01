import React, { useEffect, useState } from "react";
//Footer Component
import Footer from "../components/Footer.js";
//Frame Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//Images
import Office from "../img/office.jpg";
import Eva from "../img/eva.jpg";
import Welcome from "../img/welcome.jpg";
import EquipoEva from "../img/equipoEva.jpeg";
import EquipoCinthia from "../img/equipoCinthia.jpg";
import Healthy from "../img/healthy.jpg";
import Centro1 from "../img/centro1.jpg";
import Centro2 from "../img/centro2.jpg";
import Centro3 from "../img/centro3.jpg";
import Centro4 from "../img/centro4.jpg";
import Empresa1 from "../img/empresa1.png";
import Empresa2 from "../img/empresa2.png";
import Empresa3 from "../img/empresa3.png";
import Empresa4 from "../img/empresa4.png";
import Empresa5 from "../img/empresa5.png";
import Empresa6 from "../img/empresa6.png";
import MapaPeruano from "../img/mapaperuano.jpg";
const Nosotros = () => {
	const [counter, setCounter] = useState(0);
	const [consultas, setConsultas] = useState(0);
	const [resultados, setResultados] = useState(0);
	// Counter Effect 0 to 6000
	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter + 1);
			clearInterval(interval);
		}, 5);
		if (counter === 6000) {
			clearInterval(interval);
		}
	}, [counter]);

	useEffect(() => {
		const interval = setInterval(() => {
			setConsultas(consultas + 1);
			clearInterval(interval);
		}, 20);
		if (consultas === 1000) {
			clearInterval(interval);
		}
	}, [consultas]);

	useEffect(() => {
		const interval = setInterval(() => {
			setResultados(resultados + 1);
			clearInterval(interval);
		}, 46);
		if (resultados === 99) {
			clearInterval(interval);
		}
	}, [resultados]);
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
				<h2 className="equipo-title">Equipo de Nutrición</h2>
				<div className="equipos-container">
					<div className="eva">
						<img src={EquipoEva} alt="Nutricionista Eva" />
						<h3>Eva Centeno</h3>
						<h4>Nutricionista deportiva</h4>
						<p>Ver perfil profesional</p>
					</div>
					<div className="cinthia">
						<img src={EquipoCinthia} alt="Nutricionista Cinthia" />
						<h3>Cinthia Villanueva</h3>
						<h4>Nutricionista Clínica</h4>
						<p>Ver perfil profesional</p>
					</div>
				</div>
				<div className="healthy-background">
					<img src={Healthy} alt="Comida saludable" />
					<div className="mision-vision-valores">
						<h2>MISIÓN</h2>
						<p>
							Brindar a los pacientes consultas de nutrición clínica y deportiva
							de manera integral para enseñarles a alimentarse de forma adecuada
							y lograr sus metas nutricionales con seguridad sin riesgos en la
							salud.
						</p>
						<h2>VISIÓN</h2>
						<p>
							Ser el primer lugar en Perú especializado en el tratamiento
							nutricional integral, la mejora de hábitos alimenticios y auto
							cuidado para que nuestros pacientes puedan conseguir resultados
							efectivos y duraderos, generando un verdadero impacto en la salud.
						</p>
						<h2>VALORES</h2>
						<p>
							• Profesionalismo • Calidez • Ética • Respeto • Experiencia •
							Credibilidad • Empatía • Honestidad
						</p>
					</div>
				</div>

				<h2 className="nuestro-centro-title">NUESTRO CENTRO</h2>
				<div className="nuestro-centro">
					<div className="centro-container">
						<img src={Centro1} alt="Oficina 1" />
					</div>
					<div className="centro-container">
						<img src={Centro2} alt="Oficina 2" />
					</div>
					<div className="centro-container">
						<img src={Centro3} alt="Oficina 3" />
					</div>
					<div className="centro-container">
						<img src={Centro4} alt="Oficina 4" />
					</div>
				</div>
				<h2 className="empresa-title">ELLOS CONFIAN EN NOSOTROS</h2>
				<div className="empresas-img-container">
					<div className="empresa1">
						<img src={Empresa1} alt="Empresa1" />
					</div>
					<div className="empresa2">
						<img src={Empresa2} alt="Empresa2" />
					</div>
					<div className="empresa3">
						<img src={Empresa3} alt="Empresa3" />
					</div>
					<div className="empresa4">
						<img src={Empresa4} alt="Empresa4" />
					</div>
					<div className="empresa5">
						<img src={Empresa5} alt="Empresa5" />
					</div>
					<div className="empresa6">
						<img src={Empresa6} alt="Empresa6" />
					</div>
				</div>
				<div className="empresa-resultados">
					<div className="consejos">
						<h2>+{counter}</h2>
						<p>Personas siguen nuestros consejos</p>
					</div>
					<div className="consultas-realizadas">
						<h2>{consultas}</h2>
						<p>Consultas nutricionales realizadas</p>
					</div>
					<div className="afirman-resultados">
						<h2>{resultados}%</h2>
						<p>Afirman tener resultados</p>
					</div>
				</div>
				<h2 className="alcance-nacional">ALCANCE NACIONAL</h2>
				<div className="estamos-aqui-container">
					<div className="estamos-aqui">
						<h2>Estamos aquí:</h2>
						<ul>
							<li>Loreto</li>
							<li>Piura</li>
							<li>Cajamarca</li>
							<li>La Libertad</li>
							<li>San Martín</li>
							<li>Huánuco</li>
							<li>Lima</li>
							<li>Junín</li>
							<li>Ucayali</li>
							<li>Ica</li>
							<li>Huancavelica</li>
							<li>Ayacucho</li>
							<li>Madre de Dios</li>
							<li>Cuzco</li>
							<li>Arequipa</li>
							<li>Moquegua</li>
							<li>Tacna</li>
						</ul>
					</div>
					<div className="mapa-peruano">
						<img src={MapaPeruano} alt="Mapa del Perú" />
					</div>
				</div>
				<Footer />
			</motion.div>
		</div>
	);
};

export default Nosotros;
