import { LogoWrapper, Line, LogoImg, NavWrapper, Profile, UlNav } from './styles'
import { AiOutlineSetting, AiOutlineEllipsis, AiOutlineClose } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { IoLibraryOutline } from 'react-icons/io5'

import homeIcon from '/images/homeIcon.svg'
import reviewIcon from '/images/reviewIcon.svg'
import newAdIcon from '/images/newAdIcon.svg'
import { Link } from 'react-router-dom';
import livrouLogo from '/images/livrouLogo2.svg'
import logoutIcon from '/images/logoutIcon.svg'
import vitorIcon from '/images/vitorIcon.png'
import { useContext, useState } from 'react'
import { ShowMenuContext } from '../../contexts/MenuContext'
import { AuthContext } from '../../contexts/AuthContext'
import { ShowLoginModalContext } from '../../contexts/LoginModalContext'
import { ShowRegisterModalContext } from '../../contexts/RegisterModalContext'

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


export const Nav = () => {
  const { setShowMenu } = useContext(ShowMenuContext);
  const authContext  = useContext(AuthContext);
  const { setShowLoginModal } = useContext(ShowLoginModalContext)
  const { setShowRegisterModal } = useContext(ShowRegisterModalContext)


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

         <Link to="#">
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
          <li className='navOption'>
            <div className='iconOption'>
              <img src={newAdIcon} alt="" />
            </div>
            <p>Criar Anúncio</p>
          </li> 
        }

        <Line></Line>
        { authContext.loggedIn && 
          <li className='navOption'>
            <div className='iconOption'>
              <img src={logoutIcon} alt="" />
            </div>
            <p>Logout</p>
          </li> 
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

        { authContext.loggedIn && 
          <li className='navOption'>
            <div className='iconOption'>
              <AiOutlineSetting size={24}/>
            </div>
            <p>Configurações</p>
          </li>
        }
        </UlNav>

      { authContext.loggedIn &&
        <Profile>
          <img className='profileImg' src={vitorIcon} alt="" />
          <p>Vitor</p>
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
