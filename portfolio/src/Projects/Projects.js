import React from 'react';
import style from './Projects.module.css';
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.project}>
                    <Project title={'social network'} description={'grthrgtrhryregrht tgrhrt trhdh'} />
                    <Project title={'todolist'} description={'rthrh fgbfgbfgb fgbfgbfgb fgbfbggtrfb frgbgfrbrfg rthyhjrt rthdthrt'} />
                </div>
            </div>
        </div>
    );
}

