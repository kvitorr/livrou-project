import styled from 'styled-components';
import { theme } from "../../styles/theme";

export const BoxWrapper = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    text-align: center;
    border-bottom: 1px solid #d3d3d3;

    padding: 1rem 2rem;
    background-color: #FFFFFF;

    position: relative;

    .HeaderContainer {
        width: clamp(200px, 100%, 600px);

        margin-right: 170px;
    }

    .MenuIcon, .FilterIcon {
        cursor: pointer;
    }

    

    .MenuIcon {
        display: none;
    }

    .menuImgWrapper {
        min-width: 70px;
        display: flex;
    }

    .menuImgWrapper > img {
        width: 100%;
    }

    .menuImgWrapper > * {
        cursor: pointer;
    }

    .livrouLogo {
        max-width: 100px;
    }

    .profile {
        display: flex;
        gap: .5rem;
        align-items: center;
        padding: .3rem .5rem;

        transition: .2s;
    }

    .profileImg {
        width: 35px;
    }

    .profile > * {
        cursor: pointer;
    }

    .profile > p {
        font-size: .8rem;
        font-weight: ${theme.font.weight.medium};
    }

    @media (max-width: 1250px) {
        position: fixed;
        top: 0;
        .MenuIcon {
            display: flex;
        }
    }
`

export const ButtonWrapper = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1rem;
    right: 2rem;
   
    font-size: .9rem;

    padding: 0.5rem 1rem;
    background-color: #1A2B88;
    border-radius: 1rem;
    color: white;
    font-weight: ${theme.font.weight.medium};
    cursor: pointer;
    
`