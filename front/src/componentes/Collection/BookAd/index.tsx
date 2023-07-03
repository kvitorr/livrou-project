import { BooksProps } from '../../FindReviews'
import * as S from './styles'


export const BookAd: React.FC<BooksProps> = ({ book_id, editionCount, imageUrl, publishYear, synopsis, title }) => {
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
