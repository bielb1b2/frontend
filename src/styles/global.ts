import { createGlobalStyle } from 'styled-components';


import mackenzieBackground from '../assets/teste.png'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {

        background: #f2f2f2 url(${mackenzieBackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px  sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;