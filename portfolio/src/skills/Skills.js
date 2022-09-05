import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import socialImage from "../assets/image/social-network.jpg";
import imageJS from "../assets/image/JS.png";
import imageCSS from "../assets/image/CSS.png";
import imageREACT from "../assets/image/REACT.png";

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
        <div className={style.skillsBlock}>
            <div className = {`${styleContainer.container} ${style.skillsContainer}`} >
                <Title text = {"Skills"} />
                <div className={style.skills}>
                    <Skill fas = {'js'}  title = {'JS'} description={'fsgbvdfgfbvfgbfgbsfb sfgbsfgbsfrbfrgb sfgbrwtbgrwgb'}/>
                    <Skill  fas = {'css'} title = {'CSS'} description={'fsgbvdfgfbvfgbfgbsfb sfgbsfgbsfrbfrgb sfgbrwtbgrwgb'}/>
                    <Skill  fas = {'react'}  title = {'REACT'} description={'fsgbvdfgfbvfgbfgbsfb sfgbsfgbsfrbfrgb sfgbrwtbgrwgb'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;