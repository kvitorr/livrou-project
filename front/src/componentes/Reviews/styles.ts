import styled from 'styled-components';
import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
`

export const ReviewsContainer = styled.div`
    width: 100%;
    padding: 1rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;

`

export const ReviewsTitle = styled.h2`
    padding: 0;
    font-weight: ${theme.font.weight.medium};
    margin-bottom: 1rem;
`

export const ReviewsHeader = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`

export const ImgWrapper = styled.div`
    img {
        width: 150px;
    }
`

export const BookDetails = styled.div`

`


export const Line = styled.div`
    height: 1px;
    width: 100%;
    margin-block: 1rem;
    border-bottom: 1px dashed #d3d3d3;
`

export const BookTitle = styled.div`
    color: #1A2B88;
    font-size: 1.2rem;
    font-weight: ${theme.font.weight.bold};
`

export const BookAutor = styled.div`
    font-weight: ${theme.font.weight.light};
    margin-bottom: 1rem;
`

export const BookSinopse = styled.div`
    font-size: 1rem;
`