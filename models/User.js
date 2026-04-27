const mongoose = require('mongoose');

// 1. Define the "Blueprint" (Schema)
const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true // No two users can have the same email
    },
    password: { 
        type: String, 
        required: true 
    }
});

// 2. Turn the blueprint into a "Tool" (Model) and export it
module.exports = mongoose.model('User', userSchema);
