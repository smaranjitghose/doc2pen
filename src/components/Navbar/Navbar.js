import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

import logo from './../../assets/logo/logo.webp';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to="/" >
                <img src={logo} className="navbar-logo" alt="logo"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/editor' className='nav-links' onClick={closeMobileMenu}>
                            Editor
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sketch' className='nav-links' onClick={closeMobileMenu}>
                            Sketch
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/mediamanip' className='nav-links' onClick={closeMobileMenu}>
                            Media Manip
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;