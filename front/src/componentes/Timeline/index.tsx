import React, { useEffect, useContext, useState } from 'react'
import * as S from './styles'
import { BookAd } from './BookAd'

import { FilterQueryContext } from '../../contexts/FilterQueryContext'
import { axiosPublic } from '../../utils/api'


export type BookAdProps = {
  advertisement_id: number
  bookId: number
  completionDate: Date | null
  conservationId: number
  description: string
  locations:[
    {
      state: string
      city: string
    }
  ]
  postingDate: Date | null
  removed: boolean
  transactionTypeId: number
  userId: number
  value: number
}

export const Timeline = () => {

  const { filterQuery } = useContext(FilterQueryContext)
  const [anuncios, setAnuncios] = useState<BookAdProps[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(()=> {
    const fetchAd = async () => {
      console.log(`url: advertisement/filter?${filterQuery}`)
      const response = await axiosPublic(`advertisement/filter?${filterQuery}`)
      const data = response.data

      console.log(data)

      setCurrentPage(data.meta.currentPage)
      setTotalPages(data.meta.totalPages)
      setAnuncios(data.items)
    }

    fetchAd()
  }, [filterQuery])

  const fetchNewAnuncios = async (pageNumber: number) => {
    const response = await axiosPublic(`advertisement/filter?${filterQuery}&page=${pageNumber}`)
    const data = response.data
    const currentAnuncios = anuncios.concat(data.items)

    setAnuncios(currentAnuncios)
    setCurrentPage(data.meta.currentPage)
}

  

  return (
    <S.TimelineWrapper>
      <S.TimelineTitle>Anúncios</S.TimelineTitle>

      <S.TimelineAdWrapper>
      {anuncios.map((anuncio) => (
        <S.StyledLink key={anuncio.advertisement_id} to={`/anuncios/${anuncio.advertisement_id}`}>
         <BookAd {...anuncio}/>
       </S.StyledLink>))
    }
      </S.TimelineAdWrapper>

      {currentPage < totalPages && <S.ButtonAd onClick={() => fetchNewAnuncios(currentPage + 1)}>
        Carregar mais
      </S.ButtonAd>}

    </S.TimelineWrapper>

  )
}
