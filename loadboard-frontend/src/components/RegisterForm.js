import React, { useState } from 'react';
import { registerUser } from '../services/api';

const RegisterForm = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        role: 'Carrier', // Default role, adjust as needed
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(userData);
            console.log('Registration successful', response);
            // Redirect or update UI upon successful registration
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username" 
                    value={userData.username} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={userData.password} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Role:</label>
                <select 
                    name="role" 
                    value={userData.role} 
                    onChange={handleChange}
                >
                    <option value="Carrier">Carrier</option>
                    <option value="OtherRole1">OtherRole1</option>
                    <option value="OtherRole2">OtherRole2</option>
                    {/* Add other roles as needed */}
                </select>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;

