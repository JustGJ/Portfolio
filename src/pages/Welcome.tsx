import React, { useEffect, useRef } from 'react';
import Astronaut from '../components/Astronaut';
import Typed from 'react-typed';
import Particles from 'react-tsparticles';

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
                params={{
                    particles: {
                        number: {
                            value: 120,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: '#ffffff',
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 0,
                                color: '#000000',
                            },
                            polygon: {
                                nb_sides: 4,
                            },
                            image: {
                                src: 'img/github.svg',
                                width: 100,
                                height: 100,
                            },
                        },
                        opacity: {
                            value: 0.8,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 10,
                                size_min: 0.3,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 40,
                            color: '#ffffff',
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: 'right',
                            random: true,
                            straight: true,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 394,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'grab',
                            },
                            onclick: {
                                enable: true,
                                mode: 'push',
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 109.63042366068159,
                                line_linked: {
                                    opacity: 0.3,
                                },
                            },
                            bubble: {
                                distance: 40,
                                size: 0,
                                duration: 2,
                                opacity: 0,
                            },
                            repulse: {
                                distance: 400,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
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
                    typeSpeed={30}
                    backSpeed={10}></Typed>
                <Astronaut />
            </div>
        </>
    );
};

export default Welcome;
