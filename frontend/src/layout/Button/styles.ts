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

export const StyledButton = styled.button<{
    primary:boolean
    width?: string
    height?: string
    borderRadius?: string
}>`
    padding: 0.6rem 2rem;
    font-size: 1rem;
    border-radius: ${p => p.borderRadius === undefined? '5px' : p.borderRadius};
    border: none;
    cursor: pointer;
    width: ${p => p.width === undefined? 'auto' : p.width};
    height: ${p => p.height === undefined? 'auto' : p.height};
    background-color: ${p => p.primary? theme.primary : theme.content};
    color: ${p => p.primary? theme.content : theme.primary};
    transition: 0.5s;
    &:hover{
        filter: brightness(0.9);
    }
`