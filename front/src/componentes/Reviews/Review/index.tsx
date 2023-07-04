import * as S from './styles.ts'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useEffect, useState, useContext } from 'react'
import adeliaProfile from '/images/adelia.png'
import { axiosPrivate } from '../../../utils/api.ts'
import jwt_decode from "jwt-decode";
import { AuthContext } from '../../../contexts/AuthContext.tsx'
import { ShowLoginModalContext } from '../../../contexts/LoginModalContext.tsx'

interface IReviewProps {
    bookReviewId: number
    title: string
    content: string
    amountLikes: number
}


export const Review: React.FC<IReviewProps> = ({title, content, amountLikes, bookReviewId}) => {
    const [likes, setLikes] = useState(amountLikes)
    const [clicou, setClicou] = useState(false)
    const [currentLikes, setCurrentLikes] = useState(0)
    const {loggedIn} = useContext(AuthContext)
    const {setShowLoginModal} = useContext(ShowLoginModalContext)

    useEffect(() => {
        const fetchLikes = async () => {
            const response = await axiosPrivate(`bookreview/${bookReviewId}/like`);
            const data = response.data

            const accessToken = localStorage.getItem('access_token');
            if(accessToken) {
                const decodedAccessToken: { user_id: number } = jwt_decode(accessToken);
                data.forEach((likes: {bookReviewId: number,
                    userId: number}) => {
                        if(likes.userId === decodedAccessToken.user_id) {
                            setClicou(true)
                        }
                    });
            } else {
                setClicou(false)
            }

            

            const likes = data.length

            setLikes(likes)
        }
        fetchLikes()
    })

    const like = async () => {
        const response = await axiosPrivate.post(`bookreview/${bookReviewId}/like`);
        setClicou(true); 
        const updatedLikes = likes + 1
        setLikes(updatedLikes)
        console.log(response)
    }

    const deslike = async () => {
        const response = await axiosPrivate.delete(`bookreview/${bookReviewId}/like`);
        setClicou(false)
        const updatedLikes = likes - 1
        setLikes(updatedLikes)
    }

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

       {loggedIn && !clicou && <S.ReviewInteraction type='button' onClick={(event: any) => {
        event.preventDefault()
        like()
        
        }}>
            <AiOutlineHeart size={22}/>
            <p>{likes}</p>
        </S.ReviewInteraction> }

        { !loggedIn && !clicou && <S.ReviewInteraction type='button' onClick={(event: any) => {
        event.preventDefault()
        setShowLoginModal(true)
        }}>
            <AiOutlineHeart size={22}/>
            <p>{likes}</p>
        </S.ReviewInteraction> }

        {loggedIn && clicou && <S.ReviewInteraction type='button' onClick={(event: any) =>{ 
            event.preventDefault()
            deslike()
            }}>
            <AiFillHeart size={22} />
            <p>{likes}</p>
        </S.ReviewInteraction> }

    </S.ReviewContainer>


  )
}
