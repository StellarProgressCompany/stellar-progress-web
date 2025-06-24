import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export async function sendContactMessage(data) {
    const response = await axios.post(`${API_URL}/contact`, data);
    return response.data;
}