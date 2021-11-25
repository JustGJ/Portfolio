import React from 'react';

interface IProps {
    fullName: string;
    react?: string;
    scss?: string;
    typescript?: string;
    redux?: string;
    nodejs?: string;
    mongodb?: string;
    description: string;
    github: string;
    website: string;
    image: string;
    stacks: any;
}

const Card = ({ fullName, description, github, website, image, stacks }: IProps) => {
    return (
        <>
            <div className="card">
                <div className="card__face1">
                    <img src={image} alt="" />
                </div>
                <div className="card__face2">
                    <ul className="face2__stack">
                        {stacks.map((stack: any) => (
                            <li>
                                <img src={stack} alt={`${stack} icon`} />
                            </li>
                        ))}
                    </ul>
                    <p className="face2__description">{description}</p>
                    <div className="face2__links">
                        <a href={website} rel="noopener noreferrer" target="_blank">
                            <i className="fas fa-external-link-square-alt" />
                        </a>
                        <a href={github} rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                </div>
                <h3>{fullName}</h3>
            </div>
        </>
    );
};

export default Card;
