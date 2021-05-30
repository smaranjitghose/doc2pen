import React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Progress = ({ progress }) => {
	const options = {
		strokeWidth: 25,
		background: "#ABB8C3",
		stroke: "#4e89ae",
		showPercentValue: true,
	};

	return <SemiCircleProgressBar percentage={progress} {...options} />;
};

export default Progress;
