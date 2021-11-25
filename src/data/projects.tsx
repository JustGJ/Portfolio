import react from '../assets/images/react.png';
import scss from '../assets/images/scss.png';
import typescript from '../assets/images/typescript.png';
import githubJobs from '../assets/images/jobs-api.png';
import todoList from '../assets/images/todo-list.png';
import redux from '../assets/images/redux.png';
import nodejs from '../assets/images/nodejs.png';
import mongodb from '../assets/images/mongodb.png';

const projects = [
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
        fullName: 'Social Network MERN-Project',
        stacks: [react, scss, nodejs, mongodb],
        description: 'Un mini réseau social avec un back-end JavaScript',
        github: 'https://github.com/JustGJ/MERN-PROJECT-Social-Network',
        website: '',
        image: todoList,
    },
];

export default projects;
