import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        font-family: 'Jua', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #C85A5D;
        color: #FFC97C;
        span {
            font-family: 'Jua', sans-serif;
        }
    }
`;

export default GlobalStyle;
