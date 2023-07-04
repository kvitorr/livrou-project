import { LogoWrapper, Line, LogoImg, NavWrapper, Profile, UlNav } from './styles'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { IoLibraryOutline } from 'react-icons/io5'

import homeIcon from '/images/homeIcon.svg'
import reviewIcon from '/images/reviewIcon.svg'
import newAdIcon from '/images/newAdIcon.svg'
import { Link } from 'react-router-dom';
import livrouLogo from '/images/livrouLogo2.svg'
import logoutIcon from '/images/logoutIcon.svg'
import vitorIcon from '/images/vitorIcon.png'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { ShowLoginModalContext } from '../../contexts/LoginModalContext'
import { ShowRegisterModalContext } from '../../contexts/RegisterModalContext'

import jwt_decode from "jwt-decode";
import { ShowAnnouncementModalContext } from '../../contexts/AnnouncementModalContext'

import { BiAddToQueue } from 'react-icons/bi'


export const Nav = () => {
  const authContext  = useContext(AuthContext);

  const { setShowLoginModal } = useContext(ShowLoginModalContext)
  const { setShowRegisterModal } = useContext(ShowRegisterModalContext)
  const { setShowAnnouncementModal } = useContext(ShowAnnouncementModalContext)
  const [nameUser, setNameUser] = useState('')

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if(accessToken) {
        const decodedAccessToken: { name: string } = jwt_decode(accessToken);
        setNameUser(decodedAccessToken.name)
    } else {
        setNameUser('Leléo')
    }
  }, [authContext.loggedIn])

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
      <LogoWrapper>
        <div className='ImgWrapper'>
          <LogoImg src={livrouLogo}/>
        </div>
      </LogoWrapper>

      <UlNav>
        <Link to="/">
          <li className='navOption'>
            <div className='iconOption'>
              <img src={homeIcon} alt="" />
            </div>
            <p>Home</p>
          </li>
        </Link>

         <Link to="/acervo">
          <li className='navOption'>
            <div className='iconOption'>
            <IoLibraryOutline size="25"/>
            </div>
            <p>Acervo</p>
          </li>
        </Link>

        <Link to="/reviews">
          <li className='navOption'>
            <div className='iconOption'>
            <img src={reviewIcon} alt="" />
            </div>
            <p>Reviews</p>
          </li>
        </Link>

        { authContext.loggedIn && 
          <div className='buttonNavWrapper' onClick={() => { setShowAnnouncementModal(true)}}>
            <BiAddToQueue size="27"/>
            <button className='buttonNav'>
              Criar Anúncio
            </button>
          </div>
          
        }

        <Line></Line>
        { authContext.loggedIn && 

          <div className='buttonNavWrapper' onClick={() => { authContext.logout() }}>
            <BiLogIn size="27"/>
            <button className='buttonNav'>
              Logout
            </button>
          </div>
        } 

        { !authContext.loggedIn && 
          <div className='buttonNavWrapper' onClick={() => { setShowLoginModal(true)}}>
            <BiLogIn size="27"/>
            <button className='buttonNav'>
              Login
            </button>
          </div>
        }

        { authContext.isAdmin && 
          <li className='navOption'>
            <div className='iconOption'>
              <img src={logoutIcon} alt="" />
            </div>
            <p>Alertas</p>
          </li> 
        }
        </UlNav>

      { authContext.loggedIn &&
        <Profile>
          <img className='profileImg' src={vitorIcon} alt="" />
          <p>{nameUser}</p>
          <AiOutlineEllipsis/>
        </Profile> 
      }

      { !authContext.loggedIn &&
          <button className='registerButtonWrapper' onClick={() => { setShowRegisterModal(true) } }>
            Cadastre-se
          </button>
      }

    </NavWrapper>
  )
}
