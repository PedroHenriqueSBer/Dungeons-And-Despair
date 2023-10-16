import { Container } from "./styles"
import { Button } from './../../layout/Button/index';
import { useNavigate } from "react-router";
import icon from './../../assets/icon.png'

export const Header = () => {
    const navigate = useNavigate()
    const Btns = [
        {
            path: '/inventory',
            name: 'Inventory'
        },
        {
            path: '/pdfs',
            name: 'Pdfs'
        },
        {
            path: '/account',
            name: 'Account'
        }
    ]
    return (
        <Container key={0}>
            <button 
                className="iconBtn" 
                onClick={() => navigate('/')}>
                <img src={icon} alt="" />
            </button>
            <h1>Dungeons And Despair</h1>
            <span className="spacer"/>
            { Btns.map(el =>
                <Button
                    onClick={() => navigate(el.path)}
                    text={el.name}
                    width="10rem"
                    height="100%"
                    borderRadius="0"
                />
            )}
        </Container>
    )
}