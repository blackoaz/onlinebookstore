const express = require('express');
const router = express.Router();
router.use(express.json());
const { Category } = require("../models/books.js");

//routes for category
router.get('/', async (req, res) => {
  try {
    result = await Category.find({});
    res.send(result)
  } catch (err) {
    console.log(err);
  }

});
//add a Category
router.post('/', async (req, res) => {
  try {
    console.log("request body: ", req.body)
    const newCategory = new Category({
      categoryName: req.body.categoryName
    });
    await Category.create(newCategory);
    res.json("Category added Successfuly")

  } catch (err) {
    console.log(err)
  }
});
  
module.exports = router;