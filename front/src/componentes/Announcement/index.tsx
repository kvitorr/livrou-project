import { useParams } from 'react-router-dom';
import * as S from './styles'

import urlImage from '/images/ponteParaTerabia.jpg'
import Advertiser from './Advertiser';




const Announcement = () => {

  const { id } = useParams();

  return (
    <S.Wrapper>
      <S.AdDetail>

        <S.Description>
          <S.SectionTitle>
            Descrição do Anúncio
          </S.SectionTitle>
        
          <S.DescriptionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa necessitatibus eius similique? Quam nisi facere nostrum tempora nihil aperiam, neque vitae error beatae aspernatur ab optio ex, et qui?
          </S.DescriptionContent>
        </S.Description>

        <S.SpecificDetails>
          <S.SectionTitle>
            Detalhes
          </S.SectionTitle>

          <S.SpecificDetailsWrapper>
            <S.SpecificDetailsType>
              Tipo de anúncio:
            </S.SpecificDetailsType>
            <S.SpecificDetailsContent>
              Troca e venda
            </S.SpecificDetailsContent>
          </S.SpecificDetailsWrapper>

          <S.SpecificDetailsWrapper>
            <S.SpecificDetailsType>
              Conservação:
            </S.SpecificDetailsType>
            <S.SpecificDetailsContent>
                Bom estado
            </S.SpecificDetailsContent>
          </S.SpecificDetailsWrapper>

          <S.SpecificDetailsWrapper>
            <S.SpecificDetailsType>
              Localização:
            </S.SpecificDetailsType>
            <S.SpecificDetailsContent>
              Teresina - Piauí
            </S.SpecificDetailsContent>
          </S.SpecificDetailsWrapper>
        </S.SpecificDetails>

        <S.BookDetails>
          <S.SectionTitle>
            Título selecionado
          </S.SectionTitle>

          <S.BookWrapper>
            <S.BookImgWrapper>
              <S.BookImg src={urlImage}/>
            </S.BookImgWrapper>

            <S.BookInformation>
              <S.BookTitle>
                Amor e Gelato
              </S.BookTitle>
              <S.BookAutors>
                Jenna Evans Welch
              </S.BookAutors>

              <S.BookSinopse>
              Depois da morte da mãe, Lina fica com a missão de realizar um último pedido: ir até a Itália para conhecer o pai. Do dia para a noite, ela se vê na famosa paisagem da Toscana, morando em uma casa localizada no mesmo terreno de um cemitério memorial de soldados americanos da Segunda Guerra Mundial, com um homem que nunca tinha ouvido falar. Apesar das belezas arquitetônicas, da história da cidade e das comidas maravilhosas, o que Lina mais quer é ir embora correndo dali.
              </S.BookSinopse>
            </S.BookInformation>

          </S.BookWrapper>
        </S.BookDetails>
      </S.AdDetail>

      <S.ContactWrapper>
        <Advertiser/>
      </S.ContactWrapper>

    </S.Wrapper>
    
  )
}

export default Announcement