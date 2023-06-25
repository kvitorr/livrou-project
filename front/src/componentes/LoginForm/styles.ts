import styled from 'styled-components'


export const LoginContainer = styled.div`
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
    padding: 2rem;
    border-radius: 10px;
    background-color: white;
    width: 550px;
    height: 650px;
    margin: 1rem;


    .closeIcon {
        cursor: pointer;
    }
    
    .title {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .subtitle {
        font-size: 1.8rem;
        font-weight: 600;
        text-align: center;
    }
    
    .description {
        font-size: 1rem;
        font-weight: 300;
    }
    

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
        width: 100%;
    }
    
    .inputs {
        display: flex;
        flex-direction: column;
        gap: 0rem;
        width: 75%;
        margin-bottom: 1rem;
    }

    .inputs label {
        font-size: 1rem;
    }

    .inputs input {
        width: 100%;
        padding: 0.7rem 1rem;
        border-radius: 5px;
        border: 1px solid #BBC4D9;
        font-size: 1rem;
    }

    .errorMessage {
        font-size: 0.9rem;
        max-width: 400px;
        color: red;
    }

    #buttonSubmit {
        width: 75%;
        padding-block: .7rem;
        border-radius: 10px;
        border: none;
        background-color: #071A84;
        color: white;
        cursor: pointer;
        transition: .5s;
        margin-top: .5rem;
        font-size: 1rem;

    }

    #buttonSubmit:hover {
        background-color: #361542;
    }

    .footer {
        display: flex;
        padding: 1rem;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .text-login {
        font-size: 1rem;
    }

    .registerButton {
        color: #071A84;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: .5s;

        border: none;
        background-color: transparent;
    }

    
    .registerButton:hover {
        color: #361542;
    }

`

export const LogoImg = styled.img`
    width: 100%;
`

export const ImgWrapper = styled.div`
    width: 100px;
    margin: 0 auto;
`