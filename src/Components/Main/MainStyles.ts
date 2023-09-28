import styled from 'styled-components';
import {Theme} from '../Styles/Theme';

export const MainStyles = styled.div `
  display: flex;
  gap: 150px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 200px;
  padding-bottom: 200px;

  @media (max-width: 1439px) {
    gap: 100px;
  }

  @media ${Theme.media.tablet} {
    padding: 50px 0;
    flex-wrap: wrap;
    gap: 60px;
  }

  @media ${Theme.media.mobile} {
    gap: 30px;
    min-height: 0;
  }
`

const MainSectionStyles = styled.div`
    max-width: 500px;

    @media ${Theme.media.tablet} {  
      text-align: center;
    }
`

const Title = styled.h1 `
    text-shadow: 1px 1px 0 ${Theme.colors.primaryColor}, 
      -1px -1px 0 ${Theme.colors.primaryColor}, 
      2px -2px 0 ${Theme.colors.primaryColor}, 
      -2px 2px 0 ${Theme.colors.primaryColor};
    
    @media ${Theme.media.mobile} {
      padding-bottom: 15px;
    }
`

const TitleB = styled.b`
    color: ${Theme.colors.white};
`

const Subtitle = styled.p `
  text-transform: uppercase;
  font-weight: 700;
  padding-bottom: 50px;

  @media (max-width: 1023px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`

const Text = styled.span`
  text-transform: uppercase;
  font-weight: 700;

  @media ${Theme.media.tablet} {
    font-size: 14px;
  }

  @media ${Theme.media.mobile}  {
    font-size: 12px;
  }
`

const TextB = styled.b`
  color: ${Theme.colors.primaryColor};
`

const Photo = styled.div`
    min-width: 400px;

    @media (max-width: 768px) {
        min-width: 265px;
    }
`

export const S = {
    MainStyles,
    MainSectionStyles,
    Title,
    TitleB,
    Subtitle,
    Text,
    TextB,
    Photo
}