import { useEffect, useState } from 'react'
import * as S from './styles'
import { BookAd, BookProps } from './BookAd'

import { axiosPublic } from '../../utils/api'


export const Collection = () => {

  const [books, setBooks] = useState<BookProps[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axiosPublic('books/')
      const data = response.data
      console.log(data)
      setBooks(data)
    }

    fetchBooks()
  }, [])








  return (
    <S.CollectionWrapper>
      <S.CollectionTitle>Acervo</S.CollectionTitle>

      <S.CollectionAdWrapper>
      {books.map((book) => (
        <S.StyledLink key={book.book_id} to={`/livro/${book.book_id}`}>
          <BookAd {...book}/>
      </S.StyledLink>))}
      </S.CollectionAdWrapper>

    </S.CollectionWrapper>

  )
}
