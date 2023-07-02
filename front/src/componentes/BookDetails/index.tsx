import * as S from "./styles.ts";
import { Link } from "react-router-dom";
import urlImage from "/images/ponteParaTerabia.jpg";
import { ReviewBottom } from "./ReviewBottom/index.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosPublic } from "../../utils/api.ts";
import { BookProps } from "../Collection/BookAd/index.tsx";


export const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState<BookProps>()

  useEffect(() => {
    
    const fetchBookDetails = async () => {
      const response = await axiosPublic(`/books/${id}`)
      const data = response.data
      setBookDetails(data)

      console.log(response)
    }

    fetchBookDetails()
  }, [])


  return (
    <S.Wrapper>
        <S.ReviewsTitle>
              Detalhes do Livro
          </S.ReviewsTitle>
          
      <S.DetailsContainer>
        <S.BookAdWrapper>
          <img src={bookDetails?.imageUrl} alt="" />
        </S.BookAdWrapper>

        <S.DetailsContent>
          <S.BookTitle>
            {bookDetails?.title}
          </S.BookTitle>
          <S.BookAuthor>
            Katherine Paterson
          </S.BookAuthor>
          <S.BookSinopse>
            {bookDetails?.synopsis}
          </S.BookSinopse>

          <S.ButtonWrapper>
            <Link to="/bookads"><S.Button>Ver anúncios</S.Button></Link>
            <Link to="/reviews"><S.Button>Ver reviews</S.Button></Link>
          </S.ButtonWrapper>
        </S.DetailsContent>
      </S.DetailsContainer>

      <S.Line></S.Line>


          <S.SelectOptions>
                  <option value="melhores avaliacoes">Melhores Avaliações</option>
                  <option value="anuncios mais Recentes">Anúncios mais Recentes</option>
          </S.SelectOptions>
      <S.ReviewContainerBottom>
            <ReviewBottom />
            <ReviewBottom />
            <ReviewBottom />
      </S.ReviewContainerBottom>
    </S.Wrapper>
  );
};
