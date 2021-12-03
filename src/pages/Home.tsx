import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Burger from '../components/Burger';
import Particles from 'react-tsparticles';
import Stars from '../components/Stars';

const Home = ({ setOpenMenu, openMenu, openContent, setOpenContent }: any) => {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const [resize, setResize] = useState(window.innerWidth);

    const handleResize = (e: any) => {
        setResize(window.innerWidth);
        // For Desktop
        if (resize >= 1325 && location !== '/') {
            setOpenMenu(true);
            setOpenContent(true);
        }
    };

    const handleGoToWelcome = (e: any) => {
        // e.deltaY > 0 && location === '/' && navigate('/welcome');
        // For Desktop
        if (e.deltaY > 0 && location === '/') {
            navigate('/welcome');
            setOpenContent(true);
        }
    };

    // document.addEventListener('DOMContentLoaded', function () {
    //     screen.width <= 1325 && navigate('/welcome');
    // });

    useEffect(() => {
        window.addEventListener('wheel', handleGoToWelcome);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('wheel', handleGoToWelcome);
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setOpenMenu, navigate, resize]);

    useEffect(() => {
        // For Desktop
        if (location !== '/' && resize > 1325) {
            setOpenMenu(true);
            setOpenContent(true);
        } else if (location !== '/' && resize < 1325) {
            setOpenContent(true);
        }
    }, [location, resize, setOpenMenu]);

    return (
        <>
            {resize < 1325 ? <Burger setOpenMenu={setOpenMenu} openMenu={openMenu} /> : ''}

            <div className="home">
                {/* <Stars /> */}
                <div className="home__content">
                    <h1 className="home__content__name">JEFF GASPARINI</h1>
                    <hr />
                    <h2 className="home__content__dev">Développeur Web</h2>
                    <h2 className="home__content__country">France</h2>
                    <div className="home__content__mouse">
                        <div className="mouse__scroller"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
