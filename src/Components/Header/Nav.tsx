import React from 'react';
import { NavListStyled } from './NavListStyled';
import {NavLinkStyled} from './NavLinkStyled';

const Nav = () => {
    const menuList = ['Skills', 'Portfolio', 'Contacts']

    return (
        <nav>
            <NavListStyled>
                {menuList.map((m, index) => {
                    return (
                        <li key={index}>
                            <NavLinkStyled>{m}</NavLinkStyled>
                        </li>
                    )
                })}
            </NavListStyled>
        </nav>
    );
};

export default Nav;