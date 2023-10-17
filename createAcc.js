// Import required libraries
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Simulated database (in-memory)
const users = [];

// Define routes
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Basic validation, you should perform more thorough checks in production
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Incomplete user data' });
  }

  const newUser = {
    username,
    email,
    password,
  };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

app.get('/users', (req, res) => {
  res.json({ users });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
