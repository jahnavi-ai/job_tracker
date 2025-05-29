import React, { useState } from 'react';
import axios from '../axios';  // Corrected import

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', formData);
      alert('Login successful!');
      // Save token to localStorage or context here
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
