# Full-stack Blog App

This is a **Full-stack Blog App** built with **React**, **TypeScript**, and **Express**, designed to demonstrate the power and flexibility of **Material UI (MUI)** components through a clean and modern blogging interface.

## Features

- **Authentication**: Simple **email + password** **sign-up/login** with secure password hashing.
- **Blog Management (CRUD)**: Authenticated users can **create**, **read**, **update**, and **delete** their own posts.
- **MUI Showcase**: The primary goal of the app is to **demonstrate various MUI components** in a real-world application — from form inputs and modals to tables and responsive layouts.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that enhances code quality and readability.
- **Material UI (MUI)**: A feature-rich UI library that provides elegant and customizable React components.
- **Redux Toolkit**: Simplified and scalable state management.
- **React Router**: Handles routing and navigation between pages.
- **Axios**: Promise-based HTTP client for making API requests.
- **Express**: Lightweight Node.js framework used for creating RESTful APIs.
- **MongoDB / Mongoose**: NoSQL database for persistent storage and Mongoose as the ODM for schema modeling.
- **bcrypt**: Library used for **hashing passwords** before storing them securely.

## Installation

To run the app locally, set up both the **client** and **server** directories:

### Client (Frontend)

```bash
cd client
npm install
```

### Server (Backend)

```bash
cd server
npm install
```

## Running the App

### Client

```bash
cd client
npm run dev
```

### Server

```bash
cd server
npm run dev
```

## Set up your .env files

### Client (`client/.env.local`)

```env
VITE_API_URL=http://your-backend-url
```

### Server (`server/.env.local`)

```env
MONGO_URL=your_mongo_database_url
```
