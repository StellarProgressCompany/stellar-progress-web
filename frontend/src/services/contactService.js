import axios from 'axios';

const API = import.meta.env.VITE_API_URL;   // https://api.restaurantmasia.cat

export const sendContactMessage = (data) =>
    axios.post(`${API}/api/contact`, data, {
        headers: { 'Content-Type': 'application/json' },
    }).then(r => r.data);
