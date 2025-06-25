// frontend/src/services/contactService.js
import axios from 'axios';

// Point to your local Laravel API in development:
const API_URL = 'http://localhost:8000/api';
// — or, when you deploy, uncomment the next line and comment out the one above:
// const API_URL = 'https://api.restaurantmasia.cat/api';

export async function sendContactMessage(data) {
    // Axios will POST JSON to your Laravel route at /api/contact
    const response = await axios.post(
        `${API_URL}/contact`,
        data,
        { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
}
