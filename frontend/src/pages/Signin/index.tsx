import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { SigninForms } from "../../style/components/SigninForms";
import { Button } from './../../layout/Button/index';
import { Container } from "./style";

export const Signin = () => {
    const navigate = useNavigate()

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        navigate('/')
    }

    return (
        <Container>
            <SigninForms onSubmit={handleSubmit}>
                <h1>Signin</h1>
                <div className="FormField">
                    <div>
                        <EmailIcon />
                    </div>
                    <input type="text" placeholder="E-mail" />
                </div>
                <div className="FormField">
                    <div>
                        <PersonIcon />
                    </div>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="FormField">
                    <div>
                        <HttpsIcon />
                    </div>
                    <input type="text" placeholder="Password" />
                </div>
                <div className="FormField">
                    <div>
                        <HttpsIcon />
                    </div>
                    <input type="text" placeholder="Confirm Password" />
                </div>
                <Button
                    type="submit"
                    width="100%"
                    primary
                    text="Signin"/>
            </SigninForms>
        </Container>
    )
}