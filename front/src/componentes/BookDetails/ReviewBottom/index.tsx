import * as S from './styles.ts'
import adeliaProfile from '/images/adelia.png'

export const ReviewBottom = () => {
  return (

    <S.ReviewContainer>
        <img src={adeliaProfile} alt="" />
       
        <S.ReviewContentWrapper>
            <S.BookTitle>
                Ponte para Terabítia
            </S.BookTitle>

            <S.ReviewContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos cum et nam aperiam exercitationem minus illo, quam corrupti, impedit odio veritatis beatae ea tempore cumque accusamus dolores. Magni, odit?            
            </S.ReviewContent>

        </S.ReviewContentWrapper>

    

    </S.ReviewContainer>


  )
}
