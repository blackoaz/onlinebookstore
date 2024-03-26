const express = require('express');
const connectDB = require("./src/db.js");
const mongoose = require('mongoose');
const cors = require('cors')

const User = require("./src/models/users.js");
const { Category, Book } = require("./src/models/books.js");
const categoryRouters = require("./src/routers/category.js")
const booksRouters  = require("./src/routers/books.js")


const app = express();
app.use(express.json(), cors());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

// Connect to MongoDB
connectDB()


app.use('/api/books', booksRouters)
app.use('/api/category', categoryRouters)

app.listen(port, (req, res) => {
  console.log(`server started on port ${port}`)
})