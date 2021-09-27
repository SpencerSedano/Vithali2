import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contacto = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_hprqzfk",
				"template_nbxhnoq",
				form.current,
				"user_lz5I0SUPIdMG45UOZxhNy"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	return (
		<div className="contact-container">
			<h1>Contáctanos</h1>
			<div className="form-container">
				<form ref={form} onSubmit={sendEmail}>
					<input
						className="input-style name"
						type="text"
						name="name"
						placeholder="Name"
					/>
					<input
						className="input-style email"
						type="email"
						name="email"
						placeholder="Email"
					/>
					<input
						className="input-style subject"
						type="text"
						name="subject"
						placeholder="Subject"
					/>
					<textarea
						className="textarea-style textarea"
						name="message"
						placeholder="Message"
					/>
					<input classname="submit-style" type="submit" value="Enviar" />
				</form>
			</div>
		</div>
	);
};

export default Contacto;
