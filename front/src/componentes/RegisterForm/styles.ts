import styled from 'styled-components'


export const RegisterContainer = styled.div`
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
    padding: 2rem;
    border-radius: 10px;
    background-color: white;
    width: 570px;
    height: 700px;
    margin: 1rem;

    overflow-y: auto;

    
    .title {
        width: 90%;
        text-align: center;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
    .subtitle {
        font-size: 1.8rem;
        font-weight: 700;
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
        border: 1px solid #A3AFA7;
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

    .text-login span {
        color: #071A84;
        font-weight: 700;
        cursor: pointer;
        transition: .5s;
    }

    
    .text-login span:hover {
        color: #361542;
    }

    .loginButton {
        color: #071A84;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: .5s;

        border: none;
        background-color: transparent;
    }

    
    .loginButton:hover {
        color: #361542;
    }

    .closeIcon {
        cursor: pointer;
    }

`

export const LogoImg = styled.img`
    width: 100%;
`

export const ImgWrapper = styled.div`
    width: 50px;
    margin: 0 auto;
`