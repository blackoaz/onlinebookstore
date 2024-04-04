const mongoose = require('mongoose');

const Schema = mongoose.Schema


const bookCategory = new Schema({
    categoryName: {type:String, required: true},
},{
    timestamps: true
})

const bookSchema = new Schema({
    name: {type: String, required: true},
    author: {type: String,required: true},
    image: {type: String, required: true},
    publishedDate: {type: Date,required: true},
    sysnposis: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    price:{type:Number, required:true},
    publisher: String,
    quantity:{type:Number, required:true},
    category: { type: Schema.Types.ObjectId, ref: 'Category' } // Foreign key reference to the Seller model
},{
    timestamps: true
});


const Category = mongoose.model('Category', bookCategory);
const Book = mongoose.model('Book', bookSchema);

module.exports = { Category, Book };



  
