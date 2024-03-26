const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const { Book } = require("../models/books.js");


// ROUTES FOR BOOKS
// get all books
router.get('/', async (req, res) => {
    try {
        result = await Book.find({});
        res.send(result)
    } catch (err) {
        console.log(err);
    }
});

// get a book
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        result = await Book.findById(id);
        res.json(result)
    } catch (err) {
        console.log(err);
    }
    res.send(`Getting book with ID ${id}`);
});

// add a book
router.post('/', async (req, res) => {
    try {
        const newBook = new Book({
            name: req.body.name,
            author: req.body.author,
            image: req.body.image,
            publishedDate: req.body.publishedDate,
            sysnposis: req.body.sysnposis,
            rating: req.body.rating,
            publisher: req.body.publisher,
            category: req.body.category
        });
        await Book.create(newBook);
        res.send({ "Message": "book added Successfuly" })

    } catch (err) {
        res.send(err)
    }
});

// edit a book
router.put('/:id', async (req, res) => {

    try {
        const id = req.params.id;
        book = await Book.findById(id);
        book = {
            name: req.body.name,
            author: req.body.author,
            image: req.body.image,
            publishedDate: req.body.publishedDate,
            sysnposis: req.body.sysnposis,
            rating: req.body.rating,
            publisher: req.body.publisher,
            category: req.body.category
        }
        await Book.save(book);
        res.json("book updated Successfuly")

    } catch (err) {
        res.send(err)
    }

});

// delete a book
router.delete('/:id', async(req, res) => {
    
    try {
        const id = req.params.id;
        book = await Book.findById(id);
        book.remove()
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;