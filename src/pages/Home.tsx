import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Burger from '../components/Burger';

const Home = ({ setOpenMenu, openMenu }: any) => {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const [resize, setResize] = useState(window.innerWidth);

    const handleResize = (e: any) => {
        setResize(window.innerWidth);
        if (resize >= 1325) setOpenMenu(true);
    };

    const handleGoToHome = (e: any) => {
        e.deltaY > 0 && location === '/' && navigate('/welcome');
    };

    // document.addEventListener('DOMContentLoaded', function () {
    //     screen.width <= 1325 && navigate('/welcome');
    // });

    useEffect(() => {
        window.addEventListener('wheel', handleGoToHome);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('wheel', handleGoToHome);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setOpenMenu, navigate, resize]);

    useEffect(() => {
        // resize <= 1325 && navigate('/welcome');
        console.log(window.screen);

        // For Desktop
        location !== '/' && resize >= 1325 && setOpenMenu(true);
    }, [location, resize, setOpenMenu]);

    return (
        <>
            {resize < 1325 ? <Burger setOpenMenu={setOpenMenu} openMenu={openMenu} /> : ''}

            <div className="home">
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
