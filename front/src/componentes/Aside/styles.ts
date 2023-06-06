import { styled } from "styled-components"
import { theme } from "../../styles/theme"

export const AsideContainer = styled.aside`
    border-left: 1px solid #d3d3d3;

    background-color: white;

    position: fixed;
    width: 350px;
    height: 100%;
    right: 0;
    z-index: 3;

    padding: 0rem 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1870px) {
        right: calc((100%/2) - (1184px/2) - 350px);
    }

    .closeIcon {
        padding: 1.6rem 2rem;
        width: 100%;
        position: absolute;
        top: 0;
        text-align: right;
        cursor: pointer;
    }
`