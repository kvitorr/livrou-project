import styled from 'styled-components';
import { theme } from "../../../styles/theme";


export const ReviewContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    border-radius: 50px;

    background-color: #f2f5f7;

`

export const ProfileImgWrapper = styled.div`
    min-width: 25px;
    display: flex;

    img {
        width: 100%;
    }
`
export const ReviewContentWrapper = styled.div`
    padding: .5rem .5rem;

    display: flex;
    flex-direction: column;
    gap: .1rem;

`
export const BookTitle = styled.p`
    font-size: 0.9rem;
    color: #1A2B88;
    font-weight: ${theme.font.weight.bold};
`


export const ReviewContent = styled.p`
    text-align: justify;
    letter-spacing: 0.1px;
    font-size: 0.7rem;

    
`
