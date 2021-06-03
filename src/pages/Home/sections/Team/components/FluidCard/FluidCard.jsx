import React, { useEffect, useRef, useCallback, useState } from "react";
import styles from "./fluid-card.module.scss";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";

function FluidCard(props) {
	const { name, title, githubLink, linkedinLink, imgArray } =
		props.content || "";

	const currentImageIndex = useRef(0);
	const liquidBG = useRef(null);
	const canvasRef = useRef(null);

	const [context, setContext] = useState(null);

	const fluidEffect = useCallback(() => {
		let pointsA = [],
			points = 8,
			viscosity = 300,
			mouseDist = 100,
			damping = 0.08,
			mouseY = 0,
			mouseX = 0,
			relMouseX = 0,
			relMouseY = 0,
			mouseLastX = 0,
			mouseLastY = 0,
			mouseDirectionX = 0,
			mouseDirectionY = 0,
			mouseSpeedX = 0,
			mouseSpeedY = 0,
			radius = 100; // Radius of Repulsion
		const canvasPadding = 0;

		// To watch and debug the drawn points, put showIndicators = true
		const showIndicators = false;

		const divElement = liquidBG.current;
		let divWidth = divElement.offsetWidth;
		let divHeight = divElement.offsetHeight;

		function mouseDirection(e) {
			if (window.isHome && canvasRef.current !== null) {
				const canvasRightX =
					canvasRef.current.offsetParent.offsetLeft +
					canvasRef.current.offsetWidth -
					2 * canvasPadding;
				const canvasLeftX = canvasRef.current.offsetParent.offsetLeft;

				const canvasBottomY =
					canvasRef.current.offsetParent.offsetTop +
					canvasRef.current.offsetHeight -
					2 * canvasPadding;
				const canvasTopY = canvasRef.current.offsetParent.offsetTop;

				const isWithinDiv =
					e.pageX > canvasLeftX + mouseDist &&
					e.pageX < canvasRightX - mouseDist &&
					e.pageY > canvasTopY + mouseDist &&
					e.pageY < canvasBottomY - mouseDist;

				if (e.pageX < canvasLeftX) {
					if (mouseX < e.pageX && !isWithinDiv) mouseDirectionX = 1;
					else mouseDirectionX = 0;
				} else if (e.pageX > canvasRightX) {
					if (mouseX > e.pageX && !isWithinDiv) mouseDirectionX = -1;
					else mouseDirectionX = 0;
				} else if (isWithinDiv) {
					mouseDirectionX = 0;
				}

				if (e.pageY < canvasTopY) {
					if (mouseY < e.pageY) mouseDirectionY = 1;
					else mouseDirectionY = 0;
				} else if (e.pageY > canvasBottomY) {
					if (mouseY > e.pageY) mouseDirectionY = -1;
					else mouseDirectionY = 0;
				} else if (isWithinDiv) {
					mouseDirectionY = 0;
				}

				mouseX = e.pageX;
				mouseY = e.pageY;
				relMouseX =
					mouseX - canvasRef.current.offsetParent.offsetLeft + canvasPadding;
				relMouseY =
					mouseY - canvasRef.current.offsetParent.offsetTop + canvasPadding;
			}
		}
		document.addEventListener("mousemove", mouseDirection);

		function mouseSpeed() {
			mouseSpeedX = mouseX - mouseLastX;
			mouseSpeedY = mouseY - mouseLastY;

			mouseLastX = mouseX;
			mouseLastY = mouseY;

			setTimeout(mouseSpeed, 50);
		}
		mouseSpeed();

		function initLiquidBackground() {
			// Create canvas
			window.isHome = true;

			canvasRef.current.style.top = `-${canvasPadding}px`;
			canvasRef.current.style.left = `-${canvasPadding}px`;

			canvasRef.current.width = divWidth + 2 * canvasPadding;
			canvasRef.current.height = divHeight + 2 * canvasPadding;

			// Add points to draw the liquid background (giving it a shape (rectangular))
			/*
          START POINT
            ▼
            ▼
        ←← *←←
        ↓       ↑
        ↓       ↑
        ↓       ↑
        →→→→→
    */

			for (let x = points / 2; x >= 0; x--) {
				addPoint(divWidth * (x / points), 0);
			}

			for (let y = 0; y <= points; y++) {
				addPoint(0, divHeight * (y / points));
			}
			for (let x = 0; x <= points; x++) {
				addPoint(divWidth * (x / points), divHeight);
			}

			for (let y = points; y >= 0; y--) {
				addPoint(divWidth, divHeight * (y / points));
			}

			for (let x = points; x >= points / 2; x--) {
				addPoint(divWidth * (x / points), 0);
			}

			// Start render
			if (context !== null && canvasRef.current !== null) {
				renderCanvas();
			}
		}

		function addPoint(x, y) {
			pointsA.push(new Point(x, y, 1));
		}

		class Point {
			constructor(x, y, level) {
				this.x = this.ix = canvasPadding + x;
				this.y = this.iy = canvasPadding + y;
				this.vx = 0;
				this.vy = 0;
				this.cx1 = 0;
				this.cy1 = 0;
				this.cx2 = 0;
				this.cy2 = 0;
				this.level = level;
			}
			move() {
				this.vx += (this.ix - this.x) / (viscosity * this.level);
				this.vy += (this.iy - this.y) / (viscosity * this.level);

				let dx = this.ix - relMouseX,
					dy = this.iy - relMouseY;
				let relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;

				// Move x
				if (
					(mouseDirectionX + radius > 0 && relMouseX > this.x) ||
					(mouseDirectionX - radius < 0 && relMouseX < this.x)
				) {
					if (relDist > 0 && relDist < 1) {
						this.vx = (mouseSpeedX / 4) * relDist;
					}
				}
				this.vx *= 1 - damping;
				this.x += this.vx;

				// Move y
				if (
					(mouseDirectionY + radius > 0 && relMouseY > this.y) ||
					(mouseDirectionY - radius < 0 && relMouseY < this.y)
				) {
					if (relDist > 0 && relDist < 1) {
						this.vy = (mouseSpeedY / 4) * relDist;
					}
				}
				this.vy *= 1 - damping;
				this.y += this.vy;
			}
		}

		function renderCanvas() {
			// rAF
			requestAnimationFrame(renderCanvas);

			if (window.isHome && canvasRef.current !== null) {
				// Clear scene
				context.clearRect(
					0,
					0,
					canvasRef.current.offsetWidth,
					canvasRef.current.offsetHeight,
				);

				// Move points
				for (let i = 0; i <= pointsA.length - 1; i++) {
					pointsA[i].move();
				}

				// Draw image;
				let img = new Image();
				img.onload = "start";
				img.src = imgArray[currentImageIndex.current];

				let pattern = context.createPattern(img, "no-repeat");
				context.fillStyle = pattern;
				context.fill();

				context.beginPath();
				context.moveTo(pointsA[0].x, pointsA[0].y);

				for (let i = 0; i < pointsA.length; i++) {
					let p = pointsA[i];
					let nextP = pointsA[i + 1];

					if (nextP !== undefined) {
						p.cx1 = (p.x + nextP.x) / 2;
						p.cy1 = (p.y + nextP.y) / 2;
						p.cx2 = (p.x + nextP.x) / 2;
						p.cy2 = (p.y + nextP.y) / 2;

						context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
					} else {
						nextP = pointsA[0];
						p.cx1 = (p.x + nextP.x) / 2;
						p.cy1 = (p.y + nextP.y) / 2;

						context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
					}
				}
				context.fill();

				if (showIndicators) {
					// Draw points
					context.fillStyle = "#000";
					context.beginPath();
					for (let i = 0; i < pointsA.length; i++) {
						let p = pointsA[i];

						context.rect(p.x - 1, p.y - 1, 2, 2);
					}
					context.fill();

					// Draw controls
					context.fillStyle = "#f00";
					context.beginPath();
					for (let i = 0; i < pointsA.length; i++) {
						let p = pointsA[i];

						context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
						context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
					}
					context.fill();
				}
			} else {
				setContext(null);
			}
		}

		// Init
		initLiquidBackground();
	}, [context, imgArray]);

	useEffect(() => {
		fluidEffect();
	}, [fluidEffect]);

	useEffect(() => {
		setContext(canvasRef.current.getContext("2d"));
	}, []);

	const drawNextImage = () => {
		if (currentImageIndex.current !== imgArray.length - 1) {
			currentImageIndex.current++;
		} else {
			currentImageIndex.current = 0;
		}
	};

	return (
		<div className={styles["card-container"]}>
			<div
				ref={liquidBG}
				className={styles["div-liquid"]}
				onClick={drawNextImage}
			>
				<canvas ref={canvasRef} />
			</div>
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.name}>{name}</div>
					<div className={styles.title}>{title}</div>
					<div className={styles.socialLinks}>
						<a
							className={`${styles.socialicon} ${styles.github}`}
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<UseAnimations animation={github} size={42} />
						</a>

						<a
							className={`${styles.socialicon} ${styles.linkedin}`}
							href={linkedinLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<UseAnimations
								animation={linkedin}
								size={42}
								strokeColor={"#0e76a8"}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FluidCard;
