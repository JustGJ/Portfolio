import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Wrapper = ({ children }: any) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return children;
};

export default Wrapper;
