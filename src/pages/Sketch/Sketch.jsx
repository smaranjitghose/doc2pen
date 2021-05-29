import React from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";
import Canvas from "./components/Canvas";
import styles from "./sketch.module.scss";

function Sketch() {
	return (
		<section className={styles.Sketch}>
			<MetaComponent
				title={metaData.sketch.title}
				description={metaData.sketch.description}
				keywords={metaData.sketch.keywords}
			/>
			<Canvas />
		</section>
	);
}

export default Sketch;
