import React,{useState, useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {Link} from 'react-scroll';
import styles from './Header.module.css';
import logo from './logo.png';

const headerLinks = [
    {
        name: 'About',
        to: 'home_about'
    },
    {
        name: 'Team',
        to: 'home_team'
    },
    {
        name: 'Contact',
        to: 'home_contact'
    },
    {
        name: 'Support Us',
        to: 'home_support'
    }
]

function Header() {
    
    const history = useHistory();

    const [location, setLocation] = useState(window.location.pathname);

    useEffect(() => {
        return history.listen(location => {
            setLocation(location.pathname);
        })
    }, [history])

    return (
        <header className={styles.Header}>
            <img className={styles.left} src={logo} alt="Logo"/>
            <div className={styles.right}>
                <Link to='home_banner' offset={-15}>
                    <NavLink className={styles.header_links} to='/' exact activeClassName={styles.header_active_links}>
                        Home
                    </NavLink>
                </Link>
                {
                    location === '/' && headerLinks.map(link => (
                        <Link className={styles.header_links} key={link.name} to={link.to} offset={-100}>
                            {link.name}
                        </Link>
                    ))
                }
                <NavLink className={styles.header_links} to='/editor' exact activeClassName={styles.header_active_links}>
                    Editor
                </NavLink>
            </div>
        </header>
    )
}

export default Header
