import styled from 'styled-components';
import { theme } from "../../../styles/theme"

export const FormFilterContainer = styled.div`
    width: 300px;
    border-radius: 1px;
    padding: 1rem;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);

    position: absolute;

    top: 4.5rem;
    right: 2rem;

    background-color: white;

    border-radius: 1rem;


    .title {
        border-bottom: 1px dashed #E0E0E0;
        padding: 0.2rem 0rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: ${theme.font.weight.bold};
    }

    .preco-maximo {
        color: #1A2B88;
        font-weight: ${theme.font.weight.bold};
        border-radius: 10px;
        border: 1px solid black;

        padding: 0.3rem 2rem 0.3rem 0.5rem;
        margin-bottom: 0.4rem;

        font-size: .8rem;

        background-color: #DCE0F9;
    }
   
`

export const FormFilter = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins';

    #titulo {
        padding: 0.5rem 2rem 0.5rem 0.5rem;
        font-size: .8rem;
        border-radius: 10px;
        border: 1px solid black;

        margin-bottom: 1rem;
    }

    #titulo::placeholder {
        color: black;
        padding: 0rem .2rem;
        font-size: 0.7rem;
    }

    .label-input {
        font-size: .85rem;
        font-family: 'Roboto';
        margin-bottom: .3rem;
        text-align: start;

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

        margin-top: .5rem;

        cursor: pointer;
    }

`

export const SelectOptions = styled.select`
    color: #1A2B88;
    font-weight: ${theme.font.weight.bold};
    border-radius: 10px;
    border: 1px solid black;

    padding: 0.3rem 2rem 0.3rem 0.5rem;
    margin-bottom: 0.4rem;

    font-size: .8rem;

    background-color: #DCE0F9;

`