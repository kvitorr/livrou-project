import * as S from "./styles.ts";
import { useContext, useEffect, useState } from "react";
import { BookSearcher } from "./BookSearcher/index.tsx";
import { AuthContext } from "../../contexts/AuthContext.tsx";
import { FormModal } from "../FormModal/index.tsx";
import ReviewForm from "./FormReview/index.tsx";
import { Link } from "react-router-dom";
import { axiosPublic } from "../../utils/api.ts";

export interface BooksProps {
  book_id: string
  editionCount: number
  imageUrl: string
  publishYear: number
  synopsis: string
  title: string
  authors: [
    {
      author_id: number,
      name: string
    }
  ]
}

export const FindReviews = () => {

  const [choosenBook, setChoosenBook] = useState<BooksProps | null>(null)
  const {loggedIn} = useContext(AuthContext)
  const [showReviewModal, setShowReviewModal] = useState(false)

  return (
    <S.Wrapper>

      { !choosenBook &&
      <>
        <S.ReviewsTitle>
          Selecione um livro:
        </S.ReviewsTitle>
        <BookSearcher choosenBook={choosenBook} setChoosenBook={setChoosenBook}/>
      </>
      }

      {choosenBook && 
      <>
      <S.ReviewsTitle>
          Selecione uma opção:
      </S.ReviewsTitle>
      <S.DetailsContainer>
      <S.BookAdWrapper>
          <img src={choosenBook.imageUrl} alt="" />
        </S.BookAdWrapper>

        <S.DetailsContent>
          <S.BookTitle>
            {choosenBook.title}
          </S.BookTitle>
          <S.BookAuthor>
            {choosenBook.authors.map((author) => (
              <p>{author.name}</p>
            ))}
          </S.BookAuthor>
          <S.BookSinopse>
            {choosenBook.synopsis}
          </S.BookSinopse>

          <S.ButtonWrapper>
            {loggedIn && <S.Button onClick={() => setShowReviewModal(true)}>Criar uma review</S.Button>}
            <Link to={`/reviews/${choosenBook.book_id}`}><S.Button>Ver reviews</S.Button></Link>
          
          <S.Button onClick={() => setChoosenBook(null)}>Mudar livro</S.Button>

          </S.ButtonWrapper>
        </S.DetailsContent>
      </S.DetailsContainer>
      </>
      }

      {choosenBook && <FormModal showModal={showReviewModal} setShowModal={setShowReviewModal}>
            <ReviewForm {...choosenBook} showReviewModal={showReviewModal} setShowReviewModal={setShowReviewModal}/>
      </FormModal>}      
    </S.Wrapper>

    
  );
};
