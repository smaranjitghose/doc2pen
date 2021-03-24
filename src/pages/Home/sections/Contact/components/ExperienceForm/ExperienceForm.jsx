import React, { useState } from "react";
import EmojiRating from "./../EmojiRating/EmojiRating";

import styles from "./experience-form.module.scss";
import Joi from "joi-browser";

const ExperienceForm = () => {
	//setting up form-data
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	//setting form-errors
	const [formerrors, setFormErrors] = useState({});
	const [submited, setSubmited] = useState(false);

	//schema for validations
	const schema = {
		name: Joi.string().trim().required().min(3).label("Name"),
		email: Joi.string().trim().email().required().label("Email"),
		message: Joi.string().trim().required().min(8).label("Message"),
	};
	const validate = () => {
		const result = Joi.validate(formData, schema, { abortEarly: false });
		if (!result.error) return null;
		const errors = {};
		for (let item of result.error.details) {
			errors[item.path[0]] = item.message;
		}
		return errors;
	};
	const validateProperty = (input) => {
		const { name, value } = input;
		const obj = { [name]: value };
		const obj_schema = { [name]: schema[name] };
		const result = Joi.validate(obj, obj_schema);
		return result.error ? result.error.details[0].message : null;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validate();
		Object.keys(formData).map((key) => {
			if (formData[key] === "" || formData[key] === null) {
				errors[key] = `${key} is required`;
			}
		});
		if (errors !== 0) {
			setFormErrors(errors);
		}
		if (errors) {
			setSubmited(false);
		} else {
			setSubmited(true);
			setFormData("");
		}
	};
	const handleChange = (e) => {
		const { currentTarget: input } = e;
		const errors = { ...formerrors };
		const errorMessage = validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...formData };
		data[input.name] = input.value;
		setFormData({ ...data, [input.name]: input.value });
		setFormErrors(errors);
	};

	return (
		<div id="info" className={styles.info}>
			{submited ? (
				<React.Fragment>
					<div className={styles["card"]}>
						<div className={styles["goodbye-card"]}>
							<h1 className={styles["card-heading"]}>
								Hey There !
							</h1>
							<div className={styles["inside-card"]}>
								<p style={{ textAlign: "center" }}>
									We have heard you! 🤩 <br />
									We will get back to you if required!
								</p>
							</div>
						</div>
					</div>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className={styles.general_info}>
						<h2
							style={{
								textTransform: "capitalize",
								fontSize: "1.6rem",
							}}
						>
							Contact us your query or <br /> just send a hello.
						</h2>
						<br />
						<div className={styles.contact_form}>
							<form
								onSubmit={handleSubmit}
								className={styles.contact_form_container}
							>
								<div className={styles.circle}>
									<div className={styles.circle2}></div>
								</div>
								{/*modified the fields of the experience form*/}

								<div className={styles.fieldsWrap}>
									<div className={styles.inputDiv}>
										<input
											autoFocus="on"
											autoComplete="off"
											name="name"
											type="text"
											placeholder="Your Name"
											onChange={handleChange}
										/>
										{formerrors["name"] && (
											<div
												className={styles["validation"]}
											>
												* {formerrors["name"]}
											</div>
										)}
										<input
											name="email"
											autoComplete="off"
											type="text"
											placeholder="Your Email"
											onChange={handleChange}
										/>
										{formerrors["email"] && (
											<div
												className={styles["validation"]}
											>
												* {formerrors["email"]}
											</div>
										)}
										{/* <input type="tel" placeholder="Phone (optional)" />*/}
									</div>
									<div className={styles.experience}>
										<span>Rate your experience:</span>
										<EmojiRating />
									</div>
									<textarea
										name="message"
										autoComplete="off"
										rows="4"
										cols="20"
										placeholder="Your Message"
										onChange={handleChange}
									></textarea>
									{formerrors["message"] && (
										<div className={styles["validation"]}>
											* {formerrors["message"]}
										</div>
									)}
									<button
										className={styles.submit}
										onClick={handleSubmit}
										type="submit"
									>
										<span
											className={styles.hoverEffect}
										></span>
										<span className={styles.buttonText}>
											Submit
										</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default ExperienceForm;
