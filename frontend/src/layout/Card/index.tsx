import React from "react";
import { Container } from "./styles";
import { Button } from './../Button/index';

export const Card: React.FC<{
    img?: any
    width?: string
    title?: string
    infs?: string[]
    description?: string
    btnText?: string
    btnClick?: React.MouseEventHandler<HTMLButtonElement>
}> = ({
    img,
    width,
    title,
    infs,
    description,
    btnText,
    btnClick
}) => {
    return(
        <Container
            width={width}>
            {img && (
                <img src={img} alt="" />
            )}
            {title && (
                <h1>{title}</h1>
            )}
            <span>
                {infs && (
                    <>
                        {infs.map(el => 
                            <div>{el}</div>
                        )}
                    </>
                )}
            </span>

            {description && (
                <div className="description">
                    {description}
                </div>
            )}
            {btnText && (
                <Button 
                    width="100%"
                    onClick={btnClick}
                    text={btnText}
                    primary/>
            )}
        </Container>
    )
}