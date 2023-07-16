import React, {FC} from 'react';
import s from './Project.module.css'

type ProjectType = {
    title: string
    text: string
}

const Project: FC<ProjectType> = ({title, text}) => {
    return (
        <div className={s.project}>
            <div className={s.picture}>
                <a className={s.link}></a>
            </div>
            <div className={s.boxText}>
                <h3 className={s.title}>{title}</h3>
                <p className={s.text}>{text}</p>
            </div>
        </div>
    );
};

export default Project;