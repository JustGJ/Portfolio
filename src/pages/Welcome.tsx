import React, { useEffect, useRef } from 'react';
import Astronaut from '../components/Astronaut';
import Typed from 'react-typed';
import Particles from 'react-tsparticles';

const Welcome = () => {
    const ref = useRef<HTMLDivElement>(null);

    const parallax = (e: any) => {
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
                canvasClassName="test"
                params={{
                    particles: {
                        number: {
                            value: 160,
                            density: {
                                enable: true,
                                value_area: 1500,
                            },
                        },
                        line_linked: {
                            enable: true,
                            opacity: 0.04,
                        },
                        move: {
                            direction: 'right',
                            speed: 0.05,
                        },
                        size: {
                            value: 1,
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.05,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: true,
                                mode: 'push',
                            },
                        },
                        modes: {
                            push: {
                                particles_nb: 1,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />
            <div ref={ref} className="welcome">
                <Typed
                    className="typed"
                    strings={[
                        'Bonjour cher visiteur, bienvenue sur mon site !',
                        'Vous êtes dans le menu principal.',
                        "Pour en savoir plus sur moi, veuillez naviguer sur l'onglet de votre choix.",
                    ]}
                    typeSpeed={50}
                    backSpeed={10}></Typed>
                <Astronaut />
            </div>
        </>
    );
};

export default Welcome;
