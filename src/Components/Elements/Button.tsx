import React, {FC} from 'react';
import s from './Button.module.css'

type ButtonType = {
    title: string
}

const Button:FC<ButtonType> = ({title}) => {
    return (
        <button className={s.button}>
            {title}
        </button>
    );
};

export default Button;