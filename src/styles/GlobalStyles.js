import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";


const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Sirin Stencil";
        overflow-x: hidden;
        background: #000000;
        background-size: cover; 
        //background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='38' height='38' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(180)'%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 0, 0,1)'/%3E%3Cpath d='M-0.5 20v20h1v-20zM39.5 20v20h1v-20z' fill='rgba(13, 13, 13,1)'/%3E%3Cpath d='M-10 29.5 h60 v1 h-60z' fill='rgba(13, 13, 13,1)'/%3E%3Cpath d='M19.5 0v40h1v-40z' fill='rgba(13, 13, 13,1)'/%3E%3Cpath d='M-10 9.5h60v1h-60z' fill='rgba(13, 13, 13,1)'/%3E%3Cpath d='M-0.5 0v20h1v-20zM39.5 0v20h1v-20z' fill='rgba(13, 13, 13,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyles;