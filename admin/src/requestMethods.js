import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const user = JSON.parse(sessionStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken


console.log(TOKEN)
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}` },
});