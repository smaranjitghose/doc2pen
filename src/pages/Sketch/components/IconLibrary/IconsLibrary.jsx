import React, { useRef, useState } from "react";
import style from "./icon-lib.module.scss";
import {
	Divider,
	IconButton,
	InputAdornment,
	makeStyles,
	TextField,
	Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

// Put you icon pack import here
const iconPack1SVGs = importAll(
	require.context("./icon-pack1", false, /\.svg$/),
);
const iconPack21SVGs = importAll(
	require.context("./icon-pack2.1", false, /\.svg$/),
);
const iconPack22SVGs = importAll(
	require.context("./icon-pack2.2", false, /\.svg$/),
);
const iconPack3SVGs = importAll(
	require.context("./icon-pack3", false, /\.svg$/),
);
const iconPack41SVGs = importAll(
	require.context("./icon-pack4.1", false, /\.svg$/),
);
const iconPack42SVGs = importAll(
	require.context("./icon-pack4.2", false, /\.svg$/),
);

function importAll(r) {
	let images = {};
	r.keys().forEach(item => {
		images[item.replace("./", "")] = r(item).default;
	});
	return images;
}

function IconPreview(props) {
	const { iconPackSVGs, categoryTitle, searchString } = props;
	const svgContainer = useRef(null);
	const allSVGsRef = useRef([]);

	const hasCommonElements = (searchKeys, svgKeysFragments) => {
		const commonElementArr = searchKeys.filter(searchKey =>
			svgKeysFragments.includes(searchKey),
		);

		return commonElementArr.length !== 0;
	};

	const searchKeys = searchString.split(/\W+/);

	allSVGsRef.current = Object.keys(iconPackSVGs).map((imgName, index) => {
		const svgKeys = imgName.slice(0, -4).split(/\W+/);
		const svgKeysFragments = [];
		svgKeys.forEach(svgKey => {
			for (let i = 1; i <= svgKey.length; i++) {
				svgKeysFragments.push(svgKey.slice(0, i));
			}
		});

		return (
			<label
				key={"id" + index}
				htmlFor={`icon-${imgName}`}
				title={imgName.slice(0, -4)}
				style={{
					display:
						hasCommonElements(searchKeys, svgKeysFragments) ||
						searchKeys[0].length === 0
							? "block"
							: "none",
				}}
			>
				<img
					id={`icon-${imgName}`}
					className={style.svgIcon}
					src={iconPackSVGs[imgName]}
					alt=""
				/>
			</label>
		);
	});

	return (
		<div className={style.iconCategory}>
			<h1 className={style.categoryHeading}>{categoryTitle}</h1>
			<div className={style.svgContainer} ref={svgContainer}>
				{allSVGsRef.current}
			</div>
			{svgContainer.current && svgContainer.current.offsetHeight === 0 && (
				<Typography variant="subtitle1" align="center">
					Nothing Matched!
				</Typography>
			)}
			<Divider style={{ margin: "40px 0" }} />
		</div>
	);
}

const useStyles = makeStyles(() => ({
	search: {
		height: 47,
		"& > *": {
			height: "100%",
		},
	},
}));
function IconsLibrary() {
	const [searchString, setSearchString] = useState("");
	const classes = useStyles();
	return (
		<div className={style.root}>
			<div className={style.panel}>
				<TextField
					id="outlined-search"
					label="Search Icons"
					type="search"
					variant="outlined"
					value={searchString}
					className={classes.search}
					autoComplete="off"
					autoFocus={true}
					onChangeCapture={e => setSearchString(e.target.value)}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton>
									<Search />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</div>
			<Divider />
			<div className={style.iconLib}>
				<IconPreview
					iconPackSVGs={iconPack1SVGs}
					categoryTitle="Tech Stack Icons"
					searchString={searchString}
				/>
				{/* https://drwn.io/ */}
				<IconPreview
					iconPackSVGs={iconPack21SVGs}
					categoryTitle="Stick Figure Icons - Light"
					searchString={searchString}
				/>
				<IconPreview
					iconPackSVGs={iconPack22SVGs}
					categoryTitle="Stick Figure Icons - Bold"
					searchString={searchString}
				/>
				{/* https://svgsilh.com/tag/stickman-1.html */}
				<IconPreview
					iconPackSVGs={iconPack3SVGs}
					categoryTitle="Speech Bubble Icons"
					searchString={searchString}
				/>
				{/* https://drwn.io/ */}
				{/* https://freesvg.org/search/ */}
				{/* https://www.flaticon.com/free-icons/hand-drawn-speech-bubble */}
				{/* https://www.flaticon.com/packs/speech-bubbles-2 */}
				{/* https://www.svgrepo.com/svg/82688/thought-bubble */}
				<IconPreview
					iconPackSVGs={iconPack41SVGs}
					categoryTitle="Devices & Hardware Icons - Bold"
					searchString={searchString}
				/>
				<IconPreview
					iconPackSVGs={iconPack42SVGs}
					categoryTitle="Devices & Hardware Icons - Light"
					searchString={searchString}
				/>
				{/* https://www.svgrepo.com/vectors/device/ */}
				{/* https://www.flaticon.com/packs/smart-devices?k=1615927940770 */}
				{/* https://freeicons.io/material-icons-file-3/devices-icon-17364 */}
			</div>
		</div>
	);
}

export default IconsLibrary;
