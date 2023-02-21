import React from 'react';
import style from './Footer.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faJava, faLinkedin, faMeta, faTelegram} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';



export const Footer = () => {

    return (
        <div className={style.footerBlock}>
            <Fade bottom>
                <div className={style.footerContainer}>
                    <h3 className={style.title}>Pustynnikov Kirill</h3>
                    <div className={style.footer}>
                        <div className={style.f}>{<a className={style.a} href='https://github.com/PustynnikovKirill'><FontAwesomeIcon icon={faGithub} className={style.icon}/></a>}</div>
                        <div className={style.f} >{<a className={style.a} href='https://t.me/kirill911007'><FontAwesomeIcon icon={faTelegram} className={style.icon}/></a>}</div>
                        <div className={style.f}>{<a className={style.a} href='https://www.linkedin.com/in/kirill-pustynnikov-050829259/'><FontAwesomeIcon icon={faLinkedin} className={style.icon}/></a>}</div>
                        <div className={style.f}>{<a className={style.a} href='https://www.instagram.com/kiryuha_ov/'><FontAwesomeIcon icon={faInstagram} className={style.icon}/></a>}</div>
                    </div>
                    <span className={style.span}>2022 All Rights Reserved.</span>
                </div>
            </Fade>
        </div>
    );
}