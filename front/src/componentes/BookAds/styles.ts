import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    margin: auto;
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

export const AdsTitle = styled.h2`
    padding: 0;
    font-weight: ${theme.font.weight.medium};
    margin-bottom: 1rem;
`

export const AdsHeader = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`

export const ImgWrapper = styled.div`
    img {
        width: 70px;
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
    font-size: 1.1rem;
    font-weight: ${theme.font.weight.bold};
`

export const BookAutor = styled.div`
    font-weight: ${theme.font.weight.light};
    margin-bottom: 1rem;
`

export const BookSinopse = styled.div`
    font-size: 0.8rem;
`


export const SelectOptions = styled.select`
    border-radius: 10px;
    border: 1px solid black;

    padding: 0.5rem 2rem 0.5rem 0.5rem;
    margin-bottom: 1rem;

    font-size: 0.7rem;
`

export const FilterContainer = styled.div`
    border-left: 1px solid #d3d3d3;

    position: fixed;
    width: 17rem;
    height: 100%;
    right: 0;
    z-index: 3;

    padding: 0rem 1rem;

    display: flex;
    align-items: center;

`

export const FormFilterContainer = styled.div`
    width: 100%;
    margin-bottom: 10rem;
    border-radius: 1px;
    padding: 1rem;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);


    .title {
        border-bottom: 1px dashed #E0E0E0;
        padding: 0.2rem 0rem;
        margin-bottom: 1rem;
        font-size: .9rem;
        font-weight: ${theme.font.weight.medium};
    }
   
`

export const FormFilter = styled.form`
    display: flex;
    flex-direction: column;

  
    .label-input {
        font-size: .8rem;
        font-family: 'Roboto';
        margin-bottom: .2rem;

        font-weight: ${theme.font.weight.medium};
    }

    .button-search {
        border: 1px solid black;
        outline: none;
        padding: .5rem 0rem;

        border-radius: 10px;
        background-color: #1A2B88;
        color: white;
        font-size: .8rem;

        font-weight: ${theme.font.weight.bold};
    }

`