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

export const Container = styled.div<{
    width?: string
}>`
    width: ${p => p.width === undefined? '80%' : p.width};
    background: ${theme.content};
    padding: 2rem;
    header{
        gap: 1rem;
        display: flex;
        align-items: center;

        h1{
            margin: 0;
        }

        fieldset{
            display: flex;
            align-items: center;
            height: 2rem;
            padding: 0;
            border: none;
            border-bottom: 2px solid ${theme.primary};

            div{
                width: 2rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            input{
                border: none;
                background: none;
            }
        }
    }
    .cardContents{
        display: flex;
        align-items: center;
        gap: 1rem;
        overflow: auto;
        padding: 1rem;
        &::-webkit-scrollbar {
            width: 0.5rem;
        }

        &::-webkit-scrollbar-track {
            background: ${theme.overflowBackground};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${theme.overflow};
        }
    }
`