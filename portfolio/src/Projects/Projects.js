import React from 'react';
import style from './Projects.module.scss';
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todolists.jpg'
import socialImage from './../assets/image/social-network.jpg'
import Fade from 'react-reveal/Fade';

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div id="projects" className={style.projectsBlock}>
            <Fade bottom>
                <div className={style.projectsContainer}>
                    <Title text={"Projects"}/>
                    <div className={style.project}>
                        <Project style={social} title={'social network'} description={'Lorem ipsum dolor'}/>
                        <Project style={todolist} title={'todolist'} description={'Lorem ipsum dolor'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

