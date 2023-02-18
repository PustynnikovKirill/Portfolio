import React from 'react';
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";


function Nav() {
    return (
        <div className={style.nav}>
            {/*<a className={style.list} href = ''>Main page</a>*/}
            {/*<a className={style.list} href = ''>Skills</a>*/}
            {/*<a className={style.list} href = "#projects">Projects</a>*/}
            {/*<a className={style.list} href = ''>Contacts</a>*/}
            <Link className = {style.list} to="main"

            >Main page</Link>
            <Link className = {style.list}
                  activeClass = {style.active}
                  to="projects"
                  spy = {true}
                  smooth = {true}
                  offset = {-65}
                  duration = {500}
            >Projects</Link>
            <Link className = {style.list}
                  activeClass = {style.active}
                  to="contacts"
                  spy = {true}
                  smooth = {true}
                  offset = {1}
                  duration = {500}
            >Contacts</Link>
            <Link className = {style.list}
                  to="skills"
                  activeClass = {style.active}
                  spy = {true}
                  smooth = {true}
                  offset = {-50}
                  duration = {500}
            >Skills</Link>


        </div>
    );
}

export default Nav;
