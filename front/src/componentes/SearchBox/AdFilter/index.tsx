import { useState, useContext } from 'react'
import * as S from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FilterQueryContext } from '../../../contexts/FilterQueryContext';

export const AdFilter = () => {
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [tipoVenda, setTipoVenda] = useState('');
  const [estadoConservacao, setEstadoConservacao] = useState('');
  const [valorMaximo, setValorMaximo] = useState('');
  const [messageError, setMessageError] = useState(false)

  const { filterQuery, setFilterQuery } = useContext(FilterQueryContext)

  const handleEstadoChange = (event: any) => {
    const { value } = event.target;
    setEstado(value);
  };

  const handleCidadeChange = (event: any) => {
    const { value } = event.target;
    setCidade(value);
  };

  const handleTipoVendaChange = (event: any) => {
    const { value } = event.target;
    setTipoVenda(value);
  };

  const handleEstadoConservacaoChange = (event: any) => {
    const { value } = event.target;
    setEstadoConservacao(value);
  };

  const handleValorMaximoChange = (event: any) => {
    const { value } = event.target;
    setValorMaximo(value);
  };

  const createFilterQuery = () => {
    let query = ''

    if(estado) query += `state=${estado}&`
    if(cidade) query += `city=${cidade}&`
    if(valorMaximo) query += `maxPrice=${valorMaximo}&`
    if(estadoConservacao) query += `conservation=${estadoConservacao}&`
    if(tipoVenda) query += `type=${tipoVenda}&`

    setFilterQuery(query)
  }

  const verifyFilterOptions = () => {
    return(!estado && !cidade && !valorMaximo && !estadoConservacao && !tipoVenda)
  }
  
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if(verifyFilterOptions()){
      setMessageError(true)
    } else{
      setMessageError(false)
      createFilterQuery()
    } 
  }

  const resetForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setEstado('');
    setCidade('');
    setTipoVenda('');
    setEstadoConservacao('');
    setValorMaximo('');
  };

  return (    
    <S.FormFilterContainer>
      <div>
        <h3>Selecione os Filtros</h3>
      </div>
        <S.FormFilter>  
          <p className='label-input'>Estado</p>
          <S.SelectOptions value={estado} onChange={handleEstadoChange}>
            <option value=""></option>
            <option value="piaui">Piauí</option>
          </S.SelectOptions>

          <p className='label-input'>Cidade</p>
          <S.SelectOptions value={cidade} onChange={handleCidadeChange}>
            <option value=""></option>
            <option value="teresina">Teresina</option>
          </S.SelectOptions>

          <p className='label-input'>Tipo de Venda</p>
          <S.SelectOptions value={tipoVenda} onChange={handleTipoVendaChange}>
            <option value=""></option>
            <option value="1">Venda</option>
            <option value="2">Troca</option>
            <option value="3">Troca e Venda</option>
          </S.SelectOptions>

          <p className='label-input'>Estado de Conservação</p>
          <S.SelectOptions value={estadoConservacao} onChange={handleEstadoConservacaoChange}>
            <option value=""></option>
            <option value="1">Novo</option>
            <option value="2">Seminovo</option>
            <option value="3">Com muitas marcas de uso</option>

          </S.SelectOptions>

          <p className='label-input'>Preço Máximo</p>
          <input value={valorMaximo} onChange={handleValorMaximoChange}  className='preco-maximo' type="text" />

          { messageError &&
            <p className='messageError'>Você deve selecionar algum filtro.</p>
          }
          <button className='button-search' onClick={handleSubmit}>
            Buscar
          </button>
          <button className='button-search' onClick={resetForm}>
            Resetar Filtros
          </button>
        </S.FormFilter>
    </S.FormFilterContainer>
  )
}
