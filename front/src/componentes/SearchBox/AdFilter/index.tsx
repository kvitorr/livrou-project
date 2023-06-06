import * as S from './styles'

export const AdFilter = () => {
  return (    
        <S.FormFilterContainer>
            <S.FormFilter>  
              <p className='label-input'>Estado </p>
              <S.SelectOptions>
                <option value="piaui">Piauí</option>
              </S.SelectOptions>

              <p className='label-input'>Cidade</p>
              <S.SelectOptions>
                <option value="teresina">Teresina</option>
              </S.SelectOptions>

              <p className='label-input'>Tipo de Venda</p>
              <S.SelectOptions>
                <option value="troca">Troca</option>
                <option value="venda">Venda</option>
                <option value="troca e venda">Troca e Venda</option>
              </S.SelectOptions>

              <p className='label-input'>Estado de Conservação</p>
              <S.SelectOptions>
                <option value="selecionar opcao">Selecionar Opção</option>
              </S.SelectOptions>

              <p className='label-input'>Preço Máximo</p>
              <input type="text" />
              <p className='label-input'>Preço Mínimo</p>
              <input type="text" />


              <button className='button-search'>
                Buscar
              </button>
            </S.FormFilter>
        </S.FormFilterContainer>
  )
}
