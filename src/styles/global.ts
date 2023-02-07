import {
    createGlobalStyle,
    css,
} from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }
    ${() => css`
        html {
            font-size: 62.5%;
        }
        body {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.medium};
        }
    `}
  `;

export default GlobalStyles;