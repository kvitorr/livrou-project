import React, { useEffect, useContext, useState } from 'react'
import * as S from './styles'
import { BookAd } from './BookAd'

import urlImage from '/images/ponteParaTerabia.jpg'
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

  useEffect(()=> {
    const fetchAd = async () => {
      console.log(`url: advertisement/filter?${filterQuery}`)
      const response = await axiosPublic(`advertisement/filter?${filterQuery}`)
      const data = response.data

      console.log(data)

      setAnuncios(data.items)
    }

    fetchAd()
  }, [filterQuery])

  

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

    </S.TimelineWrapper>

  )
}
