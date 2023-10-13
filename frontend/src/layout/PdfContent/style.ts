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
    img: any
}>`
    background-image: url(${p => p.img});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    width: 30rem;
    height: 40rem;
    box-shadow: 5px 5px 5px ${theme.overflow};
    & .content{
        opacity: 0%;
        transition: 0.2s;
        border-radius: 5px 0 0 5px;
        display: flex;
        flex-direction: column;
        background: ${theme.primary};
        height: 100%;
        width: 80%;
        row-gap: 1rem;
        h1 , h2 , div{
            color: ${theme.content};
        }
        h1{
            margin: 0;
            margin-top: 1rem;
            font-size: 1.2rem;
            text-align: center;
        }
        h2{
            margin: 0;
            font-size: 1rem;
            text-align: left;
        }
        div{
            font-size: 0.8rem;
            overflow: auto;
            height: 27rem;
            width: 24rem;
            margin: 0 auto;
            &::-webkit-scrollbar {
                width: 0.5rem;
            }

            &::-webkit-scrollbar-track {
                background: ${theme.overflowBackgroundPrimary};
            }

            &::-webkit-scrollbar-thumb {
                background-color: ${theme.overflowPrimary};
            }
        }
    }
    &:hover .content{
        padding: 0 1rem;
        opacity: 100%;
    }
`