import React from 'react';
import style from './Projects.module.css';
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todolists.jpg'
import socialImage from './../assets/image/social-network.jpg'

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text = {"Projects"} />
                <div className={style.project}>
                    <Project style = {social} title={'social network'} description={'Lorem ipsum dolor'} />
                    <Project style = {todolist} title={'todolist'} description={'Lorem ipsum dolor'} />
                </div>
            </div>
        </div>
    );
}

