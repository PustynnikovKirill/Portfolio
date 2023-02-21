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
                               description={'Confident instrument control.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faReact}/>} title={'React/Redux'}
                               description={'Confident instrument control.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faCss3Alt}/>} title={'CSS/SCSS'}
                               description={'Confident instrument control.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faH}/>} title={'HTML5'}
                               description={'Confident instrument control.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faGithub}/>} title={'GitHub/Git'}
                               description={'Confident instrument control.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faA}/>} title={'Axios'}
                                description={'Confident instrument control.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faR}/>} title={'React Hooks'}
                               description={'Confident instrument control.'}/>
                        <Skill fas={<FontAwesomeIcon icon={faF}/>} title={'Formik'}
                               description={'Confident instrument control.'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;