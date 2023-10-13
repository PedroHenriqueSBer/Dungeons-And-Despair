import { Container } from "./style"
import { Button } from './../Button/index';


export const PdfContent: React.FC<{
    img: any,
    pdf: any,
    namePdf: string,
    nameCreator: string,
    description: string
}> = ({
    img,
    pdf,
    namePdf,
    nameCreator,
    description
}) => {
    return (
        <Container
            img={img}>
            <div className="content">
                <h1>{namePdf}</h1>
                <h2>Created by: {nameCreator}</h2>
                <div>
                    {description}
                </div>
                <Button 
                    onClick={() => window.open(pdf)}
                    text="Visualisar pdf"/>
            </div>
        </Container>
    )
}