import styled from 'styled-components';
import {Theme} from '../Styles/Theme';

const AboutContainer = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 200px;

  @media ${Theme.media.tablet} {
    justify-content: center;
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
    background-color: ${Theme.colors.primaryColor};
    width: 500px;
    height: 500px;
`


export const S = {
    AboutContainer,
    TextContainer,
    DecorativeText,
    DecorativeTextB,
    Text,
    Photo
}