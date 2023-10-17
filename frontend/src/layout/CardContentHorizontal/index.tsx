import React, { useState } from "react";
import { Container } from "./styles";
import { Button } from '../Button/index';
import SearchIcon from '@mui/icons-material/Search';
import { Card } from './../Card/index';

export const CardContentHorizontal: React.FC<{
    title: string
    BtnList?: {text: string,onClick: React.MouseEventHandler<HTMLButtonElement>}[]
    btnCardText: string
    width?: string
    CardList: {
        img?: any
        title?: string
        infs?: string[]
        description?: string
        btnClick?: React.MouseEventHandler<HTMLButtonElement>
    }[]
}> = ({
    title,
    BtnList,
    width,
    CardList,
    btnCardText
}) => {
    const [elements, setElements] = useState<{
        img?: any
        title?: string
        infs?: string[]
        description?: string
        btnClick?: React.MouseEventHandler<HTMLButtonElement>
    }[]>(CardList)

    const onSearch = (input: React.ChangeEvent<HTMLInputElement>) => {
        setElements(() => {
            const value = input.target.value
            if(!value)
                return CardList
            return CardList.filter(card => card.title?.toLowerCase()?.includes(value.toLowerCase()))
        })
    }

    return(
        <Container>
            <header>
                <h1>{title}</h1>
                <fieldset>
                    <div>
                        <SearchIcon />
                    </div>
                    <input onChange={onSearch} type="text" />
                </fieldset>
                {BtnList && (
                    <>
                        {BtnList.map(el =>
                            <Button 
                                text={el.text}
                                onClick={el.onClick}
                                primary/>
                        )}
                    </>
                )}
            </header>
            <div className="cardContents">
                {elements.length > 0?(
                    <>
                        {elements.map((el,index) => <Card 
                            key={index} 
                            {...el} 
                            width={width}
                            btnText={btnCardText}/>)}
                    </>
                ):(<>Não existe {title}</>)}
            </div>
        </Container>
    )
}