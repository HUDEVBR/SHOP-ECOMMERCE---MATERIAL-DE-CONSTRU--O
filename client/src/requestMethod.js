import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'sk_test_51OdTsKGTY2nJebNQjlHBxYyQNaTENC2rjG9LCKZTnI1ZZkaP1YhZErxYSnsMaJHjPRuvXdiWaYDOtl8GjstRjw7S00Pu4ZB88C';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`},
});