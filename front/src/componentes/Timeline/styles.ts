import styled from 'styled-components';
import { theme } from "../../styles/theme";
import { Link } from 'react-router-dom';


export const TimelineWrapper = styled.main`
    margin: auto;
    padding-inline: 2rem;


    display: flex;
    flex-direction: column;

    @media (max-width: 1250px) {
        margin-top: 70px;

        background-color: red;
    }
`

export const TimelineTitle = styled.h2`
    padding: 1rem 1rem;
    font-weight: ${theme.font.weight.semibold};
`

export const TimelineAdWrapper = styled.div`
    height: 100%;
    width: 100%;

    padding-inline: 1rem;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
`

export const StyledLink = styled(Link)`
    //text-decoration: none;
    //color: blue;

    flex: 1 1 180px;
    max-width: 230px;
`;