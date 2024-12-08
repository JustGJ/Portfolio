import projects from '../data/projects';
import Card from '../components/Card';

const Projects = () => {
    return (
        <div className="portfolio">
            <h1 className="portfolio__title">Portfolio</h1>
            <p className="portfolio__desc">Vous trouverez ici, quelques une des mes créations personnelles.</p> 
            <div className="portfolio__cards">
                {projects.map((project, index) => (
                    <Card key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
