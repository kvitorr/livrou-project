import React, { useContext } from 'react'
import * as S from './styles'
import vitorIcon from '/images/vitorIcon.png'
import { IBookDetailsProps } from '..'
import { AuthContext } from '../../../contexts/AuthContext'
import { IoLogoWhatsapp } from 'react-icons/io'



const Advertiser: React.FC<IBookDetailsProps> = ({advertisementType, price, advertiserName, accountCreationDate, contactNumber}) => {
  
    const { loggedIn } = useContext(AuthContext)
    function formatLivroDate(dateString: string) {
        const months = [
          'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
          'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
        ];
      
        const date = new Date(dateString);
        const month = months[date.getMonth()];
        const year = date.getFullYear();
      
        return `Na livrou desde ${month} de ${year}`;
      }  
  
  
  
 return (
    <S.Wrapper>
        <S.Tag>
            <S.ValueAndType>
                 {price && <p>R$ {price}</p>
                } {advertisementType.toUpperCase()}
            </S.ValueAndType>
        </S.Tag>

        <S.ProfileWrapper>
            <S.Title>
                Anunciante
            </S.Title>
            <S.Advertiser>
                <S.ImgWrapper>
                    <S.ImgProfile src={vitorIcon}/>
                </S.ImgWrapper>
                <S.Name>
                    {advertiserName}
                </S.Name>
            </S.Advertiser>
            <S.AdvertiserDescription>
            {accountCreationDate && formatLivroDate(accountCreationDate)}
            </S.AdvertiserDescription>

            <S.ContactWrapper>
                <S.ContactTitle>
                    Entrar em Contato:
                </S.ContactTitle>

                {loggedIn && 
                <a href={`https://wa.me/${contactNumber}`}>
                    <IoLogoWhatsapp size={32}/>
                </a>
                    }
                {!loggedIn && <p>Você precisa estar logado</p>}


            </S.ContactWrapper>
        </S.ProfileWrapper>
    </S.Wrapper>
  )
}

export default Advertiser