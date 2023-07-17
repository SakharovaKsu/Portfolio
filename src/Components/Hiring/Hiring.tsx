import React from 'react';
import s from './Hiring.module.css'
import Button from '../Elements/Button';

const Hiring = () => {
    return (
        <div className={s.hiring}>
            <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
            <Button title={'Нанять меня'}/>
        </div>
    );
};

export default Hiring;