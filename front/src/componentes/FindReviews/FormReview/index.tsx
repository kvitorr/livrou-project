import { ReviewFormContainer } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { axiosPrivate } from '../../../utils/api'
import { BooksProps } from '..'

interface FormReviewProps {
  setShowReviewModal: React.Dispatch<React.SetStateAction<boolean>>
  showReviewModal: boolean
}


const ReviewForm: React.FC<BooksProps & FormReviewProps> = ({book_id, title, setShowReviewModal, showReviewModal}) => {
  const [content, setContent] = useState<string>('')


  const handleContentChange = (event: any) => {
    const { value } = event.target;
    setContent(value);
  };

  const handleSubmit = async () => {
    const response = await axiosPrivate.post(`books/${book_id}/book-review`, {content})

    if( response && response.status === 201){
      setShowReviewModal(false)
    }
}

  return (

      <ReviewFormContainer>
        <div className='closeIcon' onClick={() =>  setShowReviewModal(false) }>
            <AiOutlineClose size="20"/>
        </div>

        <div className='header'>
          <h2 className='subtitle'>Publicar Avaliação</h2>
          <p className='description'>Selecione o livro para avaliar</p>
        </div>

        {
          <div className='selected-book'>
            <div>
            <h4>Livro escolhido: </h4>
              <p className='bookTitle'>{title}</p>
            </div>
          </div>
        }
      <form>
        <p className='label-input'>O que você achou do livro?</p>
        <textarea className='input-style' value={content} onChange={handleContentChange} placeholder='Digite o descrição...'/>
        <button className='buttonType' id='buttonPublish' onClick={handleSubmit} type='button'>Publicar</button>
      </form>
        
            
      </ReviewFormContainer>
  )
}

export default ReviewForm