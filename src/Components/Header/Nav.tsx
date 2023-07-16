import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <a className={s.link}>Главная</a>
                </li>
                <li className={s.item}>
                    <a className={s.link}>Скиллы</a>
                </li>
                <li className={s.item}>
                    <a className={s.link}>Портфолио</a>
                </li>
                <li className={s.item}>
                    <a className={s.link}>Контакты</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;