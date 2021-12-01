import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const Burger = ({ setOpenMenu, openMenu }: any) => {
    // const [animateBurger, setAnimateBurger] = useState(false);
    const navigate = useNavigate();
    const location = useLocation().pathname;

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
        if (location === '/') navigate('/welcome');
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
