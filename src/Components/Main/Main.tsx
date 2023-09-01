import React from 'react';
import s from './Main.module.css'
import '../../index.css'
import Button from '../Elements/Button';
import photo from '../../img/photo.png';

const Main = () => {
    return (
        <div className={'container'}>
            <div className={s.main}>
                <div className={s.boxText}>
                    <span className={s.text}> Hello, <b>my name is</b></span>
                    <h1 className={s.title}>Ksenia <b>Sakharova</b></h1>
                    <p className={s.subtitle}>I am a front-end developer</p>
                    <Button title={'My portfolio'}/>
                </div>
                <div className={s.photo}>
                    <img src={photo} alt={'Фото Ксении'}/>
                </div>
            </div>
        </div>
    );
};

export default Main;