import styled from "styled-components";
import { theme } from "../../style/GlobalStyle";

export const Container = styled.div<{
    width?: string
}>`
    border-radius: 10px;
    padding: 2rem;
    background: ${theme.content};
    min-width: ${p => p.width === undefined? '16.5rem' : p.width};
    box-shadow: 0px 0px 5px 3px ${theme.input};
    height: max-content;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
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