import React from "react";
import { Helmet } from "react-helmet";

function MetaComponent({ title, description, keywords }) {
	let attentionMessage = "Come back";
	let blinkEvent = null;

	const favicon = document.getElementById("favicon");

	document.addEventListener("visibilitychange", () => {
		var isPageActive = !document.hidden;
		if (!isPageActive) {
			blink();
		} else {
			document.title = title;
			clearInterval(blinkEvent);
		}
	});

	function blink() {
		blinkEvent = setInterval(() => {
			if (document.title === attentionMessage) {
				document.title = title;
				favicon.href = "doc2penlogo.png";
			} else {
				document.title = attentionMessage;
				favicon.href = "folded.png";
			}
		}, 1000);
	}

	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={window.location.href} />
		</Helmet>
	);
}

export default MetaComponent;
