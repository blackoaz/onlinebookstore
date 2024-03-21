const mongoose = require('mongoose');

const Schema = mongoose.Schema


const bookCategory = new Schema({
    categoryName: String,
},{
    timestamps: true
})

const bookSchema = new Schema({
    name: String,
    author: String,
    image: String,
    publishedDate: Date,
    sysnposis: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    publisher: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' } // Foreign key reference to the Seller model
},{
    timestamps: true
});


const Category = mongoose.model('Category', bookCategory);
const Book = mongoose.model('Book', bookSchema);

module.exports = { Category, Book };



  
