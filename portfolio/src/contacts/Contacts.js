import React from 'react';
import style from './Contacts.module.css';


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contacts}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button className={style.button}>send</button>
            </div>
        </div>
    );
}