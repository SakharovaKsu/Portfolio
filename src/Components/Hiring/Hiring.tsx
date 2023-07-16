import React from 'react';
import s from './Hiring.module.css'

const Hiring = () => {
    return (
        <div className={s.hiring}>
            <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
            <button className={s.button}>Нанять меня</button>
        </div>
    );
};

export default Hiring;