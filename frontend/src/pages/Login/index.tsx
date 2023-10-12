import { SigninForms } from "../../style/components/SigninForms"
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { Button } from './../../layout/Button/index';
import { useNavigate } from "react-router";

export const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        navigate('/')
    }

    return (
        <SigninForms onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="FormField">
                <div>
                    <EmailIcon />
                </div>
                <input type="text" placeholder="E-mail" />
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
            <button className="LinkText">
                Esqueceu a senha?
            </button>
            <Button
                type="submit"
                width="100%"
                primary
                text="Login"/>
        </SigninForms>
    )
}