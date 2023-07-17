import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <h2 className={s.title}>Ксения Сахарова</h2>
            <ul className={s.list}>
                <li className={s.item}>
                    <a className={s.link}></a>
                </li>
                <li className={s.item}>
                    <a className={s.link}></a>
                </li>
                <li className={s.item}>
                    <a className={s.link}></a>
                </li>
            </ul>
            <p className={s.text}>Все права защищены 2023г.</p>
        </footer>
    );
};

export default Footer;