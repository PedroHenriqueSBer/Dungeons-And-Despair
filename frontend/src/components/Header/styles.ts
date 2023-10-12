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

export const Container = styled.header`
    background-color: ${theme.content};
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 0 0 0 0;
    .iconBtn{
        margin: 0 1rem;
        border-radius: 100%;
        border: none;
        background: none;
        width: 3.8rem;
        height: 3.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 3.2rem;
            height: 3.2rem;
        }
        transition: 0.5s;
        &:hover{
            filter: brightness(0.9);
        }
    }
    h1{
        padding: 0;
        margin: 0 1rem 0 0;
        font-family: 'Lumanosimo', cursive;
    }
`