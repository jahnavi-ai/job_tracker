import React, { useEffect, useState } from 'react';
import axios from '../axios';  // Corrected import

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/jobs', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(res.data);
      } catch (error) {
        alert('Failed to fetch jobs');
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        <ul>
          {jobs.map(job => (
            <li key={job._id}>{job.position} at {job.company}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
