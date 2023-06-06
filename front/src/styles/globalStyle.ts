import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    p {
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }
    a:focus, a:visited {
        outline: none;
        color: #000; /* Defina a cor desejada para links visitados */
    }


`