import React from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import styles from "./footer.module.scss";
import UseAnimations from "react-useanimations";
import JSONAnimation from "../../assets/githublogo/github.json";
import github from "react-useanimations/lib/github";

export default function Footer(props) {
	return (
		<div className={`${styles.footerDiv}`}>
			<div className={styles.topShape}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
					<path
						style={{ fill: props.fill ? props.fill : "white" }}
						className={styles.svgPath}
						d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
					></path>
				</svg>
			</div>
			<div className={styles.tint}></div>
			<div className={styles.githubLogoDiv}>
				<a href="https://github.com/smaranjitghose/doc2pen">
					<UseAnimations
						className={styles.githubLogo}
						animation={github}
						animationkey={JSONAnimation}
						size={50}
						loop={true}
						strokeColor="#ffffff"
						speed={1}
					/>
				</a>
			</div>
			<div>
				<Fade>
					<p className={styles.footerText}>{emoji("Made with ❤️ in India for the students of the world.")}</p>
				</Fade>
			</div>
		</div>
	);
}
