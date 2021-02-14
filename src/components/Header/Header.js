import React,{useState, useEffect, useRef} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {Link} from 'react-scroll';
import styles from './Header.module.css';
import logo from './logo.png';
import {ImInfo} from "react-icons/im";
import {RiTeamLine, RiContactsBook2Line} from "react-icons/ri";
import {BiDonateHeart} from "react-icons/bi";

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
        name: 'Contact',
        to: 'home_contact',
        icon: <RiContactsBook2Line />
    },
    {
        name: 'Support Us',
        to: 'home_support',
        icon: <BiDonateHeart />
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
        <>
            <header className={styles.Header}>
              <div className="container mx-auto">
                <div className="sm:flex justify-center">
                <img className={styles.left} src={logo} alt="Logo"/>
                
                <div className={styles.right}>
                  <ul className="text-gray-700 sm:self-center text-xl border-t sm:border-none">
                   <li>
                    <Link to='home_banner' offset={-15}>                     
                        <NavLink className={styles.header_links} to='/' exact activeClassName={styles.header_active_links}>
                            Home
                        </NavLink>                      
                    </Link>
                  </li>
                  <li>
                    <NavLink className={styles.header_links} to='/editor' exact activeClassName={styles.header_active_links}>
                        Editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={`${styles.header_links} /*${styles.tagged}*/`} to='/sketch' exact activeClassName={styles.header_active_links}>
                        Sketch
                    </NavLink>
                  </li>  
                  </ul>
                </div>
               
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
