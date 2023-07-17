import React from 'react';
import s from './Form.module.css';
import Input from './Input';
import Button from '../Elements/Button';

const Form = () => {
    return (
        <form className={s.form}>
            <Input type={'text'} name={'name'} placeholder={'Имя'}/>
            <Input type={'tel'} name={'tel'} placeholder={'Телефон'}/>
            <textarea className={s.textarea} cols={40} rows={5} placeholder={'Ваше сообщение'}/>
            <Button title={'Отправить'}/>
        </form>
    );
};

export default Form;