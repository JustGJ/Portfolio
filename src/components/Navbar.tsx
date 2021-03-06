import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import Linkedin from '../assets/images/linkedin.png';
import Logo from '../assets/images/logo.png';

const Navbar = ({ openMenu, setOpenMenu, openContent, setOpenContent }: any) => {
    const navigate = useNavigate();

    const activeClassName = (link: any) =>
        `navbar__links__item__content ${
            link.isActive ? 'navbar__links__item__content--selected' : ''
        }`;

    const handleGoToHome = () => {
        setOpenMenu(false);
        setOpenContent(false);
        navigate('/');
    };

    const handleCloseMenu = () => {
        if (window.innerWidth <= 1325) {
            setOpenMenu(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo" onClick={handleGoToHome}>
                <img src={Logo} alt="Jeff Gasparini logo" />
            </div>
            <ul className="navbar__links">
                <li className="navbar__links__item">
                    <NavLink className={activeClassName} to="/welcome" onClick={handleCloseMenu}>
                        Bienvenue
                    </NavLink>
                </li>
                <li className="navbar__links__item">
                    <NavLink
                        className={activeClassName}
                        to="/technologies"
                        onClick={handleCloseMenu}>
                        Technologies
                    </NavLink>
                </li>
                <li className="navbar__links__item">
                    <NavLink className={activeClassName} to="/portfolio" onClick={handleCloseMenu}>
                        Portfolio
                    </NavLink>
                </li>
                <li className="navbar__links__item">
                    <NavLink className={activeClassName} to="/about" onClick={handleCloseMenu}>
                        À propos
                    </NavLink>
                </li>
                <li className="navbar__links__item">
                    <NavLink className={activeClassName} to="/contact" onClick={handleCloseMenu}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
