import { useEffect, useState } from 'react'
import * as S from './styles'
import { BookAd, BookProps } from './BookAd'
import { useSearchParams } from 'react-router-dom';
import { axiosPublic } from '../../utils/api'


export const Collection = () => {
  const [books, setBooks] = useState<BookProps[]>([])
  const [queryExists, setQueryExists] = useState(false)
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let url = 'books/'
    const query = searchParams.get('query');

    if(query) {
      url += `filter?title=${encodeURIComponent(query)}` 
      setQueryExists(true)
    } else setQueryExists(false)
    


    const fetchBooks = async () => {
      const response = await axiosPublic(url)
      const data = await response.data
      if(query) setBooks(data)
      else setBooks(data.items)
    }

    fetchBooks()
  }, [searchParams])


  return (
    <S.CollectionWrapper>
      {queryExists && <S.CollectionTitle>Livros encontrados</S.CollectionTitle>}
      {!queryExists && <S.CollectionTitle>Acervo</S.CollectionTitle>}

      <S.CollectionAdWrapper>
        {books && books.map((book) => (
          <S.StyledLink key={book.book_id} to={`/livro/${book.book_id}`}>
            <BookAd {...book}/>
          </S.StyledLink>))}
      </S.CollectionAdWrapper>

    </S.CollectionWrapper>

  )
}
