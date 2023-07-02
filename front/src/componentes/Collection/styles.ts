import styled from 'styled-components';
import { theme } from "../../styles/theme";
import { Link } from 'react-router-dom';


export const CollectionWrapper = styled.main`
    margin: auto;
    padding-inline: 3rem;


    display: flex;
    flex-direction: column;
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
`

export const StyledLink = styled(Link)`
    //text-decoration: none;
    //color: blue;
    display: flex;
    flex: 1 1 180px;
    max-width: 230px;
    min-height: 400px;
`;