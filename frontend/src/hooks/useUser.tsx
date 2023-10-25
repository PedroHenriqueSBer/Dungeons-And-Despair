import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { userController } from "../controller/User";

interface User{
    id: string,
    name: string,
    email: string,
    password: string
}

interface UserProviderProps{
    children: ReactNode
}

interface UserContextProps{
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
}

const UserContext = createContext<UserContextProps>(
    {} as UserContextProps
);

export function UserProviderContext({children}: UserProviderProps) {
    const [user, setUser] = useState<User>({} as User);

    useEffect(()=>{
        const id = localStorage.getItem('userId')
        if(id !== null)
            userController.GetUserById(id).then(setUser).catch(() => {localStorage.removeItem('userId')})
    },[])

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);