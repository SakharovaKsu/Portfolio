import styled from 'styled-components';

export const NavListStyled = styled.ul `
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`