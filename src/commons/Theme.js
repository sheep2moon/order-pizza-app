import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.light};
    }
    *{
      box-sizing: border-box;
    }
`;

export const theme = {
  light: '#90A4AE',
  dark: '#222222',
  primary: '#F7B633',
};