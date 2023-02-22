import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import socialImage from "../assets/image/social-network.jpg";
import imageJS from "../assets/image/JS.png";
import imageCSS from "../assets/image/CSS.png";
import imageREACT from "../assets/image/REACT.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3Alt, faGithub, faJava, faReact} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import {faA, faEnvelope, faF, faH, faR} from '@fortawesome/free-solid-svg-icons';

function Skills() {
    const JS = {
        backgroundImage: `url(${imageJS})`,
    };
    const CSS = {
        backgroundImage: `url(${imageCSS})`,
    };
    const REACT = {
        backgroundImage: `url(${imageREACT})`,
    };
    return (
        <div id="skills" className={style.skillsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title text={"Skills"}/>
                    <div className={style.skills}>
                        <Skill fas={<FontAwesomeIcon icon={faJava}/>} title={'JS/TS'}
                               description={'Using the latest language features. Using typescript on projects to minimize errors.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faReact}/>} title={'React/Redux'}
                               description={'Using React Functional Components and Hooks to create a SPA. Using Redux to manage the state of applications.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faCss3Alt}/>} title={'CSS/SCSS'}
                               description={'Using CSS3 in projects, including the SAS preprocessor.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faH}/>} title={'HTML5'}
                               description={'Using semantic tags, Flexbox and Grid in HTML coding.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faGithub}/>} title={'GitHub/Git'}
                               description={'Using Git to track and maintain the history of file changes in projects.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faA}/>} title={'Axios'}
                                description={'Using promise-based Axios, which allows you to take advantage of JavaScript async and await more readable asynchronous code.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faR}/>} title={'React Hooks'}
                               description={'Using Hooks allow function components to have access to state and other React features.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faF}/>} title={'Formik'}
                               description={'Confident instrument control.'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;