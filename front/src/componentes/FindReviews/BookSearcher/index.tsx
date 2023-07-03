import React, { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { axiosPublic } from '../../../utils/api'
import useDebounce from '../../../hooks/useDebounce'
import { BooksProps } from '../index'

interface IBookSearcherProps {
    choosenBook: BooksProps | null
    setChoosenBook: React.Dispatch<React.SetStateAction<BooksProps | null>>
}

export const BookSearcher: React.FC<IBookSearcherProps> = ({ choosenBook, setChoosenBook }) => {
    const [books, setBooks] = useState<BooksProps[]>([])
    const [search, setSearch] = useState<string>('')

    const debouncedSearch = useDebounce(search, 500);

    useEffect( () => {
        const fetchData = async () => {
            const response = await axiosPublic(`books/filter?title=${debouncedSearch}`);
            const data = response.data
            console.log(data)
            setBooks(data)
        }

        if(debouncedSearch) fetchData();
    }, [debouncedSearch])

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value
        if(searchTerm) setSearch(searchTerm)
        else {
            setBooks([])
            setSearch('')
        }
    }

    const confirmBook = (book: BooksProps) => {
        setChoosenBook(book)
    }

    return (
        <>
            <S.SearchBarWrapper>
                <div className='searcherContainer'>
                    <input id='searchBooks' className='inputSearch' value={search} onChange={handleSearch} placeholder='Procure um livro...' type="text" />
                </div> 
                <S.TitlesWrapper>
                    {books.map(book => (
                        <S.ButtonOption type='button' key={book.book_id} onClick={() => {confirmBook(book)}}> 
                            <p>{book.title}</p>          
                        </S.ButtonOption>
                    ))}
                </S.TitlesWrapper>

            </S.SearchBarWrapper>
        </> 
        )
}
