import React, { useEffect, useState } from 'react'
import * as S from './styles.ts'
import { BookAd } from './BookAd'
import { Link, useParams } from 'react-router-dom'
import { axiosPublic } from '../../utils/api.ts'
import { BooksProps } from '../FindReviews/index.tsx'

export interface IBookAds {
  advertisement_id: number,
    bookId: number,
    userId: number,
    conservationId: number,
    value: number,
    description: string,
    postingDate: string,
    completionDate: Date | null,
    transactionTypeId: number,
    removed: false
}


export const BookAds = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState<BooksProps>()

  const [bookAds, setBookAds] = useState<IBookAds[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  useEffect(() => { 
    const fetchBookDetails = async () => {
      const response = await axiosPublic(`/books/${id}`)
      const data = response.data
      setBookDetails(data)
    }
    fetchBookDetails()
  }, [id])

  useEffect(() => {
    const fetchAds = async () => {
      const response = await axiosPublic(`books/${id}/ads `)
      const data = response.data
      console.log(data)
      setBookAds(data.items)
      setCurrentPage(data.meta.currentPage)
      setTotalPages(data.meta.totalPages)
    }
    fetchAds();
  }, [])


  const fetchNewReviews = async (pageNumber: number) => {
    const response = await axiosPublic(`books/${id}/ads?page=${pageNumber}`)
    const data = response.data
    const currentBookAds = bookAds.concat(data.items)
    setBookAds(currentBookAds)
    setCurrentPage(data.meta.currentPage)
  }


  return (
    <S.Wrapper>
      <S.ReviewsContainer>

      <S.HeaderContainer>
            <S.ReviewsTitle>
              Anúncios
            </S.ReviewsTitle>
          <S.ReviewsHeader>
            <S.ImgWrapper>
              <img src={bookDetails?.imageUrl} alt="" />
            </S.ImgWrapper>

            <S.BookDetails>
            <Link to={`/livro/${bookDetails?.book_id}`}>
              <S.BookTitle>{bookDetails?.title}</S.BookTitle>

            </Link>

              <S.BookAutor>{bookDetails?.authors.map( (author) => (
              <p key={author.author_id}>{author.name}</p>
            ))}</S.BookAutor>
              <S.BookSinopse>{bookDetails?.synopsis}</S.BookSinopse>
            </S.BookDetails>
          </S.ReviewsHeader>
            <S.Line></S.Line>

        </S.HeaderContainer>
        <S.AdsTitle>
          Anúncios Encontrados
        </S.AdsTitle>
          {bookAds &&
            bookAds.map((bookAd)=> (
            <Link to={`../anuncios/${bookAd.advertisement_id}`}>
              <BookAd  title={bookDetails?.title} {...bookAd}/>
            </Link>
            ))
            }
    
      </S.ReviewsContainer>

      {currentPage < totalPages && <S.ButtonReview onClick={() => fetchNewReviews(currentPage + 1)}>
        Carregar mais
        </S.ButtonReview>}

    </S.Wrapper>
  )
}
