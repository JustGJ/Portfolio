import React, { useEffect, useState } from 'react';
import MongoDB from '../assets/images/mongodb.png';
import Skill from '../components/Skill';
import data from '../data/skills.json';

interface ITechno {
    icon: string;
    text: string;
}

const Technologies = () => {
    // const [technos, setTechnos] = useState<ITechno[]>([]);
    // useEffect(() => {
    //     setTechnos(data);
    // }, [technos]);
    const skills: any = data;

    return (
        <div className="technologies">
            <p className="technologies__desc">
                Utiliser des technologies et outils modernes est important selon moi.
                <br />
                Voici ce quej'ai pu utiliser dans mes projets jusqu'à présent.
            </p>
            <div className="technologies__content">
                <div className="technologies__content__technos">
                    <h2>Technologies</h2>
                    <div className="technos__list">
                        <div className="techno__item">
                            <i className="fab fa-html5" />
                            <p>HTML5, JSX</p>
                        </div>
                        <div className="techno__item">
                            <i className="fab fa-sass" />
                            <p>CSS3, SCSS</p>
                        </div>
                        <div className="techno__item">
                            <i className="fab fa-js" />
                            <p>JavaScript</p>
                        </div>
                        <div className="techno__item">
                            <i className="fab fa-react" />
                            <p>React, Redux</p>
                        </div>
                        <div className="techno__item">
                            <i className="fab fa-node" />
                            <p>Node.js</p>
                        </div>
                    </div>
                </div>

                <div className="technologies__content__technos">
                    <h2>Outils</h2>
                    <div className="technos__list">
                        <div className="techno__item">
                            <i className="fab fa-git" />
                            <p>Git</p>
                        </div>
                        <div className="techno__item">
                            <i className="fab fa-github" />
                            <p>Github</p>
                        </div>
                        <div className="techno__item">
                            <i className="fab fa-trello" />
                            <p>Trello</p>
                        </div>
                        <div className="techno__item">
                            <i className="fas fa-code" />
                            <p>VSCode</p>
                        </div>
                        <div className="techno__item">
                            <i className="fab fa-discord" />
                            <p>Discord</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
