import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box; 
    }

    *{
        margin: 0; 
        padding: 0; 
    }

    ul[role='list'], ol[role='list']{
        list-style: none; 
    }

    img, picture, svg, video, canvas{
        max-width: 100%;
        height: auto; 
        background-repeat: no-repeat; 
        background-size: cover;
    }

    input, button, textarea, select{
        font: inherit; 
    }

    body, html{
        height: 100%; 
        scroll-behavior: smooth; 
        font-family: 'Apple SD Gothic Neo';
        background-color:#787878;
    }
`;

export default GlobalStyle;
