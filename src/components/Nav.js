import React, { useState } from 'react';
import '../styles/style.scss'
import logo from '../images/logo.png'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { NavItems } from './NavItems'

function Nav() {
    const [menubar, setMenubar] = useState(false)

    const toggleMenubar = () => setMenubar(!menubar)
    const hideMenubar = () => setMenubar (false)


    return (
        <>
            <header>
                <div className="navbar">
                    <Link to='/' className="logo" onClick={hideMenubar}>
                        <img src={logo} alt="Binger Logo"  />
                        <p>Binger</p>
                    </Link>

                    <Link className="hamburger">
                        <FaIcons.FaBars onClick={toggleMenubar}/>
                    </Link>

                    <nav className={menubar ? 'navmenu active' : 'navmenu'}>
                        <ul className="nav-ul">
                            <li className="menu-toggle" onClick={toggleMenubar}>
                                <p className='close'>
                                    <IoIcons.IoClose />
                                </p>
                                
                            </li>
                            {NavItems.map((item, index) => {
                                return (
                                    <li key={index} className={item.class}>
                                        <Link to={item.path} onClick={toggleMenubar}>
                                            {item.icon} <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Nav
