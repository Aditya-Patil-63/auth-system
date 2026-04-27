const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); // 1. Import the guard

router.post('/register', register);
router.post('/login', login);

// 2. Create the Protected Route
router.get('/profile', authMiddleware, (req, res) => {
    // If the guard let us in, we can see this message
    res.json({ 
        message: "Welcome to your VIP Profile!", 
        userData: req.user // This was attached by the guard
    });
});

router.post('/logout', (req, res) => {
    res.json({ message: "Logged out successfully! (Remember to delete your token on the frontend)" });
});


module.exports = router;
