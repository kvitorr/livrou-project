import { useState, useContext, useEffect } from 'react'
import * as S from './styles'

import { FilterQueryContext } from '../../../contexts/FilterQueryContext';
import { axiosPublic } from '../../../utils/api';

interface IEstados {
  state: string
}

interface ICidades {
  location_id: number
  city: string
  state: string
}

export const AdFilter = () => {
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [tipoVenda, setTipoVenda] = useState('');
  const [estadoConservacao, setEstadoConservacao] = useState('');
  const [valorMaximo, setValorMaximo] = useState('');
  const [messageError, setMessageError] = useState(false)

  const { filterQuery, setFilterQuery } = useContext(FilterQueryContext)

  const [estados, setEstados] = useState<IEstados[]>([])
  const [cidades, setCidades] = useState<ICidades[]>([])

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEstados = async () => {
      const response = await axiosPublic('location')
      const data = response.data
      setEstados(data)
    }
    fetchEstados();
  })

  useEffect(() => {
    const fetchCidades = async () => {
      const response = await axiosPublic(`location/states/${estado}`)
      const data = response.data
      setCidades(data.items)
    }
    if(estado) fetchCidades();
    else setCidades([])
  }, [estado])


  const fetchNewCidades = async (pageNumber: number) => {
    const response = await axiosPublic(`location/states/Piauí?page=${pageNumber}`)
    const data = response.data
    const currentCidades = cidades.concat(data.items)

    setCidades(currentCidades)
    setCurrentPage(data.meta.currentPage)
  }





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

    console.log(query)

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
    setFilterQuery('')
  };

  return (    
    <S.FormFilterContainer>
      <div>
        <h3>Selecione os Filtros</h3>
      </div>
        <S.FormFilter>  
          <p className='label-input'>Estado</p>
            <S.SelectOptions required value={estado} onChange={handleEstadoChange}>
              <option value=""></option>
              {
                estados.map((estado, id) => (
                  <option key={id} value={estado.state}>{estado.state}</option>
                ))
              }
            </S.SelectOptions>

            <p className='label-input'>Cidade</p>
            <S.SelectOptions required value={cidade} onChange={handleCidadeChange}>
              <option value=""></option>
              {
                cidades.map((cidade, id) => (
                  <option key={id} value={cidade.city}>{cidade.city}</option>
                ))
              }
              {currentPage < totalPages && <option onClick={() => fetchNewCidades(currentPage + 1)}>
                Carregar mais cidades
              </option>}
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
