import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { SigninForms } from "../../style/components/SigninForms";
import { Button } from './../../layout/Button/index';
import { Container } from "./style";
import { useState } from 'react';

export const Signin = () => {
    const navigate = useNavigate()

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(newUser)
        //navigate('/')
    }

    interface SigninUser{
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    }

    const [newUser, setNewUser] = useState<SigninUser>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const Erros = [
        false,
        false,
        false,
        false
    ]

    const ErrosMessage = [
        '',
        '',
        '',
        ''
    ]
    return (
        <Container>
            <SigninForms onSubmit={handleSubmit}>
                <h1>Signin</h1>
                <div className={Erros[0]? 'error FormField' : 'FormField'}>
                    <div>
                        <EmailIcon />
                    </div>
                    <input name='email' defaultValue={newUser.email} onChange={el => newUser.email = el.target.value} type="text" placeholder="E-mail" />
                    <span className='Error'>
                        {ErrosMessage[0]}
                    </span>
                </div>
                <div className={Erros[1]? 'error FormField' : 'FormField'}>
                    <div>
                        <PersonIcon />
                    </div>
                    <input name='name' defaultValue={newUser.name} onChange={el => newUser.name = el.target.value} type="text" placeholder="Name" />
                    <span className='Error'>
                        {ErrosMessage[1]}
                    </span>
                </div>
                <div className={Erros[1]? 'error FormField' : 'FormField'}>
                    <div>
                        <HttpsIcon />
                    </div>
                    <input name='password' defaultValue={newUser.password} onChange={el => newUser.password = el.target.value} type="text" placeholder="Password" />
                    <span className='Error'>
                        {ErrosMessage[2]}
                    </span>
                </div>
                <div className={Erros[1]? 'error FormField' : 'FormField'}>
                    <div>
                        <HttpsIcon />
                    </div>
                    <input name='confirmPassword' defaultValue={newUser.confirmPassword} onChange={el => newUser.confirmPassword = el.target.value} type="text" placeholder="Confirm Password" />
                    <span className='Error'>
                        {ErrosMessage[3]}
                    </span>
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