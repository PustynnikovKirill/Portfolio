import React from 'react';
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
    return (
        <div className={style.nav}>
            <a className={style.list} href = ''>Main page</a>
            <a className={style.list} href = ''>Skills</a>
            {/*<a className={style.list} href = "#projects">Projects</a>*/}
            <Link activeClass={style.list} to="projects">Projects</Link>
            <a className={style.list} href = ''>Contacts</a>
        </div>
    );
}

export default Nav;
