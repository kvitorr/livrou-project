import React from 'react'
import * as S from './styles'
import vitorIcon from '/images/vitorIcon.png'

const Advertiser = () => {
  return (
    <S.Wrapper>
        <S.Tag>
            <S.ValueAndType>
                R$ 20/Troca
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
                    Vitor Araujo
                </S.Name>
            </S.Advertiser>
            <S.AdvertiserDescription>
                Na livrou desde novembro de 2023
            </S.AdvertiserDescription>

            <S.ContactWrapper>
                <S.ContactTitle>
                    Entrar em Contato:
                </S.ContactTitle>

                <S.WhatsappIcon/>
            </S.ContactWrapper>
        </S.ProfileWrapper>
    </S.Wrapper>
  )
}

export default Advertiser