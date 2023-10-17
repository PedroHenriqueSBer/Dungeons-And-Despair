import { api } from "./api"

const getUsers = async () => {
    return await api.get('/User')
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
    getUsers,
    createUser
}