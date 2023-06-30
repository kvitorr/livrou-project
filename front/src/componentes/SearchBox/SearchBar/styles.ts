import styled from 'styled-components';

export const SearchBarWrapper = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    .inputSearch {
        width: 100%;
        padding: .64rem 1.5rem;
        
        border-top: 1px solid #d3d3d3;
        border-bottom: 1px solid #d3d3d3;
        border-left: 1px solid #d3d3d3;
        border-right: 1px solid #d3d3d3;

        border-radius: 10px 0px 0px 10px;
        transition: .1s;
    }

    .inputSearch::placeholder {
        font-weight: 500;
        font-size: .875rem;
        color: rgba(0, 0, 0, 0.3);
    }

    .inputSearch:focus {
        outline: none;
        border: 1px solid black;
    }

    .searchIcon {
        display: flex;
        align-items: center;
        padding: .40rem 1rem;

        border-radius: 0px 10px 10px 0px;
        border: 1px solid #d3d3d3;
        border-left: none;
        
        cursor: pointer;
        outline: none;

        background-color: #d3d3d3;
    }
`