import react from '../assets/images/react.png';
import scss from '../assets/images/scss.png';
import typescript from '../assets/images/typescript.png';
import githubJobs from '../assets/images/jobs-api.png';
import todoList from '../assets/images/todo-list.png';
import thesFleuris from '../assets/images/thes-fleuris.png';
import rpc from '../assets/images/rpc.png';
import raccoont from '../assets/images/raccoont.png';
import css3 from '../assets/images/css3.png';
import redux from '../assets/images/redux.png';
import nodejs from '../assets/images/nodejs.png';
import mongodb from '../assets/images/mongodb.png';
import javascript from '../assets/images/javascript.png';

const projects = [
    {
        fullName: 'Social Network MERN-Project',
        stacks: [react, scss, nodejs, mongodb],
        description: 'Un mini réseau social avec un back-end JavaScript',
        github: 'https://github.com/JustGJ/MERN-PROJECT-Social-Network',
        website: '',
        image: raccoont,
    },
    {
        fullName: 'Github-Jobs-Api',
        stacks: [react, scss],
        description: "Annuaire d'offres d'emploi",
        github: 'https://github.com/JustGJ/Github-jobs-API',
        website: 'https://justgj.github.io/Github-jobs-API/',
        image: githubJobs,
    },
    {
        fullName: 'Todo-List',
        stacks: [react, scss, typescript, redux],
        description: 'Une Todo-List afin de mettre en pratique React redux',
        github: 'https://github.com/JustGJ/Todo-List',
        website: 'https://justgj.github.io/Todo-List/',
        image: todoList,
    },

    {
        fullName: 'Tea time : Boutique en ligne',
        stacks: [react, css3],
        description: "Une boutique en ligne basique afin de m'initier à React.",
        github: 'https://github.com/JustGJ/ThesFleuris',
        website: 'https://justgj.github.io/ThesFleuris',
        image: thesFleuris,
    },
    {
        fullName: 'Pierre Feuille Ciseaux',
        stacks: [javascript, typescript, scss],
        description: 'Un jeu en JavaScript natif, et initiation à TypeScript',
        github: 'https://github.com/JustGJ/Rock-Paper-Scissors',
        website: 'https://justgj.github.io/Rock-Paper-Scissors/',
        image: rpc,
    },
];

export default projects;
