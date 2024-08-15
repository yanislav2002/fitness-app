import axios, { AxiosResponse, AxiosError } from 'axios';


const baseUrl = 'http://localhost:9009/users';

export const register = ( email: string, username: string, password: string) => {
    axios.post(`${baseUrl}/register`, {email, username, password})
        .then((response: AxiosResponse) => {
            console.log('Registration successful:', response.data);
        })
        .catch((error: AxiosError) => {
            console.log(error);
        });
};