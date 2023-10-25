import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { SigninForms } from "../../style/components/SigninForms";
import { Button } from './../../layout/Button/index';
import { Container } from "./style";

export const Signin = () => {
    const navigate = useNavigate()

    const handleSigninSubmit = (event: SigninUser) => {
        console.log()
        //navigate('/')
    }

    interface SigninUser{
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    }

    const [defaultValues] = useState<SigninUser>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {
        control,
        handleSubmit,
        register,
        reset,
        watch,
        clearErrors,
        formState: { errors },
    } = useForm(
        {
            shouldFocusError: false,
            reValidateMode: "onChange",
            defaultValues: useMemo(() => defaultValues, [defaultValues]),
        }
    )
    
    return (
        <Container>
            <SigninForms onSubmit={handleSubmit(handleSigninSubmit)}>
                <h1>Signin</h1>
                <div className='FormField'>
                    <div>
                        <EmailIcon />
                    </div>
                    <input type="text" placeholder="Email" />
                </div>
                <div className='FormField'>
                    <div>
                        <PersonIcon />
                    </div>
                    <input type="text" placeholder="Name" />
                </div>
                <div className='FormField'>
                    <div>
                        <HttpsIcon />
                    </div>
                    <input type="text" placeholder="Password" />
                </div>
                <div className='FormField'>
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