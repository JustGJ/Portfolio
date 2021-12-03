import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Technologies from '../pages/Technologies';
import Welcome from '../pages/Welcome';
// import Fade from './Fade';

const Content = ({ openMenu, visible, title }: any): any => {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const [size, setsize] = useState(window.innerWidth);

    // useEffect(() => {
    //     if (size <= 400 && location === '/') {
    //         console.log(true);
    //         navigate('/welcome');
    //     }
    // }, [size, location, navigate]);

    return (
        // <Fade visible={openMenu} className="fade__content" duration="800">
        // <div className="content">
        //     <h1 className="content__title">{title}</h1>
        //     <div className="content__wrapper">
        // {location === '/welcome' && <Welcome />}
        // {location === '/technologies' && <Technologies />}
        // {location === '/portfolio' && <Portfolio />}
        // {location === '/about' && <About />}
        // {location === '/contact' && <Contact />}
        {
            /* </div>
        </div> */
        }
        // </Fade>
    );
};

export default Content;
