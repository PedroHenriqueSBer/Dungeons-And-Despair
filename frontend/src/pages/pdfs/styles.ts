import styled from "styled-components";
import { theme } from "../../style/GlobalStyle";

export const Container = styled.div`
    position: absolute;
    width: 99.5%;
    margin-top: 1rem;
    padding: 2rem 0;
    height: calc(100% - 17rem);
    overflow: auto;
    gap: 1rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background: ${theme.overflowBackground};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${theme.overflow};
    }
`