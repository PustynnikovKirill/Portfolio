import React from 'react';
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.scss';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

function Main() {
    const name = "Kirill Pustynnikov"

    return (
        <div  id={"main"}  className={style.mainBlock}>
            <Fade top>
                <div className={styleContainer.container}>
                    <div className={style.media}>
                        <div className={style.text}>
                            <span className={style.title}>Hi There</span>
                            <h1 className={style.name}><span>I am</span> <span className={style.myName}>{name}</span>
                            </h1>
                            <p className={style.description}><ReactTypingEffect
                                text={["Frontend Developer"]}
                            /></p>
                        </div>
                        <Tilt className="Tilt" options={{max: 25}}>
                            <div className={style.photo}>
                                <div className={style.image}>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Main;
