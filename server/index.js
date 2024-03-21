const express = require('express');
const connectDB = require("./src/db.js");
const mongoose = require('mongoose');

const User = require("./src/models/users.js");
const { Category, Book } = require("./src/models/books.js");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

// Connect to MongoDB
connectDB()

//routes for category
//get all Categories
app.get('/category', async (req, res) => {
  try {
    result = await Category.find({});
    res.send(result)
  } catch (err) {
    console.log(err);
  }

});
//add a Category
app.post('/category', async (req, res) => {
  try {
    console.log("request body: ", req.body)
    const newCategory = new Category({
      categoryName: req.body.categoryName
    });
    await Category.create(newCategory);
    res.send("Category added Successfuly")

  } catch (err) {
    console.log(err)
  }
  // Add logic to handle category creation
});

// ROUTES FOR BOOKS
// get all books
app.get('/books', async(req, res) => {
  try {
    result = await Book.find({});
    res.send(result)
  } catch (err) {
    console.log(err);
  }
});

// get a book
app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Getting book with ID ${id}`);
});

// add a book
app.post('/books', async (req, res) => {
  try {
    console.log("request body: ", req.body)
    const newBook = new Book({
      name: req.body.name,
      author: req.body.author,
      image: req.body.image,
      publishedDate: req.body.publishedDate,
      sysnposis: req.body.sysnposis,
      rating: req.body.rating,
      publisher: req.body.publisher,
      category:req.body.category
    });
    await Book.create(newBook);
    res.send({"Message":"book added Successfuly"})

  } catch (err) {
    console.log(err)
  }
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

app.listen(port, (req, res) => {
  console.log(`server started on port ${port}`)
})