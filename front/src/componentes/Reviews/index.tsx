import React, { useEffect, useState } from 'react'
import { Review } from './Review'
import * as S from './styles.ts'
import { Link, useParams } from 'react-router-dom'
import { axiosPublic } from '../../utils/api.ts'
import { BooksProps } from '../FindReviews/index.tsx'

interface IBookReviews {
  bookReviewId: number
  title: string
  content: string
  amountLikes: number
}

export const Reviews = () => {
  
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState<BooksProps>()

  const [reviews, setReviews] = useState<IBookReviews[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => { //preciso de uma rota que retorne os autores
    const fetchBookDetails = async () => {
      const response = await axiosPublic(`/books/${id}`)
      const data = response.data
      setBookDetails(data)
    }

    fetchBookDetails()
  }, [id])

  useEffect(() => {
    const fetchBookReview = async () => {
      const response = await axiosPublic(`books/${id}/book-review?page=1`)
      const data = response.data
      console.log(data)
      setReviews(data.items)
      setCurrentPage(data.meta.currentPage)
      setTotalPages(data.meta.totalPages)
    }

    fetchBookReview()
  }, [])

  const fetchNewReviews = async (pageNumber: number) => {
      const response = await axiosPublic(`books/${id}/book-review?page=${pageNumber}`)
      const data = response.data
      const currentReviews = reviews.concat(data.items)

      setReviews(currentReviews)
      setCurrentPage(data.meta.currentPage)
  }

  


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

              <S.BookAutor>{bookDetails?.authors.map( (author) => (
              <p key={author.author_id}>{author.name}</p>
            ))}</S.BookAutor>
              <S.BookSinopse>{bookDetails?.synopsis}</S.BookSinopse>
            </S.BookDetails>
          </S.ReviewsHeader>
            <S.Line></S.Line>

        </S.HeaderContainer>
        
        {reviews.map((review) => (
          
          <Review key={review.bookReviewId} {...review}/>
        ))}

      </S.ReviewsContainer>
      {currentPage < totalPages && <S.ButtonReview onClick={() => fetchNewReviews(currentPage + 1)}>
        Carregar mais
      </S.ButtonReview>}
    </S.Wrapper>
  )
}
