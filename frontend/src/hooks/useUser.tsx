import { ReactNode, createContext, useContext, useEffect, useState } from "react";

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