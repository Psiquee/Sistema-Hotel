import axios from 'axios';


const api = axios.create({
  baseURL:  'http://localhost:3001/api', // URL  de la API
  timeout: 10000, // Tiempo de espera en milisegundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
