import styled from 'styled-components';
import { theme } from "../../../styles/theme";


export const AdContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    border-radius: 20px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);

    @media(max-width: 1200px) {
        flex-direction: column;
        padding-top: 0.5rem;
    }

`

export const ProfileImgWrapper = styled.div`
    min-width: 60px;
    display: flex;
    margin-left: 1rem;

    img {
        width: 100%;
    }

    @media(max-width: 1250px) {
        display: none;
    }
`
export const AdContentWrapper = styled.div`
    padding: 1rem 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .5rem;
    width: 100%;
`

export const AdHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const AdTitle = styled.p`
    font-size: 1.2rem;
    color: #1A2B88;
    font-weight: ${theme.font.weight.bold};
`

export const AdContent = styled.p`
    font-size: 1rem;
    font-family: 'Poppins';
    text-align: justify;
`

export const AdInteraction = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;

    padding: 0 1rem;
    margin: 0.5rem auto 0 auto;

    width: 200px;



    > * {
        cursor: pointer;
    }

    p {
        font-size: .7rem;
    }

    @media(max-width: 1200px) {
        margin-bottom: .5rem;
    }

`
export const AdType = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1A2B88;
    color: white;
    border: none;
    padding: .5rem 1rem;
    font-weight: ${theme.font.weight.bold};
    min-width: 100px;
    width: 100%;

    border-radius: 40px;
    font-family: 'Poppins';



    > * {
        cursor: pointer;
    }

    p {
        font-size: .8rem;
        font-weight: 500;
    }

    @media(max-width:1200px) {
        border-radius: 10px;
    }

`

export const stateOfConservation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #14C330;
    color: white;
    border: none;
    padding: .1rem .3rem;
    font-weight: ${theme.font.weight.light};
    margin-left: 1rem;
    border-radius: 15px;
    height: 15px;


 
    font-size: .5rem;


`