import styled from "styled-components"
import { theme } from "../../style/GlobalStyle"

export const Container = styled.div<{open:boolean}>`
    @keyframes open {
        to{
            width: 25rem;
        }
    }
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    width: 17rem;
    display: ${p => p.open? 'flex' : 'none'};
    ${p => p.open? 'animation: open 0.2s forwards;' : ''}
    flex-direction: column;
    align-items: center;
    background: ${theme.content};
    height: 100%;
    box-shadow: 0 0 0 100000rem #00000009;
    header{
        display: flex;
        align-items: center;
        width: 22rem;
        .Icon{
            margin-top: 1rem;
        }
        .userInfo{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 1rem;
            margin-left: 1rem;
            .Bar{
                width: 10rem;
                height: 0.5rem;
                border-radius: 100px;
                background: ${theme.primary};
            }
            .Down{
                display: flex;
                align-items: center;
                margin-top: 0.2rem;
                padding-left: 0.1rem;
                gap: 0.3rem;
                button{
                    margin: 0;
                }
            }
        }
    }
    .Friends{
        margin-top: 4rem;
        display: flex;
        align-items: center;
        width: 20rem;
        gap: 1.2rem;
        padding: 1rem;
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
    .BtnContent{
        width: 100%;
        margin-top: 1rem;
    }
`

export const Situation = styled.div<{
    size:string,
    left:string,
    top:string,
    situation: 'on' | 'off' | 'absent'
}>`
    width: ${p => p.size};
    height: ${p => p.size};
    border-radius: 100px;
    position: relative;
    margin-left: ${p => p.left};
    margin-top: calc(${p => p.top} * -1);
    background: ${p => {
        switch(p.situation){
            case 'on':
                return '#3de762'
            case 'off':
                return '#e77870'
            case 'absent':
                return '#d7e428'
        }
    }};
`