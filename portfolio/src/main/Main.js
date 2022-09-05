import React from 'react';
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.scss'

function Main() {
    const name = "Kirill Pustynnikov"

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.media}>
                <div className={style.text}>
                    <span className={style.title}>Hi There</span>
                    <h1 className={style.name}><span>I am</span> <span className={style.myName}>{name}</span>
                    </h1>
                    <p className={style.description}>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
                </div>
            </div>
        </div>
    );
}
export default Main;
