import styled from 'styled-components';
import { theme } from "../../styles/theme";
import { Link } from 'react-router-dom';


export const CollectionWrapper = styled.main`
    margin: auto;
    padding-inline: 3rem;
    padding-bottom: 2rem;


    display: flex;
    flex-direction: column;

    @media(max-width: 1200px) {
        justify-content: center;
        padding-inline: 1rem;
    }
`

export const CollectionTitle = styled.h2`
    padding: 1rem 0;
    font-weight: ${theme.font.weight.semibold};
`

export const CollectionAdWrapper = styled.div`
    height: 100%;
    width: 100%;
    
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    @media(max-width: 1200px) {
        justify-content: center;
    }
`

export const StyledLink = styled(Link)`
    //text-decoration: none;
    //color: blue;
    display: flex;
    flex: 1 1 180px;
    max-width: 230px;
    min-height: 400px;
`;

export const ButtonBook= styled.button`
    width: 120px;
    margin: auto;
    color: white;
    background-color: #1A2B88;
    border-radius: 10px;
    padding: .3rem;
    cursor: pointer;
`