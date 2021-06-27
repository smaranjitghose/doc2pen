import React, { useState, useEffect, useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import styles from "./header.module.scss";
import logo from "./../../assets/logo/logo.webp";
import { ImInfo } from "react-icons/im";
import { RiTeamLine, RiContactsLine } from "react-icons/ri";
import { BiDonateHeart } from "react-icons/bi";

const quickLinks = [
	{
		name: "About",
		to: "home_about",
		icon: <ImInfo />,
	},
	{
		name: "Team",
		to: "home_team",
		icon: <RiTeamLine />,
	},
	{
		name: "Support Us",
		to: "home_support",
		icon: <BiDonateHeart />,
	},
	{
		name: "Contact us",
		to: "home_contact",
		icon: <RiContactsLine />,
	},
];

function Header() {
	let navLinkRef = useRef(null);
	let headerRef = useRef(null);
	let btn1Ref = useRef(null);
	let btn2Ref = useRef(null);
	let btn3Ref = useRef(null);
	const history = useHistory();

	const [location, setLocation] = useState(window.location.pathname);

	useEffect(() => {
		return history.listen(location => {
			setLocation(location.pathname);
		});
	}, [history]);

	function drop() {
		navLinkRef.current.classList.toggle(styles.rightDrop);
		headerRef.current.classList.toggle(styles.HeaderOpen);
		btn1Ref.current.classList.toggle(styles.btn1);
		btn2Ref.current.classList.toggle(styles.btn2);
		btn3Ref.current.classList.toggle(styles.btn3);
	}

	return (
		<>
			<header
				ref={headerRef}
				className={`${styles.Header} ${styles.HeaderDrop}`}
			>
				<NavLink
					to="/"
					onClick={() => {
						if (headerRef.current.classList.contains(styles.HeaderOpen)) drop();
						window.isHome = false;
					}}
				>
					<img className={styles.left} src={logo} alt="Logo" />
				</NavLink>
				<div ref={navLinkRef} className={`${styles.right} ${styles.rightDrop}`}>
					<NavLink
						className={styles.header_links}
						to="/"
						exact
						activeClassName={styles.header_active_links}
						onClick={() => {
							if (headerRef.current.classList.contains(styles.HeaderOpen))
								drop();
							window.isHome = false;
						}}
					>
						Home
					</NavLink>
					<NavLink
						className={styles.header_links}
						to="/editor"
						exact
						activeClassName={styles.header_active_links}
						onClick={() => {
							if (headerRef.current.classList.contains(styles.HeaderOpen))
								drop();
							window.isHome = false;
						}}
					>
						Editor
					</NavLink>
					<NavLink
						className={`${styles.header_links} /*${styles.tagged}*/`}
						to="/sketch"
						exact
						activeClassName={styles.header_active_links}
						onClick={() => {
							if (headerRef.current.classList.contains(styles.HeaderOpen))
								drop();
							window.isHome = false;
						}}
					>
						Sketch
					</NavLink>
					<NavLink
						className={`${styles.header_links} /*${styles.tagged}*/`}
						to="/mediamanip"
						exact
						activeClassName={styles.header_active_links}
						onClick={() => {
							if (headerRef.current.classList.contains(styles.HeaderOpen))
								drop();
							window.isHome = false;
						}}
					>
						Media Manip
					</NavLink>
				</div>
				<div className={styles.hamburger} onClick={() => drop()}>
					<div className={styles.menu_btn}>
						<div ref={btn1Ref} className={styles.btn_line}></div>
						<div ref={btn2Ref} className={styles.btn_line}></div>
						<div ref={btn3Ref} className={styles.btn_line}></div>
					</div>
				</div>
			</header>
			<div className={styles.quick_box}>
				{location === "/" &&
					quickLinks.map(link => (
						<Link
							className={styles.quick_links}
							key={link.name}
							to={link.to}
							offset={-100}
						>
							<span className="icon">{link.icon}</span>
							&nbsp;&nbsp;&nbsp;
							{link.name}
						</Link>
					))}
			</div>
		</>
	);
}

export default Header;
