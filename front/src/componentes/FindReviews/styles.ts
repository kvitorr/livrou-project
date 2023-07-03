import styled from 'styled-components';
import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 10rem;


    height: calc(100vh - 70px);
    max-height: calc(100vh);
    width: 1000px;
    margin: auto;

    @media (max-width: 768px) {
        margin-right: 0;
    }
`;


export const DetailsContent = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;


    @media (max-width: 768px) {
        margin-left: 0;
        padding: 1rem;
    }
`;

export const DetailsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem 3rem;
    border: 1px solid #d3d3d3;
    border-radius: 20px;


    @media (max-width: 768px) {
        margin-right: 0;
        flex-direction: column;
        gap: 2rem;
    }
`;

export const ReviewsContainerAside = styled.div`
    border-left: 1px solid #d3d3d3;
    position: fixed;
    width: 20rem;
    height: 100%;
    right: 0;
    z-index: 3;
    padding: 0rem 1rem;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        position: relative;
        width: 100%;
        height: auto;
        padding: 1rem;
    }
`;

export const FormFilterContainer = styled.div`
    width: 100%;
    border: 1px solid #ECEEF6;
    border-radius: 15px;
    padding: 1rem;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);

    margin-bottom: 3rem;

    .h2 {
        border-bottom: 4px dashed #E0E0E0;
        padding: 0.2rem 0rem;
    }
   
`;
export const BookImage = styled.img`
    max-width: 80%; /* Largura máxima da imagem */
    height: auto; /* Altura automática para manter a proporção */
    align-self: center;

`;

export const BookAdWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;

    img {
        width: 180px;
    }
`;



export const BookTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.2rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const BookAuthor = styled.p`
    font-size: 1.1rem;
    font-weight: ${theme.font.weight.light};
`;

export const BookSinopse = styled.p`
    margin-top: 0.8rem;
    font-size: 1rem;
    text-align: justify;
`


export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-self: center;

  margin-top: 1rem;
`;

export const Button = styled.button`
    border-radius: 50px;
    background-color: #1A2B88;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    font-weight: ${theme.font.weight.medium};
    cursor: pointer;
`;



export const ReviewContainerBottom = styled.div`
    width: 100%; 
    overflow-y: auto;
    font-size: 2rem; 
    font-weight: ${theme.font.weight.medium};
    padding-inline: 3rem;
`;


export const SuspenseValidationButton  = styled.button`
  color: black;
  background-color: white;
  font-size: 1.3em;
  border: none;
  cursor: pointer;

`;

export const Line = styled.div`
    height: 1px;
    width: 100%;
    margin: 1rem 0rem 0rem 0rem;
    border-bottom: 1px solid #d3d3d3;
`
export const ReviewsTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: ${theme.font.weight.medium};
    margin-bottom: 1rem;
`

export const SelectOptions = styled.select`
    border: none;
    outline: none;

    width: 400px;
    margin: 1rem 0 1rem 3rem;

    font-size: 1.3rem;
    font-weight: ${theme.font.weight.bold};
    font-family: 'Poppins';

    border-bottom: 1px solid black;
`

export const ReviewsContainer = styled.div`
    overflow-y: scroll;
`

export const BookInformation = styled.div`
`

export const BookImg = styled.img``