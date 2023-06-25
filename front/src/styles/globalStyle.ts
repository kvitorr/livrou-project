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

    .modal {
        max-width: 600px;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }


`;