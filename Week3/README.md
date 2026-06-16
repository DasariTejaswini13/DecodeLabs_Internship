### WEEK 3 Project - Full Stack CRUD Application ###


### 📌 Project Overview
- A simple Full Stack CRUD (Create, Read, Update, Delete) web application built using Node.js, Express.js, MySQL, HTML, CSS, and JavaScript. This project demonstrates real-world frontend and backend integration using REST APIs and performs real-time database operations with dynamic UI updates.

### 🚀 Features
- ➕ Add new users with Name and Email
- 📄 View all users stored in MySQL database
- ❌ Delete users from database
- 🔄 Refresh and reload data dynamically
- ⚡ Real-time updates without page reload
- 🎨 Clean and responsive UI

### 🛠️ Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL

### API: REST API
- 🔗 REST API Endpoints
- POST /add → Add new user
- GET /users → Fetch all users
- DELETE /delete/:id → Delete user

### 📂 Project Structure
- backend/
- ├── frontend/
- │ ├── index.html
- │ ├── style.css
- │ └── script.js
- ├── node_modules/
- ├── package.json
- ├── package-lock.json
- └── server.js

### ⚙️ How It Works
- User enters data in frontend form
- Data is sent to backend via API calls
- Backend stores/retrieves data from MySQL database
- Frontend updates UI dynamically

### 🗄️ Database Setup
- CREATE DATABASE cruddb;

- USE cruddb;

- CREATE TABLE users (
 id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100)
);

### 🎯 Learning Outcomes

- REST API development
- Frontend–backend integration
- MySQL database operations
- CRUD operations in real-time applications
- Full stack development workflow

### 🧑‍💻 Project Summary

- A beginner-friendly full stack project demonstrating real-time data handling and CRUD operations with proper client-server architecture.
