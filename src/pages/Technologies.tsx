import React from 'react';
import technos from '../data/technos';

interface ITechno {
    type: string;
    icon?: string;
    image?: any;
    text: string;
}

const Technologies = () => {
    return (
        <div className="technologies">
            <p className="technologies__desc">
                Voici ce que j'ai pu utiliser dans mes projets jusqu'à présent.
            </p>
            <div className="technologies__content">
                <div className="technologies__content__technos">
                    <h2>Technologies</h2>
                    <div className="technos__list">
                        {technos.map((techno: ITechno, index) => {
                            if (techno.type === 'techno') {
                                console.log(techno.image);
                                return (
                                    <div key={index} className="techno__item">
                                        {techno.icon ? (
                                            <i className={techno.icon} />
                                        ) : (
                                            <img src={techno.image} alt="express icon" />
                                        )}
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
                        {technos.map((techno: ITechno, index) => {
                            if (techno.type === 'tool') {
                                return (
                                    <div key={index} className="techno__item">
                                        {techno.icon ? <i className={techno.icon} /> : techno.image}
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
