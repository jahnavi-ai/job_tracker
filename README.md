# Job Tracker

A simple full-stack job tracking application built with React, Node.js, Express, and MongoDB. Users can register, login, add jobs, and view their job dashboard.

---

## Features

- User registration and login with JWT authentication  
- Secure password hashing with bcrypt  
- Add and view jobs (Create and Read operations)  
- Protected routes for job management  
- Responsive React frontend  
- RESTful API backend with Express and MongoDB  

---

## Tech Stack

- Frontend: React, React Router, Axios  
- Backend: Node.js, Express, MongoDB, Mongoose  
- Authentication: JWT (JSON Web Tokens)  
- Password hashing: bcryptjs  

---

## Installation and Setup

### Backend (server)

1. Navigate to the server folder 
   cd server
   
2.Install dependencies
  npm install
  
3.Create a .env file with your MongoDB connection string and JWT secret
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  PORT=5000
  
4.Start the server
  npm run dev
  Frontend (client)
  
5.Navigate to the client folder
  cd client
  
6.Install dependencies
  npm install
  
7.Start the React app
  npm start
  
8.Open your browser at http://localhost:3000

Usage
  Register a new user
  Login to get access to job-related routes
  Add jobs and view the dashboard

Folder Structure

job_tracker/
├── client/      # React frontend
├── server/      # Express backend
├── .gitignore
├── README.md

Contributions
  Feel free to open issues or submit pull requests!
