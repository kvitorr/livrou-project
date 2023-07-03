import { AnnouncementFormContainer, SelectOptions } from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { useContext, useState } from 'react'
import { ShowAnnouncementModalContext } from '../../contexts/AnnouncementModalContext'
import { BookSearcher } from './BookSearcher'
import { axiosPrivate } from '../../utils/api'

interface BooksProps {
  book_id: string
  title: string
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

  const handleValueChange = (event: any) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleDescriptionChange = (event: any) => {
    const { value } = event.target;
    setDescription(value);
  };


  const handleSubmit = async () => {
    let book
    if(tipoVenda !== '2') {
      book = {
        book_id: choosenBook?.book_id,
        conservationId: Number(estadoConservacao),
        value: Number(value),
        description,
        transactionTypeId: Number(tipoVenda),
        locations: {
          estado,
          cidade,
        }
      }
    } else {
      book = {
        bookId: choosenBook?.book_id,
        conservationId: Number(estadoConservacao),
        value: 0,
        description,
        transactionTypeId: Number(tipoVenda),
        locations: [{
          estado,
          cidade,
        }]
      }
    }
    console.log(book)
    const response = await axiosPrivate.post('advertisement', book)
    console.log(response)
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
          <SelectOptions value={tipoVenda} onChange={handleTipoVendaChange}>
            <option value=""></option>
            <option value="1">Venda</option>
            <option value="2">Troca</option>
            <option value="3">Troca e Venda</option>
          </SelectOptions>

          <p className='label-input'>Estado de Conservação</p>
          <SelectOptions value={estadoConservacao} onChange={handleEstadoConservacaoChange}>
            <option value=""></option>
            <option value="1">Novo</option>
            <option value="2">Seminovo</option>
            <option value="3">Com muitas marcas de uso</option>
          </SelectOptions>

          { value != '2' && 
            <>
              <p className='label-input'>Preço</p>
              <input className='input-style' value={value} onChange={handleValueChange} type="text" placeholder='Digite o preço...'/>
            </>
          } 

            <p className='label-input'>Descrição</p>
            <input className='input-style' value={description} onChange={handleDescriptionChange} type="text" placeholder='Digite o descrição...'/>

            <p className='label-input'>Estado</p>
            <input className='input-style' value={estado} onChange={handleEstadoChange} type="text" placeholder='Digite o estado ...'/>

            <p className='label-input'>Cidade</p>
            <input className='input-style' value={cidade} onChange={handleCidadeChange} type="text" placeholder='Digite a cidade...'/>

          
        <button className='buttonType' id='buttonPublish' onClick={handleSubmit} type='button'>Publicar</button>
      </form>
        
            
      </AnnouncementFormContainer>
  )
}

export default AnnouncementForm