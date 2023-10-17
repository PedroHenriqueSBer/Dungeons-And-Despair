import styled from "styled-components";
import { theme } from "../../style/GlobalStyle";

export const Container = styled.div<{
    width?: string
    isOpen: boolean
}>`
    @keyframes openDropdown {
        to{
            padding: 2rem;
        }
    }
    @keyframes openIcon {
        to{
            transform: rotate(90deg);
        }
    }
    @keyframes closeIcon {
        to{
            transform: rotate(0deg);
        }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    row-gap: 0;
    width: ${p => p.width === undefined? '100%' : p.width};
    header{
        width: calc(100% - 2rem);
        background: ${theme.content};
        border-radius: ${p => p.isOpen? '5px 5px 0 0' : '5px 5px 5px 5px'};
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        text-align: left;
        h1{
            padding: 0;
            font-size: 1.5rem;
        }
        .iconBtn{
            ${p => p.isOpen? 'animation: openIcon 0.2s forwards;' : 'transform: rotate(90deg);animation: closeIcon 0.2s forwards;'}
        }
    }
    .dropdown{
        width: calc(100% - 4rem);
        background: ${theme.input};
        ${p => p.isOpen? 'animation: openDropdown 0.2s forwards;' : ''}
        display: ${p => p.isOpen? 'flex' : 'none'};
        border-radius: 0 0 5px 5px;
    }
`