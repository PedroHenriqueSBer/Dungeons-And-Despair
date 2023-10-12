import { createGlobalStyle } from 'styled-components';

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