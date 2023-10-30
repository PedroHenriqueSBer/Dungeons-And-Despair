import styled, { keyframes } from "styled-components";
import { theme } from "../../style/GlobalStyle";

export const LoadScreen = styled.div<{open:boolean}>`
    display: ${p => p.open? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: #0000003d;
`
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.span`
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border: 1rem solid ${theme.content};
    border-top: 1rem solid ${theme.primary};
    border-radius: 50%;
    animation: ${spinAnimation} 1s linear infinite;
`