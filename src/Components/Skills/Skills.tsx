import React from 'react';
import s from './Skills.module.css'
import Skill from './Skill';

const Skills = () => {
    return (
        <div className={s.skills}>
           <h2 className={s.title}>Мои профессиональные скиллы</h2>
            <div className={s.boxSkill}>
                <Skill title={'UX/UI'} description={'Описание'}/>
                <Skill title={'HTML'} description={'Описание'}/>
                <Skill title={'CSS'} description={'Описание'}/>
                <Skill title={'JS'} description={'Описание'}/>
                <Skill title={'React'} description={'Описание'}/>
                <Skill title={'TypeScript'} description={'Описание'}/>
            </div>
        </div>
    );
};

export default Skills;