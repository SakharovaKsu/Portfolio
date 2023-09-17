import React from 'react';
import {S} from './NavStyles'

const Nav = () => {
    const menuList = ['Skills', 'Portfolio', 'Contacts']

    return (
        <nav>
            <S.NavList>
                {menuList.map((m, index) => {
                    return (
                        <li key={index}>
                            <S.NavLink>{m}</S.NavLink>
                        </li>
                    )
                })}
            </S.NavList>
        </nav>
    );
};

export default Nav;