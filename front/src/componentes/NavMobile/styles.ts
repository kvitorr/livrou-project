import styled from 'styled-components';
import { theme } from "../../styles/theme";


export const UlNav = styled.ul` 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.1rem;

        width: 100%;
        margin: 0 auto 0rem auto;
`

export const LogoWrapper = styled.div`
    width: 200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .ImgWrapper {
        width: 150px;
        margin: 0 auto;
    }
`

export const LogoImg = styled.img`
    width: 100%;
    @media (max-width: 1250px) {
        display: none;
    }
`

export const NavWrapper = styled.nav`
    width: 250px;
    height: 100%;

    padding: 1rem 0 10rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #B3DBDB;


    position: fixed;
    left: 0;

    background-color: #FFFFFF;

   

    .navOption {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .7rem;
        width: 100%;

        margin: 0 auto 0 auto;
        transition: .1s;
        border-radius: 5px;
        
        margin-top: .5rem;

        border-block: 1px solid #d3d3d3;

    } 

    .navOption:hover {
        background-color: rgba(128, 128, 128, 0.3);
    } 

    .navOption > button {
        font-size: 1.2rem;
        font-weight: ${theme.font.weight.reegular};
        font-family: 'Poppins';
        margin: auto;
        width: 100%;
        padding: .5rem 0 .5rem 1rem;
        background-color: transparent;
        border: none;
    }

    .navOption > * {
        cursor: pointer;
    }

    .iconOption {
        display: flex;
        align-items: center;
        width: 24px;
    }

    .iconOption > img {
        width: 100%;
    }

    .buttonNavWrapper {
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .65rem;
        width: 200px;

        padding: .5rem 0 .5rem 1rem;
        margin: 0 auto 0 auto;
        transition: .1s;
        border-radius: 5px;
    }

    .buttonNavWrapper:hover {
        background-color: rgba(128, 128, 128, 0.3);
    } 
    
    .buttonNav {
        border: none;
        background-color: transparent;
        width: 100%;
        cursor: pointer;
        font-size: 1.2rem;
    }

    .registerButtonWrapper {
        gap: .7rem;
        width: 200px;

        padding: .5rem 0 .5rem 0rem;
        margin: 0 auto;
        transition: .1s;
        border-radius: 5px;
        cursor: pointer;
        background-color: rgba(26, 43, 136);
        color: white;
        border: none;
        text-align: center;
        font-weight: 600;
    }

    .registerButtonWrapper:hover {
        background-color: rgba(26, 20, 300, 1);
    }


    @media (max-width: 1250px) {
        width: 100%;
    }
`

export const Profile = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    padding: .3rem .5rem;

    width: 180px;
    margin: 0 auto;

    .profileImg {
        width: 45px;
        border-radius: 50%;
    }

    > * {
        cursor: pointer;
    }

    > p {
        font-size: 1rem;
        font-weight: ${theme.font.weight.bold};
        font-family: 'Poppins';
        margin-right: 2rem;
    }
`