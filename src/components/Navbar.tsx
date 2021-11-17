import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import Linkedin from '../assets/images/linkedin.png';
import Logo from '../assets/images/logo.png';

const Navbar = ({ openMenu, setOpenMenu, openContent, setOpenContent }: any) => {
    const navigate = useNavigate();

    const activeClassName = (link: any) =>
        `navbar__links__item__content ${
            link.isActive ? 'navbar__links__item__content--selected' : ''
        }`;

    const handleCloseMenu = () => {
        setOpenMenu(false);
        navigate('/');
    };

    return (
        <nav className={`navbar ${openMenu ? 'navbar--active' : ''}`}>
            <div className="navbar__logo" onClick={handleCloseMenu}>
                <img src={Logo} alt="Jeff Gasparini logo" />
            </div>
            <ul className="navbar__links">
                <li className="navbar__links__item">
                    <NavLink className={activeClassName} to="/welcome">
                        Bienvenue
                    </NavLink>
                </li>
                <li className="navbar__links__item">
                    <NavLink className={activeClassName} to="/technologies">
                        Technologies
                    </NavLink>
                </li>
                <li className="navbar__links__item">
                    <NavLink className={activeClassName} to="/portfolio">
                        Portfolio
                    </NavLink>
                </li>
                <li className="navbar__links__item">
                    <NavLink className={activeClassName} to="/about">
                        À propos
                    </NavLink>
                </li>
                <li className="navbar__links__item">
                    <NavLink className={activeClassName} to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
