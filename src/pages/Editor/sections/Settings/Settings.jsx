import React, { useContext } from "react";
import DownloadFileModal from "../../components/DownloadFileModal/DownloadFileModal";
import { EditContext } from "../../containers/editContext";
import styles from "./settings.module.scss";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import NumberSlider from "../../components/Slider/NumberSlider";
import { Button } from "reactstrap";
import { Divider } from "@material-ui/core";

// importing icons
import FontSize from "../../../../assets/images/settingsIcons/font-size.jpg";
import WidthAdjust from "../../../../assets/images/settingsIcons//width.png";
import xAxis from "../../../../assets/images/settingsIcons/x-axis.png";
import yAxis from "../../../../assets/images/settingsIcons/y-axis.png";
import LineSpacing from "../../../../assets/images/settingsIcons/line-spacing.png";
import LetterSpacing from "../../../../assets/images/settingsIcons/letter-space.png";

const Settings = () => {
	const editContext = useContext(EditContext);
	const [modal, setModal] = React.useState(false);
	// Dialogue open
	const handleopenModal = () => {
		setModal(true);
	};
	return (
		<div className={styles.controlPanel}>
			<div className={styles.controls}>
				<div className={styles.group1}>
					<Dropdown
						name="Change Color"
						active={editContext.bodyValues.bodyColor}
						type="color"
						items={[
							"black",
							"red",
							"orange",
							"green",
							"blue",
							"dodgerblue",
							"deeppink",
							"darkviolet",
						]}
					/>
					<Divider orientation="vertical" flexItem />
					<Dropdown
						name="Change Style"
						type="font"
						items={[
							"HomemadeApple",
							"Caveat",
							"CedarvilleCursive",
							"Dawning",
							"IndieFlower",
							"NothingYouCouldDo",
							"Liu",
							"LeagueScript",
							"Enola",
							"RayFont",
							"RGhandwritten",
							"Moody",
							"Norm",
						]}
						active={editContext.bodyValues.bodyFont}
					/>
					<Divider orientation="vertical" flexItem />
					<Dropdown
						name="Change Font Weight"
						type="font-weight"
						items={["normal", "bold"]}
						active={editContext.bodyValues.bodyFontWeight}
					/>
					<Divider orientation="vertical" flexItem />
					<Dropdown
						name="Change Sheet"
						type="page"
						active={editContext.pageSrc}
						items={["Ruled1", "Ruled2", "OnlyMargin", "Blank1", "Blank2"]}
					/>

					<Divider orientation="vertical" flexItem />

					<label className={styles.downloadBtn} htmlFor="import">
						Import File
					</label>
					<input
						id="import"
						style={{ display: "none" }}
						type="file"
						onChange={editContext.importTxt}
					></input>
					<Divider orientation="vertical" flexItem />
					{/* Download functionality */}
					<Button
						color="none"
						onClick={handleopenModal}
						className={styles.download}
					>
						Download File
					</Button>
					<Divider orientation="vertical" flexItem />
				</div>
				<div className={styles.group1}>
					<NumberSlider
						label={"Adjust x-axis"}
						imgSrc={xAxis}
						editContext={editContext}
						name="bodyLeft"
						min="0"
						max="200"
						step={1}
						initialValue={0}
					/>

					<Divider orientation="vertical" flexItem />

					<NumberSlider
						label={"Adjust y-axis"}
						imgSrc={yAxis}
						editContext={editContext}
						name="bodyTop"
						min="0"
						max="100"
						step={1}
						initialValue={5}
					/>

					<Divider orientation="vertical" flexItem />

					<NumberSlider
						label={"Width"}
						imgSrc={WidthAdjust}
						editContext={editContext}
						name="bodyWidth"
						min="20"
						max="70"
						step={1}
						initialValue={65}
					/>

					<Divider orientation="vertical" flexItem />

					<NumberSlider
						label={"Letter Spacing"}
						imgSrc={LetterSpacing}
						editContext={editContext}
						name="bodyLetterSpace"
						min="0"
						max="10"
						step={0.5}
						initialValue={0}
					/>

					<Divider orientation="vertical" flexItem />

					<NumberSlider
						label={"Font size"}
						imgSrc={FontSize}
						editContext={editContext}
						name="bodySize"
						min="5"
						max="50"
						step={1}
						initialValue={16}
					/>

					<Divider orientation="vertical" flexItem />

					<NumberSlider
						label={"Line-spacing"}
						imgSrc={LineSpacing}
						editContext={editContext}
						name="bodyLine"
						min="1"
						max="5"
						step={0.1}
						initialValue={1}
					/>
				</div>
			</div>
			<DownloadFileModal modal={modal} setModal={setModal} />
		</div>
	);
};

export default Settings;
