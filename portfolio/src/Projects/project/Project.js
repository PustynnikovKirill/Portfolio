import React from 'react';
import style from './Project.module.css';

export const Project = (props) => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.photo}>
                <a href=''>Смотреть</a>
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}

