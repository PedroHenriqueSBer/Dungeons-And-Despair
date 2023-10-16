import { createGlobalStyle } from 'styled-components';

export const theme = {
    background: '#FFF8F3',
    content: '#FFECDE',
    input: '#F5DECE',
    overflowBackground: '#F6D9C4',
    overflow: '#CFB099',
    primary: '#A83030',
    overflowPrimary: '#6A1010',
    overflowBackgroundPrimary: '#902424',
}

// export const theme = {
//     background: '#2e2e2e',
//     content: '#696969',
//     input: '#3f3f3f',
//     overflowBackground: '#353535',
//     overflow: '#d8d8d8',
//     primary: '#e0e0e0',
//     overflowPrimary: '#9b9b9b',
//     overflowBackgroundPrimary: '#b8b8b8',
// }

export const GlobalStyle = createGlobalStyle`
    
    *{
        font-family: 'Lemonada', cursive;
        color: ${theme.primary};

        :focus{
            outline: 0;
        }
        ::placeholder{
            color: ${theme.primary};
            opacity: 0.7;
        }
    }
    .iconBtn{
        margin: 0 1rem;
        border-radius: 100%;
        border: none;
        background: none;
        width: auto;
        padding: 0.4rem;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 3rem;
            height: 3rem;
        }
        transition: 0.5s;
        &:hover{
            background-color: ${theme.input};
        }
    }
    span.spacer{
        flex: 1 1 auto;
    }

    body , html{
        padding: 0;
        margin: 0;
        background: ${theme.background};
    }

    @media (max-width: 1200px) {
        font-size: 99.75%;
    }

    @media (max-width: 750px) {
        font-size: 85.05%;
    }
`