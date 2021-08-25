import React, { useState } from 'react';
import '../styles/style.scss'
import logo from '../images/logo.png'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { NavItems } from './NavItems'

function Nav() {
    const [menubar, setMenubar] = useState(false)

    const showMenubar = () => setMenubar(!menubar)

    return (
        <>
            <header>
                <div className="navbar">
                    <Link href="#" className="logo">
                        <img src={logo} alt="Binger Logo" />
                    </Link>

                    <Link className="hamburger">
                        <FaIcons.FaBars onClick={showMenubar}/>
                    </Link>

                    <nav className={menubar ? 'navmenu active' : 'navmenu'}>
                        <ul className="nav-ul">
                            <li className="menu-toggle" onClick={showMenubar}>
                                <a className='close'>
                                    <IoIcons.IoClose />
                                </a>
                                
                            </li>
                            {NavItems.map((item, index) => {
                                return (
                                    <li key={index} className={item.class}>
                                        <Link to={item.path}>
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
