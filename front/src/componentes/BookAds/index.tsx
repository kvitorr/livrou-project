import React from 'react'
import ponte from '/images/ponteParaTerabia.jpg'
import * as S from './styles.ts'
import { BookAd } from './BookAd'

export const BookAds = () => {
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
    
      <S.FilterContainer>
        <S.FormFilterContainer>
          <div className='title'>
            <p>Filtrar Busca</p>
          </div>
            <S.FormFilter>
              
              <p className='label-input'>Estado: </p>
              <S.SelectOptions>
                <option value="mais curtidas">Piauí</option>
                <option value="mais recentes">Ceará</option>
              </S.SelectOptions>

              <p className='label-input'>Cidade: </p>
              <S.SelectOptions>
                <option value="mais curtidas">Teresina</option>
                <option value="mais recentes">Piracuruca</option>
              </S.SelectOptions>

              <p className='label-input'>Tipo de venda: </p>
              <S.SelectOptions>
                <option value="mais curtidas">Apenas venda</option>
                <option value="mais recentes">Apenas troca</option>
                <option value="mais recentes">Venda e troca</option>
              </S.SelectOptions>

              <p className='label-input'>Estado de conservacao: </p>
              <S.SelectOptions>
                <option value="mais curtidas">Novo</option>
                <option value="mais curtidas">Seminovo</option>
                <option value="mais curtidas">Usado</option>
              </S.SelectOptions>

              <button className='button-search'>
                Buscar
              </button>
            </S.FormFilter>
        </S.FormFilterContainer>

      </S.FilterContainer>
    </S.Wrapper>
  )
}
