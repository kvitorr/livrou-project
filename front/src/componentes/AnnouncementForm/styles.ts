import styled from 'styled-components'


export const AnnouncementFormContainer = styled.div`
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.3);
    padding: 2rem;
    border-radius: 5px;
    background-color: white;
    width: 550px;
    height: 700px;

    position: relative;


    .closeIcon {
        cursor: pointer;
        position: absolute;
        right: 2rem;
        top: 3rem;
    }
    
    .header {
        width: 100%;
        border-bottom: 1px solid beige;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }
    .subtitle {
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    .description {
        font-size: 1rem;
        font-weight: 300;
    }

    .selected-book {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .5rem;

        font-family: 'Poppins';

        & > button {
            padding: 0.3rem;
            border-radius: 10px;
            background-color: #f5f5dc;
        }
    }

    h4 {
        font-weight: 500;
    }

    .bookTitle {
        font-size: 1.09rem;
        color: #071A84;

    }
    

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    
    .inputs {
        display: flex;
        flex-direction: column;
        gap: 0rem;
        margin-bottom: 1rem;
        width: 100%;
    }

    .inputs label {
        font-size: .9rem;
    }

    .label {
        font-weight: 700;
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

    .buttonType {
        width: 75%;
        padding-block: .7rem;
        border-radius: 10px;
        border: none;
        background-color: #071A84;
        color: white;
        cursor: pointer;
        transition: .5s;
        margin-top: 1rem;
        font-size: 1rem;

    }

    #buttonPublish:hover {
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

    .label-input {
        font-size: 0.95rem;
        font-family: 'Poppins';
        text-align: left;
        width: 100%;
        margin-top: .6rem;
        font-weight: 500;
    }

    .input-style {
        width: 100%;
        padding: .64rem 1.5rem;
        
        border-top: 1px solid #d3d3d3;
        border-bottom: 1px solid #d3d3d3;
        border-left: 1px solid #d3d3d3;
        border-right: 1px solid #d3d3d3;

        border-radius: 10px 0px 0px 10px;
        transition: .1s;

        &::placeholder {
            font-weight: 500;
            font-size: .875rem;
            color: rgba(0, 0, 0, 0.3);
        }

        &:focus {
            outline: none;
            border: 1px solid #d3d3d3;
        }
    }

`

export const LogoImg = styled.img`
    width: 100%;
`

export const ImgWrapper = styled.div`
    width: 100px;
    margin: 0 auto;
`

export const SelectOptions = styled.select`
    color: #1A2B88;
    font-weight: 500;
    border-radius: 10px;
    border: 1px solid black;

    padding: 0.4rem 2rem 0.4rem 0.5rem;
    border: 1px solid #d3d3d3;
    font-size: 1rem;
    width: 100%;

`