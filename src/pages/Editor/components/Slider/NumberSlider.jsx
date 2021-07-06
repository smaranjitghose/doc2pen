import styles from "./slider.module.scss";
import React, { useState } from "react";
import { Tooltip, Avatar } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core";

const CustomTooltip = withStyles({
	tooltip: {
		color: "#fcfcfc",
		fontSize: "15px",
		fontWeight: "600",
		backgroundColor: "#103f5f",
	},
})(Tooltip);

const useStyles = makeStyles({
	lineSpaceStyle: {
		padding: "6px",
	},
});

const NumberSliders = props => {
	const [Value, setValue] = useState(props.initialValue);
	const [isMsgDisplayed, setIsMsgDisplayed] = useState(false);
	const [options, setOptions] = useState(false);
	const classes = useStyles();

	function setValuePromise(newValue) {
		return new Promise(resolve => {
			setValue(newValue);
			resolve(true);
		});
	}

	const handleClickValueChange = async event => {
		const isDecrement = event.target.classList.contains("decrement");
		const inputElement = isDecrement
			? event.target.nextSibling
			: event.target.previousSibling;

		const min = inputElement.min;
		const max = inputElement.max;
		let value = inputElement.value;

		if (value === "") {
			inputElement.value = min;
		}

		if (isDecrement && Number(value) > Number(min)) {
			await setValuePromise(Number(value) - props.step).then(() => {
				props.editContext.onElementValueChange(inputElement);
			});
		} else if (!isDecrement && Number(value) < Number(max)) {
			await setValuePromise(Number(value) + props.step).then(() => {
				props.editContext.onElementValueChange(inputElement);
			});
		} else {
			setIsMsgDisplayed(true);
			setTimeout(() => setIsMsgDisplayed(false), 2000);
		}
	};

	const handleManualValueChange = event => {
		const inputElement = event.target;
		const min = inputElement.min;
		const max = inputElement.max;
		let value = inputElement.value;
		if (Number(value) >= Number(min) && Number(value) <= Number(max)) {
			setValue(Number(value));
			props.editContext.onValueChange(event);
		} else {
			setIsMsgDisplayed(true);
			setTimeout(() => setIsMsgDisplayed(false), 2000);
		}
	};

	return (
		<div className={styles.controlContainer}>
			<CustomTooltip placement={"top"} title={props.label}>
				<div onClick={() => setOptions(!options)}>
					{props.label === "Line-spacing" ? (
						<Avatar
							alt={props.name}
							className={classes.lineSpaceStyle}
							src={props.imgSrc}
							variant={"square"}
						/>
					) : (
						<Avatar alt={props.name} src={props.imgSrc} variant={"square"} />
					)}
				</div>
			</CustomTooltip>
			{options ? (
				<div className={styles.controlWrap}>
					<button
						onClick={handleClickValueChange}
						className={`${styles.decrement} decrement`}
					>
						-
					</button>

					<input
						type="number"
						name={props.name}
						min={props.min}
						max={props.max}
						value={Value}
						className={styles.formControl}
						onChange={handleManualValueChange}
					/>

					<button
						onClick={handleClickValueChange}
						className={`${styles.increment} increment`}
					>
						+
					</button>

					<div
						className={styles.message}
						style={{ display: isMsgDisplayed ? "block" : "none" }}
					>
						{`Min value: ${props.min}, max value: ${props.max}`}
					</div>
				</div>
			) : null}
		</div>
	);
};

export default NumberSliders;
