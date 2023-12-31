import React, {FC} from 'react';
import s from './Skill.module.css'

type SkillType = {
    title: string
    description: string
}

const Skill: FC<SkillType> = ({title, description}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>{description}</p>
        </div>
    );
};

export default Skill;