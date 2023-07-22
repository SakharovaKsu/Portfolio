import React from 'react';
import s from './Portfolio.module.css'
import Project from './Project';
import '../../index.css'

const Portfolio = () => {
    return (
        <div className={'container'}>
            <div className={s.portfolio}>
                <h2 className={s.title}>Портфолио</h2>
                <div className={s.boxProject}>
                    <Project title={'User list'} text={'Краткое описание'}/>
                    <Project title={'Counter'} text={'Краткое описание'}/>
                    <Project title={'Social media'} text={'Краткое описание'}/>
                    <Project title={'Fitness'} text={'Краткое описание'}/>
                    <Project title={'Cruises to Antarctica'} text={'Краткое описание'}/>
                    <Project title={'Smart Device'} text={'Краткое описание'}/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;