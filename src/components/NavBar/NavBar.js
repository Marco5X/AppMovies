import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/pop.png'
import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>                
                <img src={Logo} width="35" height="35" className=" align-top" alt="Logo" />
            </div>
            <h2>MOVIE APP</h2>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favorites</NavLink>
                        <NavLink to="/about" >About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}