import express from '../assets/images/express.png';
import { SiInsomnia, SiPostman, SiRedux, SiSpring } from 'react-icons/si';
import { RiBearSmileLine } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiDotnet } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiPrisma } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiSonarqube } from "react-icons/si";

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
        text: 'Javascript, Typescript',
    },
    {
        type: 'techno',
        awesome: 'fab fa-react',
        text: 'React, React-native',
    },
    {
        type: 'techno',
        reactIcon: <SiRedux fontSize="3.18rem" />        ,
        text: 'Redux, Redux-saga',
    },
    {
        type: 'techno',
        reactIcon: <RiBearSmileLine fontSize="3.18rem" />,
        text: 'Zustand',
    },
    {
        type: 'techno',
        awesome: 'fab fa-node',
        text: 'Node.js',
    },    {
        type: 'techno',
        image: express,
        text: 'Express',
    },
    {
        type: 'techno',
        reactIcon: <GrGraphQl fontSize="3.18rem" />,
        text: 'GraphQL',
    },
    {
        type: 'techno',
        reactIcon: <SiPrisma fontSize="3.18rem" />,
        text: 'Prisma',
    },
    {
        type: 'techno',
        reactIcon: <SiDotnet fontSize="3.18rem" />,
        text: 'Dotnet',
    },
    {
        type: 'techno',
        reactIcon: <DiMongodb fontSize="3.18rem" />,
        text: 'MongoDB',
    },
    {
        type: 'techno',
        reactIcon: <SiSpring fontSize="3.18rem" />,
        text: 'Spring Boot',
    },
    {
        type: 'techno',
        reactIcon: <AiOutlineAntDesign fontSize="3.18rem" />,
        text: 'Ant Design',
    },
    {
        type: 'techno',
        reactIcon: <SiStyledcomponents fontSize="3.18rem" />,
        text: 'Styled-Components',
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
        reactIcon: <FaGitlab fontSize="3.18rem" />,
        text: 'Gitlab',
    },
    {
        type: 'tool',
        reactIcon: <FaDocker fontSize="3.18rem" />,
        text: 'Docker',
    },
    {
        type: 'tool',
        reactIcon: <SiPostman fontSize="3.18rem" />,
        text: 'Postman',
    },
    {
        type: 'tool',
        reactIcon: <SiInsomnia fontSize="3.18rem" />,
        text: 'Insomnia',
    },
    {
        type: 'tool',
        reactIcon: <SiJest fontSize="3.18rem" />,
        text: 'Jest',
    },
    {
        type: 'tool',
        reactIcon: <SiTestinglibrary fontSize="3.18rem" />,
        text: 'React-Testing-Library',
    },
    {
        type: 'tool',
        reactIcon: <SiCypress fontSize="3.18rem" />,
        text: 'Cypress',
    },
    {
        type: 'tool',
        reactIcon: <SiSonarqube fontSize="3.18rem" />,
        text: 'SonarQube',
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
];

export default technos;
