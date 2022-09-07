import React from 'react';
import style from './Footer.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJava, faMeta} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {

    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h3 className={style.title}>Pustynnikov Kirill</h3>
                <div className={style.footer}>
                    <div className={style.f}>{<FontAwesomeIcon icon={faMeta}/>}</div>
                    <div className={style.f}></div>
                    <div className={style.f}></div>
                    <div className={style.f}></div>
                </div>
                <span className={style.span}>2022 All Rights Reserved.</span>
            </div>
        </div>
    );
}