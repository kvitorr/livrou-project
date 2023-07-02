import * as S from "./styles.ts";
import { Link } from "react-router-dom";
import urlImage from "/images/ponteParaTerabia.jpg";
import { ReviewBottom } from "./ReviewBottom/index.tsx";

export const BookDetails = () => {
  return (
    <S.Wrapper>
        <S.ReviewsTitle>
              Detalhes do Livro
          </S.ReviewsTitle>
          
      <S.DetailsContainer>
        <S.BookAdWrapper>
          <img src={urlImage} alt="" />
        </S.BookAdWrapper>

        <S.DetailsContent>
          <S.BookTitle>
            Ponte para Terabítia
          </S.BookTitle>
          <S.BookAuthor>
            Katherine Paterson
          </S.BookAuthor>
          <S.BookSinopse>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda debitis nesciunt sapiente, nostrum dolore nemo voluptates
            voluptas doloribus? Inventore illo dolorem unde expedita quo
            accusantium vero omnis harum magnam sequi! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Pariatur voluptates praesentium
            quisquam odio iusto tempora ipsam provident ut perferendis
            voluptatum, id, repellat ducimus quaerat iure libero fugiat
            blanditiis, culpa debitis.
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
