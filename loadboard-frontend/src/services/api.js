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
// User registration
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/users/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

// User login
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/users/login`, credentials);
        return response.data; // This should be the JWT token
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// Create a load
export const createLoad = async (loadData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/loads`, loadData);
        return response.data;
    } catch (error) {
        console.error('Error creating load:', error);
        throw error;
    }
};

// Update a load
export const updateLoad = async (loadId, updateData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/loads/${loadId}`, updateData);
        return response.data;
    } catch (error) {
        console.error('Error updating load:', error);
        throw error;
    }
};

// Delete a load
export const deleteLoad = async (loadId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/loads/${loadId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting load:', error);
        throw error;
    }
};

// Book a load
export const bookLoad = async (loadId, carrierId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/loads/book`, { loadId, carrierId });
        return response.data;
    } catch (error) {
        console.error('Error booking load:', error);
        throw error;
    }
};
