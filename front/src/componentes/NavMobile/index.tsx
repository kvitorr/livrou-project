import { NavWrapper, Profile, UlNav } from './styles'
import { AiOutlineEllipsis} from 'react-icons/ai'
import { BiAddToQueue } from 'react-icons/bi'

import { Link } from 'react-router-dom';
import vitorIcon from '/images/vitorIcon.png'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { ShowLoginModalContext } from '../../contexts/LoginModalContext'
import { ShowRegisterModalContext } from '../../contexts/RegisterModalContext'

import jwt_decode from "jwt-decode";
import { ShowMenuContext } from '../../contexts/MenuContext';

import { ShowAnnouncementModalContext } from '../../contexts/AnnouncementModalContext'



const userLogado = {
  id: 1,
  name: "Vitor",
  email: "kvitosantos@hotmail.com",
  phone: "86999626417",
  birthDate: new Date(),
  registrationDate: new Date(),
  
  isAdmin: false,
  authToken: "asdsadas",
}

const administrador = {
  id: 1,
  name: "Vitor",
  email: "kvitosantos@hotmail.com",
  phone: "86999626417",
  birthDate: new Date(),
  registrationDate: new Date(),
  
  isAdmin: true,
  authToken: "asdsadas",
}

const authLogged = {
  user: administrador
}


export const NavMobile = () => {
  const authContext  = useContext(AuthContext);

  const { setShowLoginModal } = useContext(ShowLoginModalContext)
  const { setShowRegisterModal } = useContext(ShowRegisterModalContext)
  const { setShowMenu } = useContext(ShowMenuContext)
  const { setShowAnnouncementModal } = useContext(ShowAnnouncementModalContext)


  useEffect(() => { 
    const verifyExpirationDateJwt = async () => {
      const accessToken = localStorage.getItem("access_token")
      const refreshToken = localStorage.getItem("refresh_token")
  
      if(accessToken) {
        //buscar o nome do usuário do payload tb
        const decodedAccessToken: { exp: number } = jwt_decode(accessToken);
  
        if (Date.now() >= decodedAccessToken.exp * 1000) {  //verifico se tá válido
          //se tiver inválido, verifico se o refreshtoken existe e se ta válido tb
          console.log("access token inválido")
  
          if(refreshToken) {
            const decodedRefreshToken: { exp: number } = jwt_decode(refreshToken);
  
            if (Date.now() >= decodedRefreshToken.exp * 1000) { //se tiver inválido removo tudo
              console.log("refresh token inválido")
  
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              authContext.setLoggedIn(false);
              authContext.setIsAdmin(false);
            } else { //se tiver válido eu verifico se é administrador, a rota é protegida e vai gerar um novo access e refresh token automaticamente
              //verificar se o usuário é administrador, se for administrador, eu seto admin True 
              authContext.setLoggedIn(true);
              console.log("refresh token válido")
            }
          }
        } else {
          console.log("access token válido")
          authContext.setLoggedIn(true)
          //verificar se o usuário é administrador na tabela de administradores, pegar 
        }
      } else {
        console.log("não existe access token")
      }
    }

    verifyExpirationDateJwt()
  }, [])


  return (
    <NavWrapper>
      <UlNav>
        <Link to="/">
          <li className='navOption'>
            <button onClick={() => setShowMenu(false)}>Home</button>
          </li>
        </Link>

         <Link to="/acervo">
          <li className='navOption'>
            <button onClick={() => setShowMenu(false)}>Acervo</button>
          </li>
        </Link>

        <Link to="/reviews">
          <li className='navOption'> 
            <button onClick={() => setShowMenu(false)}>Reviews</button>
          </li>
        </Link>

        { authContext.loggedIn && 
          <div className='navOption' onClick={() => { setShowAnnouncementModal(true); setShowMenu(false)}}>
            <button className='buttonNav'>
              Criar Anúncio
            </button>
          </div>
          
        }

        { authContext.loggedIn && 

          <div className='buttonNavWrapper' onClick={() => { authContext.logout(); setShowMenu(false); }}>
            <button className='buttonNav'>
              Logout
            </button>
          </div>
        } 

        { !authContext.loggedIn && 
          <div className='navOption' onClick={() => { setShowLoginModal(true)}}>
            <button className='buttonNav'>
              Login
            </button>
          </div>
        }

        { authContext.isAdmin && 
          <li className='navOption'>
            <button onClick={() => setShowMenu(false)}>Alertas</button>
          </li> 
        }
        </UlNav>

      { !authContext.loggedIn &&
          <div className='navOption' onClick={() => { setShowRegisterModal(true)}}>
            <button className='buttonNav'>
              Cadastre-se
            </button>
          </div>
        }

    </NavWrapper>
  )
}
