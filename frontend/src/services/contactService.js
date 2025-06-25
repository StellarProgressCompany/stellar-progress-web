// frontend/src/services/contactService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const sendContactMessage = (data) =>
    axios.post(`${API_URL}/contact`, data, {
        headers: { 'Content-Type': 'application/json' },
    }).then(r => r.data);

