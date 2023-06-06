import * as S from './styles.ts'
import { AiOutlineHeart } from 'react-icons/ai'

import adeliaProfile from '/images/adelia.png'

export const BookAd = () => {
  return (

    <S.AdContainer>
        <S.ProfileImgWrapper>
            <img src={adeliaProfile} alt="" />
        </S.ProfileImgWrapper>

        <S.AdContentWrapper>
          <S.AdHeader>
          <S.AdTitle>
                Ponte Para Terabita
              
            </S.AdTitle>
            <S.stateOfConservation>
                  <p>Ótimo estado</p>
                </S.stateOfConservation>
          </S.AdHeader>
            
            
            <S.AdContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis nesciunt sapiente, nostrum dolore nemo voluptates voluptas doloribus? Inventore illo dolorem unde expedita quo accusantium vero omnis harum magnam sequi!
            </S.AdContent>

        </S.AdContentWrapper>
        <S.AdInteraction>
        <S.AdType>
            <p>R$20/Troca</p>
        </S.AdType>

        </S.AdInteraction>
      
    </S.AdContainer>


  )
}
