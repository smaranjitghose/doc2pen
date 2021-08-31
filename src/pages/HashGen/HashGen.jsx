import React, { useState } from "react";
import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import styles from "./hash-gen.module.scss";

// HashGen component
const HashGen = () => {
	const [url, setUrl] = useState("");
	const [tagLen, setTagLen] = useState("");
	const [tags, setTags] = useState([]);

	const onConvert = () => {
		const len = !isNaN(parseInt(tagLen, 10)) ? parseInt(tagLen, 10) : 20;
		
		//Change the authorization key to your own
		fetch(`https://api.imagga.com/v2/tags?image_url=${url}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Basic YWNjX2VhODNiY2MxODVjYjVlMjo0OTNlYTkwMWJhYjk2OWRkNDEyOTNlOTAwZGRhNWM3NA=="
			}
		})
			.then((res) => res.json())
			.then((res) => {
				if (res?.status?.type === "success") {
					setTags(res.result.tags.splice(0, len));
				}
			});
	};

	return (
		<div>
			<Layout>
				<div className={styles.parentUpload}>
					<div className={styles.headerText}>
						<h1>Hashtag Generator</h1>
					</div>
					<div className="user-input">
						<input
							type="text"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
							placeholder="Please enter a public image URL"
						/>
						<br />
						<input
							type="number"
							value={tagLen}
							onChange={(e) => setTagLen(e.target.value)}
							placeholder="Enter the number of hashtags (default 20)"
						/>
					</div>
					<div className={styles.buttonAll}>
						<Button type="primary" onClick={onConvert} danger>
							Get Hashtags
						</Button>
					</div>
				</div>
				<div className={styles.results}>
					{tags.map((tag, i) => (
						<div key={i}>#{tag.tag.en}</div>
					))}
				</div>
			</Layout>
		</div >
	);
};

export default HashGen;