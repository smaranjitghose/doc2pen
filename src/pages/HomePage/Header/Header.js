import React from 'react';
import styles from './Header.module.css';
import logo from './logo.png';

const headerLinks = [
    {
        name: 'Home',
        to: '/'
    },
    {
        name: 'About',
        to: '/'
    },
    {
        name: 'Team',
        to: '/'
    },
    {
        name: 'Contact',
        to: '/'
    },
    {
        name: 'Support Us',
        to: '/'
    },
    {
        name: 'Editor',
        to: '/'
    }
];

function Header() {
    return (
        <header className={styles.Header}>
            <img className={styles.left} src={logo} alt="Logo"/>
            <div className={styles.right}>
                {
                    headerLinks.map(link => (
                        <div className={styles.header_links} key={link.name}>
                            {link.name}
                        </div>
                    ))
                }
            </div>
        </header>
    )
}

export default Header
