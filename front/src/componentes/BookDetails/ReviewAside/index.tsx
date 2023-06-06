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
            <S.BookTitle>
                Ponte para Terabítia
            </S.BookTitle>

    
            
            <S.ReviewContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </S.ReviewContent>

        </S.ReviewContentWrapper>

    

    </S.ReviewContainer>


  )
}
