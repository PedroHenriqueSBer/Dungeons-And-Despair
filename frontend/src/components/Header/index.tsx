import { useNavigate } from "react-router";
import { useUser } from "../../hooks/useUser";
import icon from './../../assets/icon.png';
import { Button } from './../../layout/Button/index';
import { Container } from "./styles";

export const Header = () => {
    const navigate = useNavigate()
    const {user} = useUser()
    const Btns = user.id == undefined? 
    [
        {
            path: '/signin',
            name: 'Signin'
        }
    ] : [
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