import { IBookAds } from '../index.tsx'
import * as S from './styles.ts'

import adeliaProfile from '/images/adelia.png'

interface IBookAdsComplement {
  title: string | undefined
}

function transaction(transationId: number) {
  if(transationId === 1) {
    return 'Venda'
  } else if (transationId === 2) {
    return 'Troca'
  } else {
    return 'Troca e Venda'
  }
}

export const BookAd: React.FC<IBookAds & IBookAdsComplement> = ({ description, value, bookId, title, transactionTypeId }) => {
  return (

    <S.AdContainer>
        <S.ProfileImgWrapper>
            <img src={adeliaProfile} alt="" />
        </S.ProfileImgWrapper>

        <S.AdContentWrapper>
          <S.AdHeader>
            <S.AdTitle>
                {title}
            </S.AdTitle>
          </S.AdHeader>
            
            
            <S.AdContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis nesciunt sapiente, nostrum dolore nemo voluptates voluptas doloribus? Inventore illo dolorem unde expedita quo accusantium vero omnis harum magnam sequi!
            </S.AdContent>

        </S.AdContentWrapper>
        <S.AdInteraction>
        <S.AdType>
        {(value != 0) && <p>R$ {value}</p>
                } {transaction(transactionTypeId)}
        </S.AdType>

        </S.AdInteraction>
      
    </S.AdContainer>


  )
}
