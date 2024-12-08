import Technos from '../components/Technos';
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
            <h1 className="technologies__title">Technologies & Outils</h1>
            <p className="technologies__desc">
            Voici les technologies que j'ai utilisées dans le cadre de projets professionnels en entreprise et personnels.</p>
            <div className="technologies__content">
                <div className="technologies__content__technos">
                    <h2>Technologies</h2>
                    <div className="technos__list">
                        {technos.map((techno: ITechno, index) => {
                            return techno.type === 'techno' ? (
                                <Technos key={index} {...techno} />
                            ) : null;
                        })}
                    </div>
                </div>

                <div className="technologies__content__technos">
                    <h2>Outils</h2>
                    <div className="technos__list">
                        {technos.map((techno: ITechno, index) => {
                            return techno.type === 'tool' ? (
                                <Technos key={index} {...techno} />
                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
