import React from "react";
import styles from "./support-us.module.scss";

function SupportUs() {
	return (
		<div className={styles.SupportUs} id="home_support">
			<div style={{ marginTop: "30px" }}>
				<p className={styles.titleMain}>Support us</p>
				<div className={styles.patreonAndCoffe}>
					<a href="https://www.patreon.com/smaranjitghose" target="_blanck">
						<div className={styles.link}>
							<img
								src="https://github.githubassets.com/images/modules/site/icons/funding_platforms/patreon.svg"
								alt="Patreon"
								width="40px"
							/>
						</div>
					</a>
					<div className={styles.link}>
						<a href="https://www.buymeacoffee.com/anushbhatia" target="_blanck">
							<div className={styles.link}>
								<img
									src="https://bmc-dev.s3.us-east-2.amazonaws.com/assets/icons/bmc_icon_black.png"
									alt="BuyACoffee"
									width="25px"
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SupportUs;
