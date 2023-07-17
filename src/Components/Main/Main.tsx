import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.boxText}>
                <span>Привет, меня зовут</span>
                <h1 className={s.title}>Ксения Сахарова</h1>
                <p className={s.text}>Я front-end разработчик</p>
                <button className={s.button}>Мое портфолио</button>
            </div>
            <div className={s.photo}></div>
        </div>
    );
};

export default Main;