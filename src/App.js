import React from "react";
import "./styles/app.css";
import Nav from "./components/Nav.js";
import Home from "./pages/Home.js";
import Servicios from "./pages/Servicios.js";
import Nosotros from "./pages/Nosotros.js";
import Contacto from "./pages/Contacto.js";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";
function App() {
	const location = useLocation();
	return (
		<div className="App">
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/nosotros">
						<Nosotros />
					</Route>
					<Route path="/servicios">
						<Servicios />
					</Route>
					<Route path="/contacto">
						<Contacto />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
