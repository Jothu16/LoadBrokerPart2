// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your backend URL

export const fetchLoads = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/loads`);
        return response.data;
    } catch (error) {
        console.error('Error fetching loads:', error);
        throw error;
    }
};

// Add more functions for other API requests (create load, update load, delete load, etc.)
