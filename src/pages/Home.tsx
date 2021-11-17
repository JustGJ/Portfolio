import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Burger from '../components/Burger';
import Navbar from '../components/Navbar';

const Home = ({ setOpenContent }: any) => {
    const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const [resize, setResize] = useState(window.innerWidth);

    const handleResize = (e: any) => {
        setResize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('wheel', (e) => {
            if (e.deltaY > 0 && location === '/') {
                navigate('/welcome');
                setOpenMenu(true);
                setOpenContent(true);
            }
        });
        if (location !== '/') {
            setOpenMenu(true);
            setOpenContent(true);
        } else {
            setOpenMenu(false);
            setOpenContent(false);
        }
        window.addEventListener('resize', handleResize, true);
    }, [setOpenMenu, navigate, location, setOpenContent]);

    console.log('home');
    return (
        <>
            {resize < 1250 ? <Burger setOpenMenu={setOpenMenu} openMenu={openMenu} /> : ''}
            <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />

            <div className="home">
                <div className="home__content">
                    <h1 className="home__content--name">JEFF GASPARINI</h1>
                    <hr />
                    <h2 className="home__content--dev">Développeur Web</h2>
                    <h2 className="home__content--country">France</h2>
                    <div className="home__content__mouse">
                        <div className="home__content__mouse__scroller"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
