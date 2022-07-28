import React from 'react';
import style from './Projects.module.css';
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text = {"Projects"} />
                <div className={style.project}>
                    <Project title={'social network'} description={'grthrgtrhryregrht tgrhrt trhdh'} />
                    <Project title={'todolist'} description={'rthrh fgbfgbfgb fgbfgbfgb fgbfbggtrfb frgbgfrbrfg rthyhjrt rthdthrt'} />
                </div>
            </div>
        </div>
    );
}

