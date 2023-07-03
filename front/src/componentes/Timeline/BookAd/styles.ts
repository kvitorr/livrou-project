import styled from 'styled-components';
import { theme } from "../../../styles/theme";



export const BookAdWrapper = styled.div`
    /*flex: flex-shrink flex-grow flex-basis
    Define como o elemento irá crescer ou diminuir
    em relação aos outros elementos e o tamanho inicial
    de 180px*/
    
    /* 
    D
    */

    width: 100%;
    
    margin-bottom: .4rem;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0px 0px 1px 0px rgba(10,10,10, .5);
`

export const ImgWrapper = styled.div`
    background-color: rgba(242, 242, 242, 0.3);
    overflow: hidden;
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 80%;


    img {
        width: 100%;
    }
`


export const AdDescription = styled.div`
    padding: .5rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .5rem;
    width: 100%;
    margin: 0 auto;
`

export const BookTitle = styled.p`
    font-size: 1rem;
    font-weight: ${theme.font.weight.medium};
`

export const BookAuthor = styled.p`
    font-size: .875rem;
`


export const BookTradeDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    p {
        font-size: 1rem;
        font-weight: ${theme.font.weight.semibold};
        width: 100%;
    }
`
