import React from "react";
import styles from "./button.module.scss";
import { Button as MuiButton } from "@material-ui/core";

function Button({ value, disabled, onClick }) {
	return (
		<div className={styles.btnWrap}>
			<MuiButton
				variant="contained"
				color="primary"
				component="span"
				onClick={onClick}
				disabled={disabled}
			>
				{value}
			</MuiButton>
		</div>
	);
}

export default Button;
