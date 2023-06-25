import styled from 'styled-components';
import { theme } from "../../../styles/theme"

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