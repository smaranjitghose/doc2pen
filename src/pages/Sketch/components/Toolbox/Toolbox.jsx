import React, { useState } from "react";
import styles from "./toolbox.module.scss";
import {
	AiOutlineLine,
	AiOutlineSmallDash,
	AiOutlineDash,
} from "react-icons/ai";
import {
	FaRegSquare,
	FaItalic,
	FaBold,
	FaPencilAlt,
	FaRegCircle,
	FaSlash,
	FaShapes,
} from "react-icons/fa";
import { GiTriangleTarget } from "react-icons/gi";
import { BiShapeTriangle } from "react-icons/bi";
import { BsFonts, BsArrowUpRight, BsDiamond } from "react-icons/bs";
import { RiFileSettingsLine } from "react-icons/ri";
import { ReactComponent as D2psIcon } from "./../../../../assets/images/sketch/d2ps.svg";
import { makeStyles } from "@material-ui/core/styles";
import {
	Tabs,
	Tab,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Divider,
	ClickAwayListener,
} from "@material-ui/core";
import {
	AccountTree,
	TextFields,
	Apps,
	Close,
	Delete,
	SaveAlt,
	PhotoLibrary,
	Save,
} from "@material-ui/icons";
import IconsLibrary from "./../IconLibrary/IconsLibrary";
import { ChromePicker } from "react-color";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: "flex",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		height: "100%",
		"& button": {
			minWidth: 50,
		},
	},
	tabPanelClose: {
		width: 0,
	},
	verticalTabPanel: {
		height: "100%",
		width: 234,
		overflow: "scroll",
		backgroundColor: "white",
		boxShadow: "0 0 3px 0px grey",
		"&::-webkit-scrollbar": {
			display: "none",
		},
	},
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	const classes = useStyles();
	return (
		<div
			role="tabpanel"
			style={{ width: value !== index && 0 }}
			id={`vertical-tabpanel-${index}`}
			className={classes.verticalTabPanel}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Typography component="div">{children}</Typography>}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

function VerticalTabs(props) {
	const {
		color,
		setColor,
		fillColor,
		setFillColor,
		fillOpacity,
		setFillOpacity,
		setBowing,
		setFillStyle,
		setFillWeight,
		setHachureAngle,
		setHachureGap,
		bowing,
		fillStyle,
		fillWeight,
		hachureAngle,
		hachureGap,
		background,
		setBackground,
		width,
		setWidth,
		stroke,
		setStroke,
		roughness,
		setRoughness,
		type,
		setType,
		fontSize,
		setFontSize,
		fontStyle,
		setFontStyle,
		fontFamily,
		setFontFamily,
		edge,
		setEdge,
		clear,
		download,
		initiateLoadSaved,
		loadLastState,
		saveInstance,
	} = props;
	const [displayColorPicker, setDisplayColorPicker] = useState(false);
	const ColorPicker = props => {
		const { width, name, color, onColorChange } = props;
		return (
			<div className={styles.root}>
				<div className={styles.swatch}>
					<div
						className={styles.colorIndicator}
						style={{
							backgroundColor: props.color || "#fff",
						}}
						onMouseDown={() => {
							setDisplayColorPicker(true);
						}}
					/>
				</div>
				{displayColorPicker ? (
					<ClickAwayListener
						onClickAway={() => {
							setDisplayColorPicker(false);
						}}
					>
						<div className={styles.popover}>
							<ChromePicker
								width={width}
								name={name}
								color={color}
								onChangeComplete={color => onColorChange(color.hex)}
							/>
						</div>
					</ClickAwayListener>
				) : null}
			</div>
		);
	};

	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function Feature({ title, children, classname }) {
		return (
			<ListItem>
				<div className={styles.feature + " " + classname}>
					<ListItemText className={styles.title}>{title}</ListItemText>
					<div className={styles.body}>{children}</div>
				</div>
			</ListItem>
		);
	}

	function Shape({ type_, id, label, children }) {
		return (
			<label style={{ marginTop: "3px" }} htmlFor={id} title={label}>
				<div
					className={`${styles.feature} ${
						type === type_ && styles.active_feature
					}`}
					onClick={() => setType(type_)}
					id={id}
				>
					{children}
				</div>
			</label>
		);
	}

	return (
		<div className={styles.toolbox_root}>
			<div className={styles.canvas_toolbox}>
				<div className={classes.root}>
					<Tabs
						orientation="vertical"
						variant="scrollable"
						value={value}
						onChange={handleChange}
						className={classes.tabs}
					>
						<Tab
							onClick={() => setType("pen")}
							label={
								<label title="Project">
									<AccountTree />
								</label>
							}
							{...a11yProps(0)}
						/>
						<Tab
							onClick={() => setType("pen")}
							label={
								<label title="Canvas Setup">
									<RiFileSettingsLine size={25} />
								</label>
							}
							{...a11yProps(1)}
						/>
						<Tab
							onClick={() => setType("pen")}
							label={
								<label title="Shapes & Tools">
									<FaShapes size={25} />
								</label>
							}
							{...a11yProps(2)}
						/>
						<Tab
							onClick={() => setType("text")}
							label={
								<label title="Text">
									<TextFields />
								</label>
							}
							{...a11yProps(3)}
						/>
						<Tab
							onClick={() => {
								setType("pen");
							}}
							label={
								<label title="Icon Library">
									<Apps />
								</label>
							}
							{...a11yProps(4)}
						/>
						<Tab
							onClick={() => setType("pen")}
							label={
								<label title="Minimize Sidebar">
									<Close />
								</label>
							}
							{...a11yProps(5)}
						/>
					</Tabs>
					<TabPanel value={value} index={0}>
						<List component="div">
							<ListItem button onClick={clear}>
								<ListItemIcon>
									<Delete />
								</ListItemIcon>
								<ListItemText primary="Clear Canvas" />
							</ListItem>
							<ListItem button onClick={download}>
								<ListItemIcon>
									<SaveAlt />
								</ListItemIcon>
								<ListItemText primary="Download PNG" />
							</ListItem>
							<ListItem
								button
								onClick={() => initiateLoadSaved("img-file-selector")}
							>
								<ListItemIcon>
									<PhotoLibrary />
									<input
										type="file"
										id="img-file-selector"
										style={{ display: "none" }}
										accept="image/*"
										onChange={event => loadLastState(event)}
									/>
								</ListItemIcon>
								<ListItemText primary="Place Image" />
							</ListItem>
							<ListItem
								button
								onClick={() => saveInstance("savedProgress.d2ps")}
							>
								<ListItemIcon>
									<Save />
								</ListItemIcon>
								<ListItemText primary="Save & download Progress" />
							</ListItem>
							<ListItem
								button
								onClick={() => initiateLoadSaved("file-selector")}
							>
								<ListItemIcon style={{ width: 0 }}>
									<D2psIcon
										style={{
											transform: "scale(0.6) translateX(-30px)",
										}}
									/>
									<input
										type="file"
										id="file-selector"
										style={{ display: "none" }}
										accept=".d2ps"
										onChange={event => loadLastState(event)}
									/>
								</ListItemIcon>
								<ListItemText primary="Load Previous Progress" />
							</ListItem>
						</List>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<List component="div">
							<Feature title="Canvas Setup">
								<div className={styles.colorPicker}>
									<ColorPicker
										width={200}
										name="canvas_bg_color"
										color={background}
										onColorChange={setBackground}
									/>
									<input
										className={styles.hexInput}
										placeholder="#"
										type="text"
										value={background}
										onInput={e => setBackground(e.target.value)}
									/>
								</div>
							</Feature>
						</List>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<List component="div">
							<Feature title="Shapes and Tools">
								<Shape type_="pen" id="sketch-shapes-pen" label="Pen">
									<FaPencilAlt size={12} />
								</Shape>
								<Shape type_="line" id="sketch-shapes-line" label="Line">
									<FaSlash size={10} />
								</Shape>
								<Shape type_="square" id="sketch-shapes-square" label="Square">
									<FaRegSquare size={10} />
								</Shape>
								<Shape type_="circle" id="sketch-shapes-circle" label="Circle">
									<FaRegCircle size={10} />
								</Shape>
								<Shape
									type_="triangle"
									id="sketch-shapes-triangle"
									label="Triangle"
								>
									<GiTriangleTarget size={12} />
								</Shape>
								<Shape type_="arrow" id="sketch-shapes-arrow" label="Arrow">
									<BsArrowUpRight size={12} />
								</Shape>
								<Shape
									type_="diamond"
									id="sketch-shapes-diamond"
									label="Diamond"
								>
									<BsDiamond size={10} />
								</Shape>
								<Shape
									type_="biShapeTriangle"
									id="sketch-shapes-biShapeTriangle"
									label="Bi Shape Triangle"
								>
									<BiShapeTriangle size={12} />
								</Shape>
							</Feature>
							<Divider />
							{!["text", "pen", "line"].includes(type) && (
								<>
									<Feature title="Fill Style">
										<select
											name="shape_fill_style"
											value={fillStyle}
											onChange={e => setFillStyle(e.target.value)}
										>
											<option value="none">none</option>
											<option value="solid">solid</option>
											<option value="hachure">hachure</option>
											<option value="zigzag">zigzag</option>
											<option value="cross-hatch">cross-hatch</option>
											<option value="dots">dots</option>
											<option value="dashed">dashed</option>
											<option value="zigzag-line">zigzag-line</option>
										</select>
									</Feature>
									{fillStyle !== "none" && (
										<>
											<Feature title="Fill Color">
												<div className={styles.colorPicker}>
													<ColorPicker
														width={200}
														name="canvas_pen_color"
														color={fillColor}
														onColorChange={setFillColor}
													/>
													<input
														className={styles.hexInput}
														placeholder="#"
														type="text"
														value={fillColor}
														onInput={e => setFillColor(e.target.value)}
													/>
												</div>
											</Feature>
											<Feature
												classname={styles.sliderWrapper}
												title={"Fill Opacity"}
											>
												<input
													className={styles.slider}
													type="range"
													min={0}
													max={1}
													step={0.1}
													value={fillOpacity}
													onChange={e => setFillOpacity(e.target.value)}
												/>
											</Feature>
										</>
									)}
									{!["none", "solid"].includes(fillStyle) && (
										<>
											<Feature
												classname={styles.sliderWrapper}
												title={"Fill Weight"}
											>
												<input
													className={styles.slider}
													type="range"
													min={1}
													max={10}
													step={0.1}
													value={fillWeight}
													onChange={e => setFillWeight(e.target.value)}
												/>
											</Feature>
											<Feature
												classname={styles.sliderWrapper}
												title={"Fill Hachure Angle"}
											>
												<input
													className={styles.slider}
													type="range"
													min={0}
													max={360}
													step={1}
													value={hachureAngle + 180}
													onChange={e => setHachureAngle(e.target.value - 180)}
												/>
											</Feature>
											<Feature
												classname={styles.sliderWrapper}
												title={"Fill Hachure Gap"}
											>
												<input
													className={styles.slider}
													type="range"
													min={1}
													max={10}
													step={0.1}
													value={hachureGap}
													onChange={e => setHachureGap(e.target.value)}
												/>
											</Feature>
										</>
									)}
									<Divider />
								</>
							)}

							<Feature title="Stroke">
								<div className={styles.colorPicker}>
									<ColorPicker
										width={200}
										name="canvas_pen_color"
										color={color}
										onColorChange={setColor}
									/>
									<input
										className={styles.hexInput}
										placeholder="#"
										type="text"
										value={color}
										onInput={e => setColor(e.target.value)}
									/>
								</div>
							</Feature>
							<Feature classname={styles.sliderWrapper} title={"Roughness"}>
								<input
									className={styles.slider}
									type="range"
									min={0}
									max={5}
									step={0.1}
									value={roughness}
									onChange={e => setRoughness(e.target.value)}
								/>
							</Feature>
							<Feature classname={styles.sliderWrapper} title={"Stroke Bowing"}>
								<input
									className={styles.slider}
									type="range"
									min={0}
									max={10}
									step={0.1}
									value={bowing}
									onChange={e => setBowing(e.target.value)}
								/>
							</Feature>
							<Feature title="Stroke Width">
								<select
									name="canvas_pen_width"
									value={width}
									onChange={e => setWidth(e.target.value)}
								>
									<option value="1">1px</option>
									<option value="2">2px</option>
									<option value="3">3px</option>
									<option value="4">4px</option>
									<option value="5">5px</option>
									<option value="6">6px</option>
									<option value="7">7px</option>
									<option value="8">8px</option>
									<option value="9">9px</option>
									<option value="10">10px</option>
									<option value="11">11px</option>
								</select>
							</Feature>
							<Feature title="Stroke Style">
								<div
									className={`${styles.feature_box} ${
										stroke === "none" && styles.active_feature_box
									}`}
									onClick={() => setStroke("none")}
								>
									<AiOutlineLine size={20} />
								</div>
								<div
									className={`${styles.feature_box} ${
										stroke === "small" && styles.active_feature_box
									}`}
									onClick={() => setStroke("small")}
								>
									<AiOutlineSmallDash size={20} />
								</div>
								<div
									className={`${styles.feature_box} ${
										stroke === "big" && styles.active_feature_box
									}`}
									onClick={() => setStroke("big")}
								>
									<AiOutlineDash size={20} />
								</div>
							</Feature>
							<Feature title="Edge">
								<select value={edge} onChange={e => setEdge(e.target.value)}>
									<option value="round">Round</option>
									<option value="bevel">Bevel</option>
									<option value="miter">Miter</option>
								</select>
							</Feature>
						</List>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<List component="div">
							<Feature title="Stroke">
								<div className={styles.colorPicker}>
									<ColorPicker
										width={200}
										name="canvas_pen_color"
										color={color}
										onColorChange={setColor}
									/>
									<input
										className={styles.hexInput}
										placeholder="#"
										type="text"
										value={color}
										onInput={e => setColor(e.target.value)}
									/>
								</div>
							</Feature>
							<Feature
								classname={styles.sliderWrapper}
								title={`Font [ ${fontSize} ]`}
							>
								<input
									className={styles.slider}
									type="range"
									min="10"
									max="20"
									value={fontSize * 10}
									onChange={e => setFontSize(e.target.value / 10)}
								/>
							</Feature>
							<Feature title="Font Style">
								<div
									className={`${styles.feature_box} ${
										fontStyle === "normal" && styles.active_feature_box
									}`}
									onClick={() => setFontStyle("normal")}
								>
									<BsFonts size={20} />
								</div>
								<div
									className={`${styles.feature_box} ${
										fontStyle === "italic" && styles.active_feature_box
									}`}
									onClick={() => setFontStyle("italic")}
								>
									<FaItalic size={15} />
								</div>
								<div
									className={`${styles.feature_box} ${
										fontStyle === "bold" && styles.active_feature_box
									}`}
									onClick={() => setFontStyle("bold")}
								>
									<FaBold size={15} />
								</div>
							</Feature>
							<Feature title="Font Family">
								<select
									value={fontFamily}
									onChange={e => setFontFamily(e.target.value)}
								>
									<option value="cursive">Cursive</option>
									<option value="Courier New">Courier New</option>
									<option value="serif">Serif</option>
								</select>
							</Feature>
						</List>
					</TabPanel>
					<TabPanel value={value} index={4}>
						<List component="div">
							<IconsLibrary />
						</List>
					</TabPanel>
					<TabPanel
						className={classes.tabPanelClose}
						value={value}
						index={5}
					></TabPanel>
				</div>
			</div>
		</div>
	);
}

export default VerticalTabs;
