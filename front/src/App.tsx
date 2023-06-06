import { useContext } from 'react'
import { ShowMenuContext } from './contexts/MenuContext'

import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyle'
import * as S from './styles'

import { Outlet } from 'react-router-dom' 
import { Nav } from './componentes/Nav'
import { SearchBox } from './componentes/SearchBox'


function App() {
  const { showMenu, setShowMenu } = useContext(ShowMenuContext);
  
  return (
    <S.App>
      <ThemeProvider theme={theme}>

          <S.Content>  
            {showMenu && <Nav/>}

            <S.MainContent>
              <SearchBox/>
              <Outlet/>
            </S.MainContent>

          </S.Content>

      </ThemeProvider>
      <GlobalStyle/>
    </S.App>
  )
}

export default App
