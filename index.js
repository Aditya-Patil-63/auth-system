require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); // 1. Import your routes


const app = express();
const port = process.env.PORT || 5000;

// 2. The "Translator" (This must come BEFORE your routes!)
app.use(express.json()); 

// 3. Connect your Routes
// This means every route in authRoutes will start with /api/auth
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));

app.get('/', (req, res) => {
    res.send("Server is running!");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
