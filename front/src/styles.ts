import { styled } from "styled-components";



export const App = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    height: 100%;
    margin: 0 auto;
    display: flex;
`

export const MainContent = styled.main`
    width: 100%;
    margin-left: 250px;

    @media (min-width: 1600px) {
        max-width: 1450px;
        margin-left: 250px;
    }

    @media (max-width: 1200px) {
        margin-left: 0px;
    }
`