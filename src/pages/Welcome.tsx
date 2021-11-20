import React, { useEffect, useRef } from 'react';
import Astronaut from '../components/Astronaut';
import Typed from 'react-typed';

const Welcome = () => {
    const ref = useRef<HTMLDivElement>(null);

    const parallax = (e: any) => {
        let x = (window.innerWidth - e.pageX * 10) / 100;
        let y = (window.innerHeight - e.pageY * 10) / 100;

        if (ref.current) {
            ref.current.style.transform = `translate(${x}px,${y}px)`;
            // ref.current.style.transform = `translateX(${x}px)`;
        }

        console.log('pageX : ' + e.pageX);
        console.log('innerWidht : ' + window.innerWidth);
    };

    useEffect(() => {
        document.addEventListener('mousemove', parallax);
        return () => {
            document.removeEventListener('mousemove', parallax);
        };
    }, [ref]);

    return (
        <>
            <div ref={ref} className="welcome">
                <Typed
                    className="typed"
                    strings={[
                        'Hi, dear visitor, welcome to my website.',
                        'Here you are in the principal menu!',
                        'Please click on what you want to know about me.',
                    ]}
                    typeSpeed={50}
                    backSpeed={10}></Typed>
                <Astronaut />
            </div>
        </>
    );
};

export default Welcome;
