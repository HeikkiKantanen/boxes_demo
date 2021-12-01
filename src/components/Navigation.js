import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
            <nav>
                <ul className="link-wrapper">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contacts">Contact</NavLink></li>
                    <li><NavLink to="/Boxes">Boxes</NavLink></li>
                    <li><NavLink to="/Form">Form</NavLink> </li>
                </ul>
            </nav>
    );
};

export default Navigation;