import React, { ReactNode, useContext } from 'react'
import * as S from './styles'

import { AiOutlineClose } from 'react-icons/ai'
import { ShowFilterContext } from '../../contexts/FilterContext';

type AsideProps = {
  children: ReactNode;
}


export const Aside: React.FC<AsideProps> = ( { children } ) => {
  const { showFilter, setShowFilter } = useContext(ShowFilterContext);

  return (
    <S.AsideContainer>
      <div onClick={() => setShowFilter(false)} className='closeIcon'>
        <AiOutlineClose size={28}/>
      </div>
      {children}
    </S.AsideContainer>  
    )
}
