import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Technologies from '../pages/Technologies';
import Welcome from '../pages/Welcome';
import Navbar from './Navbar';

const Menu = ({ openMenu, setOpenMenu }: any): any => {
    // const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation().pathname;

    return (
        <div className={`content ${openMenu ? 'content--active' : ''}`}>
            {location === '/welcome' && <Welcome />}
            {location === '/technologies' && <Technologies />}
            {location === '/portfolio' && <Portfolio />}
            {location === '/about' && <About />}
            {location === '/contact' && <Contact />}
        </div>
    );
};

export default Menu;
