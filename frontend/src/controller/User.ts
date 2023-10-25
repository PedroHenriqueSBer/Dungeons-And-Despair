import { api } from "./api"

const GetUserById = async (id: string) => {
    return await api.get(`/User/${id}`)
        .then(data => data)
        .catch(data => data)
}

const createUser = async (input:{
    name: string,
    email: string,
    password: string,
}) => {
    return await api.post('/User', input)
        .then(data => data)
        .catch(data => data)
}

export const userController = {
    GetUserById,
    createUser
}