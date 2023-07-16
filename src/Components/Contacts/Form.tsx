import React from 'react';
import s from './Form.module.css';
import Input from './Input';

const Form = () => {
    return (
        <form className={s.form}>
            <Input type={'text'} name={'name'} placeholder={'Имя'}/>
            <Input type={'tel'} name={'tel'} placeholder={'Телефон'}/>
            <textarea cols={40} rows={5} placeholder={'Ваше сообщение'}/>
            <button>Отправить</button>
        </form>
    );
};

export default Form;