import React from "react";
import Slider from "../components/Slider/Slider.js";
import Section from "../components/Section.js";
import Price from "../components/Price.js";
import Footer from "../components/Footer.js";
//Frame Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const Home = () => {
	return (
		<div>
			<motion.div
				exit="exit"
				variants={pageAnimation}
				initial="hidden"
				animate="show"
			>
				<Slider />
				<Section />
				<Price />
				<Footer />
			</motion.div>
		</div>
	);
};

export default Home;
