import styled from "styled-components";
import { theme } from "../GlobalStyle";

export const CreateForms = styled.form<{
    textareaHeight?: string
    width?: string
}>`
    width: ${p => p.width === undefined? '40rem' : p.width};
    margin: 0 auto;
    height: fit-content;
    display: flex;
    padding: 1rem 0;
    flex-direction: column;
    align-items: left;
    row-gap: 10px;
    h1{
        margin: 0;
        align-self: center;
        font-family: 12px;
    }
    input{
        width: calc(100% - 3rem);
        padding: 1rem 1.5rem;
        font-size: 1rem;
        border-radius: 5px;
        border: 0;
        background-color: ${theme.input};
        color: ${theme.primary};
    }
    select{
        padding: 1rem 1.5rem;
        font-size: 1rem;
        border-radius: 5px;
        border: 0;
        background-color: ${theme.input};
        color: ${theme.primary};
    }
    option{
        border: 0;
    }
    fieldset{
        border-radius: 5px;
        height: fit-content;
        border: 2px solid ${theme.content};
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
        legend{
            margin-left: 0.5rem;
            padding: 0 0.6rem;
        }
        .formField{
            display: flex;
            align-items: center;
            gap: 1rem;
            justify-content: space-between;
            input{
                font-size: 1rem;
                background: none;
                width: 4rem;
                text-align: center;
                border-radius: 0;
                padding: 0;
                border-bottom: 1px solid ${theme.primary};
            }
        }
    }
    textarea{
        margin-top: 0.7rem;
        font-size: 1rem;
        border-radius: 5px;
        padding: 1rem 1.5rem;
        overflow: auto;
        border: 0;
        height: ${p => p.textareaHeight === undefined? '15rem' : p.textareaHeight};
        resize: none;
        background-color: ${theme.input};
        color: ${theme.primary};
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
export const CreateFormsGrid = styled.div<{
    gridCollumTemplate: string
    gap?: string
}>`
    display: grid;
    gap: ${p => p.gap === undefined? '1rem' : p.gap};
    grid-template-columns: ${p => p.gridCollumTemplate};
`