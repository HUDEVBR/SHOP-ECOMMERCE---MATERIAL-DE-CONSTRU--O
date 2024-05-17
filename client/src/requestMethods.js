import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWNlNjcwYjgyMTMyZTE1ZTEzOTRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNTgxMjU2MywiZXhwIjoxNzE2MDcxNzYzfQ.Atgjs4PuOtCr7OzcICsLr4UasL6AhThTFrjw-jSvtj0'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`},
});