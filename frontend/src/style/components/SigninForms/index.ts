import styled from "styled-components";

const theme = {
    background: '#FFF8F3',
    content: '#FFECDE',
    input: '#F5DECE',
    overflowBackground: '#F6D9C4',
    overflow: '#CFB099',
    primary: '#A83030',
    overflowPrimary: '#6A1010',
    overflowBackgroundPrimary: '#902424',
}

export const SigninForms = styled.form`
    width: 33rem;
    margin: 0 auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: left;
    row-gap: 10px;
    h1{
        margin-top: 0;
        align-self: center;
        font-family: 12px;
    }
    .FormField{
        background: ${theme.input};
        width: 100%;
        border-radius: 5px;
        height: 50px;
        display: flex;
        align-items: center;
        &:hover{
                filter: brightness(0.97);
        }
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 100%;
            svg{
                width: 2rem;
                height: 2rem;
            }
        }
        input{
            padding: 0;
            margin: 0;
            width: 85%;
            font-size: 1rem;
            border: none;
            background: none;
            transition: 0.5s;
        }
    }
    .btnField{
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 10px;
    }
    .LinkText{
        width: max-content;
        text-align: center;
        border: none;
        background: none;
        font-size: 0.9rem;
    }
`