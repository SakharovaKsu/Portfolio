import {createGlobalStyle} from 'styled-components';
import {Theme} from './Theme';

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: "Jost", 'Roboto', 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: #312631;
    background-color: #F5EEE6;
  }
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  li {
    list-style-type: none;
  }

  h1 {
    font-size: 90px;
    line-height: 100px;
    text-transform: uppercase;

    @media ${Theme.media.tablet} {
      font-size: 75px;
      line-height: 80px;
    }

    @media ${Theme.media.mobile} {
      font-size: 45px;
      line-height: 50px;
    }
  }
  
  h2 {
    font-size: 55px;
    line-height: 70px;
    text-transform: uppercase;
    padding-bottom: 25px;

    @media ${Theme.media.tablet} {
      font-size: 45px;
      line-height: 60px;
      padding-bottom: 15px;
    }

    @media ${Theme.media.mobile} {
      font-size: 35px;
      line-height: 30px;
    }
  }

  section {
    padding: 0 100px;

    @media ${Theme.media.tablet} {
      padding: 50px;
    }

    @media ${Theme.media.mobile} {
      padding: 50px 20px;
    }
  }
`
