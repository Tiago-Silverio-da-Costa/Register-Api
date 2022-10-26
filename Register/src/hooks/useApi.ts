import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {id:3, name: 'José', email:'jose@gamil.com'},
        }//tirar num caso normal
        const response = await api.post('/validate', {token})
        return response.data
    },
    signin: async (name: string, email: string, password: string) => {
        return {
            user: {id:3, name: 'José', email:'jose@gamil.com'},
            token: '123456789'
        }//tirar num caso normal
        const response = await api.post('/signin', {email, password})
        return response.data
    },
    logout: async () => {
        return {status: true}
        const response = await api.post('/logout')
        return response.data
    }
})