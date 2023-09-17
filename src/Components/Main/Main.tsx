import React from 'react';
import '../../index.css'
import Button from '../Elements/Button';
import photo from '../../img/photo.png';
import {S} from './MainStyles';

const Main = () => {
    return (
        <section>
            <S.MainStyles>
                <S.MainSectionStyles>
                    <S.Text> Hello, <S.TextB>my name is</S.TextB></S.Text>
                    <S.Title>Ksenia <S.TitleB>Sakharova</S.TitleB></S.Title>
                    <S.Subtitle>I am a front-end developer</S.Subtitle>
                    <Button title={'My portfolio'}/>
                </S.MainSectionStyles>
                <S.Photo>
                    <img src={photo} alt={'Фото Ксении'}/>
                </S.Photo>
            </S.MainStyles>
        </section>
    );
};

export default Main;