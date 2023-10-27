import React from "react";
import { StyledButton } from "./styles";

export const Button: React.FC<{
    text: string,
    primary?: boolean ,
    bright?: number ,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: "button" | "submit" | "reset"
    width?: string
    height?: string
    borderRadius?: string
    fontSize?: string
    Icon?: any
    textSize?: string
}> = ({
    text,
    primary,
    textSize,
    bright,
    onClick,
    type,
    width,
    Icon,
    height,
    borderRadius,
    fontSize
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
            fontSize={fontSize}
            bright={bright}
            textSize={textSize}
            >
            <span>
                {Icon? <Icon /> : '' }{text}
            </span>
        </StyledButton>
    );
}