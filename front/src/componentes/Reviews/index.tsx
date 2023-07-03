import React, { useEffect, useState } from 'react'
import { Review } from './Review'
import ponte from '/images/ponteParaTerabia.jpg'
import * as S from './styles.ts'
import { Link, useParams } from 'react-router-dom'
import { axiosPublic } from '../../utils/api.ts'
import { BooksProps } from '../FindReviews/index.tsx'


export const Reviews = () => {
  
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState<BooksProps>()

  useEffect(() => {
    
    const fetchBookDetails = async () => {
      const response = await axiosPublic(`/books/${id}`)
      const data = response.data
      setBookDetails(data)
    }

    fetchBookDetails()
  }, [id])


  return (
    <S.Wrapper>
      <S.ReviewsContainer>
        <S.HeaderContainer>
            <S.ReviewsTitle>
              Reviews
            </S.ReviewsTitle>
          <S.ReviewsHeader>
            <S.ImgWrapper>
              <img src={bookDetails?.imageUrl} alt="" />
            </S.ImgWrapper>

            <S.BookDetails>
            <Link to={`/livro/${bookDetails?.book_id}`}>
              <S.BookTitle>{bookDetails?.title}</S.BookTitle>

            </Link>

              <S.BookAutor>Katherine Paterson</S.BookAutor>
              <S.BookSinopse>{bookDetails?.synopsis}</S.BookSinopse>
            </S.BookDetails>
          </S.ReviewsHeader>
            <S.Line></S.Line>

        </S.HeaderContainer>


        <Review/>
      </S.ReviewsContainer>
    </S.Wrapper>
  )
}
