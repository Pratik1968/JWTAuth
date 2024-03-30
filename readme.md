# Simple JWT Authentication System 

This repository contains a simple authentication system built using Node.js, bcrypt, JSON Web Tokens (JWT), Sequelize ORM, and PostgreSQL as the database, encapsulated within Docker containers for easy deployment and scalability.

## Features

- User registration
- User login
- Token-based authentication using JWT
- Password hashing using bcrypt
- PostgreSQL database integration
- Sequelize ORM for database management

## Prerequisites

Before running this application, ensure you have Docker installed on your system.
Setup
    
Clone the repository:
  
    git clone https://github.com/your_username/simple-jwt-authsystem.git
Navigate to the project directory:

    cd simple-jwt-authsystem

Build the Docker container:
    
    docker-compose build

Start the Docker containers:
  
    docker-compose up

Once the containers are up and running, navigate to http://localhost:3000 in your web browser.

## Usage

Once the application is running, you can use the following endpoints:
### Endpint for registering user
    POST http://localhost:3000/api/auth/signup
    Content-Type: application/json

    {
      "NAME": "name",
      "EMAIL": "email",
      "PASSWORD": "password",

    }

### Endponint for sign in user

    POST http://localhost:3000/api/auth/signin
    Content-Type: application/json

    {
      "EMAIL": "email",
      "PASSWORD": "password"
  
    }

### Endpoint for testing api
    GET http://localhost:3000/api/test HTTP/1.1
    Authorization: Bearer token
    Content-Type: application/json



Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
License

This project is licensed under the MIT License. 
