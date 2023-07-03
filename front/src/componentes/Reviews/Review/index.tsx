import * as S from './styles.ts'
import { AiOutlineHeart } from 'react-icons/ai'

import adeliaProfile from '/images/adelia.png'

interface IReviewProps {
    bookReviewId: number
    title: string
    content: string
    amountLikes: number
}


export const Review: React.FC<IReviewProps> = ({title, content, amountLikes, bookReviewId}) => {
  return (

    <S.ReviewContainer>
        <S.ProfileImgWrapper>
            <img src={adeliaProfile} alt="" />
        </S.ProfileImgWrapper>

        <S.ReviewContentWrapper>
            <S.ReviewTitle>
                {title}
            </S.ReviewTitle>
            
            <S.ReviewContent>
            {content}
            </S.ReviewContent>

        </S.ReviewContentWrapper>

        <S.ReviewInteraction>
            <AiOutlineHeart size={22}/>
            <p>{amountLikes}</p>
        </S.ReviewInteraction>

    </S.ReviewContainer>


  )
}
