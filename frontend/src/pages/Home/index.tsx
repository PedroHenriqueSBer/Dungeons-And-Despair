
import { Header } from "../../components/Header";
import { Accordion } from "../../layout/Accordion";
import { Button } from "../../layout/Button";
import { CreateForms, CreateFormsGrid } from "../../style/CreateForms";
import { Container } from "./styled";


export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <CreateForms 
                    onSubmit={e => e.preventDefault()}
                    width="50rem">
                    <h1>Teste</h1>
                    <CreateFormsGrid
                        gap='1rem'
                        gridCollumTemplate='2fr 1fr'>
                        <input type="text" placeholder="Nome" />
                        <select name="" id="">
                            <option value="">select</option>
                            <option value="">Teste2</option>
                            <option value="">Teste3</option>
                            <option value="">Teste4</option>
                            <option value="">Teste5</option>
                        </select>
                    </CreateFormsGrid>
                    <CreateFormsGrid
                        gap='1rem'
                        gridCollumTemplate='1fr 2fr'>
                            <fieldset>
                                <legend>dasdadsa</legend>
                                <div className="formField">
                                    <span>Força</span>
                                    <input type="number" />
                                </div>
                                <div className="formField">
                                    <span>Destreza</span>
                                    <input type="number" />
                                </div>
                                <div className="formField">
                                    <span>Constituição</span>
                                    <input type="number" />
                                </div>
                                <div className="formField">
                                    <span>Inteligência</span>
                                    <input type="number" />
                                </div>
                                <div className="formField">
                                    <span>Sabedoria</span>
                                    <input type="number" />
                                </div>
                                <div className="formField">
                                    <span>Carisma</span>
                                    <input type="number" />
                                </div>
                            </fieldset>
                            <textarea name="" id="" cols={30} rows={10} placeholder="Descrição"/>
                        </CreateFormsGrid>
                        <fieldset>
                            <legend>List</legend>
                            <Accordion 
                                title="Teste"
                                btnList={[
                                    {
                                        Text:'Criar'
                                    }
                                ]}>
                                    Testedasdad
                            </Accordion>
                            <Accordion 
                                title="Teste"
                                btnList={[
                                    {
                                        Text:'Criar'
                                    }
                                ]}>
                                    Testedasdad
                            </Accordion>
                            <Accordion 
                                title="Teste"
                                btnList={[
                                    {
                                        Text:'Criar'
                                    }
                                ]}>
                                    Testedasdad
                            </Accordion>
                            <Button
                                primary
                                width="14rem"
                                text="Criar"/>
                        </fieldset>
                        <Button
                                primary
                                text="Criar"/>
                </CreateForms>
            </Container>
        </>
    )
}

