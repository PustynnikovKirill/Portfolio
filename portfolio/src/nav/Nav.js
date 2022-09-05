import React from 'react';
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a className={style.list} href = ''>Main page</a>
            <a className={style.list} href = ''>Skills</a>
            <a className={style.list} href = ''>Projects</a>
            <a className={style.list} href = ''>Contacts</a>
        </div>
    );
}

export default Nav;
