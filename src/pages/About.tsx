import React from 'react';

const About = () => {
    return (
        <>
            <div className="about">
                <h1 className="about__title">À propos</h1>
                <p className="about__desc">Tout savoir sur mon parcours.</p>
                <div className="about__journey">
                    <h2>Parcours</h2>
                    <div className="about__journey__content">
                        <h3>Apprentissage autodidacte</h3>
                        <p>
                            J'apprends le développement web spécialisé front-end en autodidacte
                            depuis septembre 2020. Cet apprentissage a réveillé en moi, une
                            véritable passion pour ce métier, avec un profond intérêt pour la
                            bibliothèque React. Les plateformes d'apprentissage telles que H2prog,
                            OpenClassroom, Grafikart, Udemy, m'ont permis d'acquérir des
                            technologies et compétences solides, afin de les mettre en pratique dans
                            différents projets personnels.
                        </p>
                        <h3>Formation</h3>
                        <p>
                            J’ai récemment été admis à la Wild Code School de Bordeaux pour la
                            formation avancée de développeur web / mobile sur 12 mois en alternance
                            dès mars 2022, afin de consolider et mettre en pratique mes compétences.
                            Le travail en équipe, l'entraide, la communication, et l'autonomie sont
                            pour moi des compétences et des valeurs importantes. Je recherche
                            activement une alternance sur Bordeaux en contrat d'apprentissage, avec
                            pour rythme : 3 semaines d'entreprise / 1 semaine d'école dans le but de
                            valider mon année à la Wild Code School. Cette année de formation me
                            mènera au passage du titre “Concepteur Développeur d’Applications”,
                            inscrit au RNCP (équivalent bac + 3/4), et de démarrer ma nouvelle
                            carrière professionnelle dans ce monde qui me passionne tant.
                        </p>

                        <h3>Objectifs</h3>
                        <p>
                            Passionné par l'environnement JavaScript, j'ai toujours besoin de
                            repousser mes limites, de créer de nouvelles applications, d'apprendre
                            les bonnes pratiques, et surtout de produire du code de qualité.
                            Apprendre React Native est la prochaine étape dans mon cursus
                            d'apprentissage. De plus, je suis ouvert à l'apprentissage d'autres
                            technologies selon les besoins de l'entreprise.
                        </p>
                        <h3>FullStack</h3>
                        <p>
                            Etant familier avec JavaScript, je trouve la réalisation d'un Back-end
                            avec ce même langage très intéressante. C'est pour cela que j'ai décidé
                            de m'y interresser, et de réaliser un mini réseau social en MERN project
                            (Mongo, Express, React, Nodejs) avec une structure MVC, afin de tester
                            et mettre en pratique ces nouvelles technologies.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
