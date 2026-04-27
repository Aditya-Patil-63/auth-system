# 🔐 Secure User Authentication System

A scalable and secure backend authentication system built with **Node.js**, **Express**, and **MongoDB**.

## 🚀 Overview
This project provides a robust foundation for user management, implementing industry-standard security measures like **JWT** for stateless authentication and **Bcrypt** for password hashing.

## ✨ Key Features
- **User Registration**: Securely stores users with hashed passwords.
- **User Login**: Verifies credentials and issues a JSON Web Token (JWT).
- **Protected Routes**: Custom middleware to restrict access to authenticated users only.
- **Security**: Environment variables used to protect sensitive data (.env).
- **Architecture**: Follows the **MVC (Model-View-Controller)** pattern.

## 🛠️ Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Local)
- **ODM**: Mongoose
- **Security**: Bcryptjs, JSON Web Tokens (JWT)
- **Tools**: Postman/Thunder Client, GitHub Desktop

## 📖 How to Run Locally
1. **Clone the repository.**
2. **Install dependencies**:
   ```bash
   npm install
