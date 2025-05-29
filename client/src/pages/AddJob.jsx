import React, { useState } from 'react';
import axios from '../axios';  // Corrected import

const AddJob = () => {
  const [formData, setFormData] = useState({
    position: '',
    company: '',
    status: 'pending',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/jobs', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Job added successfully!');
      setFormData({ position: '', company: '', status: 'pending' });
    } catch (error) {
      alert('Failed to add job');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} required />
      <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="interview">Interview</option>
        <option value="declined">Declined</option>
      </select>
      <button type="submit">Add Job</button>
    </form>
  );
};

export default AddJob;
