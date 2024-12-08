
const About = () => {
    return (
        <>
            <div className="about">
                <h1 className="about__title">À propos</h1>
                <p className="about__desc">Tout savoir sur mon parcours.</p>
                <div className="about__journey">
                    <h2>Parcours</h2>
                    <div className="about__journey__content">
                        <h3 style={{textDecoration: 'underline'}}>Apprentissage autodidacte</h3>
                        <p>
                            Passionné par le développement web, j'ai commencé mon apprentissage en autodidacte en 2020 
                            après une première carrière en tant que manager dans la restauration. 
                            J'ai exploré de nombreuses ressources en ligne pour me former sur les bases du développement, 
                            ce qui m'a permis de développer des compétences solides, notamment en React et React Native. 
                            Cet apprentissage autonome a forgé mon autonomie, 
                            ma curiosité et ma capacité à résoudre des problèmes complexes.
                        </p>
                        <h3 style={{textDecoration: 'underline'}}>Formation</h3>
                        <p>
                            En 2022, j'ai intégré la Wild Code School dans le cadre d'une alternance pour consolider mes acquis et 
                            obtenir un diplôme équivalent Bac +4, reconnu au RNCP. Cette formation m'a permis d'approfondir mes 
                            compétences techniques tout en développant des qualités humaines essentielles telles que le travail en équipe, 
                            la communication et l'entraide.
                            En parallèle, l'expérience pratique acquise en entreprise a enrichi mon apprentissage théorique 
                            et m'a permis de m'adapter aux exigences du monde professionnel.
                        </p>
                        <h3 style={{textDecoration: 'underline'}}>Entreprise : ALCOM Technologies </h3>
                        <p>
                        Depuis 2022, je collabore avec ALCOM Technologies, d'abord en alternance, puis en CDI à partir de 2023. 
                        Cette entreprise innovante utilise l'intelligence artificielle pour résoudre des problématiques concrètes comme 
                        la détection de fuites d'eau, le contrôle de vignes, ou encore la prédiction de crues.
                        <br/><br/>
                        En tant que développeur React / React Native, j'ai travaillé à la création d'interfaces utilisateur robustes, 
                        ergonomiques et performantes, en lien direct avec les équipes IA et Back-End. 
                        <br/><br/>
                        Mon rôle impliquait de concevoir des solutions permettant de visualiser des données complexes, 
                        comme des résultats statistiques et des prévisions, de manière claire et intuitive.
                        <br/><br/>
                        Points marquants de mon travail :    
                        <br/><br/>       
                        <ul>
                            <li>                       
                                - Conception d'interfaces interactives et performantes (React, React Native).
                            </li>
                            <li>                
                                - Contribution à l'API en .NET avec des fonctionnalités spécifiques.
                            </li>
                            <li>
                                - Mise en place de tests unitaires, atteignant une couverture de 85 %.
                            </li>
                            <li>
                                - Collaboration transversale avec les équipes pour garantir des solutions de qualité respectant les bonnes pratiques.
                            </li>
                        </ul>
                        <br/><br/>
                        J'aime analyser les besoins des projets et réfléchir aux technologies les plus adaptées pour répondre aux attentes. 
                        Mon objectif est de produire un code de qualité tout en contribuant à l'évolution de mes collègues et de l'entreprise.
                        </p>
                        <h3 style={{textDecoration: 'underline'}}>Projet personnel : Fitastic</h3>
                        <p>
                        En parallèle de mon activité professionnelle, je développe Fitastic, une application mobile dédiée au suivi des performances sportives, en cours de réalisation avec React Native et Spring Boot.
                        <br/><br/>
                        L'application permet :
                        <br/><br/>
                        <ul>
                            <li>- De créer et organiser des séances d'entraînement et des exercices personnalisés.</li>
                            <li>- De suivre les performances avec précision et clarté.</li>
                        </ul>
                        <br/><br/>
                            J'ai imaginé ce projet pour répondre à un besoin personnel et professionnel : 
                            les applications actuelles manquent souvent d'une interface utilisateur claire et intuitive. Fitastic est un projet sérieux et ambitieux, 
                            qui reflète ma passion pour la musculation au poids de corps et mon envie d'allier technologie et utilité concrète.
                        </p>
                        <h3 style={{textDecoration: 'underline'}}>Objectifs</h3>
                        <p>
                        Mon principal objectif est de continuer à progresser dans le développement web et mobile, en restant à jour sur les meilleures pratiques et les nouvelles technologies. Je souhaite produire un code de qualité, maintenable et performant, tout en cherchant constamment à améliorer mes compétences.
                        Je suis également motivé par le partage des connaissances : j'aime aider mes collègues, collaborer en équipe, et contribuer à la réussite collective des projets.
                        Enfin, je suis toujours à la recherche de nouveaux défis. J’aime m’impliquer dans des projets innovants et ambitieux, où je peux mettre à profit ma curiosité, ma rigueur, et ma passion pour le développement.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
