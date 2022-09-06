import React from 'react';
import style from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title text = {"Contacts"} />
                {/*<h2 className={style.title}>Contacts</h2>*/}
                <form className={style.contacts}>
                    <input type="text" placeholder= "Name" className={style.inputName}/>
                    <input type="text" placeholder= "E-mail" className={style.inputEMail}/>
                    <textarea type="text" placeholder= "Your message"  className={style.textarea}/>
                </form>
                <button className={style.button}>SEND MESSAGE</button>
            </div>
        </div>
    );
}