import React from 'react';

const Skill = ({ icon, text }: any) => {
    return (
        <div>
            <i className={icon} />
            <p>{text}</p>
        </div>
    );
};

export default Skill;
