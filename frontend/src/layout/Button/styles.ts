import styled from "styled-components";
import { theme } from "../../style/GlobalStyle";

export const StyledButton = styled.button<{
    primary:boolean
    width?: string
    height?: string
    borderRadius?: string
    bright?:number
    fontSize?: string,
    textSize?: string
}>`
    padding: 0.6rem 2rem;
    font-size: ${p => p.fontSize? p.fontSize : '1rem'};
    border-radius: ${p => p.borderRadius === undefined? '5px' : p.borderRadius};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: ${p => p.textSize === undefined? 'fit-content' : p.textSize};
        color: ${p => p.primary? theme.content : theme.primary};
    }
    cursor: pointer;
    width: ${p => p.width === undefined? 'auto' : p.width};
    height: ${p => p.height === undefined? 'auto' : p.height};
    background-color: ${p => p.primary? theme.primary : theme.content};
    ${p => p.bright !== undefined? `filter: brightness(${p.bright});` : ''}
    transition: 0.5s;
    &:hover{
        filter: ${p => p.bright? `brightness(${p.bright - 0.1})` : 'brightness(0.9)'};
    }
`