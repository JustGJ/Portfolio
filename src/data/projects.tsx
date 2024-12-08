import react from '../assets/images/react.png';
import reactNative from '../assets/images/react-native.png';
import scss from '../assets/images/scss.png';
import typescript from '../assets/images/typescript.png';
import githubJobs from '../assets/images/jobs-api.png';
import todoList from '../assets/images/todo-list.png';
import thesFleuris from '../assets/images/thes-fleuris.png';
import rpc from '../assets/images/rpc.png';
import css3 from '../assets/images/css3.png';
import redux from '../assets/images/redux.png';
import javascript from '../assets/images/javascript.png';
import devEnCours from '../assets/images/devEnCours.png';
import spring from '../assets/images/spring.png';

const projects = [
    {
        fullName: 'Fitastic (2024, en cours)',
        stacks: [reactNative, spring],
        description: "Application de tracking sportif, suivi des performances, création et organisation de séances, exercices...",
        github: 'https://github.com/JustGJ/Fitastic',
        image: devEnCours,
    },
    {
        fullName: 'Github-Jobs-Api (2021)',
        stacks: [react, scss],
        description: "Annuaire d'emploi avec filtres, darkmode et localstorage",
        github: 'https://github.com/JustGJ/Github-jobs-API',
        website: 'https://justgj.github.io/Github-jobs-API/',
        image: githubJobs,
    },
    {
        fullName: 'Todo-List (2021)',
        stacks: [react, scss, typescript, redux],
        description: 'Une Todo-List afin de mettre en pratique React redux',
        github: 'https://github.com/JustGJ/Todo-List',
        website: 'https://justgj.github.io/Todo-List/',
        image: todoList,
    },

    {
        fullName: 'Tea time : Boutique en ligne (2021)',
        stacks: [react, css3],
        description: "Une boutique en ligne basique afin de m'initier à React.",
        github: 'https://github.com/JustGJ/ThesFleuris',
        website: 'https://justgj.github.io/ThesFleuris',
        image: thesFleuris,
    },
    {
        fullName: 'Pierre Feuille Ciseaux (2020)',
        stacks: [javascript, typescript, scss],
        description: 'Un jeu en JavaScript natif, et initiation à TypeScript',
        github: 'https://github.com/JustGJ/Rock-Paper-Scissors',
        website: 'https://justgj.github.io/Rock-Paper-Scissors/',
        image: rpc,
    },
];

export default projects;
