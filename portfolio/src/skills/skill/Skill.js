import React from 'react';
import style from './Skill.module.scss';

function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}>
                <i className={style.fas}>{props.fas}</i>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>

        </div>
    );
}

export default Skill;