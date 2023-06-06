import * as S from './styles'

export type BookAdProps = {
    title?: string
    urlImage?: string
    transactionType?: string
    value?: string
}

export const BookAd: React.FC<BookAdProps> = ({ title, urlImage, transactionType, value }) => {
  return (
    <S.BookAdWrapper>
      <S.ImgWrapper>
        <img src={urlImage} alt="" />
      </S.ImgWrapper>

      <S.AdDescription>
        <div>
        <S.BookTitle>
          Amor e Gelato
        </S.BookTitle>

        <S.BookAuthor>
          Jenna Evans Welch
        </S.BookAuthor>
        </div>

        <S.BookTradeDescription>
          <p>R$ 15,00</p>
        </S.BookTradeDescription>
      </S.AdDescription>
    </S.BookAdWrapper>
  )
}
