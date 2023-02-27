import React, {useRef} from 'react';
import style from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser'


export const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault()
        emailjs.sendForm('service_kwu9dgq', 'template_24uscl8',form.current, 'N2C43bON1G2ppDGXc')
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error)
            })
    }
    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <Fade left>
                <div className={style.contactsContainer}>
                    <Title
                        text={"Contacts"}
                    />
                    <form ref={form} onSubmit={sendEmail} className={style.contacts}>
                        <input type="text"
                               placeholder="Name"
                               className={style.inputName}
                               name='name'
                        />
                        <input
                            type="text"
                            placeholder="E-mail"
                            className={style.inputEMail}
                            name='email'
                        />
                        <textarea
                            type="text"
                            placeholder="Your message"
                            className={style.textarea}
                            name='yourMessage'
                        />
                        <button type='submit' className={style.button}>SEND MESSAGE</button>
                    </form>

                </div>
            </Fade>
        </div>
    );
}