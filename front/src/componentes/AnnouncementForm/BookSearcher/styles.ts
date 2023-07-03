import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchBarWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    position: relative;
    .inputSearch {
        width: 100%;
        padding: .64rem 1.5rem;
        
        border-top: 1px solid #d3d3d3;
        border-bottom: 1px solid #d3d3d3;
        border-left: 1px solid #d3d3d3;
        border-right: 1px solid #d3d3d3;

        border-radius: 10px 10px 10px 10px;
        transition: .1s;
    }

    .inputSearch::placeholder {
        font-weight: 500;
        font-size: .875rem;
        color: rgba(0, 0, 0, 0.3);
    }

    .inputSearch:focus {
        outline: none;
        border: 1px solid #d3d3d3;
    }

    .searchIcon {
        display: flex;
        align-items: center;
        padding: .40rem 1rem;

        border-radius: 0px 10px 10px 0px;
        border: 1px solid #d3d3d3;
        border-left: none;
        background-color: white;
        
        cursor: pointer;
        outline: none;

    }

    .searcherContainer {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
    }
`

export const TitlesWrapper = styled.div`
    position: absolute;
    top: 2.7rem;
    left: 0;
    max-width: 540px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.15);

    max-height: 500px;
    overflow-y: auto;
`
export const ButtonOption = styled.button`
& > p {
        padding: .7rem;
        font-family: 'Poppins';
        font-size: .95rem;
        transition: .5s;

        &:hover {
            background-color: gray;
            color: white;
        }

    }
`