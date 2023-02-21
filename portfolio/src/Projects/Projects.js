import React from 'react';
import style from './Projects.module.scss';
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todolists.jpg'
import socialImage from './../assets/image/social-network.jpg'
import cardsImage from './../assets/image/cards.jpg'

import Fade from 'react-reveal/Fade';

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const cards = {
        backgroundImage: `url(${cardsImage})`,
    };

    return (
        <div id="projects" className={style.projectsBlock}>
            <Fade bottom>
                <div className={style.projectsContainer}>
                    <Title text={"Projects"}/>
                    <div className={style.project}>
                        <Project style={social} title={'social network'} description={'Communicate with friends, relatives, acquaintances'}/>
                        <Project style={todolist} title={'todolist'} description={'Write down your tasks, notes.'}/>
                        <Project style={cards} title={'cards'} description={'Learn, grow.'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

