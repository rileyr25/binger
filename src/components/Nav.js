import '../styles/component-styles/Nav.scss'
import React from 'react';

function Nav() {
    return (
        <div>
            <header>
                <div className="logo">
                    x
                </div>

                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Favourites</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Nav
