import React from 'react';
import s from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={s.about}>
            <div className={s.boxText}>
                <h2 className={s.title}>Обо мне</h2>
                <p className={s.text}>Я являюсь активным front-end разработчиком, стремящимся постоянно развиваться и быть в курсе последних тенденций. Мои профессиональные навыки в IT сфере уже несколько лет, однако мой путь начался как UX/UI дизайнера. В процессе работы над прототипами сайтов и приложений, я заинтересовалась тем, как они создаются изнутри с использованием кода, и это увлечение привело меня к разработке front-end.</p>
            </div>
            <div className={s.photo}></div>
        </div>
    );
};

export default AboutMe;