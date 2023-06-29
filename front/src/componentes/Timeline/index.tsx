import React from 'react'
import * as S from './styles'
import { BookAd } from './BookAd'

import urlImage from '/images/ponteParaTerabia.jpg'
import { Link } from 'react-router-dom'
import Announcement from '../Announcement'


export type BookAdProps = {
  id: string
  title?: string
  urlImage?: string
  value?: string
  autor: string
}

const anuncios = [{
  id: 1,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 2,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 3,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 4,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 5,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 6,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 7,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 8,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
}]


export const Timeline = () => {
  return (
    <S.TimelineWrapper>
      <S.TimelineTitle>
        Anúncios
      </S.TimelineTitle>

      <S.TimelineAdWrapper>
      {anuncios.map((anuncio) => (
        <S.StyledLink key={anuncio.id} to={`/anuncios/${anuncio.id}`}>
          <BookAd {...anuncio}/>
        </S.StyledLink>))}
      </S.TimelineAdWrapper>

    </S.TimelineWrapper>

  )
}
