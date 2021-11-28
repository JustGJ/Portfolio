import express from '../assets/images/express.png';
import { SiPostman } from 'react-icons/si';

const technos = [
    {
        type: 'techno',
        icon: 'fab fa-html5',
        text: 'HTML5, JSX',
    },
    {
        type: 'techno',
        icon: 'fab fa-sass',
        text: 'CSS3, SCSS',
    },
    {
        type: 'techno',
        icon: 'fab fa-js',
        text: 'JavaScript',
    },
    {
        type: 'techno',
        icon: 'fab fa-react',
        text: 'React, Redux',
    },
    {
        type: 'techno',
        icon: 'fab fa-node',
        text: 'Node.js',
    },

    {
        type: 'techno',
        image: express,
        text: 'Express',
    },
    {
        type: 'tool',
        icon: 'fab fa-git',
        text: 'Git',
    },
    {
        type: 'tool',
        icon: 'fab fa-github',
        text: 'Github',
    },

    {
        type: 'tool',
        icon: 'fab fa-trello',
        text: 'Trello',
    },
    {
        type: 'tool',
        icon: 'fas fa-code',
        text: 'VSCode',
    },
    {
        type: 'tool',
        icon: 'fab fa-discord',
        text: 'Discord',
    },
    {
        type: 'tool',
        image: <SiPostman fontSize="3.18rem" />,
        text: 'Postman',
    },
];

export default technos;
