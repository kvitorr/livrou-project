import { BookAdProps } from '..'
import { axiosPublic } from '../../../utils/api'
import { BooksProps } from '../../FindReviews'
import * as S from './styles'
import { useEffect, useState } from 'react'

export const BookAd: React.FC<BookAdProps> = ({ bookId, value, transactionTypeId }) => {

  const [book, setBook] = useState<BooksProps | null>(null)

  function transaction(transationId: number) {
    if(transationId === 1) {
      return 'Venda'
    } else if (transationId === 2) {
      return 'Troca'
    } else {
      return 'Troca e Venda'
    }
  }
  useEffect(() => {
    const fetchBook = async () => {
      const response = await axiosPublic(`books/${bookId}`)
      const data = response.data

      setBook(data)
    }
    fetchBook()
  })

  function limitStringLength(string: string, maxLength: number) {
    if (string.length <= maxLength) {
      return string;
    } else {
      return string.slice(0, maxLength) + '...';
    }
  }


  return (
    <>
        {book &&
          <S.BookAdWrapper>
          <S.ImgWrapper>
            <img src={book.imageUrl} alt="" />
          </S.ImgWrapper>

          <S.AdDescription>
            <div>
            <S.BookTitle>
              {limitStringLength(book.title, 17)}
            </S.BookTitle>

              {book?.authors?.map((author) => (
                <S.BookAuthor key={author.author_id}>
                  {author.name}
                </S.BookAuthor>
              ))}
            </div>

            <S.BookTradeDescription>
              { transactionTypeId === 2 ? <p>Troca</p> : 
                <p>R$ {value}  | {transaction(transactionTypeId)}</p>
              }
            </S.BookTradeDescription>
          </S.AdDescription>
        </S.BookAdWrapper>
      }
    </>
  )
}
