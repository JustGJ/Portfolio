import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Burger = ({ setOpenMenu, openMenu }: any) => {
    // const [animateBurger, setAnimateBurger] = useState(false);
    const navigate = useNavigate();
    const location = useLocation().pathname;

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
        // setAnimateBurger(!animateBurger);
        // navigate('/welcome');
        if (location === '/') navigate('/welcome');
        // if (location !== '/') setOpenMenu(!openMenu);
    };

    return (
        <div className={`burger ${openMenu ? 'burger--active' : ''}`} onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Burger;
