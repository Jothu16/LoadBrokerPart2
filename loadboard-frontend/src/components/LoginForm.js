import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Mock authentication logic
    if (username === 'chicken' && password === 'sandwich') { // Replace with real validation
        console.log('Credentials are correct, navigating to /carrier');
        navigate('/carrier');
      } else {
        alert('Invalid credentials');
      }
    };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
