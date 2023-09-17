import styled from 'styled-components';
import {Theme} from '../Styles/Theme';

export const ButtonStyles = styled.button`
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    padding: 15px 25px;
    border: none;
    background-color: ${Theme.colors.primaryColor};
    box-shadow: 6px 6px 0 -1px ${Theme.colors.secondaryColor};
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.4,0,1,1);

    &:hover {
        background-color: ${Theme.colors.secondaryColor};
        box-shadow: 6px 6px 0 -1px ${Theme.colors.primaryColor};
    }

    &:active {
        color: ${Theme.colors.white};
    }

    @media ${Theme.media.tablet} {
        font-size: 12px;
    }
`