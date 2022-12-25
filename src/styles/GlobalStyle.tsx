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
        span {
            font-family: 'Jua', sans-serif;
        }
    }
`;

export default GlobalStyle;
