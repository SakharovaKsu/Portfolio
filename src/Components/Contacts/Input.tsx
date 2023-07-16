import React, {FC} from 'react';
import s from './Input.module.css';

type InputType = {
    type: string
    name: string
    placeholder: string
}

const Input:FC<InputType> = ({type, name, placeholder}) => {
    return (
        <div>
            <input className={s.input} type={type} name={name} placeholder={placeholder}/>
        </div>
    );
};

export default Input;