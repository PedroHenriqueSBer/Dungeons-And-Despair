import { Header } from "../../components/Header"
import { CardContentHorizontal } from "../../layout/CardContentHorizontal"
import { Container } from "./styled"

export const Inventory = () => {
    return (
        <>
            <Header />
            <Container>
                <CardContentHorizontal 
                    title="Fichas"
                    btnCardText="Usar"
                    width="16.6rem"
                    CardList={[
                        {
                            title:'Teste',
                            infs:[
                                'Teste',                                
                                'Teste',                                
                                'Teste'                                
                            ]
                        },
                        {
                            title:'Teste',
                            infs:[
                                'Teste',                                
                                'Teste',                                
                                'Teste'                                
                            ]
                        },
                        {
                            title:'Teste',
                            infs:[
                                'Teste',                                
                                'Teste',                                
                                'Teste'                                
                            ]
                        },
                        {
                            title:'Teste',
                            infs:[
                                'Teste',                                
                                'Teste',                                
                                'Teste'                                
                            ]
                        },
                        {
                            title:'Teste',
                            infs:[
                                'Teste',                                
                                'Teste',                                
                                'Teste'                                
                            ]
                        },
                        {
                            title:'Teste',
                            infs:[
                                'Teste',                                
                                'Teste',                                
                                'Teste'                                
                            ]
                        }
                    ]}/>
            </Container>
        </>
    )
}