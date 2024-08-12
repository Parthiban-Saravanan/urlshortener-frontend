import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://urlshortener-backend-gxya.onrender.com', // Replace with your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
