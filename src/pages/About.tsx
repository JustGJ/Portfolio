import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">À propos</h1>
            <div className="about__content">
                <p className="about__content__desc">Tout savoir sur mon parcours.</p>
                <div className="about__content__journey">
                    <h2>Parcours</h2>
                    <div className="about__content__journey__content">
                        <h3>Apprentissage autodidacte</h3>
                        <p>
                            J'apprends le développement web spécialisé front-end en autodidacte
                            depuis septembre 2020. Cet apprentissage a réveillé en moi, une
                            véritable passion pour ce métier, avec un profond intérêt pour la
                            bibliothèque React. Les plateformes d'apprentissage telles que
                            OpenClassroom, Grafikart, Udemy, H2PROG, m'ont permis d'acquérir des
                            technologies et compétences solides, afin de les mettre en pratique dans
                            différents projets personnels.
                        </p>
                        <h3>Formation</h3>
                        <p>
                            J’ai récemment intégré la formation avancée de la Wild Code School en
                            alternance sur 12 mois, afin de consolider et mettre en pratique mes
                            compétences. Le travail en équipe, l'entraide, la communication, et
                            l'autonomie sont pour moi des compétences et des valeurs importantes. Je
                            recherche activement une alternance sur Bordeaux et ses alentours afin
                            de valider mon année à la Wild Code School. Cette année de formation me
                            mènera au passage du titre “Concepteur Développeur d’Applications”,
                            inscrit au RNCP (équivalent bac + 4), et de démarrer ma nouvelle
                            carrière professionnelle dans ce monde qui me passionne tant.
                        </p>

                        <h3>Objectifs</h3>
                        <p>
                            Passionné par l'environnement JavaScript, j'ai toujours besoin de
                            repousser mes limites, de créer de nouvelles applications, d'apprendre
                            les bonnes pratiques, et surtout de produire du code de qualité.
                            Apprendre React Native est la prochaine étape dans mon cursus
                            d'apprentissage.
                        </p>
                        <h3>FullStack</h3>
                        <p>
                            Etant familier avec JavaScript, je trouve la réalisation d'un Back-end
                            avec ce même langage très intéressante. C'est pour cela que j'ai décidé
                            de m'y interresser, et de produire un mini réseau social en MERN project
                            (Mongo, React, Express, Nodejs), afin de tester et mettre en pratique
                            ces nouvelles technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

{
    /* <div className="technologies__content__skills">
                    <h2>Technologies</h2>
                    {skills.map((skill: any) => {
                        if (skill.type === 'techno')
                            techs.push(<Skill icon={skill.icon} text={skill.text} />);
                        else tools.push(<Skill icon={skill.icon} text={skill.text} />);
                    })}
                    <div className="technologies__content__skills__techno">
                        <h2>Technologies</h2>
                        {techs}
                    </div>
                    <div className="technologies__content__skills__tools">
                        <h2>Outils</h2>
                        {tools}
                    </div>
                </div> */
}
