import { styled } from "styled-components";
import { theme } from "../../styles/theme";


export const TimelineWrapper = styled.main`
    margin: auto;
    padding-inline: 2rem;


    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        margin-top: 70px;
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