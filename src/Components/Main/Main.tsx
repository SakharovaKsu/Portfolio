import React from 'react';
import s from './Main.module.css'
import '../../index.css'
import Button from '../Elements/Button';

const Main = () => {
    return (
        <div className={'container'}>
            <div className={s.main}>
                <div className={s.boxText}>
                    <span>Привет, меня зовут</span>
                    <h1 className={s.title}>Ксения Сахарова</h1>
                    <p className={s.text}>Я front-end разработчик</p>
                    <Button title={'Мое портфолио'}/>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;