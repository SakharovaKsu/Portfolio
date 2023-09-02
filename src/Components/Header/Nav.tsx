import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    const menuList = ['Skills', 'Portfolio', 'Contacts']

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {menuList.map(m => {
                    return (
                        <li className={s.item}>
                            <a className={s.link}>{m}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Nav;