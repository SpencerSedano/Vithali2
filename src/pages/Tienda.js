import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../img/logo.png";
// import "../styles/bootstrap.min.css";

const Tienda = () => {
	return (
		<div>
			{/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Container>
					<Navbar.Brand href="#home">
						<img alt="Vithali" src={Logo} />
					</Navbar.Brand>

					<Nav className="me-auto">
						<Link to="/">Home</Link>
					</Nav>
					<Nav>
						<Nav.Link href="">Cart</Nav.Link>
						<Nav.Link href="">Log In</Nav.Link>
					</Nav>
				</Container>
			</Navbar> */}
			<h1>Tienda Vithali</h1>
		</div>
	);
};

export default Tienda;
