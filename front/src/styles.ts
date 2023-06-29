import styled from 'styled-components';



export const App = styled.div`
    max-width: 1250px;
    margin: 0 auto;
`

export const Content = styled.div`
    max-width: 1000px;
    margin-left: 250px;

    position: relative;

    @media (max-width: 1250px){
        max-width: 100%;
        margin-left: 0px;
    }

`

export const MainContent = styled.main`
    width: 100%;
    min-height: 100vh;
    border-right: 1px solid #d3d3d3;


    @media (max-width: 1250px){
        margin-top: 70px;
    }
`