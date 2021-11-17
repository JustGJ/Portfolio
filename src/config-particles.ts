export const config = {
    fullScreen: {
        zIndex: 1,
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onDiv: {
                mode: 'repulse',
            },
            onHover: {
                enable: true,
                mode: 'grab',
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            grab: {
                distance: 143.85614385614386,
                lineLinked: {
                    opacity: 1,
                },
            },
            repulse: {
                distance: 200,
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
    particles: {
        color: {
            value: '#ffffff',
        },
        links: {
            color: {
                value: '#ffffff',
            },
            distance: 150,
            opacity: 0.4,
        },
        move: {
            attract: {
                rotate: {
                    x: 631.3181133058181,
                    y: 394.57382081613633,
                },
            },
            enable: true,
            direction: 'right',
            random: false,
            straight: false,
            outMode: 'out',
            bounce: false,
            speed: 1,
        },
        number: {
            density: {
                enable: false,
                value_area: 100,
            },
            value: 40,
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '000000',
            },
            polygon: {
                nb_sides: 4,
            },
        },
        opacity: {
            value: 0.8,
            random: false,
            animation: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: {
                min: 1,
                max: 2,
            },
            random: true,
            animation: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false,
            },
        },
        lineLinked: {
            enable: true,
            distance: 40,
            color: '#ffffff',
            opacity: 0.8,
            width: 1,
        },
    },
};
