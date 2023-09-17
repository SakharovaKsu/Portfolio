import styled from 'styled-components';
import {Theme} from '../Styles/Theme';

export const NavLinkStyled = styled.a `
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(.4,0,1,1);

  &:hover {
    color: ${Theme.colors.primaryColor};
    border-bottom: 2px solid ${Theme.colors.primaryColor};
  }

  &:active {
    color: ${Theme.colors.secondaryColor};
    border-bottom: 2px solid ${Theme.colors.secondaryColor};
  }

  @media ${Theme.media.mobile} {
    font-size: 14px;
  }
`