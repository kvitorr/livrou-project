import * as S from './styles'
import { BookAd } from './BookAd'

import urlImage from '/images/ponteParaTerabia.jpg'


export type BookAdProps = {
  id: string
  title?: string
  urlImage?: string
  value?: string
  autor: string
}

const livros = [{
  id: 1,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 2,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 3,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 4,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 5,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 6,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
},
{
  id: 7,
  title: "Amor e gelato",
  urlImage: urlImage,
  value: "15",
  autor: "Katherine Patterson"
}]


export const Collection = () => {
  return (
    <S.CollectionWrapper>
      <S.CollectionTitle>Acervo</S.CollectionTitle>

      <S.CollectionAdWrapper>
      {livros.map((livro) => (
        <S.StyledLink key={livro.id} to={`/livro/${livro.id}`}>
          <BookAd {...livro}/>
        </S.StyledLink>))}
      </S.CollectionAdWrapper>

    </S.CollectionWrapper>

  )
}
