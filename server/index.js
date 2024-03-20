const express = require('express');
const connectDB = require("./db.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

connectDB(); // Call the connectDB function to establish MongoDB connection


// get all books
app.get('/books', (req, res) => {
  res.send({"data": "All books"});
});

// get a book
app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Getting book with ID ${id}`);
});

// add a book
app.post('/books', (req, res) => {
  res.send('POST request to the homepage');
});

// edit a book
app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  res.send(`The edited book with ${id} has been edited`);
});

// delete a book
app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Book with ID ${id} deleted`);
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
