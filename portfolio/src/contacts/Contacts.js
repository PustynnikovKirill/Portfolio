import React, {useEffect, useRef, useState} from 'react';
import style from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser'


export const Contacts = () => {
    let [inputValueName, setInputValueName] = useState('')
    let [inputValueEmail, setInputValueEmail] = useState('')
    let [inputValueMessage, setInputValueMessage] = useState('')
    let [disabled,setDisabled] = useState(false)

    let [errors, setError] = useState('')
    //
    // const setInputValueEmailHandler = (e) => {
    //     if (!e) {
    //         setError('Required')
    //         setDisabled(true)
    //     }
    //     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.currentTarget.value)) {
    //         setError('Invalid email address')
    //         setDisabled(true)
    //     } else {
    //         setError('')
    //         setDisabled(false)
    //     }
    //     setInputValueEmail(e.currentTarget.value)
    //
    // }

    const changeTextEmail = (e) => {
        setInputValueEmail(e.currentTarget.value)
        setError('')
    }

    const setInputValueEmailHandler = () => {
        if (!inputValueEmail) {
            setError('Required')
            setDisabled(true)
            return false
        }
        if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(inputValueEmail)) {
            setError('Invalid email address')
            // setDisabled(true)
            return false
        }
        return true
    }


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
       if(setInputValueEmailHandler()){
           setInputValueName('')
           setInputValueEmail('')
           setInputValueMessage('')
           emailjs.sendForm('service_kwu9dgq', 'template_24uscl8', form.current, 'N2C43bON1G2ppDGXc')
               .then((result) => {
                   console.log(result)
               }, (error) => {
                   console.log(error)
               })
       }
    }

    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <Fade left>
                <div className={style.contactsContainer}>
                    <Title
                        text={"Contacts"}
                    />
                    <form name={'form'} ref={form} onSubmit={sendEmail} className={style.contacts}>
                        <input type="text"
                               placeholder="Name"
                               className={style.inputName}
                               name='name'
                               value={inputValueName}
                               onChange={(e)=>setInputValueName(e.currentTarget.value)}
                        />
                        <input
                            type="text"
                            placeholder="E-mail"
                            className={style.inputEMail}
                            name='email'
                            value={inputValueEmail}
                            onChange={changeTextEmail}
                            style={errors === 'Required' || errors === 'Invalid email address' ? {color: 'red'} : null}

                        />

                        <textarea
                            type="text"
                            placeholder="Your message"
                            className={style.textarea}
                            name='yourMessage'
                            value={inputValueMessage}
                            onChange={(e) => setInputValueMessage(e.currentTarget.value)}
                        />
                        <button type='submit' disabled={disabled} className={style.button}>SEND MESSAGE
                        </button>
                    </form>

                </div>
            </Fade>
        </div>
    );
}