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
    border-radius: 10px;
    padding: 2rem;
    background: ${theme.content};
    min-width: ${p => p.width === undefined? '10.5rem' : p.width};
    box-shadow: 5px 5px 5px ${theme.input};
    height: max-content;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    &:hover{
        filter: brightness(0.96);
    }
    h1{
        margin: -10px;
        padding: 0;
    }
    h1{
        font-size: 1.2rem;
    }
    span{
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
    }
    .description{
        height: 8rem;
        font-size: 0.8rem;
        overflow: auto;
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