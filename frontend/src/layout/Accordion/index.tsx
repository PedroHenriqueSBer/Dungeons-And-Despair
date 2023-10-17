import { ReactNode, useState } from "react"
import { Button } from "../Button"
import { Container } from "./styles"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Accordion: React.FC<{
    title: string
    width?: string
    btnList?: {
        Text: string
        onClick?: React.MouseEventHandler<HTMLButtonElement>
    }[]
    children?: ReactNode
}> = ({
    title,
    btnList,
    width,
    children
}) => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <Container 
            isOpen={isOpen}
            width={width}>
            <header className="header">
                <button className="iconBtn" onClick={el => setIsOpen(prev => !prev)}>
                    <ArrowForwardIosIcon />
                </button>
                <h1>{title}</h1>
                <span className="spacer"/>
                {btnList && (btnList.map(el => 
                    <Button
                        text={el.Text}
                        onClick={el.onClick}
                        primary/>
                ))}
            </header>
            <div className="dropdown">
                {children}
            </div>
        </Container>
    )
}