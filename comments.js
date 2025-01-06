// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Add a middleware to parse JSON request body
app.use(express.json());

// Create a variable to store comments
let comments = [];

// POST /comments
app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// GET /comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});