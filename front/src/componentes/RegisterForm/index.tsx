import { RegisterContainer } from './styles'
import z from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ShowRegisterModalContext } from '../../contexts/RegisterModalContext'
import { ShowLoginModalContext } from '../../contexts/LoginModalContext'
import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import axios from 'axios'

const IRegisterSchema = z.object({
  name: z.string()
    .trim()
    .nonempty({ message: "Seu nome não pode ficar vazio" })
    .min(3, { message: "Seu nome deve ter ao menos 3 caracteres" })
    .max(30, { message: "Seu nome deve ter no máximo 20 caracteres" })
    .regex(
      /^[a-zA-ZÀ-ú ]+$/,
      { message: "Seu nome não pode conter caracteres especiais" }
    ),

  email: z.string()
    .trim()
    .email({message: "Endereço de email inválido"}),

  password: z.string()
    .trim()
    .min(8, 'Sua senha deve possuir no mínimo 8 caracteres')
    .max(50, 'Sua senha não pode ter mais que 50 caracteres')
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
          'Sua senha deve conter ao menos uma letra maíuscula, uma letra minúscula, um número e um caractere especial'),

  confirmPassword: z.string(),

  phone: z.string()
    .trim()
    .min(8, 'Número de telefone deve ter ao menos 8 números'),

  birth_date: z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date())

}).refine((fields) => fields.password === fields.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas devem ser as mesmas'
})

// extract the inferred type
type IRegisterInput = z.infer<typeof IRegisterSchema>







const RegisterForm = () => {

  const { setShowRegisterModal } = useContext(ShowRegisterModalContext);
  const { setShowLoginModal } = useContext(ShowLoginModalContext);


  
  const { register, handleSubmit, formState: {errors} } = useForm<IRegisterInput>({
    mode: 'onSubmit',
    resolver: zodResolver(IRegisterSchema)
  })

  const handleSubmitData: SubmitHandler<IRegisterInput> = async (data) => {
    const response = await axios.post('users', data,{
      baseURL: "http://localhost:3000/",
      headers: {
          "Content-Type": "application/json",
      }
  })

  setShowRegisterModal(false)
  }
  
  return (

      <RegisterContainer>

        <div className='closeIcon' onClick={ () => setShowRegisterModal(false) }>
            <AiOutlineClose size="20"/>
        </div>

        <div className='title'>
          <h2 className='subtitle'>Entre hoje mesmo para a Livrou</h2>
        </div>

        <form onSubmit={handleSubmit(handleSubmitData)}>
          <div className='inputs'>
            <label htmlFor="name">Nome completo</label>
            <input {...register('name')} type="text" id="name" placeholder='Digite seu nome' />
            {errors.name?.message && (
              <p className='errorMessage'>{errors.name.message}</p>
            )}
          </div>
          
          <div className='inputs'>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" placeholder='Digite seu email' />  
            {errors.email?.message && (
              <p className='errorMessage'>{errors.email.message}</p>
            )}
          </div>

          <div className='inputs'>
            <label htmlFor="phone">Celular</label>
            <input {...register('phone')} type="text" id="phone" placeholder='Digite seu número de phone' />
            {errors.phone?.message && (
              <p className='errorMessage'>{errors.phone.message}</p>
            )}
          </div>

          <div className='inputs'>
            <label htmlFor="birth_date">Data de Nascimento</label>
            <input {...register('birth_date')} type="date" id="birth_date" />
            {errors.phone?.message && (
              <p className='errorMessage'>{errors.phone.message}</p>
            )}
          </div>

          <div className='inputs'>
            <label htmlFor="password">Senha</label>
            <input {...register('password')} type="password" id="password" placeholder='Digite sua senha' />
            {errors.password?.message && (
              <p className='errorMessage'>{errors.password.message}</p>
            )}
          </div>

          <div className='inputs'>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input {...register('confirmPassword')} type="password" id="confirmPassword" placeholder='Confirme sua senha' />
            {errors.confirmPassword?.message && (
              <p className='errorMessage'>{errors.confirmPassword.message}</p>
            )}
          </div>

        
          <button id='buttonSubmit' type='submit'>Cadastrar</button>
        </form>

        <div className='footer'>
            <p className='text-login' >Já possui uma conta?</p>
            <button className='loginButton' onClick={() =>  { setShowRegisterModal(false); setShowLoginModal(true)} }>Logar-se</button>
        </div>
      </RegisterContainer>
  )
}

export default RegisterForm