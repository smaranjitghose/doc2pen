import React from "react";
import styles from "./emoji-rating.module.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function EmojiRating() {
	return (
		<div className={styles.emojis}>
			{/*MODIFIED the emojis in the experience form*/}

			{/*Triggers Tooltips on hover*/}
			<OverlayTrigger
				placement="top"
				delay={{ show: 200, hide: 200 }}
				overlay={<Tooltip>Liked it</Tooltip>}
			>
				<label>
					<input
						className={styles.radio}
						type="radio"
						value="1"
						name="feedback"
					/>
					<span className={styles.emoji}>&#128077;</span>
				</label>
			</OverlayTrigger>

			<OverlayTrigger
				placement="top"
				delay={{ show: 200, hide: 200 }}
				overlay={<Tooltip>Dislike</Tooltip>}
			>
				<label>
					<input
						className={styles.radio}
						type="radio"
						value="2"
						name="feedback"
					/>
					<span className={styles.emoji}>&#128078;</span>
				</label>
			</OverlayTrigger>

			<OverlayTrigger
				placement="top"
				delay={{ show: 200, hide: 200 }}
				overlay={<Tooltip>Appreciate</Tooltip>}
			>
				<label>
					<input
						className={styles.radio}
						type="radio"
						value="3"
						name="feedback"
						defaultChecked
					/>
					<span className={styles.emoji}>&#128079;</span>
				</label>
			</OverlayTrigger>

			<OverlayTrigger
				placement="top"
				delay={{ show: 200, hide: 200 }}
				overlay={<Tooltip>Loved it</Tooltip>}
			>
				<label>
					<input
						className={styles.radio}
						type="radio"
						value="4"
						name="feedback"
					/>
					<span className={styles.emoji}>&#128147;</span>
				</label>
			</OverlayTrigger>

			<OverlayTrigger
				placement="top"
				delay={{ show: 200, hide: 200 }}
				overlay={<Tooltip>Mind blowing</Tooltip>}
			>
				<label>
					<input
						className={styles.radio}
						type="radio"
						value="5"
						name="feedback"
					/>
					<span className={styles.emoji}>&#129327;</span>
				</label>
			</OverlayTrigger>
		</div>
	);
}

export default EmojiRating;
