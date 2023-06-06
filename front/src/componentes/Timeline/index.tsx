import React from 'react'
import * as S from './styles'
import { BookAd } from './BookAd'

import urlImage from '/images/ponteParaTerabia.jpg'

export const Timeline = () => {
  return (
    <S.TimelineWrapper>
      <S.TimelineTitle>
        Anúncios
      </S.TimelineTitle>

      <S.TimelineAdWrapper>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
        <BookAd urlImage={urlImage}/>
      </S.TimelineAdWrapper>

    </S.TimelineWrapper>

  )
}
