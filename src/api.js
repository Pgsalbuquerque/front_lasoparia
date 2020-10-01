import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3140/api"
});

export default api;