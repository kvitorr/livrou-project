import { useEffect, useState } from 'react'
import * as S from './styles'
import { BookAd, BookProps } from './BookAd'
import { useSearchParams } from 'react-router-dom';
import { axiosPublic } from '../../utils/api'


export const Collection = () => {
  const [books, setBooks] = useState<BookProps[]>([])
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let url = 'books/'
    const query = searchParams.get('query');

    if(query) {
      url += `filter?title=${encodeURIComponent(query)}` 
    }

    const fetchBooks = async () => {
      const response = await axiosPublic(url)
      const data = await response.data
      setBooks(data)
    }

    fetchBooks()
  }, [searchParams])


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
