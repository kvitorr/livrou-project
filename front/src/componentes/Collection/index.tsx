import { useEffect, useState } from 'react'
import * as S from './styles'
import { BookAd } from './BookAd'
import { useSearchParams } from 'react-router-dom';
import { axiosPublic } from '../../utils/api'
import { BooksProps } from '../FindReviews';


export const Collection = () => {
  const [books, setBooks] = useState<BooksProps[]>([])
  const [queryExists, setQueryExists] = useState(false)
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
      console.log(data)
      if(query) setBooks(data.items)
      else setBooks(data.items)
      setCurrentPage(data.meta.currentPage)
      setTotalPages(data.meta.totalPages)
    }

    fetchBooks()
  }, [searchParams])

  const fetchNewBooks = async (pageNumber: number) => {
    let url = 'books'
    const query = searchParams.get('query');

    if(query) {
      url += `/filter?title=${encodeURIComponent(query)}&page=${pageNumber}` 
    }  else {
      url += `?page=${pageNumber}` 
    }
    
    const response = await axiosPublic(url)
    const data = response.data
    const currentBooks = books.concat(data.items)

    setBooks(currentBooks)
    setCurrentPage(data.meta.currentPage)
  }

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


      {currentPage < totalPages && <S.ButtonBook onClick={() => fetchNewBooks(currentPage + 1)}>
        Carregar mais
      </S.ButtonBook>}

    </S.CollectionWrapper>

  )
}
