import styled from 'styled-components';
import {Theme} from '../Styles/Theme';

const AboutContainer = styled.div `
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  gap: 20px;
  padding-bottom: 200px;

  @media ${Theme.media.tablet} {
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    gap: 50px;
  }

  @media ${Theme.media.mobile} {
    text-align: left;
    gap: 30px;
  }
`

const TextContainer = styled.div `
  max-width: 600px;

  @media ${Theme.media.tablet} {
    width: 100%;
    max-width: 800px;
  }
`

const DecorativeText = styled.span `
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;

  @media ${Theme.media.tablet} {
    font-size: 14px;
    padding-bottom: 10px;
  }
`
const DecorativeTextB = styled.b `
  color: ${Theme.colors.primaryColor}
`

const Text = styled.p`
    padding-bottom: 20px;
    line-height: 30px;
`

const Photo = styled.img`
    background-color: ${Theme.colors.lightShade};
    max-width: 500px;
    width: 100%;
    //height: ;

  @media ${Theme.media.tablet} {

  }
`


export const S = {
    AboutContainer,
    TextContainer,
    DecorativeText,
    DecorativeTextB,
    Text,
    Photo
}