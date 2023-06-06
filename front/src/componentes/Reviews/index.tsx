import React from 'react'
import { Review } from './Review'
import ponte from '/images/ponteParaTerabia.jpg'
import * as S from './styles.ts'
import { Link } from 'react-router-dom'


export const Reviews = () => {
  return (
    <S.Wrapper>
      <S.ReviewsContainer>
        <S.HeaderContainer>
            <S.ReviewsTitle>
              Reviews
            </S.ReviewsTitle>
          <S.ReviewsHeader>
            <S.ImgWrapper>
              <img src={ponte} alt="" />
            </S.ImgWrapper>

            <S.BookDetails>
            <Link to="/bookdetails">
              <S.BookTitle>Ponte para Terabítia</S.BookTitle>

            </Link>

              <S.BookAutor>Katherine Paterson</S.BookAutor>
              <S.BookSinopse>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus hic, aliquam nesciunt odit ea sunt autem! Excepturi odit amet, laboriosam accusantium odio fuga, quae ea repellat quia quod nam dolorum?</S.BookSinopse>
            </S.BookDetails>

          </S.ReviewsHeader>
            <S.Line></S.Line>

        </S.HeaderContainer>


        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/> 
        <Review/>
        <Review/>
        <Review/>
        <Review/> 
      </S.ReviewsContainer>
    </S.Wrapper>
  )
}
