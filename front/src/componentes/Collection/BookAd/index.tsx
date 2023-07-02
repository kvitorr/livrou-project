import * as S from './styles'

export type BookAdProps = {
    title?: string
    urlImage?: string
    value?: string
    autor: string
}

export const BookAd: React.FC<BookAdProps> = ({ title, urlImage, value, autor }) => {
  return (
    <S.BookAdWrapper>
      <S.ImgWrapper>
        <img src={urlImage} alt="" />
      </S.ImgWrapper>

      <S.AdDescription>
        <div>
        <S.BookTitle>
          {title}
        </S.BookTitle>

        <S.BookAuthor>
          {autor}
        </S.BookAuthor>
        </div>
      </S.AdDescription>
    </S.BookAdWrapper>
  )
}
