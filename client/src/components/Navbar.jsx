import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/dashboard">Dashboard</Link> | 
    <Link to="/add-job">Add Job</Link> | 
    <Link to="/login">Login</Link> | 
    <Link to="/register">Register</Link>
  </nav>
);

export default Navbar;
