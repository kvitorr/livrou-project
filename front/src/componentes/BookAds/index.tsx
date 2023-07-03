import React from 'react'
import ponte from '/images/ponteParaTerabia.jpg'
import * as S from './styles.ts'
import { BookAd } from './BookAd'
import { useParams } from 'react-router-dom'

export const BookAds = () => {
  const { id } = useParams();

  return (
    <S.Wrapper>
      <S.ReviewsContainer>

        <S.HeaderContainer>
       
          <S.AdsHeader>
            <S.ImgWrapper>
              <img src={ponte} alt="" />
            </S.ImgWrapper>

            <S.BookDetails>
              <S.BookTitle>Ponte para Terabítia</S.BookTitle>
              <S.BookAutor>Katherine Paterson</S.BookAutor>
              <S.BookSinopse>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus hic, aliquam nesciunt odit ea sunt autem! Excepturi odit amet, laboriosam accusantium odio fuga, quae ea repellat quia quod nam dolorum?</S.BookSinopse>
            </S.BookDetails>

          </S.AdsHeader>
            <S.Line></S.Line>

        </S.HeaderContainer>
        <S.AdsTitle>
          Anúncios Encontrados
        </S.AdsTitle>

          <BookAd/>
          <BookAd/>
          <BookAd/>
      </S.ReviewsContainer>
    </S.Wrapper>
  )
}
