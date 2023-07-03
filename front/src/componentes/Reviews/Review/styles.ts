import styled from 'styled-components';
import { theme } from "../../../styles/theme";


export const ReviewContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    border-radius: 20px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);

`

export const ProfileImgWrapper = styled.div`
    min-width: 75px;
    display: flex;
    margin-left: 1rem;

    img {
        width: 100%;
    }
`
export const ReviewContentWrapper = styled.div`
    padding: 1rem 1rem;
    border-right: 1px solid #1A2B88;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .5rem;
`

export const ReviewTitle = styled.p`
    font-size: 1.1rem;
    color: #1A2B88;
    font-weight: ${theme.font.weight.bold};
`

export const ReviewContent = styled.p`
    font-size: 1rem;
    text-align: justify;
`

export const ReviewInteraction = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;

    padding: 0 1rem;
    margin: 0.5rem auto 0 auto;
    width: 100px;
    



    > * {
        cursor: pointer;
    }

    p {
        font-size: .7rem;
    }

`