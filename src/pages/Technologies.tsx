import { icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import Technos from '../components/Technos';
import technos from '../data/technos';

interface ITechno {
    type: string;
    icon: string;
    text: string;
}

const Technologies = () => {
    console.log(technos);
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
                        {technos.map((techno: ITechno) => {
                            if (techno.type === 'techno') {
                                return (
                                    <div className="techno__item">
                                        <i className={techno.icon} />
                                        <p>{techno.text}</p>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                <div className="technologies__content__technos">
                    <h2>Outils</h2>
                    <div className="technos__list">
                        {technos.map((techno: ITechno) => {
                            if (techno.type === 'tool') {
                                return (
                                    <div className="techno__item">
                                        <i className={techno.icon} />
                                        <p>{techno.text}</p>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
