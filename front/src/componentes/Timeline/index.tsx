import React from 'react'
import * as S from './styles'
import { BookAd } from './BookAd'

import urlImage from '/images/ponteParaTerabia.jpg'


export type BookAdProps = {
  title?: string
  urlImage?: string
  value?: string
  autor: string
}

const bookAds = {
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
}


export const Timeline = () => {
  return (
    <S.TimelineWrapper>
      <S.TimelineTitle>
        Anúncios
      </S.TimelineTitle>

      <S.TimelineAdWrapper>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
        <BookAd {...bookAds}/>
      </S.TimelineAdWrapper>

    </S.TimelineWrapper>

  )
}
