import React, { useEffect, useContext, useState } from 'react'
import * as S from './styles'
import { BookAd } from './BookAd'

import urlImage from '/images/ponteParaTerabia.jpg'
import { FilterQueryContext } from '../../contexts/FilterQueryContext'


export type BookAdProps = {
  id: string
  title?: string
  urlImage?: string
  value?: string
  autor: string
}

export const Timeline = () => {

  const { filterQuery, setFilterQuery } = useContext(FilterQueryContext)
  const [anuncios, setAnuncios] = useState([])

  useEffect(()=> {

    




  }, [filterQuery])

  return (
    <S.TimelineWrapper>
      <S.TimelineTitle>Anúncios</S.TimelineTitle>

      <S.TimelineAdWrapper>
      {anuncios.map((anuncio) => (
        <S.StyledLink key={anuncio.id} to={`/anuncios/${anuncio.id}`}>
          <BookAd {...anuncio}/>
        </S.StyledLink>))}
      </S.TimelineAdWrapper>

    </S.TimelineWrapper>

  )
}
