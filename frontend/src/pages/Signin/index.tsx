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

export const Signin = () => {

    const [isVisible,setIsVisible] = useState<boolean[]>([false,false])
    const handleSigninSubmit = (e:any) => {
        console.log(e)
        reset()
    } 
    const [defaultValues] = useState<{
        name: string,
        mail: string,
        password: string,
        ConfirmPassword: string
    }>({
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