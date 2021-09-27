import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Price() {
	return (
		<div className="container-price">
			<div className="price">
				<div className="consulta">
					<h3>Consulta</h3>
					<h2>S/120</h2>
					<ul>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> 1 consulta
							presencial
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> 1 medición en
							una balanza profesional, peso, % de grasa, grasa visceral, % de
							músculo.
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Plan de
							alimentación personalizado de 7 días
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Educación
							nutricional
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Obsequio para
							medir porciones en casa
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Asesoría para
							dudas o consultas por Whatsapp SOLO POR 7 DIAS
						</li>
					</ul>
					<div className="shop-now cart-consulta">
						<FontAwesomeIcon className="cart" icon={faShoppingCart} />
					</div>
				</div>
				<div className="plan1">
					<h3>PLAN 1 MES</h3>
					<h2>S/280</h2>
					<ul>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> 3 consultas
							presenciales por durante el mes (inicio / quincena / fin de mes)
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> 3 mediciones
							en una balanza profesional, peso, % de grasa, grasa visceral, % de
							músculo.
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> 2 planes de
							alimentación personalizados, en la consulta 1 y 2.
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Educación
							nutricional.
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Obsequio para
							medir porciones en casa.
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Asesoría para
							dudas o consultas por Whatsapp POR TODO EL MES
						</li>
					</ul>
					<div className="shop-now cart-plan1">
						<FontAwesomeIcon className="cart" icon={faShoppingCart} />
					</div>
				</div>
				<div className="plan2">
					<h3>PLAN 2 MESES</h3>
					<h2>S/480</h2>
					<ul>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> 6 consultas
							durante los 2 meses (sesiones cada quince dias).
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> 6 mediciones
							en una balanza profesional, peso, % de grasa, grasa visceral, % de
							músculo.
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> 5 planes de
							alimentación personalizados, en la consulta 1,2,3,4 Y 5.
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Educación
							nutricional.
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Obsequio para
							medir porciones en casa
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Asesoría para
							dudas o consultas por Whatsapp POR TODOS LOS DOS MESES.
						</li>
						{/* <li>
							<FontAwesomeIcon className="check" icon={faCheck} /> Seguimiento y
							control del paciente.
						</li> */}
					</ul>
					<div className="shop-now cart-plan2">
						<FontAwesomeIcon className="cart" icon={faShoppingCart} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Price;
