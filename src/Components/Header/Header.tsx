import React from 'react';
import {HeaderStyled} from './HeaderStyled'
import Nav from './Nav';

const Header = () => {
    return (
        <HeaderStyled>
            <Nav/>
        </HeaderStyled>
    );
};

export default Header;