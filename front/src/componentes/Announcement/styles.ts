import styled from "styled-components";


export const Wrapper = styled.section`
    display: flex;
    min-height: calc(100vh - 70px) ;
    height: 100%;

    
`

export const AdDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 2rem 3rem 0rem 3rem;
    width: 75%;
    border-right: 1px solid #B3DBDB;
`

export const Details = styled.div``

export const Description = styled.div``

export const SectionTitle = styled.h2`
    font-weight: 600;
    padding-bottom: 0.3rem;
    margin-bottom: .6rem;
    border-bottom: 1px dashed #d3d3d3;
`

export const DescriptionContent = styled.p`
    font-family: 'Poppins';
    text-align: justify;
`

export const SpecificDetails = styled.div``

export const SpecificDetailsWrapper = styled.div`
    display: flex;
    gap: .5rem;
`

export const SpecificDetailsType = styled.div`
    font-weight: 700;
`

export const SpecificDetailsContent = styled.div``


export const BookDetails = styled.div``

export const BookWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding-block: .5rem;
`
export const BookImgWrapper = styled.div`
    max-width: 260px;
`

export const BookImg = styled.img`
    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 0px 23px -7px rgba(0,0,0,0.15);
`

export const BookInformation = styled.div`
    width: 100%;
`

export const BookTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 600;
    height: 40px;
    color: #1A2B88;
`

export const BookAutors = styled.p`
    font-size: 1.1rem;
`

export const BookSinopse = styled.p`
    padding-top: 2rem;
    font-size: 1rem;
    font-family: 'Poppins';
    text-align: justify;
`

export const ContactWrapper = styled.aside`
    width: 400px;
    display: flex;
    align-items: center;
`