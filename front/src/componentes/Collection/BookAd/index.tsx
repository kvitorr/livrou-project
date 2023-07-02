import * as S from './styles'

export type BookProps = {
    book_id: string
    editionCount: string
    imageUrl: string
    publish_year: string
    synopsis: string
    title: string
}

export const BookAd: React.FC<BookProps> = ({ book_id, editionCount, imageUrl, publish_year, synopsis, title }) => {
  return (
    <S.BookAdWrapper>
      <S.ImgWrapper>
        <img src={imageUrl} alt="" />
      </S.ImgWrapper>

      <S.AdDescription>
        <div>
        <S.BookTitle>
          {title}
        </S.BookTitle>

        <S.BookAuthor>
         
        </S.BookAuthor>
        </div>
      </S.AdDescription>
    </S.BookAdWrapper>
  )
}
