import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: "https://sitepessoal-api.onrender.com/api",
});

export default api;