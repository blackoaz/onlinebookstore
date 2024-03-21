const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//routes for category
router.post('/category', (req, res) => {
    // Add logic to handle category creation
  });
  
  // ROUTES FOR BOOKS
  // get all books
  router.get('/books', (req, res) => {
    res.send({"data": "All books"});
  });
  
  // get a book
  router.get('/books/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Getting book with ID ${id}`);
  });
  
  // add a book
  router.post('/books', (req, res) => {
    res.send('POST request to the homepage');
  });
  
  // edit a book
  router.put('/books/:id', (req, res) => {
    const id = req.params.id;
    res.send(`The edited book with ${id} has been edited`);
  });
  
  // delete a book
  router.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Book with ID ${id} deleted`);
  });
  

module.exports = router;