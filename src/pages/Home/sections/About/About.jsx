import React from "react";
import styles from "./about.module.scss";
import step1 from "./../../../../assets/images/home-about/step1.svg";
import step2 from "./../../../../assets/images/home-about/step2.svg";
import step3 from "./../../../../assets/images/home-about/step3.svg";
import openSource from "./../../../../assets/images/home-about/open-source.svg";

function Step(props) {
	return (
		<div className={`${styles.step} ${props.reverse && styles.step_reverse}`}>
			<div className={styles.illustration}>
				<img className={styles.image} src={props.img} alt="Page" />
			</div>
			<div className={styles.step_text}>
				<div className={styles.step_title}>{props.title}</div>
				<div className={styles.step_content}>{props.content}</div>
			</div>
		</div>
	);
}

function About() {
	return (
		<div className={styles.About} id="home_about">
			<div className={styles.title}>What are we about?</div>
			<div className={styles.line}>
				Are you a{" "}
				<b>
					<i>student</i>
				</b>{" "}
				who is tired of{" "}
				<b>
					<i>
						writing assignments on paper, drawing sketches by hand, scanning each
						page, converting it all to a PDF
					</i>
				</b>
				, and then finally submitting?
			</div>
			<div className={styles.line}>
				Does it seem{" "}
				<b>
					<i>too much of a hassle</i>
				</b>{" "}
				in this age of online education?
			</div>
			<div className={styles.line}>
				If your answer is{" "}
				<b>
					<i>yes</i>
				</b>
				, then you've come to the{" "}
				<b>
					<i>right place!</i>
				</b>
			</div>
			<div className={styles.line}>
				<b>
					<i>Doc2Pen</i>
				</b>{" "}
				is the best online platform for getting all your{" "}
				<b>
					<i>"handmade" assignments ready for submission digitally</i>
				</b>
				.
			</div>

			<div className={styles.steps}>
				<Step
					img={step1}
					title="Step 1 : Type"
					content="Use our highly customisable Editor page to type in text and get a handwritten document!"
					reverse={false}
				/>
				<Step
					img={step2}
					title="Step 2 : Draw"
					content="Use the Sketch page to digitally draw in a handmade style!"
					reverse={true}
				/>
				<Step
					img={step3}
					title="Step 3 : Format"
					content="And in the end, use the Media Manip page to convert your assignment into the appropriate format for submission!"
					reverse={false}
				/>
			</div>
			<img src={openSource} alt="Open Source" style={{ width: "55vw" }} />
			<div className={styles.open_source}>
				<div>
					As Doc2Pen helps save a lot of time, you can now invest your valuable time
					towards learning some practical stuff.
				</div>
				<br />
				<div>
					And So, here comes the Good News! Doc2pen is an Open Source Project and we
					welcome your contributions 🙂.
				</div>
			</div>
		</div>
	);
}

export default About;
