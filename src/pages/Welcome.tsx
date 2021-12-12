import React, { useEffect, useRef } from 'react';
import Astronaut from '../components/Astronaut';
import Typed from 'react-typed';
import Particles from 'react-tsparticles';
import { particlesConfig } from '../particles-config';

const Welcome = () => {
    const ref = useRef<HTMLDivElement>(null);

    const parallax = (e: MouseEvent) => {
        let x = (window.innerWidth - e.pageX * 10) / 100;
        let y = (window.innerHeight - e.pageY * 10) / 100;

        if (ref.current) {
            ref.current.style.transform = `translate(${x}px,${y}px)`;
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', parallax);
        return () => {
            document.removeEventListener('mousemove', parallax);
        };
    }, [ref]);

    return (
        <>
            <Particles
                height="100%"
                style={{ position: 'absolute' }}
                canvasClassName="particles"
                params={{ ...particlesConfig }}
            />
            <div ref={ref} className="welcome">
                <Typed
                    className="typed"
                    strings={[
                        'Bonjour cher visiteur, bienvenue sur mon site !',
                        'Vous êtes dans le menu principal.',
                        'Pour en savoir plus sur moi, veuillez naviguer sur le menu de votre choix.',
                    ]}
                    typeSpeed={28}
                    backSpeed={10}></Typed>
                <Astronaut />
            </div>
        </>
    );
};

export default Welcome;
