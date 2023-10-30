import React, { ReactNode, createContext, useContext, useState } from "react";
import { LoadScreen, Loading } from "./styled";

interface ContextProps{
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingContext = createContext({} as ContextProps)

export const LoadingContextProvider: React.FC<{
    children: ReactNode
}> = ({
    children
}) => {
    const [isLoading,setIsLoading] = useState<boolean>(false)
    return (
        <LoadingContext.Provider value={{isLoading,setIsLoading}}>
            <LoadScreen open={isLoading}>
                <Loading />
            </LoadScreen>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext)