import React from 'react';
import '../../index.css'
import {S} from './AboutMeStyles';
import Button from '../Elements/Button';
import photo from '../../img/photo-2.png'

const AboutMe = () => {
    return (
        <section>
            <S.AboutContainer>
                <S.TextContainer>
                    <S.DecorativeText>a little <S.DecorativeTextB>story</S.DecorativeTextB></S.DecorativeText>
                    <h2>About me</h2>
                    <S.Text>I am an active front-end developer who is constantly striving to grow and stay updated with the latest trends. I have been honing my professional skills in the IT industry for several years now, although my journey originally began as a UX/UI designer. While working on website and application prototypes, I became intrigued by how they are built from the inside using code, and this passion led me to pursue front-end development.</S.Text>
                    <Button title={'My contacts'}/>
                </S.TextContainer>
                <S.Photo src={photo} alt={'Фото Ксения Сахаровой.'}/>
            </S.AboutContainer>
        </section>
    );
};

export default AboutMe;