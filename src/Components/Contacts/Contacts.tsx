import React from 'react';
import s from './Contacts.module.css'
import Input from './Input';
import Form from './Form';

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <h2 className={s.title}>Контакты</h2>
            <p className={s.text}>Можете со мной связаться удобным для вас способом</p>
            <a className={s.link} href={'tel:+79164713573'}>+7 (916) 471-35-73</a>
            <a className={s.link} href={'nagis38@gmail.com'}>nagis38@gmail.com</a>
            <Form/>
        </div>
    );
};

export default Contacts;