import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:57758'
})

export default api;