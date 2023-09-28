import styled from 'styled-components';
import {Theme} from '../Styles/Theme';

export const HeaderStyles = styled.div`
    padding: 20px 100px;
    border-bottom: 2px solid ${Theme.colors.primaryColor};

    @media (max-width: 1024px) {
        padding: 20px 50px;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`