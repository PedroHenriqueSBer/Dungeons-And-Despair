import { ReactNode, useEffect } from "react"
import { useUser } from "../hooks/useUser"
import { useNavigate } from "react-router-dom"



export const Auth: React.FC<{children:ReactNode}> = ({children}) => {
    const { user } = useUser()
    const navigate = useNavigate()
    useEffect(()=>{
        if(user.id == null)
            navigate('/signin')
    })
    return (
        <>
            {children}
        </>
    )
}