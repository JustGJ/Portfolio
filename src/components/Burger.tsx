import React from 'react';
import { useLocation, useNavigate } from 'react-router';

interface IProps {
    openMenu: Boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger = ({ setOpenMenu, openMenu }: IProps) => {
    const navigate = useNavigate();
    const location = useLocation().pathname;

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
        if (location === '/') navigate('/welcome');
    };

    return (
        <button className={`burger ${openMenu ? 'burger--active' : ''}`} onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default Burger;
