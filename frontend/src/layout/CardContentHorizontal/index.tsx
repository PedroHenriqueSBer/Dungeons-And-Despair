import React, { useState } from "react";
import { Container } from "./styles";
import { Button } from '../Button/index';
import SearchIcon from '@mui/icons-material/Search';
import { Card } from './../Card/index';

export const CardContentHorizontal: React.FC<{
    title: string
    onSearch: (el:React.ChangeEvent<HTMLInputElement>) => void
    BtnList?: {text: string,onClick: React.MouseEventHandler<HTMLButtonElement>}[]
    btnCardText: string
    CardList: {
        img?: any
        title?: string
        infs?: string[]
        description?: string
        btnClick?: React.MouseEventHandler<HTMLButtonElement>
    }[]
}> = ({
    title,
    onSearch,
    BtnList,
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
                        {BtnList.map(el => {
                            <Button 
                                text={el.text}
                                onClick={el.onClick}
                                primary/>
                        })}
                    </>
                )}
            </header>
            <div className="cardContents">
                {elements && (
                    <>
                        {elements.map((el,index) => <Card 
                            key={index} 
                            {...el} 
                            btnText={btnCardText}/>)}
                    </>
                )}
            </div>
        </Container>
    )
}