import styled from "styled-components";
import { theme } from "../../style/GlobalStyle";

export const Container = styled.header`
    background-color: ${theme.content};
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 0 0 0 0;
    h1{
        padding: 0;
        margin: 0 1rem 0 0;
        font-family: 'Lumanosimo', cursive;
    }
`