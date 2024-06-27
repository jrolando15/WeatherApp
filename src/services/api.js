import axios from 'axios';

const API_URL = process.env.REACT.APP_API_URL || 'https://api.openweathermap.org/data/2.5';

const api = axios.create({
    baseURL: API_URL,
});

export const setAuth = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] ='Bearer ${token}';
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export default api;