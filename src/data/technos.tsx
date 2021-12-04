import express from '../assets/images/express.png';
import { SiPostman } from 'react-icons/si';

const technos = [
    {
        type: 'techno',
        awesome: 'fab fa-html5',
        text: 'HTML5, JSX',
    },
    {
        type: 'techno',
        awesome: 'fab fa-sass',
        text: 'CSS3, SCSS',
    },
    {
        type: 'techno',
        awesome: 'fab fa-js',
        text: 'JavaScript',
    },
    {
        type: 'techno',
        awesome: 'fab fa-react',
        text: 'React, Redux',
    },
    {
        type: 'techno',
        awesome: 'fab fa-node',
        text: 'Node.js',
    },

    {
        type: 'techno',
        image: express,
        text: 'Express',
    },
    {
        type: 'tool',
        awesome: 'fab fa-git',
        text: 'Git, Gitflow',
    },
    {
        type: 'tool',
        awesome: 'fab fa-github',
        text: 'Github',
    },

    {
        type: 'tool',
        awesome: 'fab fa-trello',
        text: 'Trello',
    },
    {
        type: 'tool',
        awesome: 'fas fa-code',
        text: 'VSCode',
    },
    {
        type: 'tool',
        awesome: 'fab fa-discord',
        text: 'Discord',
    },
    {
        type: 'tool',
        reactIcon: <SiPostman fontSize="3.18rem" />,
        text: 'Postman',
    },
];

export default technos;
