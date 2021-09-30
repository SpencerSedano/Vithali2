import React, { useState, useEffect } from "react";
import "../../styles/Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
function Slider() {
	const [slideIndex, setSlideIndex] = useState(1);
	// const [pauseIndex, setPauseIndex] = useState(1);

	const nextSlide = () => {
		if (slideIndex !== dataSlider.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === dataSlider.length) {
			setSlideIndex(1);
		}
	};

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(dataSlider.length);
		}
	};
	//Automatic slideshow, I tried all night 25/09/2021 trying to mouse enter and stop it and mouse leave but I couldn't do it
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	});

	const moveDot = (index) => {
		setSlideIndex(index);
	};

	return (
		<div className="container-slider">
			{dataSlider.map((obj, index) => {
				return (
					<div
						key={obj.id}
						className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
					>
						<img
							src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
							alt="fotos"
							// onMouseEnter={() => {
							// 	setPauseIndex((pauseIndex = index));
							// }}
						/>
					</div>
				);
			})}
			<BtnSlider moveSlide={nextSlide} direction={"next"} />
			<BtnSlider moveSlide={prevSlide} direction={"prev"} />

			<div className="container-dots">
				{Array.from({ length: 5 }).map((item, index) => (
					<div
						// Key Index helps that every image from the Slider has a unique way of identification
						key={index}
						onClick={() => moveDot(index + 1)}
						className={slideIndex === index + 1 ? "dot active" : "dot"}
					></div>
				))}
			</div>
		</div>
	);
}

export default Slider;
