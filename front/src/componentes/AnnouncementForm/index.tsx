import { AnnouncementFormContainer, SelectOptions } from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { useContext, useEffect, useState } from 'react'
import { ShowAnnouncementModalContext } from '../../contexts/AnnouncementModalContext'
import { BookSearcher } from './BookSearcher'
import { axiosPrivate, axiosPublic } from '../../utils/api'

interface BooksProps {
  book_id: string
  title: string
}

interface IEstados {
  state: string
}

interface ICidades {
  location_id: number
  city: string
  state: string
}

// extract the inferred type


const AnnouncementForm = () => {
  const { setShowAnnouncementModal }  = useContext(ShowAnnouncementModalContext)

  const [choosenBook, setChoosenBook] = useState<BooksProps | null>(null)

  const [estadoConservacao, setEstadoConservacao] = useState<string>('')
  const [tipoVenda, setTipoVenda] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [showValue, setShowValue] = useState(false)

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
    if(value === '' || value === '2') setShowValue(false)
    else setShowValue(true)
    setTipoVenda(value);
  };

  const handleEstadoConservacaoChange = (event: any) => {
    const { value } = event.target;
    setEstadoConservacao(value);
  };

  const handleValueChange = (event: any) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleDescriptionChange = (event: any) => {
    const { value } = event.target;
    setDescription(value);
  };


  const handleSubmit = async () => {
    const valueTratado = value ? value : null
    const book = {
        bookId: choosenBook?.book_id,
        conservationId: Number(estadoConservacao),
        value: valueTratado,
        description,
        transactionTypeId: Number(tipoVenda),
        locations: [{
          estado,
          cidade,
        }]
      }
      console.log(book)
    const response = await axiosPrivate.post('advertisement', book)
}

  return (

      <AnnouncementFormContainer>
        <div className='closeIcon' onClick={ () => setShowAnnouncementModal(false) }>
            <AiOutlineClose size="20"/>
        </div>

        <div className='header'>
          <h2 className='subtitle'>Publicar Anúncio</h2>
          <p className='description'>Selecione o título do seu livro e outras informações</p>
        </div>

        { !choosenBook &&
            <>
              <label className='label-input' htmlFor="email">Livro</label>
              <BookSearcher choosenBook={choosenBook} setChoosenBook={setChoosenBook}/> 
            </>
          }

        { choosenBook &&
          <div className='selected-book'>
            <div>
            <h4>Livro escolhido: </h4>
              <p className='bookTitle'>{choosenBook.title}</p>
            </div>
            <button type='button' onClick={() => setChoosenBook(null)}>Mudar Livro</button>
          </div>
        }

      <form>
        <p className='label-input'>Tipo de Venda</p>
          <SelectOptions required value={tipoVenda} onChange={handleTipoVendaChange}>
            <option value=""></option>
            <option value="1">Venda</option>
            <option value="2">Troca</option>
            <option value="3">Troca e Venda</option>
          </SelectOptions>

          <p className='label-input'>Estado de Conservação</p>
          <SelectOptions required value={estadoConservacao} onChange={handleEstadoConservacaoChange}>
            <option value=""></option>
            <option value="1">Novo</option>
            <option value="2">Seminovo</option>
            <option value="3">Com muitas marcas de uso</option>
          </SelectOptions>

          { showValue && 
            <>
              <p className='label-input'>Preço</p>
              <input required className='input-style' value={value} onChange={handleValueChange} type="number" placeholder='Digite o preço...'/>
            </>
          } 

            <p className='label-input'>Descrição</p>
            <input required className='input-style' value={description} onChange={handleDescriptionChange} type="text" placeholder='Digite o descrição...'/>

            <p className='label-input'>Estado</p>
            <SelectOptions required value={estado} onChange={handleEstadoChange}>
              <option value=""></option>
              {
                estados.map((estado, id) => (
                  <option key={id} value={estado.state}>{estado.state}</option>
                ))
              }
            </SelectOptions>

            <p className='label-input'>Cidade</p>
            <SelectOptions required value={cidade} onChange={handleCidadeChange}>
              <option value=""></option>
              {
                cidades.map((cidade, id) => (
                  <option key={id} value={cidade.city}>{cidade.city}</option>
                ))
              }
              {currentPage < totalPages && <option onClick={() => fetchNewCidades(currentPage + 1)}>
                Carregar mais cidades
              </option>}
            </SelectOptions>
           
        <button className='buttonType' id='buttonPublish' onClick={handleSubmit} type='button'>Publicar</button>
      </form>
        
            
      </AnnouncementFormContainer>
  )
}

export default AnnouncementForm