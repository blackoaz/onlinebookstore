const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true // Ensure uniqueness of usernames
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure uniqueness of email addresses
        lowercase: true, // Convert email addresses to lowercase before saving
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'] // Validate email format
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
