import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import styles from './Header.module.css';
import logo from './../../assets/logo/logo.webp';
import { ImInfo } from "react-icons/im";
import { RiTeamLine } from "react-icons/ri";
import { BiDonateHeart} from "react-icons/bi";

const quickLinks = [
    {
        name: 'About',
        to: 'home_about',
        icon: <ImInfo />
    },
    {
        name: 'Team',
        to: 'home_team',
        icon: <RiTeamLine />
    },
    {
        name: 'Support Us',
        to: 'home_support',
        icon: <BiDonateHeart />
    }
]

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
        })
    }, [history])

    function drop() {

        navLinkRef.current.classList.toggle(styles.rightDrop);
        headerRef.current.classList.toggle(styles.HeaderOpen);
        btn1Ref.current.classList.toggle(styles.btn1);
        btn2Ref.current.classList.toggle(styles.btn2);
        btn3Ref.current.classList.toggle(styles.btn3);

    }

    return (
        <>
            <header ref={headerRef} className={`${styles.Header} ${styles.HeaderDrop}`}>
                <NavLink to='/'  >
                    <img className={styles.left} src={logo} alt="Logo" />
                </NavLink>
                <div ref={navLinkRef} className={`${styles.right} ${styles.rightDrop}`}>
                    <Link to='home_banner' offset={-15}>
                        <NavLink className={styles.header_links} to='/' exact activeClassName={styles.header_active_links}>
                            Home
                        </NavLink>
                    </Link>
                    <NavLink className={styles.header_links} to='/editor' exact activeClassName={styles.header_active_links}>
                        Editor
                    </NavLink>
                    <NavLink className={`${styles.header_links} /*${styles.tagged}*/`} to='/sketch' exact activeClassName={styles.header_active_links}>
                        Sketch
                    </NavLink>
                    <NavLink className={styles.header_links} to='/contact' exact activeClassName={styles.header_active_links}>
                        Contact
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
                {
                    location === '/' && quickLinks.map(link => (
                        <Link className={styles.quick_links} key={link.name} to={link.to} offset={-100}>
                            {link.icon}
                            &nbsp;&nbsp;&nbsp;
                            {link.name}
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Header
