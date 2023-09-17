import React, {FC} from 'react';
import {ButtonStyles} from './ButtonStyles'

type ButtonType = {
    title: string
}

const Button:FC<ButtonType> = ({title}) => {
    return (
        <ButtonStyles>
            {title}
        </ButtonStyles>
    );
};

export default Button;