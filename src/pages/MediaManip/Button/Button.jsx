import React from "react";
import styles from "./button.module.scss";

function Button({ value, type, disabled, onClick }) {
	return (
		<button className={`${styles.btn} ${styles[type]}`} disabled={disabled} onClick={onClick}>
			{value}
		</button>
	);
}

export default Button;
