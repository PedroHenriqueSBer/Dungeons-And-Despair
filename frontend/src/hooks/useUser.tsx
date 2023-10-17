import { ReactNode, createContext, useState } from "react";

interface user{
    id?: number,
    name: string,
    email: string,
    password: string
}

interface userProps{
    user:user
    setUser:React.Dispatch<React.SetStateAction<user>>
    users:user[]
    setUsers:React.Dispatch<React.SetStateAction<user[]>>
}

const userContext = createContext<userProps>({} as userProps)

const [user,setUser] = useState<user>({
    id: 0,
    name: '',
    email: '',
    password: ''
})
const [users,setUsers] = useState<user[]>([])

export const userContextProvider = ({
    children
}:{
    children: ReactNode
}) => {
    return <userContext.Provider value={{
        user,
        setUser,
        users,
        setUsers
    }}>
        {children}
    </userContext.Provider>
}