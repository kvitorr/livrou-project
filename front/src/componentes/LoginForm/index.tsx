import { ImgWrapper, LoginContainer, LogoImg } from './styles'
import z from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import livrouLogo from '/images/livrouLogo3.png'
import { ShowLoginModalContext } from '../../contexts/LoginModalContext'

import { useContext } from 'react'
import { ShowRegisterModalContext } from '../../contexts/RegisterModalContext'
import { AiOutlineClose } from 'react-icons/ai'
import { AuthContext } from '../../contexts/AuthContext'


const ILoginSchema = z.object({
  email: z.string()
    .trim()
    .email({message: "Invalid email address."}),

  password: z.string()
    .trim()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Password cannot contain more than 50 characters')
})

// extract the inferred type
type ILoginInput = z.infer<typeof ILoginSchema>


const LoginForm = () => {

  const { setShowRegisterModal } = useContext(ShowRegisterModalContext);
  const { setShowLoginModal } = useContext(ShowLoginModalContext);

  const { login } = useContext(AuthContext)


  
  const { register, handleSubmit, formState: {errors} } = useForm<ILoginInput>({
    mode: 'onSubmit',
    resolver: zodResolver(ILoginSchema)
  })

  const handleSubmitData: SubmitHandler<ILoginInput> = async (data) => { 
    await login(data)
  };
  
  return (

      <LoginContainer>
        <div className='closeIcon' onClick={ () => setShowLoginModal(false) }>
            <AiOutlineClose size="20"/>
        </div>



        <div className='title'>
            <ImgWrapper>
                <LogoImg src={livrouLogo}/>
            </ImgWrapper>
          <h2 className='subtitle'>Entrar na Livrou</h2>
          <p className='description'></p>
        </div>

        <form onSubmit={handleSubmit(handleSubmitData)}>
          <div className='inputs'>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" placeholder='Digite seu email' />  
            {errors.email?.message && (
              <p className='errorMessage'>{errors.email.message}</p>
            )}
          </div>

          <div className='inputs'>
            <label htmlFor="password">Senha</label>
            <input {...register('password')} type="password" id="password" placeholder='Digite sua senha' />
            {errors.password?.message && (
              <p className='errorMessage'>{errors.password.message}</p>
            )}
          </div>
        
          <button id='buttonSubmit' type='submit'>Login</button>
        </form>
            
        <div className='footer'>
            <p className='text-login' >Não possui uma conta?</p>
            <button className='registerButton' onClick={() =>  { setShowRegisterModal(true); setShowLoginModal(false)} }>Cadastrar-se</button>
        </div>
      </LoginContainer>
  )
}

export default LoginForm