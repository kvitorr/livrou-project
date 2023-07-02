import { useContext } from 'react'

import { BoxWrapper, ButtonWrapper } from './styles'
import { SearchBar } from './SearchBar'
import { AiOutlineMenu } from 'react-icons/ai'
import { ShowMenuContext } from '../../contexts/MenuContext'
import { ShowFilterContext } from '../../contexts/FilterContext'
import { AdFilter } from './AdFilter'

export const SearchBox = () => {
  const { showMenu, setShowMenu } = useContext(ShowMenuContext);
  const { showFilter, setShowFilter } = useContext(ShowFilterContext);

  return (
    <BoxWrapper>
      <div onClick={() => setShowMenu(!showMenu)} className='MenuIcon'>
          <AiOutlineMenu size={28}/>
      </div>


      <div className='HeaderContainer'>
          <SearchBar/>
      </div>

      <ButtonWrapper onClick={() => setShowFilter(!showFilter)}>
        Filtrar Anúncios
      </ButtonWrapper>
        {showFilter && <AdFilter/>}
    </BoxWrapper>  
  )
}
