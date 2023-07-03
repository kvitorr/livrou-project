import React, { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { BiSearchAlt2 } from 'react-icons/bi';
import { axiosPublic } from '../../../utils/api';
import useDebounce from '../../../hooks/useDebounce';
import { useNavigate } from 'react-router-dom';

interface booksProps {
    book_id: string
    title: string
}


export const SearchBar = () => {
    const [books, setBooks] = useState<booksProps[]>([])
    const [search, setSearch] = useState<string>('')

    const debouncedSearch = useDebounce(search, 500);
    const navigate = useNavigate();

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

    const resetValues = () => {
        setBooks([])
        setSearch('')
    }

    const handleSearchButton = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (
          'type' in event && event.type === 'click'
        ) {
          navigate(`acervo/search?query=${encodeURIComponent(search)}`);
          resetValues()
        } else if ('key' in event && event.key === 'Enter' ){
            event.preventDefault()
            navigate(`acervo/search?query=${encodeURIComponent(search)}`);
            resetValues()
        }  
      };
      

    return (
        <>
            <S.SearchBarWrapper>
                <div className='searcherContainer'>
                    <input id='searchBooks' className='inputSearch' value={search} onChange={handleSearch} onKeyDown={handleSearchButton} placeholder='Search books...' type="search" />
                    <button type='button' onClick={handleSearchButton} className='searchIcon'>
                        <BiSearchAlt2 size={28}/>
                    </button>
                </div> 
                <S.TitlesWrapper>
                    {books.map(book => (
                        <S.StyledLink key={book.book_id} onClick={resetValues} to={`/livro/${book.book_id}`} > 
                            <p>{book.title}</p>          
                        </S.StyledLink>
                    ))}
                </S.TitlesWrapper>

            </S.SearchBarWrapper>
        </> 
        )
}
