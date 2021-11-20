import React from 'react';
import { useLocation } from 'react-router';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Technologies from '../pages/Technologies';
import Welcome from '../pages/Welcome';

const Content = ({ title }: any): any => {
    const location = useLocation().pathname;

    return (
        <div className="content">
            <h1 className="content__title">{title}</h1>
            <div className="content__wrapper">
                {location === '/welcome' && <Welcome />}
                {location === '/technologies' && <Technologies />}
                {location === '/portfolio' && <Portfolio />}
                {location === '/about' && <About />}
                {location === '/contact' && <Contact />}
            </div>
        </div>
    );
};

export default Content;
