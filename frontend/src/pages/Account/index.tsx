import { SigninForms } from "../../style/components/SigninForms"
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import { Button } from './../../layout/Button/index';
import { Header } from "../../components/Header";

export const Account = () => {
    return (
        <>
            <Header />
            <SigninForms>
                <h1>Account</h1>
                <div className="FormField">
                    <div>
                        <EmailIcon />
                    </div>
                    <input type="text" placeholder="E-mail" />
                </div>
                <div className="btnField">
                    <div className="FormField">
                        <div>
                            <PersonIcon />
                        </div>
                        <input type="text" placeholder="Name" />
                    </div>
                    <Button
                        width="100%"
                        primary
                        text="Alterar"/>
                </div>
                <div className="btnField">
                    <div className="FormField">
                        <div>
                            <HttpsIcon />
                        </div>
                        <input type="text" placeholder="Password" />
                    </div>
                    <Button
                        width="100%"
                        primary
                        text="Alterar"/>
                </div>

            </SigninForms>
        </>
    )
}