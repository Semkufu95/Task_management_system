Task Management System (Trello Clone)

Introduction

This Task Management System is a backend API built using Node.js and MongoDB. It allows users to create, update, delete, and manage tasks in a Kanban-style system. Users can authenticate, organize tasks into different statuses, and retrieve insights about their workflow.

Tech Stack

Node.js with Express.js (Backend Framework)

MongoDB with Mongoose (Database & ORM)

JWT (JSON Web Tokens) for Authentication

bcrypt.js for Password Hashing

Features

User authentication (Register/Login with JWT)

CRUD operations for tasks (Create, Read, Update, Delete)

Task status management (To Do, In Progress, Done)

Due dates and priority levels

User-based task filtering

Installation

# Clone the repository
git clone https://github.com/yourusername/task-manager.git
cd task-manager

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start the server
npm start

/task-manager
│── /src
│   ├── /config
│   │   ├── db.js              # Database connection
│   ├── /models
│   │   ├── User.js            # User schema
│   │   ├── Task.js            # Task schema
│   ├── /routes
│   │   ├── authRoutes.js      # Authentication routes
│   │   ├── taskRoutes.js      # Task management routes
│   ├── /controllers
│   │   ├── authController.js  # Authentication logic
│   │   ├── taskController.js  # Task management logic
│   ├── /middleware
│   │   ├── authMiddleware.js  # JWT authentication middleware
│   ├── server.js              # Main server file
│── package.json               # Project dependencies
│── .env.example               # Environment variables
│── README.md                  # Project documentation

API Routes

Auth Routes

1. Register User

Endpoint: POST /api/auth/register

Description: Creates a new user account.

Request Body:

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword"
}

Response:

{
  "message": "User registered successfully",
  "token": "jwt_token_here"
}

2. Login User

Endpoint: POST /api/auth/login

Description: Authenticates a user and returns a JWT token.

Request Body:

{
  "email": "john@example.com",
  "password": "securepassword"
}

Response:

{
  "message": "Login successful",
  "token": "jwt_token_here"
}

Task Routes (Requires Authentication)

3. Create Task

Endpoint: POST /api/tasks

Description: Creates a new task.

Request Body:

{
  "title": "Complete Backend Project",
  "description": "Implement API endpoints and database schema",
  "status": "To Do",
  "priority": "High",
  "due_date": "2025-03-10"
}

Response:

{
  "message": "Task created successfully",
  "task": { "id": "task_id", "title": "Complete Backend Project" }
}

4. Get All Tasks

Endpoint: GET /api/tasks

Description: Retrieves all tasks for the authenticated user.

Response:

[
  {
    "id": "task_id",
    "title": "Complete Backend Project",
    "status": "To Do",
    "priority": "High",
    "due_date": "2025-03-10"
  }
]

5. Update Task

Endpoint: PUT /api/tasks/:id

Description: Updates task details.

Request Body: (Example of updating status)

{
  "status": "In Progress"
}

Response:

{
  "message": "Task updated successfully"
}

6. Delete Task

Endpoint: DELETE /api/tasks/:id

Description: Deletes a task by ID.

Response:

{
  "message": "Task deleted successfully"
}

Future Enhancements

Implement real-time updates using WebSockets

Add task assignments to multiple users

Implement task categories and tags

License

This project is open-source and free to use.

