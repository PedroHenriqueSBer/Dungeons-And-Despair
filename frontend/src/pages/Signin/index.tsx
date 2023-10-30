import { SigninForms } from "../../style/SigninForms"
import { Container } from "./styled"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from "../../layout/Button";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useLoading } from "../../hooks/loading";

export const Signin = () => {

    const [isVisible,setIsVisible] = useState<boolean[]>([false,false])
    interface input{
        name: string,
        mail: string,
        password: string,
        ConfirmPassword: string
    }
    const snackbar = (msg:string) => console.log(msg)
    const handleSigninSubmit = (e:input) => {
        setIsLoading(true)
        if(e.mail.length < 0||e.name.length < 0||e.password.length < 0||e.ConfirmPassword.length < 0)
            return snackbar('Campos não preenchidos')
        if(e.password.length !== e.ConfirmPassword.length)
            return snackbar('As senhas estão diferentes')
        if(e.password.length < 8)
            return snackbar('A senha precisa ter no mínimo 8 caracteres')
        if(e.name.length < 4)
            return snackbar('A senha precisa ter no mínimo 4 caracteres')
        reset()
    } 
    const { setIsLoading } = useLoading()
    const [defaultValues] = useState<input>({
        name: '',
        mail: '',
        password: '',
        ConfirmPassword: ''
    })

    const {
        handleSubmit,
        control,
        reset,
        register
    } = useForm({
        defaultValues
    })

    return(
        <Container>
            <SigninForms onSubmit={handleSubmit(handleSigninSubmit)}>
                <h1>Signin</h1>
                <div className="FormField">
                    <div>
                        <PersonIcon />
                    </div>
                    <input {...register("name")} type="text" placeholder="Name" />
                </div>
                <div className="FormField">
                    <div>
                        <EmailIcon />
                    </div>
                    <input {...register("mail")} type="text" placeholder="Mail" />
                </div>
                <div className="FormField">
                    <div>
                        <LockIcon />
                    </div>
                    <input {...register("password")} type={isVisible[0]? 'text' : 'password'} placeholder="Password" />
                    <button type="button" className="visible" onClick={() => setIsVisible([!isVisible[0],isVisible[1]])}>
                        {isVisible[0]? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </button>
                </div>
                <div className="FormField">
                    <div>
                        <LockIcon />
                    </div>
                    <input {...register("ConfirmPassword")} type={isVisible[1]? 'text' : 'password'} placeholder="Confirm Password" />
                    <button type="button" className="visible" onClick={() => setIsVisible([isVisible[0],!isVisible[1]])}>
                        {isVisible[1]? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </button>
                </div>
                <Button 
                    type="submit"
                    text="Signin"
                    primary/>
            </SigninForms>
        </Container>
    )
}