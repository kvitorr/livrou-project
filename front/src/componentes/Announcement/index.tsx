import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as S from './styles'

import urlImage from '/images/ponteParaTerabia.jpg'
import Advertiser from './Advertiser';
import { BookAdProps } from '../Timeline';
import { axiosPublic } from '../../utils/api';


export interface IBookDetailsProps {
  advertisementId: number
  description: string
  advertisementType: string
  condition: string
  locations: string[]
  bookId: number
  bookTitle: string
  authors: string[]
  synopsis: string;
  bookImageUrl: string
  price: number
  advertiserImageUrl: string
  advertiserName: string
  accountCreationDate: string;
  contactNumber: number
}

const Announcement = () => {

  const { id } = useParams();
  const [book, setBook] = useState<IBookDetailsProps>()

  useEffect(() => {
    const fetchBookData = async () => {
      const response = await axiosPublic(`advertisement/${id}/details`)
      const data = response.data
      setBook(data)
    }
    fetchBookData()
  }, [id])

  return (
    <S.Wrapper>
      <S.AdDetail>

        <S.Description>
          <S.SectionTitle>
            Descrição do Anúncio
          </S.SectionTitle>
        
          <S.DescriptionContent>
            {book?.description}
          </S.DescriptionContent>
        </S.Description>

        <S.SpecificDetails>
          <S.SectionTitle>
            Detalhes
          </S.SectionTitle>

          <S.SpecificDetailsWrapper>
            <S.SpecificDetailsType>
              Tipo de anúncio: 
            </S.SpecificDetailsType>
            <S.SpecificDetailsContent>
            {book?.advertisementType}
            </S.SpecificDetailsContent>
          </S.SpecificDetailsWrapper>

          <S.SpecificDetailsWrapper>
            <S.SpecificDetailsType>
              Conservação:
            </S.SpecificDetailsType>
            <S.SpecificDetailsContent>
                {book?.condition}
            </S.SpecificDetailsContent>
          </S.SpecificDetailsWrapper>

          <S.SpecificDetailsWrapper>
            <S.SpecificDetailsType>
              Localização:
            </S.SpecificDetailsType>
            <S.SpecificDetailsContent>
              {book?.locations[0]}
            </S.SpecificDetailsContent>
          </S.SpecificDetailsWrapper>
        </S.SpecificDetails>

        <S.BookDetails>
          <S.SectionTitle>
            Título selecionado
          </S.SectionTitle>

          <S.BookWrapper>
            <S.BookImgWrapper>
              <S.BookImg src={book?.advertiserImageUrl}/>
            </S.BookImgWrapper>

            <S.BookInformation>
              <S.BookTitle>
                {book?.bookTitle}
              </S.BookTitle>
              <S.BookAutors>
                {book?.authors[0]}
              </S.BookAutors>

              <S.BookSinopse>
                {book?.synopsis}
              </S.BookSinopse>
            </S.BookInformation>

          </S.BookWrapper>
        </S.BookDetails>
      </S.AdDetail>

      <S.ContactWrapper>
        {book && <Advertiser {...book}/>}
      </S.ContactWrapper>

    </S.Wrapper>
    
  )
}

export default Announcement