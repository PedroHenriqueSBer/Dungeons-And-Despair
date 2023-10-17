import React from "react";
import { StyledButton } from "./styles";

export const Button: React.FC<{
    text: string,
    primary?: boolean ,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: "button" | "submit" | "reset"
    width?: string
    height?: string
    borderRadius?: string
}> = ({
    text,
    primary,
    onClick,
    type,
    width,
    height,
    borderRadius
}) => {
    const clickFunc = onClick === undefined? () => {} : onClick
    return (
        <StyledButton
            primary={primary === undefined? false : primary}
            type={type}
            onClick={clickFunc}
            width={width}
            height={height}
            borderRadius={borderRadius}
            
            >
            {text}
        </StyledButton>
    );
}