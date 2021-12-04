import React from 'react';

interface IProps {
    awesome?: string;
    image?: string;
    reactIcon?: string;
    text: string;
}

const Technos = ({ awesome, image, reactIcon, text }: IProps) => {
    return (
        <div className="techno__item">
            {awesome && <i className={awesome} />}
            {image && <img src={image} alt="stack icon" />}
            {reactIcon && reactIcon}
            <p>{text}</p>
        </div>
    );
};

export default Technos;
