import React from 'react';
import style from './Footer.module.css';


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h3 className={style.title}>Pustynnikov Kirill</h3>
                <div className={style.footer}>
                    <div className={style.f}></div>
                    <div className={style.f}></div>
                    <div className={style.f}></div>
                    <div className={style.f}></div>
                </div>
                <span className={style.span}>2022 Все права защищены</span>
            </div>
        </div>
    );
}