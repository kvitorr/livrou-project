import React, { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { BiSearchAlt2 } from 'react-icons/bi';
import { axiosPublic } from '../../../utils/api';
import useDebounce from '../../../hooks/useDebounce';

interface BooksProps {
    book_id: string
    title: string
}

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
            setBooks(data.items)
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
                    <input required id='searchBooks' className='inputSearch' value={search} onChange={handleSearch} placeholder='Procure um livro...' type="text" />
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
