import React from 'react';
import projects from '../data/projects';
import Card from '../components/Card';

const Projects = () => {
    return (
        <div className="projects">
            <p className="projects__desc">Vous trouverez ici, quelques une des mes créations.</p>
            <div className="projects__cards">
                {projects.map((project, index) => (
                    <Card key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
