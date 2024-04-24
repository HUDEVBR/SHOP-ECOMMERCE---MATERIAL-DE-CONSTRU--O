import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWNlNjcwYjgyMTMyZTE1ZTEzOTRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMzIzMjk1MSwiZXhwIjoxNzEzNDkyMTUxfQ.Kun53nvBfxx9ZugPiFu1EeevrngFqAjgeRN5iHiz0cQeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWNlNjcwYjgyMTMyZTE1ZTEzOTRjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMzIzMjk1MSwiZXhwIjoxNzEzNDkyMTUxfQ.Kun53nvBfxx9ZugPiFu1EeevrngFqAjgeRN5iHiz0cQ';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`h ${TOKEN}`},
});