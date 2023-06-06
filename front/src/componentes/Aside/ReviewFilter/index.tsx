import React from 'react'

import * as S from './styles'

export const ReviewFilter = () => {
  return (
        <S.FormFilterContainer>
          <div className='title'>
            <p>Filtrar reviews</p>
          </div>
            <S.FormFilter>
              <label className='label-input' htmlFor="titulo">Título do Livro</label>
              <input type="text" id="titulo" placeholder='Enter the title' />  

              <p className='label-input'>Ordenar por: </p>
              <S.SelectOptions>
                <option value="mais curtidas">Mais curtidas</option>
                <option value="mais recentes">Mais recentes</option>
              </S.SelectOptions>

              <button className='button-search'>
                Buscar
              </button>
            </S.FormFilter>
        </S.FormFilterContainer>
  )
}
