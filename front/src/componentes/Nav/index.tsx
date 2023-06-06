import { LogoWrapper, Line, LogoImg, NavWrapper, Profile, UlNav } from './styles'
import { AiOutlineSetting } from 'react-icons/ai'
import homeIcon from '/images/homeIcon.svg'
import reviewIcon from '/images/reviewIcon.svg'
import newAdIcon from '/images/newAdIcon.svg'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import livrouLogo from '/images/livrouLogo2.svg'
import logoutIcon from '/images/logoutIcon.svg'
import vitorIcon from '/images/vitorIcon.png'
import { AiOutlineClose } from 'react-icons/ai'
import { useContext, useEffect } from 'react'
import { ShowMenuContext } from '../../contexts/MenuContext'

export const Nav = () => {
  const { showMenu, setShowMenu } = useContext(ShowMenuContext);

  return (
    <NavWrapper>
      <LogoWrapper>
        <div onClick={() => setShowMenu(false)} className='closeIcon'>
          <AiOutlineClose size={28}/>
        </div>

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

        <Link to="/reviews">
          <li className='navOption'>
            <div className='iconOption'>
            <img src={reviewIcon} alt="" />
            </div>
            <p>Reviews</p>
          </li>
        </Link>

          <li className='navOption'>
            <div className='iconOption'>
              <img src={newAdIcon} alt="" />
            </div>
            <p>Criar Anúncio</p>
          </li>

          <Line></Line>
        <li className='navOption'>
          <div className='iconOption'>
            <img src={logoutIcon} alt="" />
          </div>
          <p>Logout</p>
        </li>

        <li className='navOption'>
          <div className='iconOption'>
            <AiOutlineSetting size={24}/>
          </div>
          <p>Configurações</p>
        </li>
      </UlNav>


      <Profile>
        <img className='profileImg' src={vitorIcon} alt="" />
        <p>Vitor</p>
        <AiOutlineEllipsis/>
      </Profile>



    </NavWrapper>
  )
}
