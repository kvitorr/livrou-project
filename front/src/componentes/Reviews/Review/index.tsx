import * as S from './styles.ts'
import { AiOutlineHeart } from 'react-icons/ai'

import adeliaProfile from '/images/adelia.png'

export const Review = () => {
  return (

    <S.ReviewContainer>
        <S.ProfileImgWrapper>
            <img src={adeliaProfile} alt="" />
        </S.ProfileImgWrapper>

        <S.ReviewContentWrapper>
            <S.ReviewTitle>
                Espetacular, Sensacional
            </S.ReviewTitle>
            
            <S.ReviewContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis nesciunt sapiente, nostrum dolore nemo voluptates voluptas doloribus? Inventore illo dolorem unde expedita quo accusantium vero omnis harum magnam sequi!
            </S.ReviewContent>

        </S.ReviewContentWrapper>

        <S.ReviewInteraction>
            <AiOutlineHeart size={22}/>
            <p>10</p>
        </S.ReviewInteraction>

    </S.ReviewContainer>


  )
}
